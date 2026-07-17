"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "How long does a branding project typically take?",
    a: "Most branding projects take 4-8 weeks from discovery to delivery. Starter packages can be completed in 3-4 weeks, while Enterprise-level projects may take 8-12 weeks depending on complexity and scope.",
  },
  {
    q: "What deliverables can I expect?",
    a: "Deliverables vary by package. At minimum, you'll receive logo concepts, a color palette, typography selections, and a brand board. Professional and Enterprise packages add comprehensive brand guidelines, collateral designs, source files, and more.",
  },
  {
    q: "Do I need a full brand identity or just a logo?",
    a: "A logo is just the beginning. A full brand identity ensures consistency across all touchpoints — from your website and social media to packaging and internal documents. We recommend the Professional package for a cohesive brand experience.",
  },
  {
    q: "How many revisions do I get?",
    a: "Revisions vary by tier: Starter includes 2 rounds, Professional includes 4 rounds, and Enterprise includes unlimited revisions. We work iteratively to ensure you love the final result.",
  },
  {
    q: "What information do you need to get started?",
    a: "We'll start with a discovery session where we learn about your business, competitors, target audience, and design preferences. Having examples of brands you admire is helpful but not required.",
  },
  {
    q: "Can you work with our existing brand guidelines?",
    a: "Absolutely. If you already have established brand elements, we can evolve and refine them rather than starting from scratch. We'll assess what's working and build upon your existing foundation.",
  },
];

export function BrandingFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-20 lg:py-[120px]">
      {/* Background images — lazy loaded (below the fold) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/faqbg.webp"
          alt=""
          fill
          className="object-cover opacity-100"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/images/faqclr.webp"
          alt=""
          fill
          className="object-cover opacity-100"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="w-full max-w-[740px] mx-auto">
            <h2 className="mb-10 text-4xl text-center lg:text-left lg:text-5xl font-bold tracking-[-0.03em] text-white">
              Branding{" "}
              <span className="text-[#2CB6C0]">FAQs</span>
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`${
                    openFaq === i && faq.a
                      ? "border border-[#7C7C7C] bg-[#1A1A1A]"
                      : "bg-[#3F3D3D]"
                  }`}
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-md lg:text-2xl font-bold tracking-[-0.03em] text-[#E5E5E5]">
                      {faq.q}
                    </span>
                    <svg
                      className={`size-5 text-[#E5E5E5] transition-transform shrink-0 ml-4 ${
                        openFaq === i ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>

                  {openFaq === i && faq.a && (
                    <div className="border-t-2 border-[#3F3D3D] px-6 pb-4 pt-3">
                      <p className="text-sm leading-5 tracking-[-0.03em] text-[#E5E5E5]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
