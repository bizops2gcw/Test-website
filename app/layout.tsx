import type { Metadata } from "next";
import { Montserrat, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE } from "./site.config";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Tư vấn Chiến lược & Quản trị Doanh nghiệp SME`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "tư vấn chiến lược",
    "tư vấn quản trị doanh nghiệp",
    "Fractional COO",
    "tư vấn tài chính SME",
    "gọi vốn",
    "M&A",
    "WTP Advisory",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Tư vấn Chiến lược & Quản trị Doanh nghiệp SME`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    slogan: SITE.slogan,
    description: SITE.description,
    telephone: SITE.hotline,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "VN",
    },
    areaServed: "VN",
    knowsLanguage: ["vi", "en"],
  };

  return (
    <html lang="vi" className={`${montserrat.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-wtp-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
