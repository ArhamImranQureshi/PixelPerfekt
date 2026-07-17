import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: January 2025</p>

      <div className="mt-12 space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">1. Introduction</h2>
          <p>
            Welcome to {siteConfig.name}. We respect your privacy and are committed to protecting your personal data.
            This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Usage data (pages visited, time spent, browser type)</li>
            <li>Cookies and tracking technologies</li>
            <li>Communication data (when you contact us via forms or email)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>To provide and maintain our services</li>
            <li>To respond to your inquiries and support needs</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">4. Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">5. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our services, provide service on our behalf,
            or assist us in analyzing how our services are used. These third parties have access to your personal data
            only to perform these tasks and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Access your personal data held by us</li>
            <li>Request correction or deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-indigo-500 hover:underline">{siteConfig.email}</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
