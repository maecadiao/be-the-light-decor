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
        background: "#22c55e",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
      }}
    >
      <Phone size={22} className="text-white" strokeWidth={2.2} />
    </a>
  );
}
