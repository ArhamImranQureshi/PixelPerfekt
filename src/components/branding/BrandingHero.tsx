"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/* ─── Branding Tool SVGs ─── */

function PenTool({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 5L55 55H5L30 5Z" stroke="#2CB6C0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <circle cx="30" cy="55" r="3" fill="#2CB6C0" opacity="0.5" />
      <line x1="30" y1="5" x2="30" y2="50" stroke="#2CB6C0" strokeWidth="0.6" opacity="0.15" />
    </svg>
  );
}

function Eyedropper({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 35L5 45L15 40L40 15L35 10L10 35Z" stroke="#8B5CF6" strokeWidth="1.2" fill="none" opacity="0.3" />
      <circle cx="37" cy="12" r="6" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.25" />
      <circle cx="37" cy="12" r="2" fill="#8B5CF6" opacity="0.4" />
    </svg>
  );
}

function PaintBucket({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5L25 40M15 20L25 5L35 20" stroke="#2CB6C0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M10 30C10 27 15 20 25 20C35 20 40 27 40 30C40 35 35 40 25 40C15 40 10 35 10 30Z" stroke="#2CB6C0" strokeWidth="1" fill="none" opacity="0.2" />
      <circle cx="25" cy="30" r="3" fill="#2CB6C0" opacity="0.3" />
    </svg>
  );
}

function Ruler({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="50" height="30" rx="3" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.25" />
      {[15, 25, 35, 45].map((x, i) => (
        <line key={i} x1={x} y1="5" x2={x} y2={15 + (i % 2 === 0 ? 10 : 5)} stroke="#8B5CF6" strokeWidth="0.8" opacity="0.2" />
      ))}
      <line x1="10" y1="5" x2="10" y2="20" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function Scissors({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 15L35 35M35 15L15 35" stroke="#2CB6C0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <circle cx="15" cy="15" r="5" stroke="#2CB6C0" strokeWidth="1" fill="none" opacity="0.25" />
      <circle cx="15" cy="35" r="5" stroke="#2CB6C0" strokeWidth="1" fill="none" opacity="0.25" />
      <circle cx="15" cy="15" r="2" fill="#2CB6C0" opacity="0.3" />
      <circle cx="15" cy="35" r="2" fill="#2CB6C0" opacity="0.3" />
    </svg>
  );
}

function Paintbrush({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 42L20 30M20 30L35 8L42 15L20 30Z" stroke="#8B5CF6" strokeWidth="1.2" fill="none" opacity="0.3" />
      <circle cx="8" cy="42" r="5" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.25" />
      <circle cx="8" cy="42" r="2" fill="#8B5CF6" opacity="0.4" />
      <line x1="20" y1="30" x2="42" y2="8" stroke="#8B5CF6" strokeWidth="0.6" opacity="0.15" />
    </svg>
  );
}

function TextTool({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5V45M5 5H35" stroke="#2CB6C0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <rect x="5" y="30" width="30" height="15" rx="2" stroke="#2CB6C0" strokeWidth="0.8" fill="none" opacity="0.15" />
    </svg>
  );
}

function ShapeTool({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="16" height="16" rx="2" stroke="#8B5CF6" strokeWidth="1.2" fill="none" opacity="0.3" />
      <ellipse cx="35" cy="35" rx="12" ry="8" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.2" />
      <line x1="24" y1="16" x2="35" y2="35" stroke="#8B5CF6" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}

function DiamondLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 5L115 60L60 115L5 60L60 5Z" stroke="#2CB6C0" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M60 20L100 60L60 100L20 60L60 20Z" stroke="#2CB6C0" strokeWidth="1" fill="none" opacity="0.15" />
      <path d="M60 35L85 60L60 85L35 60L60 35Z" stroke="#2CB6C0" strokeWidth="0.8" fill="none" opacity="0.1" />
      <circle cx="60" cy="60" r="8" fill="#2CB6C0" opacity="0.4" />
    </svg>
  );
}

function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" stroke="#8B5CF6" strokeWidth="1.5" fill="none" opacity="0.25" />
      <path d="M50 18L78 33V63L50 78L22 63V33L50 18Z" stroke="#8B5CF6" strokeWidth="1" fill="none" opacity="0.12" />
      <circle cx="50" cy="48" r="6" fill="#8B5CF6" opacity="0.3" />
    </svg>
  );
}

function BrandShapes() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large diamond - top left */}
      <div className="absolute animate-glow-1" style={{ left: "6%", top: "8%" }}>
        <DiamondLogo className="w-28 h-28 md:w-36 md:h-36" />
      </div>

      {/* Pen tool - top area */}
      <div className="absolute animate-float-slow" style={{ left: "22%", top: "12%" }}>
        <PenTool className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      {/* Eyedropper - right top */}
      <div className="absolute animate-blinking" style={{ right: "18%", top: "10%" }}>
        <Eyedropper className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      {/* Hexagon - top right */}
      <div className="absolute animate-glow-2" style={{ right: "8%", top: "18%" }}>
        <HexagonIcon className="w-24 h-24 md:w-32 md:h-32" />
      </div>

      {/* Paintbrush - left middle */}
      <div className="absolute animate-glow-3" style={{ left: "3%", top: "38%" }}>
        <Paintbrush className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      {/* Ruler - right middle */}
      <div className="absolute animate-float-slow" style={{ right: "3%", top: "40%" }}>
        <Ruler className="w-14 h-10 md:w-20 md:h-14" />
      </div>

      {/* Diamond - bottom left */}
      <div className="absolute animate-glow-1" style={{ left: "5%", bottom: "22%" }}>
        <DiamondLogo className="w-16 h-16 md:w-22 md:h-22" />
      </div>

      {/* Scissors - bottom left area */}
      <div className="absolute animate-blinking" style={{ left: "18%", bottom: "12%" }}>
        <Scissors className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      {/* Text tool - bottom area */}
      <div className="absolute animate-glow-2" style={{ right: "22%", bottom: "15%" }}>
        <TextTool className="w-10 h-12 md:w-14 md:h-16" />
      </div>

      {/* Shape tool - right bottom */}
      <div className="absolute animate-float-slow" style={{ right: "4%", bottom: "25%" }}>
        <ShapeTool className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      {/* Hexagon - bottom right */}
      <div className="absolute animate-glow-3" style={{ right: "10%", bottom: "8%" }}>
        <HexagonIcon className="w-20 h-20 md:w-28 md:h-28" />
      </div>

      {/* Paint bucket - center right */}
      <div className="absolute animate-blinking" style={{ left: "48%", top: "8%" }}>
        <PaintBucket className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      {/* Pulsing orbs - stronger glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[180px] animate-pulse-slow"
        style={{ background: "#2CB6C0", left: "15%", top: "25%", opacity: 0.06 }}
      />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[160px] animate-pulse-slow"
        style={{ background: "#8B5CF6", right: "15%", bottom: "15%", opacity: 0.05, animationDelay: "2.5s" }}
      />

      {/* Blinking dots - more of them */}
      {[[35, 45], [55, 25], [70, 55], [25, 65], [80, 40], [45, 75], [60, 10], [15, 80], [75, 85], [40, 20]].map(([x, y], i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-blinking"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            background: i % 2 === 0 ? "#2CB6C0" : "#8B5CF6",
            opacity: 0.2,
            boxShadow: i % 2 === 0 ? "0 0 6px rgba(44,182,192,0.4)" : "0 0 6px rgba(139,92,246,0.4)",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Decorative ring */}
      <svg className="absolute animate-rotate-slow" style={{ left: "40%", top: "35%", width: 240, height: 240 }}
        viewBox="0 0 240 240" fill="none">
        <circle cx="120" cy="120" r="100" stroke="#2CB6C0" strokeWidth="0.5" opacity="0.08" />
        <circle cx="120" cy="120" r="70" stroke="#8B5CF6" strokeWidth="0.3" opacity="0.06" />
        <circle cx="120" cy="120" r="40" stroke="#2CB6C0" strokeWidth="0.5" opacity="0.04" />
      </svg>
    </div>
  );
}

/* ─── Design Grid Lines ─── */

function BrandGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-[0.04]" viewBox="0 0 1920 850" preserveAspectRatio="none">
        {Array.from({ length: 24 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 80} y1={0} x2={i * 80} y2={850} stroke="#2CB6C0" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 70} x2={1920} y2={i * 70} stroke="#2CB6C0" strokeWidth="0.5" />
        ))}
        <line x1={0} y1={0} x2={1920} y2={850} stroke="#2CB6C0" strokeWidth="0.3" />
        <line x1={1920} y1={0} x2={0} y2={850} stroke="#2CB6C0" strokeWidth="0.3" />
        <path d="M0 425 Q 480 425, 480 212 Q 480 0, 960 0" stroke="#2CB6C0" strokeWidth="0.3" fill="none" />
        <path d="M1920 425 Q 1440 425, 1440 212 Q 1440 0, 960 0" stroke="#2CB6C0" strokeWidth="0.3" fill="none" />
      </svg>
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#2CB6C0]/10" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#2CB6C0]/10" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#2CB6C0]/10" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#2CB6C0]/10" />
    </div>
  );
}

/* ─── Tool Labels ─── */

function ToolLabels() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll(".tool-label");
      if (!items) return;
      items.forEach((el, i) => {
        gsap.to(el, {
          y: -8 + Math.random() * 16,
          opacity: 0.3 + Math.random() * 0.3,
          duration: 2.5 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden lg:block">
      <span className="tool-label absolute text-[10px] font-mono tracking-[0.15em] text-[#2CB6C0]/20" style={{ left: "22%", top: "15%" }}>
        TOOL: LOGO GRID
      </span>
      <span className="tool-label absolute text-[10px] font-mono tracking-[0.15em] text-[#2CB6C0]/20" style={{ left: "62%", top: "22%" }}>
        LAYER: BRAND KIT
      </span>
      <span className="tool-label absolute text-[10px] font-mono tracking-[0.15em] text-[#2CB6C0]/20" style={{ left: "15%", top: "60%" }}>
        SWATCHES: 5 COLORS
      </span>
      <span className="tool-label absolute text-[10px] font-mono tracking-[0.15em] text-[#2CB6C0]/20" style={{ left: "70%", top: "55%" }}>
        GRID: 8×12 COLUMNS
      </span>
      <span className="tool-label absolute text-[10px] font-mono tracking-[0.15em] text-[#2CB6C0]/20" style={{ left: "45%", top: "75%" }}>
        SCALE: 1:1
      </span>
      <div className="absolute top-12 left-[229px] right-[229px] h-[1px] bg-gradient-to-r from-transparent via-[#2CB6C0]/8 to-transparent" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className="absolute top-[10px] w-[1px] bg-[#2CB6C0]/8"
          style={{ left: `${20 + i * 12}%`, height: 6 + (i % 2 === 0 ? 4 : 0) }}
        />
      ))}
    </div>
  );
}

/* ─── Main Hero ─── */

export function BrandingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);
  const text4Ref = useRef<HTMLSpanElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
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
      className="relative mx-auto w-full max-w-[1920px] overflow-hidden bg-[#0a0a0f] xl:h-[850px]"
    >
      <style>{`
        @keyframes glow-1 { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes glow-2 { 0%,100% { opacity: 0.35; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.1); } }
        @keyframes glow-3 { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.06); } }
        @keyframes blinking { 0%,100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.3); } }
        @keyframes pulse-slow { 0%,100% { opacity: 0.03; transform: scale(1); } 50% { opacity: 0.14; transform: scale(1.2); } }
        @keyframes rotate-slow { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes form-glow { 0%,100% { opacity: 0.05; transform: scale(0.95); } 50% { opacity: 0.2; transform: scale(1.05); } }
        .animate-glow-1 { animation: glow-1 4s ease-in-out infinite; }
        .animate-glow-2 { animation: glow-2 5s ease-in-out infinite; }
        .animate-glow-3 { animation: glow-3 3.5s ease-in-out infinite; }
        .animate-blinking { animation: blinking 1.8s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-rotate-slow { animation: rotate-slow 30s linear infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-form-glow { animation: form-glow 3s ease-in-out infinite; }
      `}</style>

      {/* Gradient ambient glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-[#2CB6C0]/8 rounded-full blur-[180px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/6 rounded-full blur-[160px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      {/* Brand design grid overlay */}
      <BrandGrid />

      {/* Tool labels animated */}
      <ToolLabels />

      {/* SVG illustrations with glow & blink */}
      <BrandShapes />

      {/* Dark vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-[#0a0a0f] via-transparent via-15% to-[#0a0a0f] pointer-events-none" />

      {/* Form background glow - pulsating behind form */}
      <div
        className="absolute z-[3] hidden xl:block pointer-events-none animate-form-glow"
        style={{
          left: "calc(50% - 377px/2 + 453.5px - 30px)",
          top: 207,
          width: 437,
          height: 576,
          background:
            "radial-gradient(ellipse at center, rgba(44,182,192,0.3) 0%, rgba(139,92,246,0.15) 40%, transparent 65%)",
          filter: "blur(60px)",
          borderRadius: "40px",
        }}
      />

      {/* Text - moved right */}
      <div
        className="absolute z-[5] hidden xl:block"
        style={{ left: 309, top: 84, width: 886, height: 763 }}
      >
        <h1
          ref={text1Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 69,
            top: 202,
            width: 499,
            height: 145,
            fontSize: 100,
            lineHeight: "125px",
          }}
        >
          Define your
        </h1>
        <span
          ref={text2Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-[#2CB6C0]"
          style={{
            left: 0,
            top: 302,
            width: 552,
            height: 145,
            fontSize: 100,
            lineHeight: "125px",
          }}
        >
          unique story
        </span>
        <span
          ref={text3Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 74,
            top: 432,
            width: 98,
            height: 80,
            fontSize: 50,
            lineHeight: "40px",
            textAlign: "right",
          }}
        >
          With our
        </span>
        <span
          ref={text4Ref}
          className="absolute z-20 font-medium tracking-[-0.06em] text-white"
          style={{
            left: 180,
            top: 418,
            width: 500,
            height: 210,
            fontSize: 100,
            lineHeight: "105px",
          }}
        >
          Brand Identity.
        </span>

       
      </div>

      {/* Form - moved left */}
      <div
        ref={formRef}
        className="absolute z-[5] hidden xl:block"
        style={{
          left: "calc(50% - 377px/2 + 453.5px)",
          top: 237,
          width: 377,
          height: 536,
        }}
      >
        <div className="h-full w-full rounded-[30px] border border-white/20 bg-white/5 p-8 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <h2 className="mb-6 text-[34px] font-bold tracking-[-0.03em] text-white leading-tight">
            Start Your <br />
            <span className="text-[#2CB6C0]">Brand Journey</span>
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
              type="text"
              placeholder="Company Name"
              className="h-11 w-full rounded-[40px] bg-white/10 px-5 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <textarea
              placeholder="Tell us about your brand vision..."
              rows={4}
              className="w-full resize-none rounded-[20px] bg-white/10 px-5 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="flex size-12 items-center justify-center rounded-full border-2 border-[#2CB6C0] bg-[#2CB6C0]/20 backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#2CB6C0]/30 group"
              >
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" className="transform group-hover:translate-x-1 transition-transform">
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
      <div className="relative z-[5] flex flex-col items-center justify-center px-4 pt-24 text-center xl:hidden">
        <h1
          ref={mobileTitleRef}
          className="text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl"
        >
          Define your <br />
          <span className="text-[#2CB6C0]">unique story.</span>
        </h1>
        <div
          ref={mobileFormRef}
          className="mt-12 w-full max-w-[377px] rounded-[30px] border border-white/20 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl"
        >
          <h2 className="mb-4 text-2xl font-bold text-white text-left">
            Start Your Journey
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
            <textarea
              placeholder="Tell us about your brand vision..."
              rows={3}
              className="w-full resize-none rounded-[20px] bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur-sm transition-all focus:bg-white/20 focus:ring-2 focus:ring-[#2CB6C0]"
            />
            <button
              type="submit"
              className="w-full rounded-[30px] bg-[#2CB6C0]/80 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-[#2CB6C0]"
            >
              Get a Proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
