"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const services = [
  { label: "Landscape Lighting", href: "/services/landscape-lighting" },
  { label: "Permanent Lighting", href: "/services/permanent-lighting" },
  { label: "Holiday Lighting", href: "/services/holiday-lighting" },
  { label: "Event Lighting", href: "/services/event-lighting" },
  { label: "Commercial Lighting", href: "/services/commercial" },
];

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about" },
      { label: "Pink Lights for Hope", href: "/about#pink-lights" },
    ],
  },
  {
    label: "Services",
    href: "/services/landscape-lighting",
    dropdown: services,
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 lg:h-28">

          {/* Logo */}
          <Link href="/" className="shrink-0 ml-2 lg:ml-10">
            <div className={`transition-all duration-300 rounded-lg ${scrolled ? "bg-[#0d0d0d] px-2 py-0" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-gold.png"
                alt="Be The Light Decor"
                className="h-14 lg:h-16 w-auto block transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-heading font-bold uppercase tracking-wide transition-colors duration-300 ${
                      scrolled
                        ? "text-[#1a1a1a] hover:text-brand-green"
                        : "text-white hover:text-brand-green-bright"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg transition-all duration-200 ${
                      openDropdown === link.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-1"
                    }`}
                  >
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2.5 text-sm text-gray-600 hover:text-brand-green hover:bg-surface-light rounded-lg transition-colors font-body"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-heading font-bold uppercase tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? "text-[#1a1a1a] hover:text-brand-green"
                      : "text-white hover:text-brand-green-bright"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block w-44 flex justify-end">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-red/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full transition-colors shadow-lg whitespace-nowrap"
            >
              Get a Free Quote!
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-1.5 transition-colors duration-300 ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-5 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-heading font-bold uppercase tracking-wide border-b border-gray-100 text-[#1a1a1a] hover:text-brand-green"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 pt-1 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-gray-500 hover:text-brand-green font-body"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:5043896555"
                className="flex items-center justify-center gap-2 text-brand-green font-heading font-bold py-3 border-2 border-brand-green rounded-full text-sm uppercase tracking-wide"
              >
                <Phone size={16} /> (504) 389-6555
              </a>
              <Link
                href="/contact"
                className="bg-[#1a1a1a] text-white font-heading font-bold py-3 rounded-full text-center text-sm uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Quote!
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
