"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ApproachItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const items: ApproachItem[] = [
  {
    id: "perfection",
    title: "Perfection",
    description:
      "From pixel-perfect designs to flawless code, every aspect of our projects is crafted with care to ensure the highest standards of quality.",
    image:
      "https://demo.oceanthemes.site/rayo-dark/wp-content/uploads/sites/15/2025/10/h70_appr-01.webp",
  },
  {
    id: "innovative",
    title: "Innovative",
    description:
      "I stay ahead of design trends, offering modern and visually impactful solutions that set your brand apart.",
    image:
      "https://demo.oceanthemes.site/rayo-dark/wp-content/uploads/sites/15/2025/10/h70_appr-02.webp",
  },
  {
    id: "expertise",
    title: "Expertise",
    description:
      "I am passionate about integrating the latest technologies and trends, including interactive animations and mobile-first strategies.",
    image:
      "https://demo.oceanthemes.site/rayo-dark/wp-content/uploads/sites/15/2025/10/h70_appr-03.webp",
  },
  {
    id: "full-cycle",
    title: "Full-Cycle services",
    description:
      "From web design to development, branding, SEO, and UX/UI, we provide a full range of services that cover all your digital needs.",
    image:
      "https://demo.oceanthemes.site/rayo-dark/wp-content/uploads/sites/15/2025/10/200x200_obj-menu-04.webp",
  },
  {
    id: "client-success",
    title: "Client Success",
    description:
      "Our clients consistently see improved engagement, conversion rates, and business growth.",
    image:
      "https://demo.oceanthemes.site/rayo-dark/wp-content/uploads/sites/15/2025/10/200x200_obj-menu-01.webp",
  },
];

export default function TypesofServices() {
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleEnter = (index: number) => {
    rowRefs.current.forEach((row, i) => {
      if (!row) return;
      const isActive = i === index;

      const title = row.querySelector<HTMLElement>("[data-title]");
      const desc = row.querySelector<HTMLElement>("[data-desc]");
      const image = row.querySelector<HTMLElement>("[data-image]");
      const topDivider = row.querySelector<HTMLElement>("[data-divider-top]");
      const bottomDivider = row.querySelector<HTMLElement>(
        "[data-divider-bottom]",
      );

      gsap.to(title, {
        color: isActive ? "#ffffff" : "#4b4b4b",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(desc, {
        color: isActive ? "#c9c9c9" : "#3a3a3a",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(image, {
        opacity: isActive ? 1 : 0.2,
        scale: isActive ? 1 : 0.94,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to([topDivider, bottomDivider], {
        opacity: isActive ? 1 : 0.15,
        backgroundColor: isActive ? "#ffffff" : "#4b4b4b",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  };

  const handleLeave = () => {
    rowRefs.current.forEach((row) => {
      if (!row) return;
      const title = row.querySelector<HTMLElement>("[data-title]");
      const desc = row.querySelector<HTMLElement>("[data-desc]");
      const image = row.querySelector<HTMLElement>("[data-image]");
      const topDivider = row.querySelector<HTMLElement>("[data-divider-top]");
      const bottomDivider = row.querySelector<HTMLElement>(
        "[data-divider-bottom]",
      );

      gsap.to(title, { color: "#ffffff", duration: 0.4, ease: "power2.out" });
      gsap.to(desc, { color: "#c9c9c9", duration: 0.4, ease: "power2.out" });
      gsap.to(image, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to([topDivider, bottomDivider], {
        opacity: 0.15,
        backgroundColor: "#4b4b4b",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  };

  return (
    <section className="relative bg-[#0a0a0a] text-white w-full px-6 md:px-16 py-10">
      {/* Top bar */}
      <div className="flex items-start justify-between mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-xl">
          Approach and
          <br />
          philosophy
        </h1>

        <nav className="hidden md:flex flex-col gap-1 text-gray-400 text-base pt-2">
          <span>Design</span>
          <span>Development</span>
          <span>Mastership</span>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-full border border-white/70 px-5 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
            Let&apos;s Chat
            <span className="inline-block rotate-45">&#8594;</span>
          </button>
          <button
            aria-label="Open menu"
            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center"
          >
            <div className="flex flex-col gap-1">
              <span className="block w-4 h-[2px] bg-black" />
              <span className="block w-4 h-[2px] bg-black" />
            </div>
          </button>
        </div>
      </div>

      {/* List */}
      <div ref={listRef}>
        {items.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
            className="relative"
          >
            {/* top divider (shared visually with previous row's bottom divider) */}
            <div
              data-divider-top
              className="w-full h-px bg-[#4b4b4b] transition-colors"
            />

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_2fr] items-center gap-6 md:gap-10 py-10 md:py-14 cursor-pointer">
              <div
                data-image
                className="relative w-28 h-28 md:w-[140px] md:h-[140px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              <h3
                data-title
                className="text-3xl md:text-4xl font-bold text-white"
              >
                {item.title}
              </h3>

              <p
                data-desc
                className="text-[#c9c9c9] text-lg md:text-xl leading-relaxed max-w-2xl"
              >
                {item.description}
              </p>
            </div>

            {/* bottom divider only rendered once, after the last item, others are shared via next row's top divider */}
            <div
              data-divider-bottom
              className="w-full h-px bg-[#4b4b4b] transition-colors"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
