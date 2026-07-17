import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Content Writing Services",
  description: `Professional content writing services by ${siteConfig.name}. SEO-optimized content that engages and converts.`,
};

export default function ContentWritingPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Content Writing</h1>
            <p className="mt-6 text-lg text-zinc-400">
              Engaging, SEO-optimized content that tells your story and drives results.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Content That Connects</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Our expert writers create compelling content tailored to your brand voice and audience.
                From blog posts to website copy, we deliver content that drives engagement and conversions.
              </p>
              <ul className="mt-8 space-y-3">
                {["Website Copywriting", "Blog Posts & Articles", "SEO Content Strategy", "Product Descriptions", "Social Media Content", "Email Newsletters"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-[#2CB6C0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold text-white">Our Approach</h3>
              <ol className="mt-6 space-y-6">
                {["Research & Audience Analysis", "Content Strategy Development", "Writing & Optimization", "Review & Revisions", "Delivery & Performance Tracking"].map((step, i) => (
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
