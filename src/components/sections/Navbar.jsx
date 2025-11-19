"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { socials, navItems } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);
  const pathname = usePathname();

  useGSAP(() => {
    // CRITICAL FIX: Set initial state to hide the navbar completely
    gsap.set(navRef.current, { 
      xPercent: 100,
      visibility: "hidden" // Add this to prevent flash
    });
    
    gsap.set([linksRef.current, contactRef.current], {
      autoAlpha: 0,
      x: -20,
    });

    tl.current = gsap
      .timeline({ paused: true })
      .set(navRef.current, { visibility: "visible" }) // Show when opening
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      );

    // Add reverse complete callback to hide navbar when closed
    tl.current.eventCallback("onReverseComplete", () => {
      gsap.set(navRef.current, { visibility: "hidden" });
    });

    iconTl.current = gsap
      .timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // ENHANCED FIX: Ensure everything starts in closed state
    setIsOpen(false);
    if (tl.current && iconTl.current) {
      tl.current.progress(0).pause();
      iconTl.current.progress(0).pause();
      
      // Force navbar to be hidden on mount
      gsap.set(navRef.current, { 
        xPercent: 100, 
        visibility: "hidden" 
      });
    }
  }, []);

  // const navItems = [
  //   { name: "home", href: "/" },
  //   { name: "services", href: "/#services" },
  //   { name: "about", href: "/about" },
  //   { name: "work", href: "/works" },
  //   { name: "contact", href: "/contact" },
  //   { name: "contact", href: "/#contact" },
  // ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between w-full h-full px-10 uppercase bg-black text-white/80 py-28 gap-y-10 md:w-1/2 md:left-1/2"
        style={{ visibility: "hidden" }} // Add inline style as backup
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {navItems.map((navItem, index) => (
            <div key={navItem.name} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                href={navItem.href}
                onClick={toggleMenu}
                className={`transition-all duration-300 hover:text-white ${
                  pathname === navItem.href ? "text-white" : ""
                }`}
              >
                {navItem.name}
              </Link>
            </div>
          ))}
        </div>

        <div
          ref={contactRef}
          className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
        >
          <div className="font-light">
            <p className="tracking-wider text-white/50">E-mail</p>
            <p className="text-xl tracking-widest lowercase text-pretty">
              Ebioweijnr199@gmail.com
            </p>
          </div>
          <div className="font-light">
            <p className="tracking-wider text-white/50">Social Media</p>
            <div className="flex flex-col flex-wrap md:flex-row gap-x-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-loose tracking-widest uppercase hover:text-white transition-colors duration-300"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 bg-black rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={topLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
        <span
          ref={bottomLineRef}
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
        />
      </div>
    </>
  );
};

export default Navbar;