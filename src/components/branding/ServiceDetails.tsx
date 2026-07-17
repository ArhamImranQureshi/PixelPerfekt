"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Brand Strategy",
    description: "We dive deep into your market, competitors, and target audience to define a unique positioning that sets you apart.",
    icon: Target,
  },
  {
    title: "Visual Identity",
    description: "From logos and color palettes to typography, we create visual systems that communicate your brand's essence instantly.",
    icon: Lightbulb,
  },
  {
    title: "Brand Guidelines",
    description: "Comprehensive brand books to ensure consistency across all your touchpoints, empowering your team to stay on brand.",
    icon: TrendingUp,
  },
];

export function ServiceDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
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

    // Cards Animation
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="py-24 bg-[#191818] relative z-10" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Approach to <span className="text-[#2CB6C0]">Branding</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A great brand is more than just a logo. It’s a complete ecosystem that dictates how the world perceives your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="bg-[#222] border border-[#333] rounded-2xl p-8 hover:bg-[#252525] transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#2CB6C0]/10 flex items-center justify-center mb-6 text-[#2CB6C0] group-hover:bg-[#2CB6C0] group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
