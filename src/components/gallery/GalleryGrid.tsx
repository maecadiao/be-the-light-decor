"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Landscape", "Holiday", "Events", "Commercial"];

const galleryItems = [
  { label: "Landscape Lighting", category: "Landscape", img: "/images/service-landscape.jpg" },
  { label: "Christmas Lighting", category: "Holiday", img: "/images/service-holiday.jpg" },
  { label: "Holiday Display", category: "Holiday", img: "/images/hero-bg.jpg" },
  { label: "Permanent LED Lighting", category: "Landscape", img: "/images/service-permanent.jpg" },
  { label: "Event Lighting", category: "Events", img: "/images/service-event.jpg" },
  { label: "Commercial Lighting", category: "Commercial", img: "/images/service-commercial.jpg" },
  { label: "Gulf Coast Installation", category: "Landscape", img: "/images/service-area-hero.jpg" },
  { label: "Residential Lighting", category: "Landscape", img: "/images/about-preview.jpg" },
  { label: "Pathway Lighting", category: "Landscape", img: "/images/service-landscape.jpg" },
  { label: "Holiday Roofline", category: "Holiday", img: "/images/service-holiday.jpg" },
  { label: "Corporate Event", category: "Commercial", img: "/images/service-commercial.jpg" },
  { label: "Outdoor Uplighting", category: "Landscape", img: "/images/service-area-hero.jpg" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <>
      {/* Filter bar */}
      <section
        className="sticky top-[calc(2.25rem+5rem)] z-40 shadow-sm"
        style={{
          background: "linear-gradient(160deg, #fef9ee 0%, #fdf0c0 100%)",
          borderBottom: "1px solid rgba(238,186,11,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active === cat
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
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1f0a 0%, #162b10 50%, #0f1a0c 100%)" }}
      >
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #eeba0b 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filtered.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                className={`rounded-xl overflow-hidden relative group cursor-pointer border border-white/10 ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={`${item.label} — Be The Light Decor`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                  <span className="ml-2 text-brand-gold text-xs">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
