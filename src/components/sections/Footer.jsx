"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Footer = () => {
  const footerRef = useRef(null);
  const sectionRefs = useRef([]);
  const socialRefs = useRef([]);
  const rippleRef = useRef(null);


  const sections = [
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Press", "Team"],
    },
    {
      title: "Services",
      links: ["Web Development", "Mobile Apps", "Design", "SEO", "Marketing"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Cookies", "Licensing", "GDPR"],
    },
  ];

  const socials = [
    { name: "Twitter", icon: "lucide:twitter", href: "#" },
    { name: "LinkedIn", icon: "lucide:linkedin", href: "#" },
    { name: "GitHub", icon: "lucide:github", href: "#" },
    // { name: "Dribbble", icon: "lucide:dribbble", href: "#" },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".footer-group",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.to(".footer-social", {
      scale: 1.1,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.1,
    });
  }, []);

  const handleClick = (e, i) => {
    e.preventDefault();
    const icon = socialRefs.current[i];
    if (!icon) return;

    const ripple = rippleRef.current;
    const rect = icon.getBoundingClientRect();
    gsap.set(ripple, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      scale: 0,
      opacity: 1,
    });
    gsap.to(ripple, {
      scale: 3,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.to(icon, {
      rotation: 360,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-white text-black py-20 px-6 overflow-hidden"
    >
      <div
        ref={rippleRef}
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        style={{ opacity: 0 }}
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section, i) => (
          <div
            key={i}
            className="footer-group"
            ref={(el) => (sectionRefs.current[i] = el)}
          >
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-black transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="my-12 text-center text-gray-500 text-sm">
        <div className="footer-group">© 2025 YourCompany. All rights reserved.</div>
      </div>

      <div className="flex justify-center gap-5 mt-6">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            onClick={(e) => handleClick(e, i)}
            ref={(el) => (socialRefs.current[i] = el)}
            className="footer-social text-zinc-400 hover:text-white p-2 transition-all duration-300"
          >
            <Icon icon={social.icon} className="w-5 h-5" />
          </a>
        ))}
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-10 right-10 z-40 p-3 bg-white text-black rounded-full shadow-lg hover:scale-110 hover:rotate-12 transition-transform"
      >
        <Icon icon="lucide:arrow-up" className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
