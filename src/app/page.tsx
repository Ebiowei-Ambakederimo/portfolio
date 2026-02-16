import Hero from "@/components/sections/Hero";
// import ServiceSummary from "@/components/sections/ServiceSummary";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Works from "@/components/sections/Works";
// import Pricing from "@/components/sections/Pricing";
// import ContactSummary from "@/components/sections/ContactSummary";
import Contact from "@/components/sections/Contact";
import ScrollVelocity from "@/components/ScrollVelocity";
// import ScrollSection from "@/components/ScrollSection";
// import StickyContent from "@/components/StickyContent";
// import LenisProvider from "@/components/LenisProvider";
import StickyCards from "@/components/sections/sticyCards/StickyCards";
import Description from '@/components/Description/Description';
import { Metadata } from "next";
import { ReactLenis } from "lenis/react";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home | Your Name or Studio – Full-Stack Developer & Designer Portfolio",
  description: "See featured full-stack, SaaS, and AI-driven projects built by a frontend-focused full-stack developer using Next.js, Tailwind CSS, and GSAP.",
  keywords: "",
  alternates: { canonical: `${siteUrl}/` },
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

export default function Home() {
  // const sections = [
  //   {

  //     imageSrc: '/img/3.png',
  //     imageAlt: 'The Algorithm',
  //     title: <><i>The</i> Algorithm</>,
  //     text: "The algorithm's workings are shrouded in complexity, and its decision-making processes are inscrutable to the general populace.",
  //   },
  //   {
 
  //     imageSrc: '/img/2.png',
  //     imageAlt: 'The Dogma',
  //     title: <><i>The</i> Dogma</>,
  //     text: "The digital gospel etched into the very code of the algorithmic society, served as the bedrock of the cognitive regime.",
  //   },
  //   {
      
  //     imageSrc: '/img/1.png',
  //     imageAlt: 'The Architects',
  //     title: <><i>The</i> Architects</>,
  //     text: "The elusive entities, lacking human form, operate in the shadows, skillfully shaping societal norms through the complex interplay of algorithms and Dogmas.",
  //   },
  //   {

  //     imageSrc: '/img/4.png',
  //     imageAlt: 'The Wasteland',
  //     title: <><i>The</i> Wasteland</>,
  //     text: "This overlooked realm, a consequence of algorithmic judgments, is a haunting landscape filled with the echoes of untold stories and uncharted thoughts.",
  //   },
  //   // {
  //   //   bgClass: 'bg-5',
  //   //   imageSrc: '/img/5.png',
  //   //   imageAlt: 'The Narrative',
  //   //   title: <><i>The</i> Narrative</>,
  //   //   text: '"The Narrative" unfolds as the omnipresent thread weaving through the fabric of the algorithmic society.',
  //   // },
  //   // {
  //   //   bgClass: 'bg-6',
  //   //   imageSrc: '/img/6.png',
  //   //   imageAlt: 'The Opulence',
  //   //   title: <><i>The</i> Opulence</>,
  //   //   text: '"The Opulence" epitomizes the cognitive elite\'s wealth in the algorithmic society, where opulent thoughts and experiences shape the societal narrative.',
  //   // },
  // ];
  return (
    <div className="flex flex-col justify-end min-h-screen  ">
      <ReactLenis root />
      <Hero />
      {/* <section className="intro"></section> */}
      <Description/>

      <StickyCards/>
      {/* <section className="outro"></section> */}
      {/* <LenisProvider>
        <div className="wrap">
          {sections.map((section, index) => (
            <ScrollSection key={index}>
              <StickyContent
                imageSrc={section.imageSrc}
                imageAlt={section.imageAlt}
                title={section.title}
                text={section.text}
                textMeta={true}
              />
            </ScrollSection>
          ))}
        </div>
    </LenisProvider> */}
      {/* <ServiceSummary /> */}
      <Services />
      {/* <Pricing /> */}
      <About />
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={100}
        className="custom-scroll-text bg-white "
      />
      <Works />
      {/* <ContactSummary /> */}
      <Contact />
    </div>
  );
}
