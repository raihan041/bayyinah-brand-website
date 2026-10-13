"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { studentActivities } from "@/data/studentLifeData";
import { useLanguage } from "@/context/LanguageContext";

export default function StudentLifePreview() {
  const { language, t } = useLanguage();
  const featuredActivities = studentActivities.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#f6f3eb] border-b border-[#e5e1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              <HeartHandshake className="size-3.5" />
              {t("Community & Campus Life", "ক্যাম্পাস জীবন ও উৎসব")}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Life at Bayyinah: Joy, Faith & Discovery", "বাইয়্যিনাহর দিনলিপি: আনন্দ, ঈমান ও জ্ঞান অন্বেষণ")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "From the festive annual book distribution to hands-on science lab sessions and Quranic recitations, student life is designed to foster warm friendships and principled minds.",
                "নতুন বই বিতরণ উৎসব থেকে শুরু করে বিজ্ঞান ল্যাব ও সুমধুর কুরআন তিলাওয়াত—প্রতিটি পদক্ষেপে বিকশিত হয় সুকোমল বন্ধুত্ব ও নৈতিক চরিত্র।"
              )}
            </p>
          </div>

          <Link
            href="/students"
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs sm:text-sm font-bold shadow-xs transition-all w-full sm:w-fit text-center ${language === "bn" ? "font-bengali" : ""}`}
          >
            <span>{t("Explore All Student Activities", "সকল কর্মকাণ্ড দেখুন")}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* 4-Item Varied Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredActivities.map((act) => (
            <div
              key={act.id}
              className="group flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white overflow-hidden shadow-xs hover:border-[#0a5c36] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={act.image}
                    alt={act.altText}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold">
                    {t(act.category, act.category === "Celebrations" ? "উৎসব" : act.category === "Academics" ? "শিক্ষা" : act.category === "Spiritual" ? "দ্বীনিয়্যাত" : "সহশিক্ষা")}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className={`text-base font-bold text-[#182621] leading-snug group-hover:text-[#0a5c36] transition-colors ${language === "bn" ? "font-bengali text-lg" : ""}`}>
                    {t(act.title, act.bnTitle)}
                  </h3>

                  <p className={`text-xs text-[#576861] mt-2.5 leading-relaxed line-clamp-3 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t(act.description, act.bnDescription)}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <Link
                  href="/students"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#0a5c36] hover:underline ${language === "bn" ? "font-bengali" : ""}`}
                >
                  <span>{t("See more stories", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
