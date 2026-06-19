import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of outdoor lighting installations — landscape lighting, holiday displays, events, and commercial projects across Southeast Louisiana.",
};

const categories = ["All", "Landscape", "Holiday", "Events", "Commercial"];

const galleryItems = [
  { label: "Front Yard Landscape", category: "Landscape" },
  { label: "Christmas Roofline", category: "Holiday" },
  { label: "Wedding Reception", category: "Events" },
  { label: "Oak Tree Uplighting", category: "Landscape" },
  { label: "Mardi Gras Display", category: "Holiday" },
  { label: "Commercial Storefront", category: "Commercial" },
  { label: "Pathway Lighting", category: "Landscape" },
  { label: "Backyard Party", category: "Events" },
  { label: "Holiday Yard Display", category: "Holiday" },
  { label: "Architectural Lighting", category: "Landscape" },
  { label: "Corporate Event", category: "Commercial" },
  { label: "Tree Wrap Lighting", category: "Landscape" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-[#0b1409] to-[#0a1f08]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-green text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Our Work
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            The Gallery
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Every photo here is a real property we&apos;ve transformed. Drop in your professional
            photos to see this gallery come alive.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-gray-100 sticky top-[calc(2.25rem+5rem)] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-brand-green text-white"
                    : "text-gray-600 hover:text-brand-green border border-gray-200 hover:border-brand-green/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`bg-surface-light border border-gray-100 rounded-xl overflow-hidden relative group cursor-pointer ${
                  i % 7 === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center">
                    <span className="text-brand-green/40 text-lg">📸</span>
                  </div>
                  <span className="text-gray-400 text-xs text-center px-2">{item.label}</span>
                </div>
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                  <span className="ml-2 text-brand-green-bright text-xs">{item.category}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-8">
            Add images to <code className="text-brand-green/60">/public/images/gallery/</code> and update this grid with{" "}
            <code className="text-brand-green/60">next/image</code>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-green">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-white/80 mb-8">
            Your home could be in our next gallery update.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-brand-green font-heading font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-full transition-all shadow-lg"
          >
            Get a Free Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
