import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Services",
  description: `Professional SEO services by ${siteConfig.name}. Improve your search rankings and drive organic traffic.`,
};

export default function SeoServicesPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">SEO Services</h1>
            <p className="mt-6 text-lg text-zinc-400">
              Data-driven SEO strategies that boost your visibility and drive qualified traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Comprehensive SEO Solutions</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Our SEO experts use proven strategies to improve your search engine rankings, increase organic traffic,
                and generate more leads. We focus on sustainable, long-term results.
              </p>
              <ul className="mt-8 space-y-3">
                {["Technical SEO Audit", "On-Page Optimization", "Keyword Research & Strategy", "Link Building", "Local SEO", "SEO Analytics & Reporting"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-[#2CB6C0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold text-white">Our Process</h3>
              <ol className="mt-6 space-y-6">
                {["SEO Audit & Analysis", "Strategy Development", "On-Page Implementation", "Off-Page Optimization", "Monitoring & Reporting"].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2CB6C0] text-sm font-bold text-black">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-zinc-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
