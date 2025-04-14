'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import AboutImg from '@/public/img/about.webp';
import { useRef } from "react";
import AnimetedTitle from "./AnimetedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const bgImageRef = useRef(null);
  const stonesRef = useRef(null);

  // Parallax effect on mouse move
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Normalized values (-1 to 1)
    const moveX = (x - centerX) / centerX;
    const moveY = (y - centerY) / centerY;

    // Background image (subtle movement)
    gsap.to(bgImageRef.current, {
      x: moveX * 15,
      y: moveY * 10,
      duration: 0.8,
      ease: "power2.out"
    });

    // Foreground stones (more pronounced movement)
    gsap.to(stonesRef.current, {
      x: moveX * 30,
      y: moveY * 20,
      duration: 0.8,
      ease: "power2.out"
    });
  };

  // Reset position on mouse leave
  const handleMouseLeave = () => {
    gsap.to([bgImageRef.current, stonesRef.current], {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)"
    });
  };

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".about-img", {
      width: "100vw",
      height: "100vh",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimetedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      <div 
        className="h-dvh w-screen relative overflow-hidden perspective-1000"
        id="clip"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="about-img mask-clip-path about-image">
          <Image
            ref={bgImageRef}
            src={AboutImg}
            alt="Background"
            fill
            quality={100}
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <Image
          ref={stonesRef}
          src="/img/stones.webp"
          alt="Stone"
          fill
          quality={100}
          priority
          className="absolute object-cover z-40"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default About;