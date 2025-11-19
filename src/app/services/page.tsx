import { Metadata } from "next";

export const metadata: Metadata = {
  title: "services | Your Name or Studio",
  description: "See featured full-stack, SaaS, and AI-driven projects built by a frontend-focused full-stack developer using Next.js, Tailwind CSS, and GSAP.",
  keywords: "",
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

export default function Page() {
  return <div>hello</div>
}
