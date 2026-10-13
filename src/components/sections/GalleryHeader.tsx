"use client";

import { Images } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryHeader() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-12 pb-18 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 size-96 rounded-full bg-[#0a5c36]/25 blur-3xl" />
        <div className="absolute inset-0 bg-dark-grid opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
            <Images className="size-3.5" />
            {t("Official Media Archive", "অফিসিয়াল চিত্রশালা ও ভিডিও")}
          </div>

          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] ${language === "bn" ? "font-bengali text-4xl sm:text-6xl" : ""}`}>
            {t("Campus Photography & Video Showcases.", "শিক্ষা, সংস্কৃতি ও আনন্দের প্রামাণ্য চিত্রশালা।")}
          </h1>

          <p className={`text-sm sm:text-base text-white/80 mt-4 leading-relaxed ${language === "bn" ? "font-bengali text-base sm:text-lg" : ""}`}>
            {t(
              "Explore high-resolution documentary photography and featured student presentations from Bayyinah Ideal School. Every image and recording reflects real classroom practice, academic achievements, and community events.",
              "বাইয়্যিনাহ আইডিয়াল স্কুলের প্রাত্যহিক পাঠদান, বিজ্ঞান ল্যাব, বার্ষিক উৎসব ও শিক্ষার্থীদের ইংরেজি বক্তব্যের প্রামাণ্য আলোকচিত্র ও ভিডিও চিত্রমালা।"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
