import { Geist, Geist_Mono, Poppins, Albert_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/layout";
import localFont from "next/font/local";
import SmoothScrollProvider from "./components/animations/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import DisableZoom from "./components/DisableZoom";
import GoToTop from "./components/GoToTop";
import Script from "next/script";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins", // optional CSS variable
});

const albertSans = Albert_Sans({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  variable: "--font-albert-sans", // optional CSS variable
});

const visby = localFont({
  src: [
    {
      path: "./fonts/VisbyRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/VisbyMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/VisbySemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/VisbyBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-visby",
});

// export const metadata = {
//   title: "WP Fix ",
//   description:
//     "WPWebsiteFix delivers end-to-end WordPress website maintenance with strong security, fast loading speeds, regular updates, and custom solutions for your site.",
//   keywords: "wordpress website maintenance services",
//   icons: {
//     icon: "/favicon.png",
//   },
//   openGraph: {
//     title: "WP Fix Website",
//     description:
//       "WPWebsiteFix delivers end-to-end WordPress website maintenance.",
//     siteName: "WP Fix Website",
//     images: [
//       {
//         url: "https://wpwebsitefix.com/og-image.png",
//         width: 1200,
//         height: 630,
//       },
//     ],
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "WP Fix Website",
//     description: "WPWebsiteFix delivers end-to-end WordPress maintenance.",
//     images: ["https://wpwebsitefix.com/og-image.png"],
//   },
// };

export const metadata: Metadata = {
  metadataBase: new URL("https://wpwebsitefix.com"),

  title: "WP Website Fix ",
  description:
    "WP Website Fix delivers end-to-end WordPress website maintenance with strong security, fast loading speeds, regular updates, and custom solutions.",


  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/web-app-manifest-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/web-app-manifest-512x512.png",
      },
    ],
  },

  openGraph: {
    title: "WP Website Fix",
    description:
      "WPWebsiteFix delivers end-to-end WordPress website maintenance.",
    url: "https://wpwebsitefix.com",
    siteName: "WP Website Fix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WP Website Fix",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WP Website Fix",
    description:
      "WPWebsiteFix delivers end-to-end WordPress website maintenance.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9K56KJN42L"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-9K56KJN42L');
  `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${albertSans.variable} ${visby.variable} antialiased font-poppins`}
      >
        <SmoothScrollProvider>
          <ScrollToTop />
          <GoToTop />
          <DisableZoom />

          {children}
        </SmoothScrollProvider>

        <Footer />
      </body>
    </html>
  );
}
