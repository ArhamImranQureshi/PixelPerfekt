"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, ArrowUpRight, Menu, Sparkles, Play } from "lucide-react";

/**
 * Hero banner — replica of the "rayo theme" landing hero.
 *
 * NOTE ON 3D ASSETS:
 * The three floating 3D renders (white organic blob, chrome astronaut
 * helmet, chrome faceted sphere, dark twisted-knot video thumbnail) are
 * real photographed/rendered PNGs in the reference — they can't be
 * recreated with CSS. Drop your own transparent-background renders into
 * /public and point the `src` props below at them:
 *   /public/hero/blob-white.png
 *   /public/hero/astronaut-helmet.png
 *   /public/hero/sphere-chrome.png
 *   /public/hero/knot-dark.png
 * Until then, CSS placeholders (gradient blobs) are used so the layout
 * still renders correctly.
 */
type ServiceName = "web-branding" | "seo" | "app-development";

interface ServiceBannerProps {
  service: ServiceName;
}

export default function ServiceBanner({ service }: ServiceBannerProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const bannerData = {
    "web-branding": {
      title: "Web Branding",
      description:
        "We create memorable brands that connect with your audience.",
    },

    seo: {
      title: "SEO Optimization",
      description: "Rank higher on Google and grow your organic traffic.",
    },

    "app-development": {
      title: "App Development",
      description: "Build fast, secure and scalable mobile applications.",
    },
  };
  const data = bannerData[service];
  return (
    <section className="relative w-full bg-[#F7F4EF] overflow-hidden">
      {/* top accent bar (right side, like the screenshot) */}
      <div className="absolute right-0 top-0 h-2 w-40 bg-[#7C6CF6]" />

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <h2 className="text-4xl font-bold text-center">{data.title}</h2>

        <p className="text-center">{data.description}</p>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
            <span className="text-white text-lg">👾</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-black">rayo</p>
            <p className="text-sm font-bold text-black">theme</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white hover:bg-black/5 transition-colors"
          >
            <Moon size={18} strokeWidth={2} />
          </button>

          <button className="flex items-center gap-1.5 rounded-full bg-white border border-black/10 px-5 py-3 text-sm font-semibold hover:bg-black/5 transition-colors">
            Say Hello
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:bg-black/85 transition-colors"
          >
            <Menu size={18} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* HERO HEADLINE */}
      <div className="relative px-6 md:px-12 pt-6 pb-24 md:pb-32">
        {/* floating white organic blob */}
        <div className="pointer-events-none absolute left-0 top-6 h-56 w-72 md:h-72 md:w-96 -translate-x-6">
          <div
            className="h-full w-full rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-gradient-to-br from-white via-white to-neutral-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)]"
            style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.15))" }}
          />
          {/* Swap for real render:
          <Image src="/hero/blob-white.png" alt="" fill className="object-contain" />
          */}
        </div>

        {/* floating chrome astronaut helmet */}
        <div className="pointer-events-none absolute right-10 top-0 h-40 w-40 md:h-52 md:w-52 rotate-6">
          <div className="relative h-full w-full rounded-full bg-gradient-to-br from-white via-neutral-300 to-neutral-500 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-neutral-900 via-black to-neutral-800" />
          </div>
          {/* Swap for real render:
          <Image src="/hero/astronaut-helmet.png" alt="" fill className="object-contain" />
          */}
        </div>

        {/* floating chrome faceted sphere */}
        <div className="pointer-events-none absolute left-1/2 top-[19rem] md:top-[26rem] h-24 w-24 md:h-32 md:w-32 -translate-x-1/2">
          <div className="h-full w-full rounded-full bg-[conic-gradient(from_180deg,#e5e5e5,#8a8a8a,#f5f5f5,#6b6b6b,#e5e5e5)] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]" />
          {/* Swap for real render:
          <Image src="/hero/sphere-chrome.png" alt="" fill className="object-contain" />
          */}
        </div>

        {/* headline */}
        <h1 className="relative z-10 mx-auto max-w-6xl text-center md:text-left font-black tracking-tight text-black leading-[0.95] text-[13vw] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
          <span className="block">
            Design,{" "}
            <span className="relative inline-flex items-center gap-3 rounded-full bg-[#8878F5] px-6 text-white align-middle">
              tech{" "}
              <Sparkles
                className="h-[0.55em] w-[0.55em]"
                fill="white"
                strokeWidth={0}
              />{" "}
              te
            </span>
          </span>
          <span className="mt-2 flex items-center justify-center md:justify-start gap-4">
            <Sparkles
              className="h-[0.5em] w-[0.5em] shrink-0"
              fill="black"
              strokeWidth={0}
            />
            and some magic
          </span>
        </h1>
      </div>

      {/* BOTTOM STRIP */}
      <div className="relative border-t border-dashed border-black/20">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 px-6 md:px-12 py-10">
          {/* scroll badge */}
          <div className="flex justify-center md:justify-start">
            <ScrollBadge />
          </div>

          {/* description */}
          <p className="text-black/70 text-base leading-relaxed md:col-span-1">
            We are a creative digital agency specializing in innovative design
            and cutting-edge development.
          </p>

          {/* social links */}
          <ul className="flex flex-col gap-2 text-sm font-medium text-black">
            {["Dribbble", "Behance", "Instagram"].map((label) => (
              <li key={label} className="flex items-center gap-2">
                <Sparkles
                  className="h-3.5 w-3.5"
                  fill="black"
                  strokeWidth={0}
                />
                <a href="#" className="hover:underline underline-offset-4">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* video thumbnail */}
          <div className="relative aspect-video w-full max-w-xs justify-self-center md:justify-self-end overflow-hidden rounded-2xl bg-neutral-300">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-500 via-neutral-800 to-black" />
            {/* Swap for real render:
            <Image src="/hero/knot-dark.png" alt="Watch showreel" fill className="object-cover" />
            */}
            <button
              aria-label="Play video"
              className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#8878F5] text-white hover:bg-[#7566e8] transition-colors"
            >
              <Play size={16} fill="white" strokeWidth={0} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollBadge() {
  const text = "SCROLL FOR MORE * SCROLL FOR MORE * SCROLL FOR MORE * ";
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <div className="relative h-40 w-40 animate-[spin_12s_linear_infinite]">
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
          />
        </defs>
        <text fontSize="11" fontWeight={700} letterSpacing="1.5" fill="black">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neutral-300 via-neutral-500 to-neutral-700 shadow-inner" />
    </div>
  );
}
