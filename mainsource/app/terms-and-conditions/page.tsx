import React from "react";
import { Header } from "../components";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),
  title: "Terms & Conditions | WPWebsiteFix",
  description:
    "Read the Terms & Conditions of WPWebsiteFix to understand the rules, responsibilities, and policies governing the use of our website and WordPress services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wpwebsitefix.com/terms-and-conditions/",
  },
  openGraph: {
    title: "Terms & Conditions | WPWebsiteFix",
    description:
      "Review the Terms & Conditions governing the use of WPWebsiteFix’s website and WordPress services.",
    url: "https://wpwebsitefix.com/terms-and-conditions/",
    siteName: "WPWebsiteFix",
    images: [
      {
        url: "https://wpwebsitefix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions | WPWebsiteFix",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | WPWebsiteFix",
    description: "Review the Terms & Conditions for using WPWebsiteFix’s website and WordPress services.",
    images: ["https://wpwebsitefix.com/og-image.png"],
  },
};

const Page = () => {
  const brandUrl = "https://wpwebsitefix.com";
  const pageUrl = "https://wpwebsitefix.com/terms-and-conditions/";

  const termsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": "Terms & Conditions | WPWebsiteFix",
        "isPartOf": { "@id": `${brandUrl}/#website` },
        "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
        "dateModified": new Date().toISOString(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": brandUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms & Conditions",
            "item": pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="terms-conditions-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      
      <div>
        <Header />

        <main className="p-6 md:p-12 lg:p-20 mt-5 md:mt-0 space-y-8 font-visby">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Terms & Conditions
          </h1>

          <ol className="list-decimal sm:marker:text-xl marker:font-semibold space-y-8 pl-5 md:pl-8">
            <li>
              <strong className="text-lg md:text-xl font-semibold">Introduction</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">
                  These terms and conditions govern the services provided by
                  WPWebsiteFix (“we,” “our,” or “us”) to the customer (“you” or
                  “the client”). By using our services, you confirm your agreement
                  to these terms.
                </li>
                <li>
                  We may update or modify these terms at any time. Updated terms
                  will be posted on our website, and your continued use of our
                  services will signify acceptance.
                </li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Services Provided</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">
                  WPWebsiteFix offers maintenance, updates, security monitoring,
                  backups, optimization, and troubleshooting for WordPress sites.
                </li>
                <li>Services are provided based on the plan you select.</li>
                <li>Additional services beyond your plan may incur extra charges.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Client Responsibilities</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">You must provide access to your WordPress site and hosting.</li>
                <li>Inform us about major changes like new plugins or themes.</li>
                <li>You should maintain backups; we cannot guarantee full restoration.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Fees and Payment</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">Fees depend on your selected plan; payments are due upon invoice.</li>
                <li>Late payments may incur a 5% monthly fee.</li>
                <li>Payments will be collected via direct debit.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Termination and Cancellation</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">Either party may end services with 30 days’ written notice.</li>
                <li>No refunds for unused services in a billing period.</li>
                <li>We may terminate the agreement for non-payment or breach.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Liability and Disclaimer</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">We provide maintenance but cannot guarantee error-free service.</li>
                <li>We are not liable for issues caused by hosting, cyberattacks, or third-party software.</li>
                <li>We are not responsible for data loss during maintenance.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Confidentiality</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">Both parties agree to maintain confidentiality unless required by law.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Indemnification</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">You agree to indemnify WPWebsiteFix from claims arising from your website.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Intellectual Property</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">Your website’s intellectual property remains yours.</li>
                <li>WPWebsiteFix retains ownership of tools or processes developed.</li>
              </ul>
            </li>

            <li>
              <strong className="text-lg md:text-xl font-semibold">Governing Law</strong>
              <ul className="list-disc pl-5 md:pl-8 space-y-3 text-base md:text-lg leading-relaxed">
                <li className="mt-3">These Terms are governed by Indian law.</li>
                <li>Failure to enforce a provision does not constitute a waiver.</li>
                <li>Invalid provisions do not affect remaining terms.</li>
              </ul>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
};

export default Page;