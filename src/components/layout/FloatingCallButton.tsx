import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:5043896555"
      aria-label="Call Be The Light Decor"
      className="fixed z-50 flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        bottom: "88px",
        right: "20px",
        background: "#eeba0b",
        boxShadow: "0 4px 24px rgba(238,186,11,0.60)",
      }}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: "#eeba0b" }} />
      <Phone size={22} className="text-[#1a1a1a] relative z-10" strokeWidth={2.5} />
    </a>
  );
}
