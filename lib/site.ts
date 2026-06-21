// Sancaktutan Taşımacılık — merkezi site verisi.
// Tüm firma bilgileri, hizmetler ve bölge listeleri burada tutulur.
// İçeriği güncellemek için yalnızca bu dosyayı düzenlemen yeterli.

export const site = {
  name: "Sancaktutan Taşımacılık",
  legalName: "Sancaktutan Evden Eve Nakliyat",
  shortName: "Sancaktutan",
  tagline: "Nakliye & Taşımacılık",
  // Canonical domain (www). DNS/Vercel'de www ana alan olarak ayarlanır.
  url: "https://www.sancaktutanevdenevenakliyat.com",
  description:
    "Sancaktutan Taşımacılık; Hopa, Artvin ve Rize başta olmak üzere tüm Karadeniz ve Türkiye genelinde 7/24 evden eve nakliyat, mobil (kiralık) asansör, şehirlerarası ve şehir içi nakliyat hizmeti sunar. Sigortalı taşıma, ücretsiz keşif ve uygun fiyat.",
  // İletişim
  phones: [
    { label: "0533 810 36 80", tel: "+905338103680" },
    { label: "0531 724 55 90", tel: "+905317245590" },
  ],
  whatsapp: { display: "0533 810 36 80", number: "905338103680" },
  email: "", // varsa eklenir
  address: {
    line: "Orta Hopa Mahallesi, Hopa / Artvin",
    district: "Hopa",
    city: "Artvin",
    region: "Karadeniz",
    country: "TR",
    // Hopa merkez koordinatları (yaklaşık) — schema/geo için
    lat: 41.3854,
    lng: 41.4225,
  },
  hours: "7/24 — Haftanın 7 günü, 24 saat",
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image?: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "evden-eve-nakliyat",
    title: "Evden Eve Nakliyat",
    short: "Eşyalarınız uzman ekiple, sigortalı ve hasarsız.",
    description:
      "Profesyonel ekibimizle eşyalarınızı özenle paketler, söker, taşır ve yeni evinizde kurarak teslim ederiz. Hopa, Arhavi, Borçka, Kemalpaşa, Artvin ve Rize ilçelerinde sigortalı evden eve nakliyat.",
    image: "/images/ekip-tasima.jpg",
    icon: "home",
    features: ["Sigortalı taşıma", "Profesyonel paketleme", "Sök-tak-kur dahil"],
  },
  {
    slug: "mobil-asansor",
    title: "Mobil (Kiralık) Asansör",
    short: "Yüksek katlara hızlı, güvenli ve hasarsız taşıma.",
    description:
      "Dar merdiven ve yüksek kat sorununu mobil asansörle çözüyoruz. Eşyalarınızı camdan/balkondan güvenle indirip çıkarır, zaman ve emek kaybını önleriz. Bölge genelinde kiralık asansör hizmeti.",
    image: "/images/ev-aksam.jpg",
    icon: "lift",
    features: ["Yüksek katlar", "Hasarsız taşıma", "Hızlı kurulum"],
  },
  {
    slug: "sehirlerarasi-nakliyat",
    title: "Şehirlerarası Nakliyat",
    short: "Türkiye'nin her iline güvenli kapıdan kapıya taşıma.",
    description:
      "Hopa'dan Türkiye'nin tüm illerine ve illerden Karadeniz'e kapıdan kapıya şehirlerarası nakliyat. Modern araç filomuz ve takip edilebilir taşıma süreciyle eşyalarınız zamanında ve güvenle teslim edilir.",
    image: "/images/sehirlerarasi-nakliyat.jpg",
    icon: "truck",
    features: ["Tüm Türkiye", "Kapıdan kapıya", "Zamanında teslim"],
  },
  {
    slug: "sehir-ici-nakliyat",
    title: "Şehir İçi Nakliyat",
    short: "Hızlı, ekonomik ve günü gününe taşıma çözümleri.",
    description:
      "Aynı il veya ilçe içindeki taşımalarınız için hızlı ve ekonomik çözüm. Tek parça eşyadan tam ev taşımaya kadar, şehir içi nakliyat ihtiyaçlarınızı aynı gün karşılarız.",
    image: "/images/ic-mekan.jpg",
    icon: "pin",
    features: ["Aynı gün", "Ekonomik", "Tek parça da taşırız"],
  },
  {
    slug: "insaat-malzeme-tasimaciligi",
    title: "İnşaat Malzeme Taşımacılığı",
    short: "Şantiyenize zamanında ve eksiksiz malzeme sevkiyatı.",
    description:
      "İnşaat ve tadilat projeleriniz için malzeme taşımacılığı. Kum, çimento, demir, mobilya ve ekipmanlarınızı güvenle şantiyenize ulaştırır; yükleme ve boşaltmada destek sağlarız.",
    image: "/images/depolama-lojistik.jpg",
    icon: "box",
    features: ["Şantiye sevkiyatı", "Yük-boşalt desteği", "Esnek araç"],
  },
  {
    slug: "ofis-isyeri-tasima",
    title: "Ofis & İşyeri Taşıma",
    short: "İş akışınızı durdurmadan, planlı kurumsal taşıma.",
    description:
      "Ofis ve işyerlerinizi iş kaybı yaşatmadan taşıyoruz. Dosya, mobilya ve hassas ekipmanlarınız etiketlenir, paketlenir ve yeni adresinizde kurulur. Hafta sonu ve mesai dışı planlama imkânı.",
    image: "/images/ic-mekan.jpg",
    icon: "office",
    features: ["Planlı taşıma", "Etiketli paketleme", "Mesai dışı seçenek"],
  },
];

export const whyUs = [
  {
    icon: "clock",
    title: "7/24 Hizmet",
    text: "Gece gündüz, hafta içi hafta sonu fark etmeden ulaşabileceğiniz kesintisiz nakliyat hattı.",
  },
  {
    icon: "shield",
    title: "Sigortalı Taşıma",
    text: "Eşyalarınız taşıma süresince güvende. Olası risklere karşı sigortalı ve özenli taşıma.",
  },
  {
    icon: "team",
    title: "Profesyonel Ekip",
    text: "Deneyimli, eğitimli ve güler yüzlü ekibimizle paketlemeden montaja kadar uçtan uca hizmet.",
  },
  {
    icon: "wallet",
    title: "Uygun Fiyat",
    text: "Şeffaf fiyatlandırma ve ücretsiz keşif. Sürpriz maliyet yok, net teklif var.",
  },
  {
    icon: "map",
    title: "Geniş Hizmet Ağı",
    text: "Artvin ve Rize'nin tüm ilçeleri başta olmak üzere Türkiye geneli taşıma.",
  },
  {
    icon: "lift",
    title: "Mobil Asansör",
    text: "Kendi mobil asansörümüzle yüksek katlarda hızlı, hasarsız ve güvenli taşıma.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Teklif & Keşif",
    text: "Telefon veya WhatsApp'tan bize ulaşın; ücretsiz keşif ile net fiyat teklifi sunalım.",
  },
  {
    n: "02",
    title: "Planlama",
    text: "Taşıma tarihini, araç ve asansör ihtiyacını birlikte planlıyoruz.",
  },
  {
    n: "03",
    title: "Paketleme & Taşıma",
    text: "Eşyalarınız profesyonelce paketlenir, sökülür ve güvenle taşınır.",
  },
  {
    n: "04",
    title: "Kurulum & Teslim",
    text: "Yeni adresinizde eşyalarınız kurulur, kontrol edilir ve eksiksiz teslim edilir.",
  },
];

// Hizmet verilen bölgeler — yerel SEO için kritik
export const coverage = {
  artvin: [
    "Hopa",
    "Kemalpaşa",
    "Arhavi",
    "Borçka",
    "Artvin Merkez",
    "Ardanuç",
    "Murgul",
    "Şavşat",
    "Yusufeli",
  ],
  rize: [
    "Rize Merkez",
    "Ardeşen",
    "Fındıklı",
    "Pazar",
    "Çamlıhemşin",
    "Çayeli",
    "Hemşin",
    "Güneysu",
    "Derepazarı",
    "İkizdere",
    "İyidere",
    "Kalkandere",
  ],
};

export const testimonials = [
  {
    name: "Murat K.",
    place: "Hopa",
    text: "Eşyalarımız Hopa'dan İstanbul'a tek bir çiziksiz ulaştı. Asansörle taşıma çok hızlı oldu, ekip çok ilgiliydi. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Elif Y.",
    place: "Arhavi",
    text: "7/24 ulaşılabilir olmaları büyük avantaj. Akşam aradım, ertesi sabah keşfe geldiler, aynı hafta taşındık. Fiyatları da çok uygundu.",
    rating: 5,
  },
  {
    name: "Serkan D.",
    place: "Borçka",
    text: "Ofisimizi hafta sonu taşıdılar, pazartesi hiç aksamadan çalıştık. Profesyonellik tam not. Teşekkürler Sancaktutan.",
    rating: 5,
  },
  {
    name: "Ayşe T.",
    place: "Rize / Ardeşen",
    text: "Mobil asansör sayesinde 6. kattaki eşyalarımız sorunsuz indirildi. Paketleme çok özenliydi, hiçbir şeyimiz zarar görmedi.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Evden eve nakliyat fiyatları neye göre belirleniyor?",
    a: "Fiyat; eşya miktarı, kat durumu, asansör ihtiyacı, mesafe ve taşıma tarihine göre belirlenir. Ücretsiz keşif yaparak ya da WhatsApp'tan bilgi alarak net teklif sunuyoruz; sürpriz maliyet çıkarmıyoruz.",
  },
  {
    q: "Mobil asansör hangi katlara kadar çıkıyor?",
    a: "Mobil asansörümüz yüksek katlara kadar güvenle çıkabilir. Dar merdiven, asansörsüz bina ve yüksek kat durumlarında eşyalarınızı pencere veya balkondan hasarsız şekilde indirip çıkarıyoruz.",
  },
  {
    q: "Eşyalarım taşıma sırasında sigortalı mı?",
    a: "Evet. Taşıma süresince eşyalarınız sigortalıdır ve profesyonel ambalaj malzemeleriyle korunur. Olası bir hasara karşı güvenceniz vardır.",
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Merkezimiz Hopa'dır. Artvin (Hopa, Kemalpaşa, Arhavi, Borçka, Merkez, Ardanuç, Murgul, Şavşat, Yusufeli) ve Rize'nin tüm ilçeleri başta olmak üzere Türkiye'nin her iline şehirlerarası nakliyat yapıyoruz.",
  },
  {
    q: "Paketleme hizmeti veriyor musunuz?",
    a: "Evet. İsterseniz tüm eşyalarınızı baloncuklu naylon, koli ve özel ambalajlarla biz paketleriz; eşyalarınızı söker, taşır ve yeni adresinizde yeniden kurarız.",
  },
  {
    q: "Acil/aynı gün taşıma yapıyor musunuz?",
    a: "7/24 hizmet verdiğimiz için müsaitlik durumuna göre aynı gün ve acil taşımalar yapabiliyoruz. En doğru bilgi için bizi hemen arayın.",
  },
];

// WhatsApp'a yönlenecek hazır mesaj linki üretici
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
