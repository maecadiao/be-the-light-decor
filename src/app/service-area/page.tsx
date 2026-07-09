import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { locations } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "Be The Light Decor serves Southeast Louisiana and the Mississippi Gulf Coast. See if we cover your city — Covington, Mandeville, New Orleans, Baton Rouge, and more.",
};

const primaryAreas = [
  {
    city: "Covington",
    state: "LA",
    desc: "Our home base. We know Covington's neighborhoods, streets, and character — and we love lighting them up.",
    bg: "linear-gradient(135deg, #fff8e1 0%, #fde68a 100%)",
    border: "#f59e0b",
    icon: "text-amber-600",
  },
  {
    city: "Mandeville",
    state: "LA",
    desc: "From lakefront properties to suburban homes, we've installed beautiful lighting throughout Mandeville.",
    bg: "linear-gradient(135deg, #f0fdf4 0%, #86efac 100%)",
    border: "#22c55e",
    icon: "text-green-600",
  },
  {
    city: "New Orleans",
    state: "LA",
    desc: "The city that knows how to celebrate. We bring holiday and landscape lighting to homes and businesses across NOLA.",
    bg: "linear-gradient(135deg, #fffde7 0%, #fcd34d 100%)",
    border: "#eeba0b",
    icon: "text-yellow-600",
  },
  {
    city: "Metairie",
    state: "LA",
    desc: "One of our most active service areas — we've completed dozens of residential and commercial projects in Metairie.",
    bg: "linear-gradient(135deg, #ecfdf5 0%, #6ee7b7 100%)",
    border: "#10b981",
    icon: "text-emerald-600",
  },
  {
    city: "Baton Rouge",
    state: "LA",
    desc: "Serving the Capital City with the same attention to detail we bring to every project.",
    bg: "linear-gradient(135deg, #fefce8 0%, #fde047 100%)",
    border: "#eab308",
    icon: "text-yellow-500",
  },
  {
    city: "Slidell",
    state: "LA",
    desc: "Across the lake and into the Northshore — Slidell is fully within our service range.",
    bg: "linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)",
    border: "#14b8a6",
    icon: "text-teal-600",
  },
];

const additionalAreas = [
  "Kenner, LA",
  "Harahan, LA",
  "River Ridge, LA",
  "Gretna, LA",
  "Madisonville, LA",
  "Abita Springs, LA",
  "Lacombe, LA",
  "Folsom, LA",
  "Franklinton, LA",
  "Mississippi Gulf Coast",
  "Bay St. Louis, MS",
  "Waveland, MS",
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <Image
          src="/images/service-area-hero.jpg"
          alt="Outdoor lighting installation across Southeast Louisiana — Be The Light Decor service area"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Where We Work
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Southeast Louisiana
            <br />
            <span className="italic text-brand-gold">Is Our Home</span>
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            Based in Covington, we serve communities across Southeast Louisiana and the Mississippi
            Gulf Coast. If you&apos;re in our area, we can light up your home or business.
          </p>
        </div>
      </section>

      {/* Primary cities */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 45%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-body font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Primary Service Areas
            </h2>
            <p className="text-amber-900/60 max-w-lg mx-auto">
              These are the cities where we work most frequently. Same-week availability is often
              possible in these areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryAreas.map((area) => {
              const loc = locations.find((l) => l.name === area.city);
              const card = (
                <div
                  className="rounded-2xl p-7 hover:shadow-xl transition-all border"
                  style={{ background: area.bg, borderColor: area.border + "66" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={16} className={area.icon} />
                    <h3 className="font-heading text-lg font-bold text-[#1a1a1a]">
                      {area.city}, {area.state}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{area.desc}</p>
                  {loc && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors">
                      View {area.city} Page <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              );
              return loc ? (
                <Link key={area.city} href={`/service-area/${loc.slug}`}>
                  {card}
                </Link>
              ) : (
                <div key={area.city}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service areas map section */}
      <section className="relative py-24 overflow-hidden">
        <Image src="/images/service-area-hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white uppercase mb-8 tracking-wide">
            Our Service Areas
          </h2>

          <p className="font-bold text-brand-gold text-sm uppercase tracking-widest mb-1">Louisiana:</p>
          <p className="font-bold text-white text-base sm:text-lg mb-6">
            Baton Rouge, Covington, Hammond, Kenner, Mandeville, Metairie, New Orleans, Slidell, etc.
          </p>

          <p className="font-bold text-brand-gold text-sm uppercase tracking-widest mb-1">Mississippi:</p>
          <p className="font-bold text-white text-base sm:text-lg mb-10">
            Biloxi, Gulfport, Picayune, Pearl River, Bay St. Louis, etc.
          </p>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/60" style={{ height: "420px" }}>
            <iframe
              src="https://maps.google.com/maps?q=Be+The+Light+Landscape+Lighting+389+Aspen+Ln+Covington+LA+70433&output=embed&z=10"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Be The Light Decor — Covington, LA"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/images/service-area-hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Pressure
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            In Our Area?
            <br />
            <span className="italic text-brand-gold">Let&apos;s Talk.</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            We&apos;ll come out, see your property, and show you what&apos;s possible — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all" style={{ background: "#eeba0b", color: "#1a1a1a", boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}>
              Request an Estimate <ArrowRight size={16} />
            </Link>
            <a href="tel:5043896555" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all">
              <Phone size={16} />
              (504) 389-6555
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
