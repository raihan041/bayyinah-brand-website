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

      <div className="relative site-container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
            <Images className="size-3.5" />
            {t("Official Media Archive", "অফিসিয়াল চিত্রশালা ও ভিডিও")}
          </div>

          {language === "bn" ? (
            <h1 className="hero-title-bn font-extrabold tracking-tight text-white font-bengali">
              {t("Campus Photography & Video Showcases.", "শিক্ষা, সংস্কৃতি ও আনন্দের প্রামাণ্য চিত্রশালা।")}
            </h1>
          ) : (
            <h1 className="hero-title-en font-extrabold tracking-tight text-white">
              {t("Campus Photography & Video Showcases.", "শিক্ষা, সংস্কৃতি ও আনন্দের প্রামাণ্য চিত্রশালা।")}
            </h1>
          )}

          <p className={`hero-desc mt-3.5 sm:mt-4 text-sm sm:text-[15px] lg:text-[15.5px] text-white/80 leading-relaxed max-w-2xl ${language === "bn" ? "font-bengali text-sm sm:text-[15.5px]" : ""}`}>
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
