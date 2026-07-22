"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { servicesData } from "@/data/service";




export default function NewServiceBanner({
  service,
}: NewServiceBannerProps) {
  const data = servicesData[service].banner;
  const sectionRef = useRef<HTMLElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const helmetRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const scrollBtnRef = useRef<HTMLDivElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const parallaxRefs = useRef<HTMLDivElement[]>([]);
  const MARQUEE_WORDS = data.marquee;
  interface NewServiceBannerProps {
    service: ServiceType;
  }
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance / hero title fade up
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      })
        .from(brainRef.current, { y: -40, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(helmetRef.current, { y: -40, opacity: 0, duration: 0.9 }, "-=0.7")
        .from(
          shapeRef.current,
          { scale: 0, opacity: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.6",
        )
        .from(
          videoCardRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.5",
        )
        .from(
          scrollBtnRef.current,
          { scale: 0, opacity: 0, duration: 0.6 },
          "-=0.5",
        )
        .from(
          socialRef.current ? Array.from(socialRef.current.children) : [],
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.4",
        );

      // Infinite floating animation - brain
      gsap.to(brainRef.current, {
        y: "+=20",
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Infinite floating animation - helmet
      gsap.to(helmetRef.current, {
        y: "+=25",
        rotation: 4,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Rotating abstract shape
      gsap.to(shapeRef.current, {
        rotation: 360,
        duration: 14,
        repeat: -1,
        ease: "none",
      });
      gsap.to(shapeRef.current, {
        y: "+=15",
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Infinite marquee loop
      if (marqueeTrackRef.current) {
        const track = marqueeTrackRef.current;
        const totalWidth = track.scrollWidth / 2;
        gsap.to(track, {
          x: -totalWidth,
          duration: 8,
          repeat: -1,
          ease: "none",
        });
      }

      // Rotating scroll button (infinite rotation of the text ring)
      const ring = scrollBtnRef.current?.querySelector(".scroll-ring");
      if (ring) {
        gsap.to(ring, {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: "none",
        });
      }

      // Mouse parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const xPos = (e.clientX / innerWidth - 0.5) * 2;
        const yPos = (e.clientY / innerHeight - 0.5) * 2;

        parallaxRefs.current.forEach((el, i) => {
          if (!el) return;
          const strength = (i + 1) * 8;
          gsap.to(el, {
            x: xPos * strength,
            y: yPos * strength,
            duration: 1,
            ease: "power2.out",
          });
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addParallaxRef = (el: HTMLDivElement | null, index: number) => {
    if (el) parallaxRefs.current[index] = el;
  };

  return (
    <>
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100vh] md:min-h-[90vh] bg-[#151515] overflow-hidden px-6 sm:px-10 lg:px-16 pt-28 pb-16 flex flex-col justify-between"
    >
      {/* Floating Brain */}
      <div
        ref={(el) => addParallaxRef(el, 0)}
        className="absolute left-[4%] sm:left-[8%] top-[6%] sm:top-[8%] w-24 sm:w-36 md:w-44 lg:w-48 z-20"
      >
        <div ref={brainRef} className="w-full h-full">
          <Image
            src={data.heartImage}
            alt="Brain"
            width={400}
            height={400}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Floating Helmet */}
      <div
        ref={(el) => addParallaxRef(el, 1)}
        className="absolute right-[2%] sm:right-[6%] top-[10%] w-24 sm:w-36 md:w-44 lg:w-52 z-20"
      >
        <div ref={helmetRef} className="w-full h-full">
          <Image
            src={data.helmetImage}
            alt="Helmet"
            width={200}
            height={200}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Rotating Abstract Shape */}
      <div
        ref={(el) => addParallaxRef(el, 2)}
        className="absolute left-1/2 -translate-x-1/2 top-[66%] sm:top-[60%] w-26 sm:w-36 md:w-44 z-20"
      >
        <div ref={shapeRef} className="w-full h-full">
          <Image
            src={data.shapeImage}
            alt="Abstract shape"
            width={200}
            height={200}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Hero Title */}
      <div
        ref={titleRef}
        className="relative z-10 w-full max-w-[1400px] mx-auto mt-16 sm:mt-20 md:mt-24 flex flex-col items-center"
      >
        <h1 className="w-full text-center font-normal text-white leading-[0.95] tracking-tight text-[13vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5vw] flex flex-col items-center">
          <span className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 w-full">
            <span>{data.title1}</span>
            {/* Marquee pill inline with first line */}
            <span className="relative inline-flex h-[0.99em] sm:h-[0.99em] items-center overflow-hidden rounded-full bg-[#2CB6C0] px-4 sm:px-6 align-middle max-w-[38%] sm:max-w-[34%]">
              <div
                ref={marqueeTrackRef}
                className="flex whitespace-nowrap items-center gap-6 sm:gap-8 text-black"
              >
                {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
                  <span
                    key={i}
                    className=" text-white flex items-center gap-6 sm:gap-8 font-normal"
                  >
                    {word}
                    <span aria-hidden="true" className="text-[0.6em]">
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            </span>
          </span>

          <span className="flex justify-center items-center gap-x-4 sm:gap-x-6 mt-1 sm:mt-2 w-full">
            <span aria-hidden="true" className="text-[0.55em] text-white">
              ✦
            </span>
            <span>{data.title2}</span>
          </span>
        </h1>
      </div>

      {/* Bottom Row: Scroll button / Video Card / Social Links */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex items-end justify-between mt-16 sm:mt-20 gap-6 flex-wrap">
        {/* Scroll Button */}
        <div
          ref={scrollBtnRef}
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center shrink-0"
        >
          <svg
            className="scroll-ring absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              />
            </defs>
            <text fill="white" fontSize="8.2" letterSpacing="2">
              <textPath href="#circlePath" startOffset="0%">
                SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#D4F84A] flex items-center justify-center">
            <Image
              src="/images/banner_avatar.png"
              alt="Scroll"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Video Card */}
        {/* <div
          ref={videoCardRef}
          className="relative w-full sm:w-64 md:w-72 lg:w-80 aspect-[4/3] rounded-3xl overflow-hidden order-3 sm:order-2"
        >
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <button
              aria-label="Play video"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-105 transition-transform"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 ml-1"
                fill="black"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div> */}

        {/* Social Links */}
        <div
          ref={socialRef}
          className="text-white order-2 sm:order-3 shrink-0 max-w-md"
        >
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>
    </section>
    
    </>
  );
}
