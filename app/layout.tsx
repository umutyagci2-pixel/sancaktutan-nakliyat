import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const title = "Sancaktutan Taşımacılık | Hopa Evden Eve Nakliyat & Mobil Asansör";
const description = site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Sancaktutan Taşımacılık",
  },
  description,
  applicationName: site.name,
  keywords: [
    "Hopa evden eve nakliyat",
    "Hopa nakliyat",
    "Artvin evden eve nakliyat",
    "Arhavi mobil asansör",
    "Borçka nakliyat",
    "Kemalpaşa nakliyat",
    "mobil asansör kiralama",
    "kiralık asansör Hopa",
    "şehirlerarası nakliyat Artvin",
    "Rize evden eve nakliyat",
    "Ardeşen nakliyat",
    "Fındıklı nakliyat",
    "asansörlü nakliyat",
    "inşaat malzeme taşımacılığı",
    "Sancaktutan Taşımacılık",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Nakliyat & Taşımacılık",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/images/ekip-tasima.jpg",
        width: 1600,
        height: 1067,
        alt: "Sancaktutan Taşımacılık — evden eve nakliyat ve mobil asansör",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/ekip-tasima.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#dc1f26",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
