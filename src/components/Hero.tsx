"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Only 2 unique frames needed — browser loops them for infinite scroll illusion
const bgImages = [
  "/images/banner_ (1).webp",
  "/images/banner_ (2).webp",
];

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 grid grid-cols-3 gap-4 p-4">
      {[0, 1, 2].map((colIdx) => {
        const isDown = colIdx === 1;
        return (
          <div
            key={colIdx}
            className="relative overflow-hidden rounded-2xl"
            // Contain strip repaints to this column only
            style={{ contain: "strict" }}
          >
            <div
              className={`strip absolute left-0 flex w-full flex-col gap-3 ${
                isDown ? "col-down" : "col-up"
              }`}
            >
              {/* 6 images per column (down from 12) — still seamless 2-frame loop */}
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="relative w-full shrink-0 overflow-hidden rounded-xl"
                  style={{ height: 400 }}
                >
                  <Image
                    src={bgImages[i % bgImages.length]}
                    alt=""
                    fill
                    className="object-cover"
                    // Only the very first visible image gets priority fetch.
                    // Everything else lazy-loads after the hero LCP is done.
                    priority={colIdx === 0 && i === 0}
                    loading={colIdx === 0 && i === 0 ? "eager" : "lazy"}
                    sizes="33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const text4Ref = useRef<HTMLSpanElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const ornamentRef = useRef<HTMLDivElement>(null);
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        text1Ref.current,
        { y: 80, opacity: 0, rotateX: 15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          text2Ref.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          text3Ref.current,
          { scale: 0.3, opacity: 0, rotation: -20 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
          "-=0.6"
        )
        .fromTo(
          text4Ref.current,
          { y: 80, opacity: 0, clipPath: "inset(0 0 100% 0)" },
          { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.2 },
          "-=0.5"
        );

      if (avatarRef.current) {
        gsap.to(avatarRef.current, {
          y: -18,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      gsap.fromTo(
        formRef.current,
        { x: 120, opacity: 0, rotateY: 15, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 1.4,
          delay: 0.6,
          ease: "power2.out",
        }
      );

      if (ornamentRef.current) {
        gsap.to(ornamentRef.current, {
          scale: 1.06,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (mobileTitleRef.current) {
        gsap.fromTo(
          mobileTitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 }
        );
      }

      if (mobileFormRef.current) {
        gsap.fromTo(
          mobileFormRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.4 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-[#191818] xl:h-[850px]"
    >
      <BackgroundGrid />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Gradient overlay — fades top & bottom */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#191818] via-transparent via-20% to-[#191818]" />

      {/* Avatar */}
      <div
        ref={avatarRef}
        className="absolute z-[3] hidden xl:block"
        style={{ left: 678, top: 99, width: 846, height: 846 }}
      >
        <Image
          src="/images/banner_avatar.webp"
          alt=""
          width={846}
          height={846}
          className="h-full w-full object-contain"
          priority
        />
      </div>

      {/* Text + Ornament */}
      <div
        className="absolute z-[5] hidden xl:block"
        style={{ left: 229, top: 84, width: 886, height: 763 }}
      >
        <div ref={ornamentRef}>
          <Image
            src="/images/blue-ornament.webp"
            alt=""
            width={538}
            height={763}
            className="absolute z-0 h-auto max-w-none object-contain"
            style={{ left: 348, top: 44 }}
            priority
          />
        </div>

        <h1
          ref={text1Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 69,
            top: 222,
            width: 499,
            height: 145,
            fontSize: 120,
            lineHeight: "145px",
          }}
        >
          Let&rsquo;s turn
        </h1>
        <span
          ref={text2Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 0,
            top: 322,
            width: 552,
            height: 145,
            fontSize: 120,
            lineHeight: "145px",
          }}
        >
          your vision
        </span>
        <span
          ref={text3Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-[#2CB6C0]"
          style={{
            left: 74,
            top: 462,
            width: 98,
            height: 80,
            fontSize: 59,
            lineHeight: "40px",
            textAlign: "right",
          }}
        >
          Into a
        </span>
        <span
          ref={text4Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 180,
            top: 448,
            width: 335,
            height: 210,
            fontSize: 120,
            lineHeight: "105px",
          }}
        >
          digital reality.
        </span>
      </div>

      {/* Form */}
      <div
        ref={formRef}
        className="absolute z-[5] hidden xl:block"
        style={{
          left: "calc(50% - 377px/2 + 543.5px)",
          top: 237,
          width: 377,
          height: 536,
        }}
      >
        <div className="h-full w-full rounded-[30px] border border-white/20 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h2 className="mb-6 text-[38px] font-bold tracking-[-0.03em] text-white">
            Let&rsquo;s Get Started
          </h2>
          <form className="space-y-4" action="#" method="POST">
            <input
              type="text"
              placeholder="Your Name"
              className="h-11 w-full rounded-[40px] bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-11 w-full rounded-[40px] bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-11 w-full rounded-[40px] bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <div className="relative">
              <select className="h-11 w-full appearance-none rounded-[40px] bg-white/10 px-5 text-sm text-white/70 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]">
                <option value="" className="bg-[#191818]">Select Service</option>
                <option value="web" className="bg-[#191818]">Web Development</option>
                <option value="design" className="bg-[#191818]">UI/UX Design</option>
                <option value="seo" className="bg-[#191818]">SEO</option>
              </select>
              <svg
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
                width="13"
                height="7"
                viewBox="0 0 13 7"
                fill="none"
              >
                <path
                  d="M1 1L6.5 6L12 1"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full resize-none rounded-[20px] bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="flex size-10 items-center justify-center rounded-full border-2 border-[#2CB6C0] bg-[#2CB6C0]/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#2CB6C0]/30"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 9H16M16 9L10 3M16 9L10 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative z-[5] flex flex-col items-center justify-center px-4 pt-20 text-center xl:hidden">
        <h1
          ref={mobileTitleRef}
          className="text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl"
        >
          Let&rsquo;s turn your vision Into a{" "}
          <span className="text-[#2CB6C0]">digital reality.</span>
        </h1>
        <div
          ref={mobileFormRef}
          className="mt-8 w-full max-w-[377px] rounded-[30px] border border-white/20 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-white">
            Let&rsquo;s Get Started
          </h2>
          <form className="space-y-3" action="#" method="POST">
            <input
              type="text"
              placeholder="Your Name"
              className="h-10 w-full rounded-[40px] bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-full rounded-[40px] bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="h-10 w-full rounded-[40px] bg-white/10 px-4 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <button
              type="submit"
              className="rounded-[30px] bg-[#2CB6C0]/80 px-6 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#2CB6C0]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
