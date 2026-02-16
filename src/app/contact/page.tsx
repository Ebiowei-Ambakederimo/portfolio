// export const metadata = {
//   title: "contact | Your Name or Studio",
//   description:
//     "See featured full-stack, SaaS, and AI-driven projects built by a frontend-focused full-stack developer using Next.js, Tailwind CSS, and GSAP.",
// };

import { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Your Name or Studio – Get in Touch for Your Project",
  description: "See featured full-stack, SaaS, and AI-driven projects built by a frontend-focused full-stack developer using Next.js, Tailwind CSS, and GSAP.",
  keywords: "",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "",
    description: "",
    siteName: "",
    images: [
      {
        url: "",
        width: ""
      }
    ],
    locale: "en_US",
    type: "website",
    url: ""
  },

  twitter: {
    card: "summary_large_image", // or summary
    title: "",
    description: "",
    creator: "@Ebiowei1999",
    images: [""]
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default async function ContactPage() {
  return (
    <main className="bg-white text-black">
        <section className="min-h-[50vh] flex items-center justify-center flex-col text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">contact</h1>
        {/* <p className="mt-4 text-2xl md:text-[26px] lg:text-[32px] text-gray-600 max-w-2xl">
          From AI-powered platforms to bold product experiments—these are projects built for speed, elegance, and results.
        </p> */}
      </section>
    </main>
  );
}