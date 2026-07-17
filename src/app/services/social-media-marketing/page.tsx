import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Social Media Marketing Services",
  description: `Expert social media marketing services by ${siteConfig.name}. Grow your brand across all major social platforms.`,
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Social Media Marketing</h1>
            <p className="mt-6 text-lg text-zinc-400">
              Amplify your brand presence across social media platforms with data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Social Media That Works</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Our social media marketing team creates engaging content and targeted campaigns that build
                communities, increase brand awareness, and drive measurable results.
              </p>
              <ul className="mt-8 space-y-3">
                {["Platform Strategy & Management", "Content Creation & Curation", "Paid Social Advertising", "Community Management", "Influencer Marketing", "Analytics & ROI Tracking"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-[#2CB6C0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold text-white">Platforms We Cover</h3>
              <ul className="mt-6 space-y-4">
                {["Instagram & Facebook", "LinkedIn (B2B)", "Twitter / X", "TikTok", "YouTube", "Pinterest"].map((item) => (
                  <li key={item} className="flex gap-3 text-zinc-300">
                    <svg className="h-5 w-5 shrink-0 text-[#2CB6C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
