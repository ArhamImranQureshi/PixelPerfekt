"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Route, Palette, Ship } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Discovery",
    tag: "Research & Insights",
    description: "We dive deep into your market, competitors, and audience to uncover insights that define your brand foundation.",
    icon: Search,
    gradient: "from-[#2CB6C0]/20 via-transparent to-transparent",
    accent: "#2CB6C0",
  },
  {
    number: "02",
    title: "Strategy",
    tag: "Positioning & Planning",
    description: "We craft a unique brand positioning, messaging framework, and architecture that sets you apart from the competition.",
    icon: Route,
    gradient: "from-[#8B5CF6]/20 via-transparent to-transparent",
    accent: "#8B5CF6",
  },
  {
    number: "03",
    title: "Design",
    tag: "Visual Identity",
    description: "We bring your brand to life with a cohesive visual identity including logo, color palette, typography, and brand elements.",
    icon: Palette,
    gradient: "from-[#F59E0B]/20 via-transparent to-transparent",
    accent: "#F59E0B",
  },
  {
    number: "04",
    title: "Delivery",
    tag: "Launch & Guidelines",
    description: "We deliver a complete brand toolkit with guidelines, assets, and templates so your team can execute consistently.",
    icon: Ship,
    gradient: "from-[#10B981]/20 via-transparent to-transparent",
    accent: "#10B981",
  },
];

export function BrandingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(
          card,
          {
            x: direction * 120,
            y: 80,
            opacity: 0,
            rotateX: 10,
            scale: 0.95,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: cardsWrapperRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={titleRef} className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            How We <span className="text-[#2CB6C0]">Build Brands</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            A proven methodology to create brands that resonate, engage, and endure.
          </p>
        </div>

        <div ref={cardsWrapperRef} className="relative max-w-6xl mx-auto">
          {/* Progress bar */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-white/5 rounded-full overflow-hidden hidden lg:block">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#2CB6C0] via-[#8B5CF6] via-[#F59E0B] to-[#10B981] rounded-full origin-left"
            />
          </div>

          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative"
              >
                {/* Connecting line dot */}
                <div className="absolute -top-4 left-0 lg:left-8 w-3 h-3 rounded-full bg-white/10 border-2 border-white/20 z-10 hidden lg:block" />

                <div
                  className={`relative flex flex-col lg:flex-row items-start gap-0 lg:gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Decorative number */}
                  <div className="hidden lg:block absolute top-0 right-0 text-[200px] font-black text-white/[0.02] select-none pointer-events-none leading-none -mt-8 -mr-8">
                    {step.number}
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 w-full rounded-3xl border border-white/[0.06] bg-gradient-to-br ${step.gradient} bg-[#111] p-8 lg:p-10 transition-all duration-500 hover:border-white/[0.12]`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${step.accent}15` }}
                      >
                        <step.icon className="w-7 h-7" style={{ color: step.accent }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="text-xs font-bold tracking-[0.2em] uppercase"
                            style={{ color: step.accent }}
                          >
                            Step {step.number}
                          </span>
                          <span className="text-xs text-white/30">—</span>
                          <span className="text-xs text-white/40 font-medium">
                            {step.tag}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base lg:text-lg max-w-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="mt-6 h-[2px] w-16 rounded-full transition-all duration-500 group-hover:w-24"
                      style={{ backgroundColor: step.accent }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
