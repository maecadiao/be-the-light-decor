import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function ServicePageExtras({ bgImage }: { bgImage: string }) {
  return (
    <>
      {/* Reviews */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 40%, #1a2e0e 70%, #0f1a0c 100%)" }}>
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
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-2">
            <div className="elfsight-app-693ca860-e97d-438b-a949-9ee394b9bd5a" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* Service Areas — photo background with parallax, state groups + map */}
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/72" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-10 uppercase tracking-wide">
            Our Service Areas
          </h2>

          {/* State groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 border border-white/15 rounded-2xl px-8 py-7">
              <p className="font-heading text-brand-gold font-bold text-lg mb-3 uppercase tracking-wider">
                Louisiana
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Baton Rouge, Covington, Hammond, Kenner, Lacombe, Madisonville, Mandeville, Metairie, New Orleans, Slidell, and more
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl px-8 py-7">
              <p className="font-heading text-brand-gold font-bold text-lg mb-3 uppercase tracking-wider">
                Mississippi
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Bay St. Louis, Biloxi, Gulfport, Hattiesburg, Picayune, Pearl River, Waveland, and more
              </p>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 mx-auto" style={{ height: "400px" }}>
            <iframe
              src="https://maps.google.com/maps?q=389+Aspen+Ln+Covington+LA+70433&t=&z=9&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Be The Light Decor Service Area"
            />
          </div>

          <div className="mt-8">
            <Link
              href="/service-area"
              className="text-brand-gold hover:text-white font-body font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
            >
              View Full Service Area <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
