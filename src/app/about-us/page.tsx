import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — our mission, values, and the team behind the digital agency.`,
};

const values = [
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve with cutting-edge technologies and creative problem-solving.",
  },
  {
    title: "Quality",
    description:
      "Every pixel, every line of code, and every interaction is crafted with precision and care.",
  },
  {
    title: "Transparency",
    description:
      "Open communication and honest collaboration are at the heart of every project we undertake.",
  },
  {
    title: "Results",
    description:
      "We measure success by the tangible impact our work has on your business goals.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Founded in 2020, {siteConfig.name} has grown from a two-person team
            into a full-service digital agency serving clients worldwide. We
            believe that great digital products are born at the intersection of
            creative design and technical excellence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Our team of designers, developers, and strategists work
            collaboratively to deliver solutions that not only look great but
            also perform exceptionally well. We are passionate about helping
            businesses establish a strong online presence and achieve measurable
            growth.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Want to Work With Us?
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              We are always looking for talented individuals and exciting
              projects. Let us create something great together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
