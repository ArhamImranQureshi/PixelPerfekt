"use client";

import { useState } from "react";
import type { Metadata } from "next";

const faqs = [
  {
    q: "What services does PixelPerfektSolutions offer?",
    a: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, branding, SEO, content writing, and social media marketing.",
  },
  {
    q: "How can SEO services help my business?",
    a: "SEO improves your website's visibility in search engine results, driving more organic traffic, increasing brand awareness, and ultimately generating more leads and sales.",
  },
  {
    q: "What types of websites do you develop?",
    a: "We develop all types of websites including e-commerce stores, corporate websites, landing pages, web applications, and custom CMS solutions tailored to your business needs.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing varies based on project complexity, scope, and requirements. We offer customized quotes after understanding your specific needs. Contact us for a free consultation.",
  },
  {
    q: "How long does it take to develop a website or app?",
    a: "The timeline varies based on the complexity of the project. Website development typically takes 4-8 weeks, while app development can take 2-4 months depending on features and platforms.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide ongoing maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally after launch.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with clients across various industries including healthcare, finance, e-commerce, education, real estate, entertainment, and technology startups.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We collaborate seamlessly with in-house teams, agencies, and freelance professionals. Our process is designed for transparent communication and efficient integration.",
  },
];

export default function FaqsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#1A1A1A] py-20 lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-12 text-center text-4xl lg:text-5xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${
                openFaq === i ? "border border-[#7C7C7C] bg-[#1A1A1A]" : "bg-[#3F3D3D]"
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-md lg:text-lg font-bold text-[#E5E5E5]">
                  {faq.q}
                </span>
                <svg
                  className={`size-5 shrink-0 text-[#E5E5E5] transition-transform ${
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
                <div className="border-t-2 border-[#3F3D3D] px-6 pb-4 pt-3">
                  <p className="text-sm leading-6 text-[#E5E5E5]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
