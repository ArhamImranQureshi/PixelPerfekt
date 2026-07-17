import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks: { label: string; href: string }[] = [
    { label: "About Us", href: "/about-us" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faqs" },
  ];
  const serviceLinks: { label: string; href: string }[] = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "App Development", href: "/services/app-development" },
    { label: "Branding Design", href: "/services/branding-design" },
    { label: "SEO Services", href: "/services/seo-services" },
    { label: "Content Writing", href: "/services/content-writing" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  ];
  const contactLinks: { label: string; href: string }[] = [
    { label: "Contact Us", href: "/contact-us" },
    { label: "Get a Quote", href: "/get-quote" },
    { label: "FAQ", href: "/faqs" },
  ];

  return (
    <footer>
      {/* Main Footer */}
      <div className="relative bg-[#1A1919]">
        <div className="absolute inset-0">
          <Image
            src="/images/footer_bg.png"
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative mx-auto max-w-[1920px] px-4 py-16 sm:px-6 lg:px-[218px] lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[292px_1fr_1fr_1fr_auto]">
            {/* Logo & Description */}
            <div>
              <Image
                src="/images/dark backgound 1.png"
                alt="Pixel Perfekt Solutions"
                width={170}
                height={38}
                className="mb-4 h-[38px] w-[170px] object-contain"
              />
              <p className="font-[Noto_Sans] text-base leading-relaxed text-white">
                We conduct our business with honesty and transparency, building
                trust with our clients and partners.
              </p>
              <div className="mt-10">
                <h4 className="mb-4 font-[Noto_Sans] text-xl font-bold leading-8 text-white">
                  Follow Us
                </h4>
                <div className="flex gap-2">
                  {["tw", "ig", "fb", "yt"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="flex size-10 items-center justify-center bg-[#2CB6C0] p-2 transition-opacity hover:opacity-80"
                    >
                      {social === "tw" && (
                        <svg viewBox="0 0 24 24" className="size-6" fill="none">
                          <path
                            d="M4 4L11.5 12.5L4 20H6L12.5 13.5L18 20H20L13 11L19.5 4H17.5L11.5 10L6 4H4Z"
                            fill="white"
                          />
                        </svg>
                      )}
                      {social === "ig" && (
                        <svg viewBox="0 0 24 24" className="size-6" fill="none">
                          <rect
                            x="4"
                            y="4"
                            width="16"
                            height="16"
                            rx="4"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="4"
                            stroke="white"
                            strokeWidth="1.5"
                          />
                          <circle cx="17.5" cy="6.5" r="1" fill="white" />
                        </svg>
                      )}
                      {social === "fb" && (
                        <svg viewBox="0 0 24 24" className="size-6" fill="none">
                          <path
                            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                            fill="white"
                          />
                        </svg>
                      )}
                      {social === "yt" && (
                        <svg viewBox="0 0 24 24" className="size-6" fill="none">
                          <path
                            d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80825 21.0708 4.55318 20.6 4.42C19 4 12 4 12 4C12 4 5 4 3.4 4.42C2.9292 4.55318 2.50198 4.80825 2.16135 5.15941C1.82072 5.51057 1.57878 5.94541 1.46 6.42C1.14524 8.12862 0.999252 9.86431 1.024 11.6C0.999252 13.3357 1.14524 15.0714 1.46 16.78C1.57878 17.2546 1.82072 17.6894 2.16135 18.0406C2.50198 18.3918 2.9292 18.6468 3.4 18.78C5 19.2 12 19.2 12 19.2C12 19.2 19 19.2 20.6 18.78C21.0708 18.6468 21.498 18.3918 21.8387 18.0406C22.1793 17.6894 22.4212 17.2546 22.54 16.78C22.8548 15.0714 23.0007 13.3357 22.976 11.6C23.0007 9.86431 22.8548 8.12862 22.54 6.42Z"
                            fill="white"
                          />
                          <polygon
                            points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                            fill="#1A1919"
                          />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Our Company */}
            <div>
              <h4 className="mb-4 font-[Noto_Sans] text-xl font-bold leading-8 text-white">
                Our Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-[Noto_Sans] text-base text-white transition-colors hover:text-[#2CB6C0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="mb-4 font-[Noto_Sans] text-xl font-bold leading-8 text-white">
                Our Services
              </h4>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-[Noto_Sans] text-base text-white transition-colors hover:text-[#2CB6C0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="mb-4 font-[Noto_Sans] text-xl font-bold leading-8 text-white">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-[Noto_Sans] text-base text-white transition-colors hover:text-[#2CB6C0]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="max-w-[344px] space-y-6">
              <div className="flex items-start gap-3">
                <Image
                  src="/images/location.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="mt-1 shrink-0"
                />
                <p className="text-xl leading-6 text-white">
                  941 Stratford Road, Hall Green, Birmingham, England, B28 8BH
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/phone.svg"
                  alt=""
                  width={33}
                  height={33}
                  className="mt-1 shrink-0"
                />
                <p className="text-xl leading-6 text-white">+44 20 3239 8869</p>
              </div>
              <div className="flex items-start gap-3">
                <Image
                  src="/images/email.svg"
                  alt=""
                  width={36}
                  height={24}
                  className="mt-1 shrink-0"
                />
                <p className="text-xl leading-6 text-white">
                  support@pixelperfektsolutions.com
                </p>
              </div>
              {/* Badges under contact info */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Image
                  src="/images/footer-payment2 1.png"
                  alt="Payment"
                  width={220}
                  height={45}
                  className="object-contain"
                />
                <Image
                  src="/images/dmca-badge 1.png"
                  alt="DMCA"
                  width={200}
                  height={42}
                  className="object-contain"
                />
                <Image
                  src="/images/ada-footer (1) 1.png"
                  alt="ADA"
                  width={180}
                  height={129}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Follow Us */}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black py-4">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-[218px]">
          <p className="font-[Noto_Sans] text-xl font-bold leading-8 text-white">
            by Pixel Perfekt Solutions &copy; {currentYear}
          </p>
          <p className="font-[Noto_Sans] text-xl font-bold leading-8 text-white underline">
            <Link href="/terms-and-conditions" className="hover:text-[#2CB6C0]">Terms &amp; Condition</Link> | <Link href="/privacypolicy" className="hover:text-[#2CB6C0]">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
