import Image from "next/image";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whyUs } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="neden-biz" className="relative overflow-hidden bg-ink-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-ink-700/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Sol: başlık + görsel */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Neden Sancaktutan?"
              light
              title={
                <>
                  Eşyalarınız{" "}
                  <span className="text-brand-500">Emin Ellerde</span>
                </>
              }
              desc="Yılların tecrübesi, profesyonel ekip ve modern ekipmanla farkı hissedeceksiniz. Söz verdiğimiz gibi: zamanında, hasarsız ve uygun fiyata."
            />
            <div className="relative mt-8 hidden overflow-hidden rounded-2xl ring-1 ring-white/10 lg:block">
              <Image
                src="/images/sehirlerarasi-nakliyat.jpg"
                alt="Sancaktutan şehirlerarası nakliyat aracı yolda"
                width={720}
                height={460}
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <div className="font-display text-lg font-bold text-white">
                  Türkiye Geneli Taşıma
                </div>
                <div className="text-sm text-ink-200">Kapıdan kapıya, güvenle.</div>
              </div>
            </div>
          </div>

          {/* Sağ: avantaj kartları */}
          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((w, i) => (
              <Reveal
                key={w.title}
                delay={(i % 2) * 90}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-brand-500/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/15 text-brand-400">
                  <Icon name={w.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">
                  {w.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
