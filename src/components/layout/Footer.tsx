"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
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
      {/* ── Newsletter — dramatic dark photo section ── */}
      <div
        className="relative py-20 px-4 bg-cover bg-center bg-scroll md:bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Dark warm overlay */}
        <div className="absolute inset-0 bg-black/78" />

        {/* Gold orbs */}
        <div className="absolute top-0 left-0 w-48 h-48 md:w-[420px] md:h-[420px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-80 md:h-80 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Logo + Badge */}
          <div className="flex flex-col items-center mb-8 gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-gold.png"
              alt="Be The Light Decor"
              className="h-16 w-auto"
            />
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest">
              Stay in the Loop
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <div>
              <h2 className="font-heading font-black text-white uppercase leading-none text-5xl md:text-6xl mb-3">
                Subscribe<br />to our<br /><span className="italic text-brand-gold">Newsletter</span>
              </h2>
              <p className="text-white/70 text-base mb-1 mt-5">
                News, seasonal offers, and lighting inspiration — straight to your inbox.
              </p>
              <p className="italic text-white/45 text-sm mb-1">No spam. Unsubscribe anytime.</p>

              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <MapPin size={13} className="text-brand-gold shrink-0" />
                  389 Aspen Ln, Covington, LA 70433
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone size={13} className="text-brand-gold shrink-0" />
                  (504) 389-6555
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                <Link href="/terms" className="text-brand-gold/80 hover:text-brand-gold underline underline-offset-2 text-sm transition-colors">
                  Terms &amp; Conditions
                </Link>
                <Link href="/privacy-policy" className="text-brand-gold/80 hover:text-brand-gold underline underline-offset-2 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/BeTheLightDecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-brand-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={22} />
                </a>
                <a
                  href="https://www.instagram.com/bethelightdecor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-brand-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={22} />
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="rounded-2xl p-10 text-center border border-brand-gold/30" style={{ background: "rgba(238,186,11,0.10)" }}>
                  <p className="font-heading font-bold text-brand-gold text-2xl mb-2">You&apos;re in!</p>
                  <p className="text-white/60 text-sm">Thanks for subscribing — we&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/35 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 border-0"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/35 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 border-0"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  />
                  <div className="relative">
                    <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email*"
                      required
                      className="w-full pl-9 pr-4 py-3.5 rounded-xl text-white placeholder-white/35 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 border-0"
                      style={{ background: "rgba(255,255,255,0.10)" }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name (optional)"
                    className="w-full px-4 py-3.5 rounded-xl text-white placeholder-white/35 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 border-0"
                    style={{ background: "rgba(255,255,255,0.10)" }}
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-heading font-bold text-[#1a1a1a] text-sm uppercase tracking-wider transition-all hover:opacity-90"
                    style={{ background: "#eeba0b", boxShadow: "0 6px 24px rgba(238,186,11,0.40)" }}
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Service areas — black bar ── */}
      <div className="bg-black py-6 px-4 text-center">
        <p className="text-white text-sm font-bold mb-1">
          Christmas Light Installation Service Areas:
        </p>
        <p className="text-white/80 text-sm mb-1">
          LOUISIANA: Baton Rouge, Covington, Hammond, Kenner, Mandeville, Metairie, New Orleans, Slidell, etc.
        </p>
        <p className="text-white/80 text-sm">
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
