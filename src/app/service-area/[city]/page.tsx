import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, ChevronDown } from "lucide-react";
import { getLocation, getAllSlugs } from "@/lib/locations";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) return {};
  return {
    title: { absolute: location.metaTitle },
    description: location.metaDescription,
    alternates: { canonical: `/service-area/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://bethelightdecor.com/service-area/${location.slug}`,
    },
  };
}

const services = [
  { name: "Landscape Lighting", href: "/services/landscape-lighting", desc: "Permanent low-voltage LED systems designed to highlight your property's best features." },
  { name: "Permanent Lighting", href: "/services/permanent-lighting", desc: "App-controlled roofline lighting installed once — any color, any occasion, no ladder required." },
  { name: "Holiday Lighting", href: "/services/holiday-lighting", desc: "Full-service holiday displays. We hang it, you enjoy it, we take it down." },
  { name: "Event Lighting", href: "/services/event-lighting", desc: "Transform any outdoor space for weddings, parties, and special events." },
  { name: "Commercial Lighting", href: "/services/commercial", desc: "Exterior lighting for businesses that attract customers and reflect your brand." },
];

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const location = getLocation(city);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://bethelightdecor.com/service-area/${location.slug}`,
    "name": "Be The Light Decor",
    "description": location.metaDescription,
    "url": `https://bethelightdecor.com/service-area/${location.slug}`,
    "telephone": "+15043896555",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.stateAbbr,
      "addressCountry": "US",
    },
    "areaServed": {
      "@type": "City",
      "name": location.name,
      "containedInPlace": {
        "@type": "State",
        "name": location.state,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <Image
          src="/images/service-area-hero.jpg"
          alt={`Outdoor lighting installation in ${location.name}, ${location.stateAbbr} — Be The Light Decor`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <MapPin size={14} />
            <Link href="/service-area" className="hover:text-white transition-colors">
              Service Areas
            </Link>
            <span className="text-white/40">/</span>
            <span>{location.name}, {location.stateAbbr}</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {location.heroHeading}
          </h1>
          <p className="text-brand-gold font-heading text-xl italic mb-8">
            {location.heroSubheading}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full transition-all"
              style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 6px 24px rgba(238,186,11,0.40)" }}
            >
              Get a Free Estimate <ArrowRight size={15} />
            </Link>
            <a
              href="tel:5043896555"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-all"
            >
              <Phone size={15} />
              (504) 389-6555
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-amber-600 font-body font-semibold text-sm uppercase tracking-widest mb-3">
                {location.name}, {location.stateAbbr}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                Outdoor Lighting for {location.name} Homes & Businesses
              </h2>
              {location.introParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
            <div>
              <div className="rounded-2xl p-7 border border-amber-200 bg-white/60">
                <h3 className="font-heading text-lg font-bold text-[#1a1a1a] mb-4">
                  Neighborhoods & Areas We Serve
                </h3>
                <ul className="space-y-2">
                  {location.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-amber-200">
                  <p className="text-xs text-gray-500 mb-1">Not on the list?</p>
                  <p className="text-sm text-gray-700">
                    Call us at{" "}
                    <a href="tel:5043896555" className="font-semibold text-brand-green hover:underline">
                      (504) 389-6555
                    </a>{" "}
                    — we likely serve your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
              Our Services in {location.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group rounded-2xl border border-white/10 p-6 hover:border-brand-gold/40 hover:bg-white/5 transition-all duration-200"
              >
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">
                  {svc.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <div className="flex items-center gap-1.5 text-brand-green-bright text-xs font-semibold group-hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a]">
              Outdoor Lighting in {location.name} — FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {location.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-amber-200 bg-white/70 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-heading font-bold text-[#1a1a1a] hover:text-brand-green transition-colors">
                  {item.q}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-amber-500 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-amber-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Obligation
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Ready to Light Up
            <br />
            <span className="italic text-brand-gold">{location.name}?</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            We&apos;ll come to your property, walk it with you, and show you exactly what&apos;s possible — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all"
              style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}
            >
              Request a Free Estimate <ArrowRight size={16} />
            </Link>
            <a
              href="tel:5043896555"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
            >
              <Phone size={16} />
              (504) 389-6555
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
