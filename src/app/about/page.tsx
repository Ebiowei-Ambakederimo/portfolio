// "use client"

import { Metadata } from 'next';
import React from 'react';
// import { navItems } from "@/constants";
// import Link from 'next/link';
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "",
  description: "",
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

const About = () => {
    // const pathname = usePathname();

  return (
    <section className=" p-16 md:p-24 ">
      <div className="max-w-9xl mx-auto">
        {/* Introduction Section */}
        <div className="space-y-16 mb-32 h-[200px]">
          <h1 className="text-7xl md:text-8xl uppercase lg:text-9xl font-light text-black animate-fade-in">
            About me 
          </h1>
        </div>

        {/* Contact Section */}
        <div className="flex justify-end mb-32">
          <div className="max-w-lg space-y-16">
            <p className=" block text-pretty leading-relaxed uppercase value-text-responsive">
              I am a passionate designer dedicated to creating intuitive and impactful user experiences.
              I believe design should be invisible until it needs to be seen. My focus is creating 
              experiences that feel intuitive, reduce friction, and leave a lasting impression.
            </p>
            <div className="pt-16">
             
              <a href="/contact" className="text-black font-medium mb-12 underline hover:text-gray-800">
                Contact me
              </a>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="space-y-32 ">
          <div className="flex justify-between items-start">
            <h2 className="text-7xl uppercase md:text-8xl lg:text-9xl font-light text-black">
              Tools I use
            </h2>
            <div className="text-right justify-end text-gray-600 max-w-md">
              <p>A few of the tools I use</p>
              <p>to bring ideas to life.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 overflow-hidden">
            <div className="divide-y divide-gray-200 text-left">
              {/* Tool Names */}
              <div className="flex items-center h-32 px-12">
                <span className="text-3xl font-medium text-black">Figma</span>
              </div>
              <div className="flex items-center h-32 px-12">
                <span className="text-3xl font-medium text-black">Framer</span>
              </div>
              <div className="flex items-center h-32 px-12">
                <span className="text-3xl font-medium text-black">Notion</span>
              </div>
              <div className="flex items-center h-32 px-12">
                <span className="text-3xl font-medium text-black">Slack</span>
              </div>
            </div>
            <div className="divide-y divide-gray-200 text-right">
              {/* Tool Details */}
              <div className="flex items-center h-32 px-12 gap-12">
                <div className="flex items-center h-16 w-32 bg-gray-800 text-white justify-center font-semibold text-2xl">100%</div>
                <div className="flex-1 text-gray-600 text-lg">For designing UI/UX, prototyping, and creating reusable design systems.</div>
                <div className="text-gray-400">[1]</div>
              </div>
              <div className="flex items-center h-32 px-12 gap-12">
                <div className="flex items-center h-16 w-32 bg-gray-800 text-white justify-center font-semibold text-2xl">90%</div>
                <div className="flex-1 text-gray-600 text-lg">For building responsive, high-quality websites with smooth animations.</div>
                <div className="text-gray-400">[2]</div>
              </div>
              <div className="flex items-center h-32 px-12 gap-12">
                <div className="flex items-center h-16 w-32 bg-gray-800 text-white justify-center font-semibold text-2xl">70%</div>
                <div className="flex-1 text-gray-600 text-lg">For organizing project tasks, documenting processes, and managing workflows.</div>
                <div className="text-gray-400">[3]</div>
              </div>
              <div className="flex items-center h-32 px-12 gap-12">
                <div className="flex items-center h-16 w-32 bg-gray-800 text-white justify-center font-semibold text-2xl">60%</div>
                <div className="flex-1 text-gray-600 text-lg">For quick communication, file sharing, and staying connected with clients and teams.</div>
                <div className="text-gray-400">[4]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="space-y-32 py-24 px-8 ">
          <div className="max-w-6xl mx-auto ">
            {/* Header Section */}
            <div className="text-center mb-36">
              <h1 className="text-7xl uppercase md:text-8xl lg:text-9xl font-light text-foreground mb-4 text-balance">
                Experience
              </h1>
              {/* <p className="text-lg text-muted-foreground">
                Highlights from my design journey.
              </p> */}
            </div>

            {/* Experience Items */}
            <div className="space-y-16">
              <div className="flex justify-end">
                <div className="max-w-2xl flex gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">Lead Product Designer</h2>
                        <p className="text-muted-foreground">NovaFlow</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2021 - Present</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Led a full product redesign that increased onboarding completion by 35%.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Built a scalable design system adopted across all product teams.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Introduced UX testing cycles that reduced feature delivery time by 20%.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-2xl flex gap-8 items-start">
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">Freelance Product Designer</h2>
                        <p className="text-muted-foreground">Self-Employed</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2019 - Present</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Delivered 50+ projects across various industries and platforms.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-2xl flex gap-8 items-start">
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">Senior UX Designer</h2>
                        <p className="text-muted-foreground">TechFlow</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2018 - 2021</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Redesigned core user flows resulting in 40% increase in user retention.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Collaborated with engineering teams to implement design systems.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-2xl flex gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">Product Designer</h2>
                        <p className="text-muted-foreground">StartupCo</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2016 - 2018</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Designed mobile-first experiences for early-stage startup.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Conducted user research and usability testing sessions.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-2xl flex gap-8 items-start">
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">UI/UX Designer</h2>
                        <p className="text-muted-foreground">DesignStudio</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2014 - 2016</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Created visual designs for web and mobile applications.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Worked with clients across various industries and project scales.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-2xl flex gap-8 items-start">
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-2xl font-medium text-foreground mb-1">Junior Designer</h2>
                        <p className="text-muted-foreground">Creative Agency</p>
                      </div>
                      <span className="text-muted-foreground text-sm">2012 - 2014</span>
                    </div>

                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Assisted senior designers with branding and digital projects.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span>Developed foundational skills in design principles and tools.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;