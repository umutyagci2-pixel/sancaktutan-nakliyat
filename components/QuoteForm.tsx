"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { services, whatsappLink } from "@/lib/site";

const serviceOptions = services.map((s) => s.title);

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: serviceOptions[0],
    from: "",
    to: "",
    date: "",
    message: "",
  });

  function update(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `*Yeni Teklif Talebi — Sancaktutan Taşımacılık*\n\n` +
      `👤 *Ad Soyad:* ${form.name || "-"}\n` +
      `📞 *Telefon:* ${form.phone || "-"}\n` +
      `📦 *Hizmet:* ${form.service}\n` +
      `📍 *Nereden:* ${form.from || "-"}\n` +
      `🎯 *Nereye:* ${form.to || "-"}\n` +
      `🗓️ *Tarih:* ${form.date || "-"}\n` +
      `📝 *Not:* ${form.message || "-"}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const inputCls =
    "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition-all focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";
  const labelCls = "mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8"
    >
      <h3 className="font-display text-2xl font-extrabold text-ink-900">
        Ücretsiz Teklif Alın
      </h3>
      <p className="mt-1.5 text-sm text-ink-500">
        Formu doldurun, bilgileriniz WhatsApp&apos;a hazır mesaj olarak gelsin —
        en kısa sürede dönüş yapalım.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Ad Soyad
          </label>
          <input
            id="name"
            className={inputCls}
            placeholder="Adınız Soyadınız"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            className={inputCls}
            placeholder="05__ ___ __ __"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="service">
            Hizmet Türü
          </label>
          <select
            id="service"
            className={`${inputCls} appearance-none`}
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            {serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="from">
            Nereden
          </label>
          <input
            id="from"
            className={inputCls}
            placeholder="Örn. Hopa"
            value={form.from}
            onChange={(e) => update("from", e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="to">
            Nereye
          </label>
          <input
            id="to"
            className={inputCls}
            placeholder="Örn. İstanbul"
            value={form.to}
            onChange={(e) => update("to", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="date">
            Tahmini Taşıma Tarihi
          </label>
          <input
            id="date"
            type="date"
            className={inputCls}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">
            Eklemek İstedikleriniz
          </label>
          <textarea
            id="message"
            rows={3}
            className={`${inputCls} resize-none`}
            placeholder="Eşya miktarı, kat bilgisi, asansör ihtiyacı vb."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-base font-bold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.9)] transition-all hover:brightness-105"
      >
        <Icon name="whatsapp" className="h-5 w-5" />
        WhatsApp ile Teklif Gönder
      </button>
      <p className="mt-3 text-center text-xs text-ink-400">
        Gönder&apos;e bastığınızda bilgileriniz WhatsApp üzerinden bize iletilir.
      </p>
    </form>
  );
}
