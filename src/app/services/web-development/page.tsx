import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: `Professional web development services by ${siteConfig.name}. Custom websites and web applications built with modern technologies.`,
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Web Development</h1>
            <p className="mt-6 text-lg text-zinc-400">
              Custom websites and web applications built with cutting-edge technologies for optimal performance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Modern Web Solutions</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                From corporate websites to complex web applications, we build fast, secure, and scalable
                solutions using the latest frameworks and best practices.
              </p>
              <ul className="mt-8 space-y-3">
                {["Custom Website Development", "E-Commerce Solutions", "Web Application Development", "CMS Integration", "API Development & Integration", "Performance Optimization"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-300">
                    <span className="h-2 w-2 rounded-full bg-[#2CB6C0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-zinc-900 p-8">
              <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
              <ul className="mt-6 space-y-4">
                {["React / Next.js", "Vue.js / Nuxt", "Node.js / Express", "Laravel / PHP", "WordPress", "Shopify / WooCommerce"].map((item) => (
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
