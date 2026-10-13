import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Manrope, Noto_Sans_Bengali } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { schoolInfo } from "@/data/schoolInfo";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05331e",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const notoSansBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bayyinahidealschool.com"),
  title: {
    default: `${schoolInfo.name.en} | Contemporary Islamic & National Curriculum School in Dhaka`,
    template: `%s | ${schoolInfo.name.en}`,
  },
  description: `${schoolInfo.name.en} (${schoolInfo.name.bn}) in East Rampura, Dhaka (School Code: ${schoolInfo.code}, BIIN: ${schoolInfo.biin}). Offering English Version & Bangla Version NCTB curriculum harmonized with Quranic Tajweed, fluent English presentation, and moral character.`,
  keywords: [
    "Bayyinah Ideal School",
    "বাইয়্যিনাহ আইডিয়াল স্কুল",
    "English Version School Rampura",
    "Islamic School Dhaka",
    "School Code 470965",
    "BIIN 02045",
    "Best Islamic English Version School in Dhaka",
    "Admission in Rampura School",
  ],
  authors: [{ name: "Bayyinah Ideal School Academic Board" }],
  creator: "Bayyinah Ideal School",
  publisher: "Bayyinah Ideal School",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "bn_BD",
    url: "https://bayyinahidealschool.com",
    title: `${schoolInfo.name.en} — ${schoolInfo.motto.bn}`,
    description: `A welcoming, contemporary school in East Rampura, Dhaka blending National Curriculum (English & Bangla Version) with authentic Islamic values and public speaking confidence.`,
    siteName: schoolInfo.name.en,
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: `${schoolInfo.name.en} Logo`,
      },
      {
        url: "/images/hero-learning.jpg",
        width: 1200,
        height: 675,
        alt: "Students learning at Bayyinah Ideal School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${schoolInfo.name.en} (${schoolInfo.name.bn})`,
    description: `National Curriculum (English Version & Bangla Version) harmonized with Quranic Tajweed and fluent English presentation skills in Rampura, Dhaka.`,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for verified School
  const schoolStructuredData = {
    "@context": "https://schema.org",
    "@type": "School",
    name: schoolInfo.name.en,
    alternateName: schoolInfo.name.bn,
    url: "https://bayyinahidealschool.com",
    logo: "https://bayyinahidealschool.com/images/logo.png",
    image: "https://bayyinahidealschool.com/images/hero-learning.jpg",
    description:
      "Bayyinah Ideal School is an integrated educational institution in Rampura, Dhaka offering NCTB English Version and Bangla Version curriculum alongside Quranic Tajweed and character mentoring.",
    foundingDate: "2020",
    identifier: [
      {
        "@type": "PropertyValue",
        name: "School Code",
        value: schoolInfo.code,
      },
      {
        "@type": "PropertyValue",
        name: "BIIN",
        value: schoolInfo.biin,
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: schoolInfo.contact.address.street,
      addressLocality: schoolInfo.contact.address.city,
      postalCode: schoolInfo.contact.address.postalCode,
      addressCountry: "BD",
    },
    telephone: schoolInfo.contact.phones[0].raw,
    email: schoolInfo.contact.email,
    sameAs: [schoolInfo.contact.facebook],
  };

  return (
    <html
      lang="bn"
      className={`${plusJakartaSans.variable} ${manrope.variable} ${notoSansBengali.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="shortcut icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdfbf7] text-[#182621]">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-16 lg:pb-0">{children}</main>
          <Footer />
          <MobileStickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
