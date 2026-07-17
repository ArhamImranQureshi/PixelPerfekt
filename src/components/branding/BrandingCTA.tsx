"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BrandingCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current.querySelectorAll(".word"),
          { y: 60, opacity: 0, rotateX: 25 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.5,
          opacity: 0.5,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (btnRef.current) {
        gsap.to(btnRef.current, {
          boxShadow: "0 0 40px rgba(44,182,192,0.3), 0 0 80px rgba(44,182,192,0.1)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative z-10 py-28 overflow-hidden" ref={containerRef}>
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          ref={glowRef}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle at center, #2CB6C0 0%, #8B5CF6 40%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
        <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-[#2CB6C0]/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-[#8B5CF6]/8 rounded-full blur-[120px]" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 1920 600" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`gv${i}`} x1={i * 96} y1={0} x2={i * 96} y2={600} stroke="#2CB6C0" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`gh${i}`} x1={0} y1={i * 75} x2={1920} y2={i * 75} stroke="#2CB6C0" strokeWidth="0.5" />
          ))}
          <line x1={0} y1={0} x2={1920} y2={600} stroke="#2CB6C0" strokeWidth="0.3" />
          <line x1={1920} y1={0} x2={0} y2={600} stroke="#2CB6C0" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Floating particles - seeded for SSR stability */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" suppressHydrationWarning>
        {[...Array(20)].map((_, i) => {
          const seed = (i * 16807 + 1) % 2147483647;
          const r1 = ((seed % 97) / 97) * 90 + 5;
          const r2 = (((seed * 48271) % 2147483647) % 81) + 10;
          const r3 = (((seed * 16807) % 2147483647) % 25) / 100 + 0.15;
          const r4 = (((seed * 48271 * 16807) % 2147483647) % 4) + 3;
          const r5 = (((seed * 16807 * 48271) % 2147483647) % 300) / 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 2 === 0 ? "#2CB6C0" : "#8B5CF6",
                left: `${r1}%`,
                top: `${r2}%`,
                opacity: r3,
                animation: `float-particle ${r4}s ease-in-out infinite`,
                animationDelay: `${r5}s`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 0.35; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2CB6C0]/25 bg-[#2CB6C0]/5 text-[#2CB6C0] text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Limited Availability
          </div>

          {/* Title with word-by-word animation */}
          <h2
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] mb-8 leading-[1.1]"
          >
            <span className="word inline-block text-white">Ready</span>{" "}
            <span className="word inline-block text-white">to</span>{" "}
            <span className="word inline-block text-white">Build</span>{" "}
            <span className="word inline-block text-white">a</span>{" "}
            <br className="md:hidden" />
            <span className="word inline-block bg-gradient-to-r from-[#2CB6C0] to-[#8B5CF6] bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 100%",
                animation: "gradient-shift 4s ease infinite",
              }}
            >
              Brand That Stands Out
            </span>
            <span className="word inline-block text-white">?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s create a brand identity that captures your vision and connects with your audience.
            <br />
            <span className="text-[#2CB6C0]/60">Schedule a free discovery call today.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              ref={btnRef}
              href="#contact"
              className="group relative inline-flex items-center gap-3 bg-[#2CB6C0] text-[#0a0a0f] px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 hover:bg-[#2CB6C0]/90 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Brand Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2CB6C0] via-[#2CB6C0] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundSize: "200% 100%", animation: "gradient-shift 3s ease infinite" }}
              />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 border border-white/20 text-white px-10 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:border-[#2CB6C0]/50 hover:bg-white/5"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-1 group-hover:text-[#2CB6C0]" />
            </a>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#2CB6C0]/20 to-transparent" />
          <div className="mt-4 flex justify-center gap-8 text-xs text-gray-600">
            <span className="text-[#2CB6C0]/40">✦ No commitment required</span>
            <span className="text-[#8B5CF6]/40">✦ 30-min discovery call</span>
            <span className="text-[#2CB6C0]/40">✦ Free brand audit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
