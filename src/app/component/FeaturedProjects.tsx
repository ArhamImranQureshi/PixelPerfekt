"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    title: "Interactive concept",
    subtitle: "powered by AI",
    tags: ["Sora", "AI", "Editorial"],
    image: "/images/banner_ (1).webp",
  },
  {
    title: "Brand identity",
    subtitle: "for startups",
    tags: ["Branding", "UI/UX"],
    image: "/images/banner_ (2).webp",
  },
  {
    title: "Creative website",
    subtitle: "development",
    tags: ["Next.js", "GSAP"],
    image: "/images/banner_ (1).jpg",
  },
  {
    title: "Mobile App",
    subtitle: "experience",
    tags: ["React Native", "App"],
    image: "/images/banner_ (2).jpg",
  },
];

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#151515] py-28"
    >
      <div className="max-w-[1700px] mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div className="lg:sticky lg:top-24 h-fit">

            <h2 className="text-white font-semibold leading-[0.95] text-5xl md:text-7xl">
              Featured
              <br />
              projects
            </h2>

            <p className="text-gray-400 mt-8 text-lg max-w-md leading-8">
              Explore a selection of projects blending creativity with practical
              design.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black duration-300">
              All Works →
            </button>

          </div>

          {/* RIGHT */}
          <div className="space-y-24">

            {portfolioItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                {/* IMAGE */}

                <div className="group relative aspect-[4/3] overflow-hidden rounded-[40px] cursor-pointer">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute bottom-6 left-6 flex gap-3">

                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#2CB6C0] px-4 py-2 rounded-full text-white text-sm"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {/* TEXT */}

                <div className="mt-7">

                  <h3 className="text-white text-4xl font-medium">

                    {item.title}

                    <span className="text-gray-500 font-normal">
                      {" "}
                      {item.subtitle}
                    </span>

                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}