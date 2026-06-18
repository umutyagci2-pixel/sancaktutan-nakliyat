import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    src: "/images/ekip-tasima.jpg",
    alt: "Evden eve nakliyat ekibi eşya taşırken",
    label: "Evden Eve Nakliyat",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/sehirlerarasi-nakliyat.jpg",
    alt: "Şehirlerarası nakliyat tırı yolda",
    label: "Şehirlerarası Taşıma",
    span: "",
  },
  {
    src: "/images/depolama-lojistik.jpg",
    alt: "Depolama ve lojistik deposu",
    label: "Depolama & Lojistik",
    span: "",
  },
  {
    src: "/images/modern-ev.jpg",
    alt: "Yeni taşınılan modern ev",
    label: "Yeni Eviniz Hazır",
    span: "",
  },
  {
    src: "/images/ic-mekan.jpg",
    alt: "Taşıma sonrası kurulmuş modern salon",
    label: "Kurulum & Montaj",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section className="bg-ink-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Galeri"
          title={
            <>
              İşimizi <span className="text-brand-600">Gururla</span> Yapıyoruz
            </>
          }
          desc="Profesyonel ekibimiz ve modern ekipmanlarımızla gerçekleştirdiğimiz taşımalardan kareler."
        />

        <Reveal className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {items.map((it) => (
            <figure
              key={it.src + it.label}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <Image
                src={it.src}
                alt={it.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 right-4 font-display text-sm font-bold text-white drop-shadow">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
