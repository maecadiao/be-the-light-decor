import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";

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
  },
  {
    city: "Mandeville",
    state: "LA",
    desc: "From lakefront properties to suburban homes, we've installed beautiful lighting throughout Mandeville.",
  },
  {
    city: "New Orleans",
    state: "LA",
    desc: "The city that knows how to celebrate. We bring holiday and landscape lighting to homes and businesses across NOLA.",
  },
  {
    city: "Metairie",
    state: "LA",
    desc: "One of our most active service areas — we've completed dozens of residential and commercial projects in Metairie.",
  },
  {
    city: "Baton Rouge",
    state: "LA",
    desc: "Serving the Capital City with the same attention to detail we bring to every project.",
  },
  {
    city: "Slidell",
    state: "LA",
    desc: "Across the lake and into the Northshore — Slidell is fully within our service range.",
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Where We Work
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Southeast Louisiana
            <br />
            <span className="italic text-brand-gold">Is Our Home</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Based in Covington, we serve communities across Southeast Louisiana and the Mississippi
            Gulf Coast. If you&apos;re in our area, we can light up your home or business.
          </p>
        </div>
      </section>

      {/* Primary cities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-3">
              Primary Service Areas
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              These are the cities where we work most frequently. Same-week availability is often
              possible in these areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {primaryAreas.map((area) => (
              <div
                key={area.city}
                className="bg-white border border-gray-100 border-l-4 border-l-brand-green-bright rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-brand-green-bright" />
                  <h3 className="font-heading text-lg font-semibold text-[#1a1a1a]">
                    {area.city}, {area.state}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + additional areas */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Live Map — OpenStreetMap, no API key needed */}
            <div className="rounded-2xl overflow-hidden shadow-2xl sticky top-28 border-2 border-white/15" style={{ height: "420px" }}>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-92.0%2C28.8%2C-88.0%2C31.8&layer=mapnik&marker=30.4735%2C-90.1013"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Be The Light Decor Service Area — Southeast Louisiana"
              />
            </div>

            <div>
              <p className="text-brand-gold font-body font-semibold text-xs uppercase tracking-widest mb-3">Coverage</p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5">
                We also serve
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Our coverage extends across a wide region. Don&apos;t see your city? Give us a call —
                we may still be able to help.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {additionalAreas.map((city) => (
                  <div key={city} className="flex items-center gap-2 text-white/70 text-sm py-2 border-b border-white/10">
                    <MapPin size={12} className="text-brand-gold shrink-0" />
                    {city}
                  </div>
                ))}
              </div>
              <p className="text-white/35 text-sm mt-6 italic">
                Not sure if we cover your area? Just ask — we often travel further than expected for
                the right project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            In our area? Let&apos;s talk.
          </h2>
          <p className="text-white/80 mb-8">
            Free estimates, no pressure. We&apos;ll come out, see your property, and show you what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-green font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg"
            >
              Request an Estimate <ArrowRight size={16} />
            </Link>
            <a
              href="tel:5043896555"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all"
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
