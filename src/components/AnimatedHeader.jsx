"use client"

import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "@/components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const AnimatedHeader = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
  headingLevel = "h1",
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const letterRefs = useRef([]);
  const titleLetters = Array.from(title);
  const HeadingTag = headingLevel === "h2" ? "h2" : "h1";
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "100",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
    // Animate each letter with stagger
    if (letterRefs.current.length > 0) {
      tl.from(
        letterRefs.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
        },
        "<+0.2"
      );
    }
  }, [title]);
  return (
    <div ref={contextRef}>
      <div className="clip-path-rect">
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
        >
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <HeadingTag
              className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block ${textColor}`}
            >
              {titleLetters.map((letter, index) => (
                <span key={index} ref={(el) => (letterRefs.current[index] = el)}>{letter}</span>
              ))}
            </HeadingTag>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0" />
        <div className="py-12 sm:py-16 text-end">
          <br/>
          <br/>
          <br/>
          <br/>
          <AnimatedTextLines
            text={text}
            className={`font-light value-text-responsive ${textColor}`}
            // className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
