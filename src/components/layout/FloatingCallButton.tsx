import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:5043896555"
      aria-label="Call Be The Light Decor"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 shadow-2xl rounded-full transition-all duration-300 hover:scale-105 active:scale-95 group"
      style={{
        background: "#eeba0b",
        boxShadow: "0 8px 32px rgba(238,186,11,0.50)",
        padding: "14px 22px 14px 18px",
      }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ background: "#eeba0b" }} />

      <Phone size={20} className="text-[#1a1a1a] shrink-0 relative z-10" strokeWidth={2.5} />
      <span className="hidden sm:block font-heading font-bold text-sm text-[#1a1a1a] uppercase tracking-wide relative z-10">
        (504) 389-6555
      </span>
    </a>
  );
}
