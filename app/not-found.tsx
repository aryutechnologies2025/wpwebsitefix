import Link from "next/link";
import { Header } from "./components";

export default function NotFound() {
  return (
    <div className="bg-white">

     <Header/>
    
      <div className=" flex flex-col relative h-[70vh] lg:h-[80vh] xl:h-[90vh] items-center justify-center  px-4">
        {/* Big 404 Text */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold bg-linear-to-r from-[#FF6B00] to-[#FF6B00]/60 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          404
        </h1>

        {/* Subtitle */}
        <p className="md:mt-3 text-2xl font-semibold text-[#FF6B00]">
          Page Not Found
        </p>

        {/* Description */}
        <p className="mt-1 md:mt-2 text-gray-600 text-sm md:text-base md:max-w-md text-center">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-linear-to-r from-[#FF6B00] to-[#FF6B00]/60
             text-white rounded-xl shadow hover:brightness-110 transition-all duration-500"
          >
            Go Home
          </Link>

          <Link
            href="/contact-us"
            className="px-6 py-3 border border-[#FF6B00] cursor-pointer hover:border-[#FF6B00]/80 text-[#FF6B00] hover:text-[FF6B00]/80 rounded-xl hover:bg-orange-50 transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
