import { Icon } from "./Icons";
import QuoteForm from "./QuoteForm";
import { site, whatsappLink } from "@/lib/site";

export default function Contact() {
  return (
    <section id="iletisim" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Sol: iletişim bilgileri */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-400">
              <span className="h-px w-6 bg-brand-500" />
              İletişim
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Taşınmaya Hazır mısınız?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-300">
              7/24 buradayız. Telefonla arayın ya da WhatsApp&apos;tan yazın;
              ücretsiz keşif ve net fiyat teklifi için hemen iletişime geçin.
            </p>

            <div className="mt-8 space-y-3">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
                    <Icon name="phone" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-ink-400">
                      Telefon
                    </span>
                    <span className="block font-display text-lg font-bold text-white">
                      {p.label}
                    </span>
                  </span>
                </a>
              ))}

              <a
                href={whatsappLink(
                  "Merhaba, nakliyat hizmeti için bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#25D366]/50 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/20 text-[#25D366]">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink-400">
                    WhatsApp
                  </span>
                  <span className="block font-display text-lg font-bold text-white">
                    {site.whatsapp.display}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Icon name="pin" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-ink-400">
                    Adres & Çalışma Saatleri
                  </span>
                  <span className="block font-display text-base font-bold text-white">
                    {site.address.line}
                  </span>
                  <span className="block text-sm text-ink-300">{site.hours}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Sağ: teklif formu */}
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
