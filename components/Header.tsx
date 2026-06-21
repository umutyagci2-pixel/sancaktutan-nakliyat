"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#neden-biz", label: "Neden Biz" },
  { href: "#bolgeler", label: "Bölgeler" },
  { href: "#sss", label: "S.S.S." },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-white/90 shadow-[0_4px_30px_-12px_rgba(31,40,50,0.25)] backdrop-blur-md"
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#anasayfa" className="flex items-center gap-2" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={46}
            height={46}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-ink-900">
              Sancaktutan
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
              Taşımacılık
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-700 transition-colors hover:text-brand-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phones[0].tel}`}
            className="flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2.5 text-sm font-bold text-ink-800 transition-all hover:border-ink-300 hover:bg-ink-50"
          >
            <Icon name="phone" className="h-4 w-4 text-brand-600" />
            {site.phones[0].label}
          </a>
          <a
            href={whatsappLink(
              "Merhaba, nakliyat hizmeti için bilgi ve fiyat teklifi almak istiyorum."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(220,31,38,0.7)] transition-all hover:bg-brand-700 hover:shadow-[0_10px_24px_-8px_rgba(220,31,38,0.8)]"
          >
            Teklif Al
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 text-ink-800 transition-colors lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobil menü */}
      <div
        className={`overflow-hidden bg-white/97 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[420px] opacity-100 shadow-soft" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-5 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-semibold text-ink-800 hover:bg-ink-50"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={`tel:${site.phones[0].tel}`}
              className="flex items-center justify-center gap-2 rounded-full border border-ink-200 px-4 py-3 text-sm font-bold text-ink-800"
            >
              <Icon name="phone" className="h-4 w-4 text-brand-600" />
              {site.phones[0].label}
            </a>
            <a
              href={whatsappLink(
                "Merhaba, nakliyat hizmeti için bilgi ve fiyat teklifi almak istiyorum."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp ile Teklif Al
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
