import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nasıl Çalışır?"
          center
          title={
            <>
              4 Adımda <span className="text-brand-600">Sorunsuz Taşıma</span>
            </>
          }
          desc="Teklif almaktan teslimata kadar her adımı sizin için planlıyoruz."
        />

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* bağlantı çizgisi */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 font-display text-lg font-extrabold text-white ring-4 ring-white">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
