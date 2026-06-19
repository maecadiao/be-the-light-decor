"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const services = [
  "Landscape Lighting",
  "Holiday Lighting",
  "Event Lighting",
  "Commercial Lighting",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    services: [] as string[],
    message: "",
    smsConsent: false,
  });

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to your form handler / GoHighLevel / email here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-green/15 flex items-center justify-center mb-5">
          <CheckCircle2 size={32} className="text-brand-green" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-[#1a1a1a] mb-3">
          We&apos;ll be in touch soon!
        </h3>
        <p className="text-gray-500 max-w-sm">
          Thanks for reaching out. We typically respond within one business day. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1.5">Name *</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full bg-white border border-gray-200 focus:border-brand-green text-[#1a1a1a] placeholder-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1.5">Phone *</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="(504) 000-0000"
            className="w-full bg-white border border-gray-200 focus:border-brand-green text-[#1a1a1a] placeholder-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Email + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1.5">Email *</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@email.com"
            className="w-full bg-white border border-gray-200 focus:border-brand-green text-[#1a1a1a] placeholder-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1.5">City</label>
          <input
            type="text"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Covington, Mandeville..."
            className="w-full bg-white border border-gray-200 focus:border-brand-green text-[#1a1a1a] placeholder-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Services */}
      <div>
        <label className="block text-sm text-gray-600 font-medium mb-3">Services you&apos;re interested in</label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => toggleService(service)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                form.services.includes(service)
                  ? "bg-brand-green border-brand-green text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-brand-green hover:text-brand-green"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-gray-600 font-medium mb-1.5">Tell us about your project</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="What are you hoping to do? Any details about your property?"
          className="w-full bg-white border border-gray-200 focus:border-brand-green text-[#1a1a1a] placeholder-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
      </div>

      {/* SMS consent */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.smsConsent}
          onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
          className="mt-0.5 accent-brand-green"
        />
        <span className="text-xs text-gray-400 leading-relaxed">
          I agree to receive text messages from Be The Light Decor. Message and data rates may
          apply. Reply STOP to unsubscribe.
        </span>
      </label>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/85 text-white font-heading font-bold text-sm uppercase tracking-wider py-4 rounded-full transition-all hover:shadow-lg"
      >
        Send My Request <Send size={16} />
      </button>
    </form>
  );
}
