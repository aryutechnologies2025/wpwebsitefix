import React from "react";
import { Header } from "../components";

const page = () => {
  return (
    <div>
      <Header />

      <div className="p-6 md:p-12 lg:p-20 mt-5 md:mt-0 space-y-8 font-visby">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Privacy Policy
        </h1>

        <p className="text-base md:text-lg leading-relaxed">
          At WPWebsiteFix, protecting your personal information is our top
          priority. This Privacy Policy outlines how we collect, use, and
          safeguard your data when you access our website or use our WordPress
          maintenance and support services. By continuing to browse our site or
          engage with our services, you agree to the data practices described in
          this policy.
        </p>

        <ol className="list-decimal  sm:marker:text-xl marker:font-semibold space-y-8 pl-5 md:pl-8">
          {/* 1 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Information We Collect
            </strong>
            <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
              <li className="mt-3">
                <strong>Personal Information:</strong> We collect your name,
                email, phone number, and any details you provide while
                contacting us or using our services. This helps us communicate
                and deliver support effectively.
              </li>
              <li>
                <strong>Technical Information:</strong> We may collect IP
                addresses, browser type, device details, pages visited, and
                other usage data to improve performance and security.
              </li>
              <li>
                <strong>Cookies & Tracking Data:</strong> Cookies help improve
                website functionality, remember preferences, enhance security,
                and analyze performance. Disabling them may affect website
                features.
              </li>
            </ul>
          </li>

          {/* 2 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              How We Use Your Information
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              We use your information to provide and improve our services,
              respond to inquiries, share updates, monitor performance, and
              enhance your experience. With your consent, we may also send
              promotional content.
            </p>
          </li>

          {/* 3 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Information Remains Private
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              We do not sell, trade, or rent your personal information. Data is
              only shared with trusted service providers who help us operate our
              website and deliver services, and they must protect your
              information.
            </p>
          </li>

          {/* 4 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Cookies and Tracking
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              We use cookies and tracking technologies to improve functionality,
              analyze traffic, and personalize content. You can disable cookies,
              but some features may not work properly.
            </p>
          </li>

          {/* 5 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Data Security
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              We use technical and organizational safeguards to protect your
              data. However, no Internet transmission is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </li>

          {/* 6 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Your Rights
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              You have the right to access, correct, update, or request deletion
              of your personal information. You may opt out of marketing
              communication anytime. Depending on your region, you may have
              additional rights under GDPR or CCPA.
            </p>
          </li>

          {/* 7 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Third-Party Links
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              Our website may contain links to third-party sites. We do not
              control or take responsibility for their privacy practices. We
              recommend reviewing their policies before sharing personal
              information.
            </p>
          </li>

          {/* 8 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Data Retention
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              We retain your data only as long as necessary to provide services,
              fulfill policy purposes, or comply with legal obligations. Once no
              longer needed, we securely delete or anonymize data.
            </p>
          </li>

          {/* 9 */}
          <li>
            <strong className="text-lg md:text-xl font-semibold">
              Changes to This Privacy Policy
            </strong>
            <p className="mt-3 text-base md:text-lg leading-relaxed pl-1">
              Updates to this policy will be posted here. If we change how we
              use your personal data, we will notify you by email, and you may
              choose whether to allow the new usage.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
