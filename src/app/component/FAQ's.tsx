"use client";

import { useState } from "react";
import Image from "next/image";
import GeodesicSphere from "@/components/GeoSphere";
import TestimonialSection from "@/components/testimonials";

const faqs = [
  {
    q: "What branding services do you offer?",
    a: "We offer logo design, brand identity, brand strategy, visual identity, and complete branding solutions.",
  },
  {
    q: "How long does a branding project take?",
    a: "Most branding projects are completed within 2–4 weeks depending on the scope.",
  },
  {
    q: "Do you provide brand guidelines?",
    a: "Yes. Every branding package includes professional brand guidelines.",
  },
  {
    q: "Can you redesign an existing brand?",
    a: "Absolutely. We help businesses refresh and modernize their existing branding.",
  },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-20 lg:py-[120px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/faqbg.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 z-[1]">
        <Image
          src="/images/faqclr.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1920px] px-4 sm:px-6 lg:px-[229px]">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="w-full max-w-[800px]">
            <GeodesicSphere />
          </div>

          <div className="w-full max-w-[740px]">
            <h2 className="mb-10 text-center text-4xl font-bold text-white lg:text-left lg:text-5xl">
              Frequently asked questions
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={
                    openFaq === i
                      ? "border border-[#7C7C7C] bg-[#1A1A1A]"
                      : "bg-[#3F3D3D]"
                  }
                >
                  <button
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    onClick={() =>
                      setOpenFaq(openFaq === i ? null : i)
                    }
                  >
                    <span className="text-md font-bold text-[#E5E5E5] lg:text-2xl">
                      {faq.q}
                    </span>

                    <svg
                      className={`size-5 text-white transition-transform ${
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

                  {openFaq === i && (
                    <div className="border-t border-[#3F3D3D] px-6 pb-5 pt-4">
                      <p className="text-[#E5E5E5]">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <TestimonialSection />
      </div>
    </section>
  );
}