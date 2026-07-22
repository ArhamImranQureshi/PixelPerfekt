"use client";
import { servicesData } from "@/data/service";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
interface StackingCardsProps {
  service:
    | "branding-design"
    | "web-development"
    | "app-development"
    | "content-writing"
    | "social-media-marketing"
    | "seo";
}
interface StackCard {
  id: string;
  step: string;
  title: string;
  tags: string[];
  description: string;
  bg: string;
  image: string;
}

const cards: StackCard[] = [
  {
    id: "card-1",
    step: "Step 01",
    title: "Research & Insights",
    tags: ["Discovery"],
    description:
      "We dive deep into your market, competitors, and audience to uncover insights that define your brand foundation.",
    bg: "#F5F1EE",
    image: "/images/research.webp",
  },
  {
    id: "card-2",
    step: "Step 02",
    title: "Positioning & Planning",
    tags: ["Strategy"],
    description:
      "We craft a unique brand positioning, messaging framework, and architecture that sets you apart from the competition.",
    bg: "#E7FF52",
    image: "/images/strategy.webp",
  },
  {
    id: "card-3",
    step: "Step 03",
    title: "Visual Identity",
    tags: ["Design"],
    description:
      "We bring your brand to life with a cohesive visual identity including logo, color palette, typography, and brand elements.",
    bg: "#D9D2FF",
    image: "/images/identity.webp",
  },
  {
    id: "card-4",
    step: "Step 04",
    title: "Launch & Guidelines",
    tags: ["Delivery"],
    description:
      "We deliver a complete brand toolkit with guidelines, assets, and templates so your team can execute consistently.",
    bg: "#C7FFF2",
    image: "/images/launch.webp",
  },
];

export default function StackingCards({
  service,
}: StackingCardsProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const pinContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const data = servicesData[service].stackingCards;
  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = scrollWrapperRef.current;
      const pinContainer = pinContainerRef.current;
      const cardEls = cardRefs.current.filter(
        (el): el is HTMLDivElement => el !== null,
      );

      if (!wrapper || !pinContainer || cardEls.length === 0) return;

      // Initial state: first card in place, the rest waiting below the viewport.
      cardEls.forEach((card, index) => {
        gsap.set(card, {
          yPercent: index === 0 ? 0 : 100,
          scale: 1,
          opacity: 1,
        });
      });

      const scrollLength = (cardEls.length - 1) * 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${scrollLength}%`,
          scrub: true,
          pin: pinContainer,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardEls.forEach((card, index) => {
        if (index === 0) return;

        const previousCard = cardEls[index - 1];
        const position = index - 1;

        tl.to(
          card,
          {
            yPercent: 0,
            ease: "none",
            duration: 1,
          },
          position,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-[120px] pb-[120px]"
      style={{ backgroundColor: "#151515" }}
    >
      <div ref={scrollWrapperRef} className="relative w-full">
        <div
          ref={pinContainerRef}
          className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        >
          {data.cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ zIndex: index + 1 }}
            >
              <div
                className="relative flex h-[82vh] mt-[100px] w-[92%] flex-col overflow-hidden rounded-[44px] p-6 shadow-2xl transition-shadow duration-500 hover:shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:p-8 md:p-10 lg:flex-row lg:items-center lg:gap-8 lg:p-12"
                style={{ backgroundColor: card.bg }}
              >
                {/* Floating arrow button */}
                <button
                  type="button"
                  aria-label={`Learn more about ${card.title}`}
                  className="absolute right-6 top-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 ease-out group-hover:rotate-45 sm:right-8 sm:top-8"
                >
                  <ArrowUpRight className="h-6 w-6" />
                </button>

                {/* Left content */}
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-black/50">
                  {card.step}
                </p>
                <div className="relative z-10 flex w-full flex-col justify-center lg:w-[45%]">
                  <h3 className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
                    {card.title}
                  </h3>

                  <div className="mb-6 flex flex-wrap gap-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/20 px-4 py-1.5 text-sm font-medium text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="max-w-md text-base leading-relaxed text-black/60 sm:text-lg">
                    {card.description}
                  </p>
                </div>

                {/* Right image */}
                <div className="relative mt-8 h-[45%] w-full overflow-hidden rounded-[28px] lg:mt-0 lg:h-[70%] lg:w-[55%]">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
