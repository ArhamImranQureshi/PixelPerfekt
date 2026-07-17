"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#191818]">
      <nav className="mx-auto flex h-[84px] max-w-[1920px] items-center justify-between px-4 sm:px-6 lg:px-[229px]">
        <Link href="/">
          <img
            src="/images/dark backgound 1.png"
            alt="Pixel Perfekt Solutions"
            className="h-[38px] w-[170px] object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setDropdownOpen(true)}
              onMouseLeave={() => link.children && setDropdownOpen(false)}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#2CB6C0] ${
                    pathname === link.href ? "text-[#2CB6C0]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#2CB6C0] ${
                    pathname.startsWith("/services") ? "text-[#2CB6C0]" : "text-white"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" />}
                </button>
              )}

              {link.children && (
                <div
                  className={`absolute left-0 top-full mt-2 w-56 rounded-md bg-[#191818] border border-[#5D5C5C] shadow-lg transition-all duration-200 ${
                    dropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <ul className="py-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-[#2CB6C0] hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/contact-us"
          className="hidden rounded-[30px] border-[3px] border-[#2CB6C0] bg-black px-8 py-3 font-[Poppins] text-sm font-medium uppercase text-white transition-colors hover:bg-[#2CB6C0] lg:inline-block"
        >
          Get in touch
        </Link>

        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-md lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#5D5C5C] bg-[#191818] px-4 pb-6 pt-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[#2CB6C0] ${
                      pathname === link.href ? "text-[#2CB6C0]" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div>
                    <div className="text-sm font-medium text-white mb-2">{link.label}</div>
                    {link.children && (
                      <ul className="flex flex-col gap-2 pl-4 border-l border-[#5D5C5C]">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`text-sm transition-colors hover:text-[#2CB6C0] ${
                                pathname === child.href ? "text-[#2CB6C0]" : "text-gray-300"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
