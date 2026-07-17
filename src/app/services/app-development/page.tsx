import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import Hero from "@/components/Hero";
import ServiceBanner from "@/app/component/Service-Banner";

export const metadata: Metadata = {
  title: "App Development Services",
  description: `Professional mobile app development services by ${siteConfig.name}. We build native and cross-platform apps for iOS and Android.`,
};

export default function AppDevelopmentPage() {
  return (
    <>
      <ServiceBanner />
    <main className="min-h-screen bg-[#111111]">
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">App Development</h1>
            <p className="mt-6 text-lg text-zinc-400">
              We build powerful, scalable mobile applications for iOS and Android that drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white">Native & Cross-Platform Apps</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Whether you need a native iOS/Android app or a cross-platform solution using React Native or Flutter,
                our team delivers high-performance mobile experiences that users love.
              </p>
              <ul className="mt-8 space-y-3">
                {["iOS App Development (Swift, SwiftUI)", "Android App Development (Kotlin, Jetpack)", "Cross-Platform (React Native, Flutter)", "App UI/UX Design", "API Integration & Backend", "App Store Deployment & Maintenance"].map((item) => (
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
                {["Discovery & Strategy", "UI/UX Design", "Agile Development", "Testing & QA", "Deployment", "Support & Maintenance"].map((step, i) => (
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
    </>
  );
}
