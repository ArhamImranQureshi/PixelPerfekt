"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const arrow = (
  <svg
    width="71"
    height="23"
    viewBox="0 0 71 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.439339 9.98524C-0.146446 10.571 -0.146446 11.5208 0.439339 12.1066L9.98528 21.6525C10.5711 22.2383 11.5208 22.2383 12.1066 21.6525C12.6924 21.0667 12.6924 20.117 12.1066 19.5312L3.62132 11.0459L12.1066 2.56062C12.6924 1.97484 12.6924 1.02509 12.1066 0.439302C11.5208 -0.146485 10.5711 -0.146485 9.98528 0.439302L0.439339 9.98524ZM70.5 11.0459L70.5 9.5459L1.5 9.5459L1.5 11.0459L1.5 12.5459L70.5 12.5459L70.5 11.0459Z"
      fill="currentcolor"
    />
  </svg>
);

/* ================= STAR RATING ================= */
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: Math.min(count, 5) }).map((_, i) => (
        <svg key={i} width="18" height="18" className="sm:w-[22px] sm:h-[22px]" viewBox="0 0 26 26" fill="#F7FF00">
          <polygon points="13,2 16,10 24,10 18,15 20,23 13,18 6,23 8,15 2,10 10,10" />
        </svg>
      ))}
    </div>
  );
}

/* ================= TESTIMONIAL DATA ================= */
const testimonials = [
  {
    id: 1,
    name: "Sajjad Afzal",
    quote: "Really good experience and great customer service.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nicolae Mihai Talpeanu",
    quote:
      "Great service, very experienced and professional. I give good feedback and recommended this service, for those who are in need, with 100% confidence.",
    rating: 5,
  },
  {
    id: 3,
    name: "Gurjeevan Kailey",
    quote:
      "I would 100% recommend Pixel Perfekt Solutions to anyone. Their professionalism is unmatched!!",
    rating: 5,
  },
];

/* ================= MAIN COMPONENT ================= */
export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => resetTimeout();
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper helper to get items for the 3-column desktop view
  const getVisibleIndices = () => {
    const prev = (active - 1 + testimonials.length) % testimonials.length;
    const next = (active + 1) % testimonials.length;
    return [
      { index: prev, role: "side" },
      { index: active, role: "center" },
      { index: next, role: "side" },
    ];
  };

  return (
    <div className="overflow-hidden py-16 sm:py-24 md:py-32 w-full">
      {/* ================= MARQUEE HEADING ================= */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 sm:mb-20 w-full overflow-hidden"
      >
        <div className="flex w-max animate-[marquee_18s_linear_infinite] items-center gap-6">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="flex shrink-0 items-center gap-6">
              <h2 className="font-jersey whitespace-nowrap text-[44px] sm:text-[56px] md:text-[64px] uppercase tracking-[-0.01em] text-white">
                Client Testimonial
              </h2>
              <img
                src="/images/testarr.png"
                alt="decor"
                className="h-auto w-[40px] sm:w-[58px] object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= TESTIMONIALS WRAPPER ================= */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-auto max-w-[1920px] px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[229px]"
      >
        <div className="relative flex items-center justify-center min-h-[440px]">
          
          {/* DESKTOP & TABLET VIEW (3 Columns) */}
          <div className="hidden lg:flex items-center justify-center gap-6 w-full overflow-visible">
            {getVisibleIndices().map(({ index, role }) => {
              const t = testimonials[index];
              const isCenter = role === "center";

              return (
                <motion.div
                  key={`desktop-${t.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.4, 
                    scale: isCenter ? 1 : 0.9,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`
                    flex flex-col rounded-[30px] border-2 border-[#5D5C5C] 
                    bg-[rgba(70,70,70,0.2)] p-6 lg:p-8 backdrop-blur-sm
                    shadow-[0px_18px_21px_rgba(0,0,0,0.25)] origin-center
                    ${isCenter ? "h-[420px] w-[450px] lg:w-[520px]" : "h-[350px] w-[350px] lg:w-[420px]"}
                  `}
                >
                  <p className={`tracking-[-0.03em] text-[#E5E5E5] transition-all duration-300 ${
                    isCenter ? "text-xl lg:text-[28px] lg:leading-[38px]" : "text-base lg:text-[20px] lg:leading-[28px]"
                  }`}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div className="flex items-center gap-4">
                      <div className="size-[50px] lg:size-[70px] xl:size-[82px] rounded-full bg-[#5D5C5C] shrink-0" />
                      <div>
                        <p className="text-base lg:text-xl font-bold tracking-[-0.03em] text-[#E5E5E5]">
                          {t.name}
                        </p>
                        <StarRating count={t.rating} />
                      </div>
                    </div>
                    <img src="/images/quotes.png" alt="Quote" className="h-10 w-10 lg:h-16 lg:w-16 object-contain opacity-70" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* MOBILE VIEW (Single Active Card with Slide Animation) */}
         <div className="block lg:hidden w-full max-w-[600px] px-4 mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`mobile-${active}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col h-[380px] w-full rounded-[24px] border-2 border-[#5D5C5C] bg-[rgba(70,70,70,0.2)] p-6 shadow-[0px_12px_18px_rgba(0,0,0,0.25)]"
              >
                <p className="text-[18px] leading-[26px] tracking-[-0.02em] text-[#E5E5E5] overflow-y-auto">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                <div className="mt-auto flex items-end justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="size-[54px] rounded-full bg-[#5D5C5C] shrink-0" />
                    <div>
                      <p className="text-base font-bold tracking-[-0.02em] text-[#E5E5E5]">
                        {testimonials[active].name}
                      </p>
                      <StarRating count={testimonials[active].rating} />
                    </div>
                  </div>
                  <img src="/images/quotes.png" alt="Quote" className="h-10 w-10 object-contain opacity-60" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </motion.div>

      {/* ================= CONTROLS & DOT NAV ================= */}
      <div className="mt-8 sm:mt-12 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-8 sm:gap-10">
          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonial"
            className="cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:text-[#2CB6C0] active:scale-95 touch-manipulation"
          >
            <div className="w-[50px] sm:w-[71px] flex justify-center">
              {arrow}
            </div>
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            aria-label="Next Testimonial"
            className="rotate-180 cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:text-[#2CB6C0] active:scale-95 touch-manipulation"
          >
            <div className="w-[50px] sm:w-[71px] flex justify-center">
              {arrow}
            </div>
          </button>
        </div>

        {/* INDICATOR DOTS 
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === active ? "w-8 bg-[#2CB6C0]" : "w-2.5 bg-[#5D5C5C]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>*/}
      </div>
    </div>
  );
}