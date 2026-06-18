"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import SectionHeading from "./SectionHeading";
import { faqs, whatsappLink } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          center
          eyebrow="Sıkça Sorulan Sorular"
          title={
            <>
              Aklınızdaki <span className="text-brand-600">Sorular</span>
            </>
          }
          desc="Merak ettiklerinizin yanıtı burada. Bulamadıysanız bizi arayın, memnuniyetle yardımcı olalım."
        />

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-ink-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-ink-900 sm:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-brand-600 text-white"
                        : "bg-ink-50 text-ink-600"
                    }`}
                  >
                    <Icon name="chevron" className="h-5 w-5" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600 sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-ink-500">Sorunuza yanıt bulamadınız mı?</p>
          <a
            href={whatsappLink("Merhaba, bir sorum olacaktı.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <Icon name="whatsapp" className="h-5 w-5" />
            WhatsApp&apos;tan Sorun
          </a>
        </div>
      </div>
    </section>
  );
}
