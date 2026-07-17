"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
  {
    name: "Starter",
    price: "$1,999",
    description: "Perfect for startups and small businesses ready to establish their brand identity.",
    popular: false,
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
    name: "Professional",
    price: "$4,999",
    description: "Ideal for growing companies seeking a comprehensive visual identity system.",
    popular: true,
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
    name: "Enterprise",
    price: "$9,999+",
    description: "For established organizations requiring a full brand ecosystem and rollout.",
    popular: false,
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

export function BrandingPricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="py-24 bg-[#111] relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent <span className="text-[#2CB6C0]">Pricing</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the package that fits your brand&apos;s needs. All plans include a discovery call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                tier.popular
                  ? "border-[#2CB6C0] bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(44,182,192,0.15)] scale-105"
                  : "border-[#333] bg-[#222] hover:border-[#555]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#2CB6C0] text-black text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.name !== "Enterprise" && (
                    <span className="text-gray-400 text-sm">/ project</span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-3">{tier.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#2CB6C0] shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-3 font-semibold text-sm transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#2CB6C0] text-black hover:shadow-[0_0_30px_rgba(44,182,192,0.4)]"
                    : "border border-[#333] text-white hover:bg-white/5"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
