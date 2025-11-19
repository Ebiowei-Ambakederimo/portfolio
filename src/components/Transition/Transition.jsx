"use client";

import "./Transition.css"

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";


const Transition = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();
  const overlayRef = useRef(null);
  const logoOverlayRef = useRef(null);
  const logoRef = useRef(null);
  const blockRef = useRef([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const createBlocks = () => {
        if (!overlayRef.current) return;
        overlayRef.current.inneerHTML = "";
        blockRef.current = [];

        for (let i = 0; i < 20; i==) {
            const block = document.createElement("div");
            block.className = "block";
            overlayRef.current.appendChild(block);
            blockRef.current.push(block);
        }
    }

    createBlocks();

    gsap.set(blockRef.current, {scaleX: 0, transformOrigin: "left"});

    if(logoRef.current) {
        const path = logoRef.current.querySelector("path");
        if (path) {
            const length = path.getTotalLength();
            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
                fill: "transparent",
            });
        }
    }

    revealPage();

    const handleRouteChange = (url) => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        coverPage(url);
    };

    const links = document.querySelectorAll('a[href^="/"]');
    links.forEach((links) => {
        links.addEventListener("click", (e) => {
            e.preventDefault();
            const href = e.currentTarget.href;
            const url = new.URL(href).pathName;
            if (url !== pathName) {
                handleRouteChange(url);
            }
        });
    });

    return () => {
        links.forEach((links) => {
            link.removeEventListaner("click". handleRouteChange);
        });
    };
  }, [router, pathName])

  

  return (
    <>
    <div className="transition-overlay" ref={overlayRef}></div>
    <div className="logo-overlay" ref={logoOverlayRef}>
        <div className="logo-container">

        </div>
    </div>
    {children}
    </>
  );
};

export default Transition;