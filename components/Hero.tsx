import Image from "next/image";
import { Icon } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

const badges = ["7/24 Hizmet", "Sigortalı Taşıma", "Ücretsiz Keşif", "Mobil Asansör"];

export default function Hero() {
  return (
    <section id="anasayfa" className="relative isolate overflow-hidden">
      {/* Arka plan görseli */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ekip-tasima.jpg"
          alt="Sancaktutan Taşımacılık ekibi evden eve nakliyat yaparken"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/80 to-ink-900/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/40" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-500" />
            Hopa • Artvin • Rize • Tüm Türkiye
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Hopa ve Tüm Karadeniz&apos;de{" "}
            <span className="text-brand-500">Güvenli Nakliyat</span> &amp; Mobil
            Asansör
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-100/90 sm:text-lg">
            Sancaktutan Taşımacılık ile evden eve nakliyat, şehirlerarası taşıma ve
            kiralık asansör hizmeti artık çok kolay. Eşyalarınızı{" "}
            <strong className="font-semibold text-white">
              sigortalı, hasarsız ve zamanında
            </strong>{" "}
            taşıyoruz — 7/24 yanınızdayız.
          </p>

          {/* Rozetler */}
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <li
                key={b}
                className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-semibold text-white ring-1 ring-white/15"
              >
                <Icon name="check" className="h-4 w-4 text-brand-400" />
                {b}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(
                "Merhaba, nakliyat hizmeti için ücretsiz fiyat teklifi almak istiyorum."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-600 px-7 py-4 text-base font-bold text-white shadow-[0_14px_34px_-12px_rgba(220,31,38,0.9)] transition-all hover:bg-brand-700 hover:shadow-[0_18px_40px_-12px_rgba(220,31,38,1)]"
            >
              Ücretsiz Teklif Al
              <Icon
                name="arrow"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href={`tel:${site.phones[0].tel}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <Icon name="phone" className="h-5 w-5 text-brand-400" />
              Hemen Ara: {site.phones[0].label}
            </a>
          </div>
        </div>
      </div>

      {/* Alt güven şeridi */}
      <div className="border-t border-white/10 bg-ink-950/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6">
          {[
            { k: "7/24", v: "Kesintisiz Hizmet" },
            { k: "100%", v: "Sigortalı Taşıma" },
            { k: "20+", v: "İlçeye Hizmet" },
            { k: "1.000+", v: "Mutlu Taşıma" },
          ].map((s) => (
            <div key={s.v} className="px-3 py-5 text-center sm:py-6">
              <div className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs font-medium text-ink-200 sm:text-sm">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
