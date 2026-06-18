import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services, whatsappLink } from "@/lib/site";

export default function Services() {
  return (
    <section id="hizmetler" className="bg-grid bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title={
            <>
              İhtiyacınıza Uygun{" "}
              <span className="text-brand-600">Taşımacılık Çözümleri</span>
            </>
          }
          desc="Evden eve nakliyattan mobil asansöre, şehirlerarası taşımadan inşaat malzemesi sevkiyatına kadar tüm taşımacılık ihtiyaçlarınız tek çatı altında."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.slug}
              delay={(i % 3) * 90}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(31,40,50,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
            >
              <span className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ink-900 text-brand-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
                  {s.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-700"
                    >
                      <Icon name="check" className="h-3.5 w-3.5 text-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(
                    `Merhaba, "${s.title}" hizmeti için fiyat teklifi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Teklif Al
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
