"use client";
import React, { useState } from "react";
import { Header } from "../layout";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AnimatedGradientText, MaskedTextReveal } from "../../components";
import { RiFacebookCircleLine } from "react-icons/ri";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { TbBrandLinkedin } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import axios from "axios";

const ContactHero = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    mobile: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile Number is required";
    else if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Enter valid 10-digit mobile number";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      newErrors.email = "Enter valid email address";

    if (!form.service.trim()) newErrors.service = "Please select a service";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleServiceClick = (service: string) => {
    setForm({ ...form, service });
    setErrors({ ...errors, service: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
          setLoading(false);

    } else {
      setLoading(true);
      try {
        const api = "https://backoffice.aryuacademy.com/api/v1/wp-fix";

        const response = await axios.post(api, {
          name: form.fullName,
          email: form.email,
          phone: form.mobile,
          message: form.message,
          company_name: form.companyName,
          service: form.service,
        });
        console.log(response);

        emailjs.send(
          "service_8u4m54b", // replace with EmailJS service ID
          "template_tcc3w86", // replace with EmailJS template ID
          {
            fullname: form.fullName,
            companyname: form.companyName,
            mobilenumber: form.mobile,
            email: form.email,
            service: form.service,
            message: form.message,
          },
          "Y6abY8yZIjzvAc1TH" // Replace with your EmailJS public key
        );

        toast.success("Form submitted successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
        setForm({
          fullName: "",
          companyName: "",
          mobile: "",
          email: "",
          service: "",
          message: "",
        });
        setLoading(false);
      } catch (err) {
        console.log("error", err);
        setLoading(false);
      }
    }
  };

  return (
    <section className="">
      <Header />

      <div className="flex flex-col p-6 md:p-12  lg:p-20 gap-8">
        {/* Hero Text */}
        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <MaskedTextReveal text="STAY IN TOUCH" className="text-[#00000099]" />

          <div className="-space-y-5 md:-space-y-8">
            <MaskedTextReveal
              text="Let’s Spark a"
              className="text-[42px] md:text-[52px] lg:text-[62px] font-extrabold"
            />
            <AnimatedGradientText
              text="Connections"
              colors={["#FE457D", "#FBD500", "#FE457D"]}
              className="text-[42px] md:text-[52px] lg:text-[62px] font-extrabold"
              duration={10}
              reverse={true}
              loop={true}
            />
          </div>

          <MaskedTextReveal
          as="h1"
            text="Share your vision with us, and let’s co-create a truly remarkable design!"
            className="text-[#00000099] md:text-lg"
          />
        </div>

        {/* Form and Contact Info */}
        <div className="flex flex-col lg:flex-row gap-12 mt-8 md:mt-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="border border-[#FF6107] text-[17px] grow p-6 md:p-10 rounded-4xl flex flex-col gap-6 lg:w-2/3"
          >
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="border-b border-[#9E9C9C] pb-2 w-full outline-none"
                placeholder="Full Name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>
            {/* Company Name */}
            <div>
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                className="border-b border-[#9E9C9C] pb-2 w-full outline-none"
                placeholder="Company Name (optional)"
              />
            </div>
            {/* Mobile Number */}
            <div>
              <input
                type="number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                className="border-b border-[#9E9C9C] pb-2 w-full outline-none"
                placeholder="Mobile Number"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>
            {/* Email Address */}
            <div>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border-b border-[#9E9C9C] pb-2 w-full outline-none"
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/* Service Selection */}
            <div>
              <p className="text-black/50">What service are you looking for?</p>
              <div className="flex gap-3 mt-2 md:font-semibold flex-wrap">
                {["Design", "Development"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => handleServiceClick(s)}
                    className={`rounded-full border hover:border-gray-300 px-2 md:px-4 py-0.5 md:py-1 transition cursor-pointer ${
                      form.service === s
                        ? "border-[#FF6107] text-[#FF6107]"
                        : "border-[#868484] text-[#595858]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
            </div>
            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about your vision..."
                rows={5}
                className="border-b border-[#9E9C9C] w-full outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
            disabled={loading}
              type="submit"
              className="bg-linear-to-r from-[#FF6107] from-55% to-[#FDC9AC] 
             rounded-full text-white w-fit px-5 md:px-8 py-2 md:py-3 
             font-medium md:text-lg cursor-pointer 
             transition-all duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg hover:from-[#FF7A1B] hover:to-[#FDC1A0]"
            >
              {loading ? (
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending ...
                </div>
              ) : (
                <>Send Message</>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-10 lg:w-1/3">
            {/* Email */}
            <div>
              <p className="text-[#FF6107] text-lg font-medium">Email us</p>
              {/* <div className="mt-4 text-lg font-medium"> */}
              <Link
                href="mailto:support@wpwebsitefix.com"
                className="flex mt-2 md:mt-4 md:text-lg font-medium items-center"
              >
                <MdOutlineEmail className="inline me-2" />{" "}
                support@wpwebsitefix.com
              </Link>
              {/* </div> */}
            </div>

            {/* Call */}
            <div>
              <p className="text-[#FF6107] text-lg font-medium">Call us</p>
              <Link
                href="tel:9994715106"
                className="flex mt-2 md:mt-4 md:text-lg font-medium items-center"
              >
                <IoCallOutline className="inline me-2" /> 9994715106
              </Link>
            </div>

            {/* Location */}
            <div>
              <p className="text-[#FF6107] text-lg font-medium">Meet Us</p>
              <div className="mt-2 md:mt-4 flex gap-1 items-start">
                <HiOutlineLocationMarker className="shrink-0 mt-1.5" />
                <div>
                  <p className="text-lg font-medium">Chennai</p>
                  <p>
                    No 33/14, Ground floor, Jayammal St, Ayyavoo Colony,
                    Aminjikarai, Chennai, Tamil Nadu 600106
                  </p>
                  <div className="mt-1.5 rounded-3xl">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.425680938562!2d80.2145218745481!3d13.072186412666072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c32d0159845%3A0xbfabd0a7a08cb6b7!2sAryu%20Enterprises%20Private%20Limited!5e0!3m2!1sen!2sin!4v1762931973467!5m2!1sen!2sin"
                      width="100%"
                      height="250"
                      loading="lazy"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-[#FF6107] text-lg font-medium">
                Reach out us on
              </p>
              <div className="flex gap-3 text-3xl mt-2 md:mt-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/Fixmywpwebsite"
                >
                  <RiFacebookCircleLine />
                </Link>

                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/68914508/admin/dashboard/"
                >
                  <TbBrandLinkedin />
                </Link>

                <Link
                  href="https://wa.me/9994715106?text=Hello%20there!"
                  target="_blank"
                >
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </section>
  );
};

export default ContactHero;
