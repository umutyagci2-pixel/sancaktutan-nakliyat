# Sancaktutan Taşımacılık — Proje Durumu

Son güncelleme: 2026-06-22

## Durum: CANLIDA 🔒 — https://sancaktutanevdenevenakliyat.com

Site GitHub Pages'te HTTPS ile yayında. Revizeler (hero görseli, sabit beyaz
header, galeri 4 foto) uygulandı. SSL aktif ve zorunlu.

## Yayın / Deploy
- Host: **GitHub Pages**, repo `umutyagci2-pixel/sancaktutan-nakliyat` (public).
  Kaynak `main`'de, build çıktısı `gh-pages` branch'inde.
- Tam statik export: `next.config.ts` → `output: "export"` + `images.unoptimized`.
  `sitemap.ts`/`robots.ts`/`manifest.ts`'te `export const dynamic = "force-static"`.
- **Güncelleme yöntemi:** `npm run build` → `out/`'a `.nojekyll` + `CNAME`
  (`sancaktutanevdenevenakliyat.com`) ekle → `out/`'u `gh-pages`'e force-push.
- Domain Hostinger'da; apex `@` → GitHub Pages A kayıtları. Custom domain = apex.

## Çalıştırma
```bash
cd "/Users/umut/Desktop/ABDÜLHEY,/sancaktutan"
npm run dev      # geliştirme — http://localhost:3000
npm run build    # production build (statik)
```

## Teknik
- Next.js 16 (App Router) + Tailwind CSS v4, tamamen statik üretim.
- Tüm içerik tek dosyada: **`lib/site.ts`** (firma bilgisi, telefonlar, hizmetler,
  ilçeler, yorumlar, SSS). Metin/numara değişiklikleri çoğunlukla burada yapılır.
- Bölümler: `components/` (Header, Hero, Services, WhyUs, Process, Coverage,
  CtaBanner, Gallery, Testimonials, Faq, QuoteForm, Contact, Footer,
  FloatingActions, StructuredData).
- Görseller: `public/images/` (stok). Gerçek foto gelince aynı isimle değiştirilir.
- Logo: `public/logo.png` + `app/icon.png` (favicon).

## Sabit bilgiler (girilmiş)
- Firma: Sancaktutan Evden Eve Nakliyat
- Telefon: 0533 810 36 80 · 0531 724 55 90 · WhatsApp: 0533 810 36 80
- Adres: Orta Hopa Mah., Hopa / Artvin · 7/24
- Bölge: Artvin + Rize tüm ilçeler + Türkiye geneli

## BEKLEYEN / SONRA YAPILACAK
- [ ] Müşteriden gelecek metin/bilgi düzeltmeleri (`lib/site.ts`).
- [ ] Gerçek iş fotoğrafları → `public/images/` (ekip-tasima, sehirlerarasi,
      depolama-lojistik, ic-mekan, modern-ev, ev-aksam).
- [ ] Gerçek müşteri yorumları (`testimonials` — `lib/site.ts`).
- [ ] Domain alınınca `lib/site.ts` içindeki `url` alanını gerçek domainle güncelle
      (sitemap/schema/canonical için kritik). Şu an placeholder:
      `https://www.sancaktutannakliyat.com`.
- [ ] Vercel'e deploy + Hostinger domain DNS bağlama.
- [ ] (Opsiyonel) Google Search Console + Google Business Profile kaydı.
- [ ] (Opsiyonel) E-posta adresi / Instagram-Facebook linkleri (`lib/site.ts > social`).
