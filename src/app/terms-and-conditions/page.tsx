import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and Conditions of ${siteConfig.name}. Please read these terms carefully before using our services.`,
};

export default function TermsAndConditionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: January 2025</p>

      <div className="mt-12 space-y-8 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by {siteConfig.name}, you agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, you should not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">2. Services Description</h2>
          <p>
            {siteConfig.name} provides digital agency services including but not limited to web development, mobile app development,
            UI/UX design, branding, SEO, content writing, and social media marketing. The specific scope of work, deliverables,
            and timelines will be outlined in individual project proposals and contracts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">3. Intellectual Property</h2>
          <p>
            Upon full payment for services, the client receives full ownership of the final deliverables. {siteConfig.name} retains
            the right to display completed work in portfolios and promotional materials unless otherwise agreed in writing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">4. Payment Terms</h2>
          <p>
            Payment terms are outlined in individual project contracts. Typically, a deposit is required before work begins,
            with the remaining balance due upon completion or according to a milestone schedule. Late payments may incur additional fees.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">5. Revision and Cancellation Policy</h2>
          <p>
            Our services include a defined number of revision rounds as specified in the project agreement. Additional revisions
            may be billed separately. Either party may cancel a project according to the terms specified in the contract.
            Deposits are non-refundable for work already completed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">6. Limitation of Liability</h2>
          <p>
            {siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising from
            the use of our services. Our total liability is limited to the amount paid by the client for the specific service
            giving rise to the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">7. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom.
            Any disputes arising from these terms shall be resolved in the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">8. Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-indigo-500 hover:underline">{siteConfig.email}</a>.
          </p>
        </section>
      </div>
    </section>
  );
}
