"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { studentActivities, studentLifeHighlights } from "@/data/studentLifeData";
import { useLanguage } from "@/context/LanguageContext";

const bnCategoryMap: Record<string, string> = {
  Academics: "শিক্ষা ও পাঠদান",
  Celebrations: "উৎসব ও অনুষ্ঠান",
  Spiritual: "দ্বীনি ও আধ্যাত্মিক",
  Creative: "সৃজনশীল শিল্প",
  "Co-curricular": "সহশিক্ষা কার্যক্রম",
};

const bnHighlightsMap: Record<string, { title: string; description: string }> = {
  "Moral & Cultural Atmosphere": {
    title: "নৈতিক ও ইসলামী পরিবেশ",
    description: "সালামের আদান-প্রদান, বিনয়, সত্যবাদিতা ও পারস্পরিক শ্রদ্ধাবোধের মধ্য দিয়ে গড়ে ওঠে শিশুর রুচিশীল মনন।",
  },
  "Holistic Health & Cleanliness": {
    title: "সুস্বাস্থ্য ও পরিচ্ছন্নতা চর্চা",
    description: "ব্যক্তিগত পরিষ্কার-পরিচ্ছন্নতা, সুন্নতি খাদ্যাভ্যাস ও স্বাস্থ্যসম্মত পরিবেশ বজায় রাখার ওপর বিশেষ গুরুত্ব।",
  },
  "Parent-Teacher Partnership": {
    title: "অভিভাবক ও শিক্ষকের সেতুবন্ধন",
    description: "নিয়মিত উন্মুক্ত মতবিনিময় ও একাডেমিক মূল্যায়নের মাধ্যমে শিশুর সামগ্রিক অগ্রগতি নিশ্চিত করা হয়।",
  },
};

export default function StudentsView() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Student Life Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-12 pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 size-96 rounded-full bg-[#0a5c36]/25 blur-3xl" />
          <div className="absolute inset-0 bg-dark-grid opacity-50" />
        </div>

        <div className="relative site-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
              <HeartHandshake className="size-3.5" />
              {t("Vibrant Campus Community", "প্রাণবন্ত ক্যাম্পাস জীবন")}
            </div>

            <h1
              className={`text-2xl sm:text-4xl lg:text-[2.6rem] 2xl:text-5xl font-extrabold tracking-tight text-white leading-[1.2] ${
                language === "bn" ? "font-bengali text-3xl sm:text-4xl lg:text-[2.6rem] 2xl:text-5xl" : ""
              }`}
            >
              {t(
                "A Nurturing Community of Faith, Joy & Curiosity.",
                "ওদের বেড়ে ওঠা দেখলে মন ভরে যায় — নৈতিকতা ও আনন্দের মেলবন্ধন।"
              )}
            </h1>

            <p
              className={`text-sm sm:text-base text-white/80 mt-4 leading-relaxed ${
                language === "bn" ? "font-bengali text-base sm:text-lg" : ""
              }`}
            >
              {t(
                "At Bayyinah Ideal School, our focus is on cultivating the entire child: mind, character, and physical vitality. Through collaborative classroom work, celebratory book distribution days, and daily Islamic manners, our students flourish in curiosity and mutual respect.",
                "বাইয়্যিনাহ আইডিয়াল স্কুলে প্রতিটি শিশুর মেধা, চরিত্র ও আত্মবিশ্বাস বিকাশে পরম যত্নে পরিচর্যা করা হয়। আনন্দময় ক্লাসরুম, বর্ণাঢ্য উৎসব ও প্রাত্যহিক সুন্নতি আদব-আখলাকের চর্চায় তারা বেড়ে ওঠে আলোকিত মানুষ হিসেবে।"
              )}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/gallery"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#071f16] font-bold text-sm shadow-md transition-all text-center ${
                  language === "bn" ? "font-bengali text-base" : ""
                }`}
              >
                <span>{t("View Photos & Video Gallery", "ছবি ও ভিডিও গ্যালারি")}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/contact#enquiry-form"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all text-center ${
                  language === "bn" ? "font-bengali text-base" : ""
                }`}
              >
                <span>{t("Admission Enquiry", "ভর্তি আবেদন")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Culture Highlights */}
      <section className="py-10 sm:py-12 bg-[#f6f3eb] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentLifeHighlights.map((hl, idx) => {
              const localized = bnHighlightsMap[hl.title];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs"
                >
                  <div className="size-10 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center mb-3">
                    <Sparkles className="size-5 text-[#0a5c36]" />
                  </div>
                  <h3
                    className={`text-base font-bold text-[#182621] ${
                      language === "bn" ? "font-bengali text-lg text-[#0a5c36]" : ""
                    }`}
                  >
                    {t(hl.title, localized ? localized.title : hl.title)}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm text-[#576861] mt-2 leading-relaxed ${
                      language === "bn" ? "font-bengali text-sm" : ""
                    }`}
                  >
                    {t(hl.description, localized ? localized.description : hl.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Activities Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              {t("Classroom & Extracurricular", "শ্রেণিকক্ষ ও সহশিক্ষা কার্যক্রম")}
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t(
                "Everyday Life & Signature School Events",
                "দৈনন্দিন পাঠ ও বিশেষ স্কুলের আয়োজনসমূহ"
              )}
            </h2>
            <p
              className={`text-sm sm:text-base text-[#576861] mt-2 ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t(
                "Authentic snapshots of our academic rituals, artistic pursuits, and annual traditions.",
                "শিক্ষার্থীদের পড়াশোনা, বৈজ্ঞানিক অনুসন্ধান, খেলাধুলা ও সাংস্কৃতিক কর্মকাণ্ডের বাস্তব চিত্র।"
              )}
            </p>
          </div>

          <div className="space-y-12">
            {studentActivities.map((act, idx) => (
              <div
                key={act.id}
                className="rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-9 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div
                    className={`lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden border border-[#e5e1d5] bg-neutral-100 ${
                      idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={act.image}
                      alt={act.altText}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                        language === "bn" ? "font-bengali text-xs" : "font-mono"
                      }`}
                    >
                      {t(act.category, bnCategoryMap[act.category] || act.category)}
                    </div>
                  </div>

                  <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                    <span
                      className={`text-xs font-bold text-[#d97706] uppercase tracking-wider ${
                        language === "bn" ? "font-bengali" : "font-mono"
                      }`}
                    >
                      {t(`Event Highlight · 0${idx + 1}`, `বিশেষ আয়োজন · ০${idx + 1}`)}
                    </span>
                    <h3
                      className={`text-2xl font-bold text-[#182621] mt-1 leading-snug ${
                        language === "bn" ? "font-bengali text-2xl text-[#0a5c36]" : ""
                      }`}
                    >
                      {t(act.title, act.bnTitle)}
                    </h3>

                    <p
                      className={`text-sm text-[#576861] mt-3.5 leading-relaxed ${
                        language === "bn" ? "font-bengali text-sm sm:text-base leading-relaxed" : ""
                      }`}
                    >
                      {t(act.description, act.bnDescription)}
                    </p>

                    <div className="mt-5 space-y-2">
                      <span
                        className={`text-[11px] uppercase tracking-wider text-neutral-400 font-bold block ${
                          language === "bn" ? "font-bengali text-xs" : "font-mono"
                        }`}
                      >
                        {t("Key Dimensions:", "মূল বৈশিষ্ট্যসমূহ:")}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                        {act.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="size-3.5 text-[#0a5c36] shrink-0" />
                            <span className={language === "bn" ? "font-bengali" : ""}>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-100">
                      <Link
                        href="/gallery"
                        className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#0a5c36] hover:underline ${
                          language === "bn" ? "font-bengali text-sm" : ""
                        }`}
                      >
                        <span>{t("View in Photo & Video Gallery", "ফটো ও ভিডিও গ্যালারিতে দেখুন")}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
