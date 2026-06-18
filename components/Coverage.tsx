import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { coverage, whatsappLink } from "@/lib/site";

// Yerel SEO için temsili "ilçe + hizmet" aramaları
const popular = [
  "Hopa evden eve nakliyat",
  "Arhavi mobil asansör",
  "Borçka nakliyat",
  "Kemalpaşa nakliyeci",
  "Artvin asansörlü nakliyat",
  "Hopa şehirlerarası nakliyat",
  "Rize Ardeşen evden eve nakliyat",
  "Fındıklı kiralık asansör",
  "Pazar şehir içi nakliyat",
  "Çayeli evden eve nakliyat",
  "Yusufeli nakliyat",
  "Şavşat eşya taşıma",
];

function DistrictColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_12px_-8px_rgba(31,40,50,0.18)]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Icon name="pin" className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold text-ink-900">{title}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((d) => (
          <li key={d}>
            <a
              href={whatsappLink(
                `Merhaba, ${d} için nakliyat / asansör hizmeti ve fiyat teklifi almak istiyorum.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200/70 bg-ink-50 px-3 py-1.5 text-sm font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {d}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Coverage() {
  return (
    <section id="bolgeler" className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hizmet Bölgelerimiz"
          title={
            <>
              Artvin, Rize ve{" "}
              <span className="text-brand-600">Tüm Türkiye</span>
            </>
          }
          desc="Merkezimiz Hopa. Artvin ve Rize'nin tüm ilçelerinde yerinde hizmet veriyor, Türkiye'nin her iline şehirlerarası nakliyat yapıyoruz. Bölgenizi seçin, hemen teklif alın."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <DistrictColumn title="Artvin İlçeleri" items={coverage.artvin} />
          </Reveal>
          <Reveal delay={100}>
            <DistrictColumn title="Rize İlçeleri" items={coverage.rize} />
          </Reveal>
        </div>

        {/* Türkiye geneli şeridi */}
        <Reveal className="mt-5 flex flex-col items-center justify-between gap-4 rounded-2xl bg-ink-900 p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600/20 text-brand-400">
              <Icon name="truck" className="h-6 w-6" />
            </span>
            <div>
              <div className="font-display text-lg font-bold text-white">
                Türkiye&apos;nin Her İline Şehirlerarası Nakliyat
              </div>
              <p className="text-sm text-ink-300">
                İstanbul, Ankara, İzmir, Bursa ve tüm illere kapıdan kapıya taşıma.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink(
              "Merhaba, şehirlerarası nakliyat için fiyat teklifi almak istiyorum."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700"
          >
            Teklif Al
          </a>
        </Reveal>

        {/* Popüler aramalar — yerel SEO */}
        <div className="mt-10">
          <p className="text-sm font-semibold text-ink-500">Popüler aramalar:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {popular.map((p) => (
              <li
                key={p}
                className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-ink-500 ring-1 ring-ink-100"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
