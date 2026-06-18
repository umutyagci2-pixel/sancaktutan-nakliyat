"use client";

import { Icon } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

export default function FloatingActions() {
  const waHref = whatsappLink(
    "Merhaba, nakliyat hizmeti için bilgi ve fiyat teklifi almak istiyorum."
  );

  return (
    <>
      {/* Masaüstü: sağ-alt WhatsApp */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yazın"
        className="animate-ring fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 md:flex"
      >
        <Icon name="whatsapp" className="h-7 w-7" />
      </a>

      {/* Mobil: alt sabit çubuk */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-ink-200 bg-ink-200 md:hidden">
        <a
          href={`tel:${site.phones[0].tel}`}
          className="flex items-center justify-center gap-2 bg-ink-900 py-3.5 text-sm font-bold text-white"
        >
          <Icon name="phone" className="h-5 w-5 text-brand-400" />
          Hemen Ara
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
