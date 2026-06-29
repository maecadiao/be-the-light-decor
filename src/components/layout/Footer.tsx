"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail } from "lucide-react";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer>
      {/* ── Newsletter — gold section ── */}
      <div style={{ background: "#eeba0b" }} className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — copy + company info */}
          <div>
            <h2 className="font-heading font-black text-white uppercase leading-none text-5xl md:text-[3.25rem] mb-5">
              Subscribe<br />to our<br />Newsletter
            </h2>
            <p className="font-bold text-[#1a1a1a] text-base mb-2">
              Sign up to receive news, product updates and promotions!
            </p>
            <p className="italic text-[#1a1a1a]/75 text-sm mb-1">
              No Spam. Just high-quality communication all about Be The Light Decor and our offerings!
            </p>
            <p className="text-[#1a1a1a]/60 text-xs mb-8">
              You can change your preferences or opt-out at anytime.
            </p>

            <div className="text-[#1a1a1a] font-bold text-sm mb-0.5">BE THE LIGHT DECOR</div>
            <div className="text-[#1a1a1a]/75 text-sm mb-0.5">389 Aspen Ln, Covington, LA 70433</div>
            <div className="text-[#1a1a1a]/75 text-sm mb-6">504-389-6555</div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
              <Link
                href="/terms"
                className="font-bold text-[#1a1a1a] underline underline-offset-2 text-sm hover:opacity-70 transition-opacity"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="font-bold text-[#1a1a1a] underline underline-offset-2 text-sm hover:opacity-70 transition-opacity"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BeTheLightDecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="https://www.instagram.com/bethelightdecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Right — signup form */}
          <div>
            {submitted ? (
              <div className="bg-white/20 rounded-xl p-10 text-center">
                <p className="font-heading font-bold text-white text-xl">You&apos;re subscribed!</p>
                <p className="text-[#1a1a1a]/75 text-sm mt-2">Thanks for signing up — we&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-md text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 border-0"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-md text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 border-0"
                />
                <div className="relative">
                  <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="w-full pl-9 pr-4 py-3 rounded-md text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 border-0"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-md text-[#1a1a1a] placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 border-0"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-md font-semibold text-white text-sm transition-opacity hover:opacity-90"
                  style={{ background: "#3a7d44" }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Service areas — black bar ── */}
      <div className="bg-black py-6 px-4 text-center">
        <p className="text-white text-sm font-bold mb-1">
          Christmas Light Installation Service Areas:
        </p>
        <p className="text-white/85 text-sm mb-1">
          LOUISIANA: Baton Rouge, Covington, Hammond, Kenner, Mandeville, Metairie, New Orleans, Slidell, etc.
        </p>
        <p className="text-white/85 text-sm">
          MISSISSIPPI:{" "}
          <a href="/service-area" className="text-brand-gold hover:underline">Biloxi</a>,{" "}
          <a href="/service-area" className="text-brand-gold hover:underline">Gulfport</a>,
          {" "}Picayune, Pearl River,{" "}
          <a href="/service-area" className="text-brand-gold hover:underline">Bay St. Louis</a>,
          {" "}etc.
        </p>
      </div>

      {/* ── Gold bottom strip ── */}
      <div style={{ background: "#eeba0b" }} className="h-3" />
    </footer>
  );
}
