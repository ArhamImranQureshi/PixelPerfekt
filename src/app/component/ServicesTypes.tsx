"use client";
import { servicesData } from "@/data/service";
import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

interface ApproachItem {
  id: string;
  title: string;
  description: string;
  image: string;
}
interface TypesofServicesProps {
  service:
    | "branding-design"
    | "web-development"
    | "app-development"
    | "content-writing"
    | "social-media-marketing"
    | "seo-services";
}

export default function TypesofServices({ service }: TypesofServicesProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const data = servicesData[service].approach;
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
    <section className="relative bg-[#0a0a0a] text-white w-full px-6 md:px-16 py-[100px]">
      {/* Top bar */}
      <div className="flex items-start justify-between mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] max-w-xl">
          {data.title1}
          <br />
          {data.title2}
        </h1>
      </div>

      {/* List */}
      <div ref={listRef}>
        {data.items.map((item, i) => (
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
