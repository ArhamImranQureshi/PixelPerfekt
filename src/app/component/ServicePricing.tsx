"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PricingTier {
  badge?: { label: string; icon: string; color: string };
  title: string;
  description: string;
  price: string;
  period: string;
  timeline: string;
  features: string[];
}
const tiers: PricingTier[] = [
  {
    badge: { label: "Starter", icon: "🚀", color: "#D4F86A" },
    title: "Starter",
    description:
      "Perfect for startups and small businesses ready to establish their brand identity.",
    price: "1,999",
    period: "/project",
    timeline: "Timeline: tailored to your project",
    features: [
      "Brand Strategy Session",
      "Logo Design (3 concepts)",
      "Color Palette Selection",
      "Typography Selection",
      "Brand Board Presentation",
      "2 Rounds of Revisions",
    ],
  },
  {
    badge: { label: "Professional", icon: "🔥", color: "#B084F0" },
    title: "Professional",
    description:
      "Ideal for growing companies seeking a comprehensive visual identity system.",
    price: "4,999",
    period: "/project",
    timeline: "Timeline: tailored to your project",
    features: [
      "Everything in Starter",
      "Complete Visual Identity",
      "Brand Guidelines Document",
      "Business Card Design",
      "Social Media Kit",
      "Stationery Design",
      "4 Rounds of Revisions",
      "Source Files Delivery",
    ],
  },
  {
    badge: { label: "Enterprise", icon: "⭐", color: "#2CB6C0" },
    title: "Enterprise",
    description:
      "For established organizations requiring a full brand ecosystem and rollout.",
    price: "9,999+",
    period: "",
    timeline: "Timeline: based on project scope",
    features: [
      "Everything in Professional",
      "Full Brand Ecosystem",
      "Comprehensive Brand Book",
      "Website UI Kit",
      "Marketing Collateral",
      "Brand Training Session",
      "Unlimited Revisions",
      "Priority Support (6 months)",
      "Dedicated Project Manager",
    ],
  },
];

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quickSetters = useRef<
    Array<{
      x: gsap.QuickToFunc;
      y: gsap.QuickToFunc;
      rx: gsap.QuickToFunc;
      ry: gsap.QuickToFunc;
    } | null>
  >([]);

  useEffect(() => {
    // Entrance animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      // Feature list stagger reveal
      const features = card?.querySelectorAll("[data-feature]");
      if (features && features.length) {
        gsap.fromTo(
          features,
          { x: -12, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            delay: index * 0.15 + 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    // Set up quickTo tweens for smooth tilt + glow tracking per card
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      quickSetters.current[i] = {
        x: gsap.quickTo(glowRefs.current[i], "--x", {
          duration: 0.3,
          ease: "power2.out",
        }) as unknown as gsap.QuickToFunc,
        y: gsap.quickTo(glowRefs.current[i], "--y", {
          duration: 0.3,
          ease: "power2.out",
        }) as unknown as gsap.QuickToFunc,
        rx: gsap.quickTo(card, "rotateX", {
          duration: 0.4,
          ease: "power3.out",
        }) as unknown as gsap.QuickToFunc,
        ry: gsap.quickTo(card, "rotateY", {
          duration: 0.4,
          ease: "power3.out",
        }) as unknown as gsap.QuickToFunc,
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const card = cardsRef.current[index];
    const setters = quickSetters.current[index];
    if (!card || !setters) return;

    const rect = card.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    // spotlight position (percent)
    setters.x(Math.round((px / rect.width) * 100) as unknown as number);
    setters.y(Math.round((py / rect.height) * 100) as unknown as number);

    // subtle 3D tilt
    const rotateY = ((px / rect.width) - 0.5) * 8;
    const rotateX = ((py / rect.height) - 0.5) * -8;
    setters.ry(rotateY as unknown as number);
    setters.rx(rotateX as unknown as number);
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseEnterCard = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      y: -8,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeaveLift = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    handleMouseLeave(index);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
          style={{ perspective: "1200px" }}
        >
          {tiers.map((tier, index) => (
            <div
              key={tier.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => handleMouseEnterCard(index)}
              onMouseLeave={() => handleMouseLeaveLift(index)}
              className="group relative rounded-2xl border border-[#2a2a2a] bg-[#131313] p-8 flex flex-col overflow-hidden will-change-transform transition-[border-color,box-shadow] duration-300 hover:border-[#2CB6C0]/50 hover:shadow-[0_20px_60px_-15px_rgba(44,182,192,0.25)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Cursor-tracked spotlight glow */}
              <div
                ref={(el) => {
                  glowRefs.current[index] = el;
                }}
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={
                  {
                    background:
                      "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(44,182,192,0.12), transparent 70%)",
                    ["--x" as string]: "50%",
                    ["--y" as string]: "50%",
                  } as React.CSSProperties
                }
              />

              {/* Animated gradient border sheen on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[#2CB6C0]/20 to-transparent bg-[length:200%_100%] animate-[shimmer_2.5s_linear_infinite]" />

              <div className="relative z-10 flex flex-col flex-1" style={{ transform: "translateZ(30px)" }}>
                {tier.badge && (
                  <span
                    className="inline-flex items-center gap-1.5 self-start rounded-full px-4 py-1.5 text-sm font-semibold text-black mb-6 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: tier.badge.color }}
                  >
                    <span>{tier.badge.icon}</span>
                    {tier.badge.label}
                  </span>
                )}

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  {tier.title}
                </h3>

                {tier.description && (
                  <p className="text-gray-400 text-sm mb-6">{tier.description}</p>
                )}

                {tier.price && (
                  <div className="mb-2">
                    <div className="flex items-start gap-1">
                      <span className="text-lg font-bold text-white mt-2">$</span>
                      <span className="text-5xl font-extrabold text-white leading-none">
                        {tier.price}
                      </span>
                      <span className="text-gray-400 text-base self-end mb-1">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">{tier.timeline}</p>
                  </div>
                )}

                <div className={tier.price ? "mt-6" : "mt-2"}>
                  <button className="relative w-full overflow-hidden rounded-full bg-white text-black font-semibold py-3.5 px-6 flex items-center justify-between transition-colors duration-300 hover:bg-[#2CB6C0]">
                    <span className="relative z-10">Start Project</span>
                    <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

                <div className="w-full h-px bg-[#2a2a2a] my-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#2CB6C0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                </div>

                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-4">
                    What&apos;s included:
                  </h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        data-feature
                        className="flex items-start gap-3"
                      >
                        <Check className="w-4 h-4 text-[#2CB6C0] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="text-white text-sm underline underline-offset-4 mt-8 hover:text-[#2CB6C0] transition-colors w-fit"
                >
                  Need more info? Let&apos;s talk.
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  );
}
