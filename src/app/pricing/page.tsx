"use client";

import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses getting started with their digital presence.",
    features: ["5 Pages Website", "Basic SEO Setup", "Mobile Responsive", "Contact Form", "1 Month Support"],
  },
  {
    name: "Professional",
    price: "1,499",
    description: "Ideal for growing businesses that need a robust online presence.",
    features: ["10 Pages Website", "Advanced SEO", "CMS Integration", "E-commerce Ready", "3 Months Support", "Social Media Integration"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "3,999",
    description: "For established businesses requiring custom solutions and premium support.",
    features: ["Unlimited Pages", "Custom Development", "Full SEO Suite", "Advanced Analytics", "12 Months Support", "Priority Support", "Dedicated Account Manager"],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Our Pricing</h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Transparent pricing for every stage of your business journey.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <span className={`text-sm ${!annual ? "font-semibold text-zinc-900 dark:text-white" : "text-zinc-500"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${annual ? "bg-indigo-500" : "bg-zinc-300 dark:bg-zinc-600"}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${annual ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className={`text-sm ${annual ? "font-semibold text-zinc-900 dark:text-white" : "text-zinc-500"}`}>Annual <span className="text-indigo-500">Save 20%</span></span>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan) => {
              const displayPrice = annual ? Math.round(parseInt(plan.price.replace(",", "")) * 0.8 * 12).toLocaleString() : plan.price;
              const period = annual ? "/year" : "/month";

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-xl border p-8 ${
                    plan.popular
                      ? "border-indigo-500 bg-white shadow-xl dark:bg-zinc-900"
                      : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{plan.description}</p>
                  <p className="mt-6">
                    <span className="text-4xl font-bold text-zinc-900 dark:text-white">${displayPrice}</span>
                    <span className="text-sm text-zinc-500">{period}</span>
                  </p>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                        <svg className="h-4 w-4 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                      plan.popular
                        ? "bg-indigo-500 text-white hover:bg-indigo-600"
                        : "border border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
