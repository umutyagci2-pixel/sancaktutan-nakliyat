import Image from "next/image";
import { Icon } from "./Icons";
import { site, services, coverage } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <Image
                  src="/logo.png"
                  alt={`${site.name} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">
                  Sancaktutan
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-500">
                  Taşımacılık
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Hopa merkezli; Artvin, Rize ve tüm Türkiye&apos;de evden eve nakliyat,
              mobil asansör ve şehirlerarası taşımacılık. 7/24 sigortalı hizmet.
            </p>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Hizmetler
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <a
                    href="#hizmetler"
                    className="transition-colors hover:text-brand-400"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bölgeler */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Hizmet Bölgeleri
            </h4>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm">
              {[...coverage.artvin.slice(0, 6), ...coverage.rize.slice(0, 4)].map(
                (d) => (
                  <li key={d} className="text-ink-400">
                    {d}
                  </li>
                )
              )}
              <li className="font-semibold text-brand-400">+ Tüm Türkiye</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              İletişim
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-2.5 transition-colors hover:text-brand-400"
                  >
                    <Icon name="phone" className="h-4 w-4 text-brand-500" />
                    {p.label}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                {site.address.line}
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="clock" className="h-4 w-4 text-brand-500" />
                {site.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-ink-500 sm:flex-row sm:text-left">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p>
            Hopa · Artvin · Rize · Türkiye Geneli Nakliyat &amp; Mobil Asansör
          </p>
        </div>
      </div>
    </footer>
  );
}
