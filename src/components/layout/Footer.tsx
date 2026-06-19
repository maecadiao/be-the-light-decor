import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

function FacebookIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const serviceLinks = [
  { label: "Landscape Lighting", href: "/services/landscape-lighting" },
  { label: "Holiday Lighting", href: "/services/holiday-lighting" },
  { label: "Event Lighting", href: "/services/event-lighting" },
  { label: "Commercial Lighting", href: "/services/commercial" },
];

const serviceAreas = [
  "Covington, LA",
  "Mandeville, LA",
  "New Orleans, LA",
  "Metairie, LA",
  "Baton Rouge, LA",
  "Slidell, LA",
  "Mississippi Gulf Coast",
];

export default function Footer() {
  return (
    <footer className="bg-surface-dark border-t border-brand-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="bg-white rounded-xl p-2 inline-block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo.png"
                  alt="Be The Light Decor"
                  className="h-14 w-auto block"
                />
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-6 max-w-xs">
              Local. Trusted. Family Owned. Outdoor lighting that transforms homes and businesses across Southeast Louisiana.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BeTheLightDecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-green transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={19} />
              </a>
              <a
                href="https://www.instagram.com/bethelightdecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-brand-green transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={19} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base mb-5">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-brand-gray hover:text-brand-green text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base mb-5">We Serve</h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((city) => (
                <li key={city} className="text-brand-gray text-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-white font-semibold text-base mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:5043896555"
                  className="flex items-start gap-3 text-brand-gray hover:text-brand-green text-sm transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  (504) 389-6555
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@bethelightdecor.com"
                  className="flex items-start gap-3 text-brand-gray hover:text-brand-green text-sm transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  admin@bethelightdecor.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-gray text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>
                  389 Aspen Ln<br />
                  Covington, LA 70433
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-green/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-xs">
            © {new Date().getFullYear()} Be The Light Decor. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-brand-gray hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-gray hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
