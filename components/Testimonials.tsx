import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title={
              <>
                Müşterilerimiz <span className="text-brand-600">Ne Diyor?</span>
              </>
            }
            desc="Bizi tercih eden yüzlerce mutlu müşterimizden bazıları."
          />
          <div className="flex items-center gap-3 rounded-2xl bg-ink-50 px-5 py-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="h-5 w-5 text-amber-400" />
              ))}
            </div>
            <div>
              <div className="font-display text-lg font-extrabold text-ink-900">
                5.0 / 5.0
              </div>
              <div className="text-xs font-medium text-ink-500">
                Müşteri memnuniyeti
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 4) * 80}
              className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_12px_-8px_rgba(31,40,50,0.18)]"
            >
              <div className="flex">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Icon key={k} name="star" className="h-4 w-4 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                “{t.text}”
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-bold text-ink-900">{t.name}</div>
                  <div className="text-xs text-ink-500">{t.place}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
