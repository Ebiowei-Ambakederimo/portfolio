"use client"

// import AnimatedHeader from "@/components/AnimatedHeader";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import Image from 'next/image'
import styles from '../style.module.scss'



const Hero = () => {

  const text = "i build full-stack solutions that solve real problems and ship fast.";
  // const text = "Welcome to my portfolio! Explore my projects and skills.";

  return (
    <section id="home" className="relative  min-h-[90vh]">
      <AnimatedHeaderSection
        subTitle={"full-stack dev"}
        title={"Joseph"}
        text={text}
        textColor={"text-black"}
      />
      {/* <AnimatedHeader
        subTitle={"Full-Stack Developer"}
        // subTitle={"404 No Bugs Found"}
        title={"Joseph"}
        text={text}
        textColor={"text-black"}
      /> */}

      {/* <Image 
        src="/images/background.jpg"
        fill={true}
        alt="background"
      /> */}
      {/* <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Freelance Developer -</p>
          <p ref={secondText}>Freelance Developer -</p>
        </div>
      </div> */}
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div>
     
    </section>
  );
};

export default Hero;


// "use client";

// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import AnimatedHeader from "@/components/AnimatedHeader";

// const Hero = () => {
//   const heroRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Initial state
//       gsap.set(heroRef.current, {
//         width: "0vw",
//         height: "0vh",
//         opacity: 0
//       });

//       // Animation sequence
//       gsap.to(heroRef.current, {
//         width: "25vw",
//         height: "50vh",
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         onComplete: () => {
//           // Second part of animation
//           gsap.to(heroRef.current, {
//             width: "100vw",
//             height: "100vh",
//             duration: 1.5,
//             ease: "power2.inOut",
//             delay: 0.2
//           });
//         }
//       });
//     });

//     return () => ctx.revert(); // Cleanup
//   }, []);

//   return (
//     <section 
//       ref={heroRef}
//       id="home" 
//       className="flex bg-white flex-col justify-end min-h-screen overflow-hidden mx-auto"
//     >
//       <AnimatedHeader
//         title={"Joseph"}
//         textColor={"text-black"}
//       />
//     </section>
//   );
// };

// export default Hero;