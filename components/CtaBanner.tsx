import { Icon } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-black/10" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                Hemen ücretsiz fiyat teklifi alın
              </h2>
              <p className="mt-2 max-w-xl text-sm text-white/85 sm:text-base">
                7/24 hizmetinizdeyiz. Bir telefon kadar yakınınızdayız — keşif
                ücretsiz, fiyatlar şeffaf.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phones[0].tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand-700 transition-transform hover:scale-[1.03]"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phones[0].label}
              </a>
              <a
                href={whatsappLink(
                  "Merhaba, ücretsiz fiyat teklifi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950/30 px-6 py-3.5 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-ink-950/50"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
