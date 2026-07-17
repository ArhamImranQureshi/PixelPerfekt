"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function AboutReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!paragraphRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitType(paragraphRef.current, {
        types: "words",
      });

      gsap.set(split.words, {
        color: "#4b4b4b",
      });

      gsap.to(split.words, {
        color: "#ffffff",
        stagger: 0.03,
        ease: "none",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#151515] py-28">
  <div className="max-w-[1600px] mx-auto px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

      {/* Left Side */}
      <div>
        <p className="text-white text-lg flex items-center gap-2 mb-10">
          <span>✦</span>
          <span>Branding Design</span>
        </p>

        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          Unleashing the Power of Your Brand
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <p
          ref={paragraphRef}
          className="text-[18px] md:text-[20px] lg:text-[24px] leading-[1.7] font-medium"
        >
          In today's competitive marketplace, your brand is more than just a logo. It's the essence of your company's identity. We understand that a strong brand is the foundation of a successful business. Our comprehensive branding and identity services are designed to help you establish a robust, cohesive brand that resonates with your target audience and sets you apart from the competition.
        </p>
      </div>

    </div>

  </div>
</section>
  );
}