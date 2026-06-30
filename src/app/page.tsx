import Link from "next/link";
import { Phone, ArrowRight, Star, CheckCircle2, MapPin } from "lucide-react";

const services = [
  {
    title: "Landscape Lighting",
    description: "Permanent low-voltage LED systems that bring your property to life after dark.",
    href: "/services/landscape-lighting",
    image: "/images/service-landscape.jpg",
  },
  {
    title: "Permanent Lighting",
    description: "Year-round architectural lighting installed once — programmable for any season or occasion.",
    href: "/services/permanent-lighting",
    image: "/images/service-permanent.jpg",
  },
  {
    title: "Holiday Lighting",
    description: "Full-service holiday displays — we hang it, you enjoy it, we take it down.",
    href: "/services/holiday-lighting",
    image: "/images/service-holiday.jpg",
  },
  {
    title: "Event Lighting",
    description: "Transform any outdoor space into an unforgettable venue for weddings and events.",
    href: "/services/event-lighting",
    image: "/images/service-event.jpg",
  },
  {
    title: "Commercial Lighting",
    description: "Attract customers and enhance your brand with professional exterior lighting.",
    href: "/services/commercial",
    image: "/images/service-commercial.jpg",
  },
];

const reasons = [
  "Licensed & Insured",
  "Family Owned & Operated",
  "Free On-Site Estimates",
  "Energy-Efficient LED Systems",
  "Lifetime Warranty on Fixtures",
  "Serving SE Louisiana Since 2015",
];

const serviceAreas = [
  "Covington", "Mandeville", "Madisonville",
  "Slidell", "New Orleans", "Metairie",
  "Kenner", "Baton Rouge", "Hammond",
  "Lacombe", "Mississippi Gulf Coast",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-surface-dark/45" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-4 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-6">
              Southeast Louisiana&apos;s #1 Outdoor Lighting Company
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.0] mb-6">
              Light Up Your{" "}
              <span className="text-brand-green-bright">World</span>{" "}
              With Professional Outdoor Lighting
            </h1>

            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              From stunning landscape lighting to dazzling holiday displays — <span className="font-bold italic text-brand-gold">Be The Light Decor</span> transforms homes and businesses across Southeast Louisiana.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-brand-green-bright hover:bg-brand-green-bright/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-brand-green-bright/30 hover:shadow-xl"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5043896555"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all backdrop-blur-sm"
              >
                <Phone size={16} />
                (504) 389-6555
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/10">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Licensed & Insured" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl font-bold text-white">{stat.value}</div>
                  <div className="font-body text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-brand-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Lighting Services
            </h2>
            <p className="font-body text-white/55 text-lg max-w-2xl mx-auto">
              Professional outdoor lighting solutions for every need — residential, commercial, seasonal, and special events.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="group relative rounded-2xl overflow-hidden block w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] aspect-[3/4] bg-surface-dark shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${svc.image}')` }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {svc.title}
                  </h3>
                  <p className="font-body text-white/75 text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-brand-green-bright text-sm font-body font-semibold group-hover:gap-3 transition-all duration-200">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #e8f5e2 0%, #d4edc8 50%, #e2f0dd 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-dark shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/about-preview.jpg')" }}
              />
              <div className="absolute inset-0 bg-brand-green/10" />
              <div className="absolute bottom-5 left-5 bg-white rounded-xl p-4 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                  <Star size={18} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-sm text-[#1a1a1a] leading-none">5-Star Rated</div>
                  <div className="font-body text-xs text-gray-500 mt-0.5">Google & Facebook</div>
                </div>
              </div>
            </div>

            {/* Right: content */}
            <div>
              <p className="text-brand-green font-body font-semibold text-sm uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-5">
                Local. Trusted. Family Owned.
              </h2>
              <p className="font-body text-gray-500 text-lg leading-relaxed mb-8">
                We&apos;re not a national chain — we&apos;re your neighbors. Every project is handled personally by our team, and we stand behind every installation we make.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-brand-green shrink-0" />
                    <span className="font-body text-sm text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-brand-green hover:bg-brand-green/90 text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/gallery"
                  className="border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-heading font-bold text-sm uppercase tracking-wider px-7 py-3.5 rounded-full transition-colors"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview strip */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-brand-gold font-body font-semibold text-sm uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white">
                Recent Projects
              </h2>
            </div>
            <Link
              href="/gallery"
              className="flex items-center gap-2 text-brand-gold font-body font-semibold hover:text-white transition-colors shrink-0"
            >
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg",
              "gallery-5.jpg", "gallery-6.jpg", "gallery-7.jpg", "gallery-8.jpg",
            ].map((img, i) => (
              <div
                key={img}
                className={`rounded-xl overflow-hidden aspect-square border border-white/10 ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url('/images/gallery/${img}')` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 40%, #1a2e0e 70%, #0f1a0c 100%)" }}>
        {/* Decorative gold glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-8 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-body font-semibold text-sm uppercase tracking-widest mb-3">
              Reviews
            </p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>
            <p className="font-body text-white/50 text-sm">5.0 average · 100+ reviews on Google</p>
          </div>

          {/* Widget in a warm white card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
            <div className="elfsight-app-693ca860-e97d-438b-a949-9ee394b9bd5a" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16" style={{ background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 50%, #fef6e0 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-600 font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Coverage
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-[#1a1a1a] mb-8">
            We Serve Southeast Louisiana
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="font-body font-semibold text-sm px-4 py-2 rounded-full"
                style={{ background: "rgba(238,186,11,0.18)", border: "1px solid rgba(238,186,11,0.45)", color: "#92650a" }}
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/service-area"
              className="text-brand-green font-body font-semibold hover:underline text-sm inline-flex items-center gap-1.5"
            >
              View Full Service Area <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-32 bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 md:w-[500px] md:h-[500px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-5 py-1.5 rounded-full text-xs font-body font-semibold uppercase tracking-widest mb-8">
            Free Estimates · No Obligation
          </div>
          <h2 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready To Light Up
            <br />
            <span className="italic text-brand-gold">Your Property?</span>
          </h2>
          <p className="font-body text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free, no-obligation on-site estimate. We serve homeowners and businesses across Southeast Louisiana and the Mississippi Gulf Coast.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-brand-gold/90 text-[#1a1a1a] font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all shadow-xl"
              style={{ boxShadow: "0 8px 32px rgba(238,186,11,0.45)" }}
            >
              Get a Free Quote!
            </Link>
            <a
              href="tel:5043896555"
              className="flex items-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-heading font-bold text-sm uppercase tracking-wider px-9 py-4 rounded-full transition-all"
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
