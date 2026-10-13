"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function SchoolIntro() {
  const { language, t } = useLanguage();

  return (
    <section id="about-school" className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* Left Column: Visual Side-by-Side Composition (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#e5e1d5] shadow-lg bg-white p-2">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/images/campus-assembly.jpg"
                  alt="Bayyinah Ideal School campus and assembly atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Verified philosophy callout card */}
              <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-[#071f16] text-white">
                <div className="flex items-start gap-3">
                  <Quote className="size-6 text-[#f59e0b] shrink-0 opacity-80" />
                  <div>
                    <p className={`text-xs sm:text-sm leading-relaxed text-[#fef3c7] ${language === "bn" ? "font-bengali" : ""}`}>
                      &ldquo;{t(schoolInfo.philosophy.en, schoolInfo.philosophy.bn)}&rdquo;
                    </p>
                    <p className="text-[11px] text-white/60 mt-1 font-mono">
                      — {schoolInfo.philosophy.author} ({t("Educational Philosophy", "শিক্ষা দর্শন")})
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent badge overlay */}
            <div className="absolute -top-4 -right-4 bg-white border border-[#e5e1d5] shadow-md px-3.5 py-2 rounded-xl hidden sm:flex items-center gap-2">
              <div className="size-2 rounded-full bg-[#0a5c36]" />
              <span className={`text-xs font-bold text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Rampura Main Branch, Dhaka", "রামপুরা মেইন শাখা, ঢাকা")}
              </span>
            </div>
          </div>

          {/* Right Column: Educational Philosophy & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-semibold">
              <span className="size-1.5 rounded-full bg-[#0a5c36]" />
              {t("Welcome to Bayyinah", "বাইয়্যিনাহ পরিচিতি")}
            </div>

            <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("An Educational Sanctuary for Both Worlds: ", "উভয় জাহানের কল্যাণে এক অনন্য উদ্যোগ: ")}
              <span className="text-[#0a5c36] font-bengali">{schoolInfo.motto.bn}</span>
            </h2>

            <p className={`text-sm sm:text-base text-[#576861] mt-4 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "At Bayyinah Ideal School, we believe that secular education divorced from moral values leaves character fragile, while religious studies without modern academic competence limits a child's contribution to society. Established in 2020 in East Rampura, Dhaka, our mission is to deliver comprehensive NCTB curriculum standards while anchoring young hearts in pure Islamic knowledge and genuine leadership qualities.",
                "বাইয়্যিনাহ আইডিয়াল স্কুলে আমরা বিশ্বাস করি—নৈতিকতাহীন পার্থিব শিক্ষা যেমন মানুষের চরিত্রকে ভঙ্গুর করে, তেমনি আধুনিক জ্ঞানহীন ধর্মীয় চর্চাও সমাজ গঠনে পূর্ণাঙ্গ হয় না। ২০২০ সালে ঢাকা পূর্ব রামপুরায় প্রতিষ্ঠিত এই প্রতিষ্ঠান এনসিটিবি কারিকুলাম ও বিশুদ্ধ ইসলামী জ্ঞানের এক সোনালী মেলবন্ধন।"
              )}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-4 rounded-xl bg-white border border-[#e5e1d5] shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#0a5c36] shrink-0" />
                  <h3 className={`text-sm font-bold text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("NCTB National Framework", "এনসিটিবি জাতীয় পাঠ্যক্রম")}
                  </h3>
                </div>
                <p className={`text-xs text-[#576861] mt-1.5 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(
                    "Offered in both English Version and Bangla Version, ensuring complete national board readiness and academic excellence.",
                    "ইংলিশ ভার্সন ও বাংলা ভার্সনে পূর্ণাঙ্গ পাঠদান, যা বোর্ড পরীক্ষার জন্য শিক্ষার্থীদের শতভাগ প্রস্তুত করে।"
                  )}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5e1d5] shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#0a5c36] shrink-0" />
                  <h3 className={`text-sm font-bold text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("Quranic Tajweed & Tarbiyah", "কুরআন তাজবীদ ও তরবিয়াত")}
                  </h3>
                </div>
                <p className={`text-xs text-[#576861] mt-1.5 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(
                    "Daily recitation with correct pronunciation, Hadith memorization, daily prophetic Duas, and moral habituation.",
                    "বিশুদ্ধ মাখরাজ ও তাজবীদের সাথে তিলাওয়াত, হাদিস মুখস্থ, মাসনুন দোয়া ও আন্তরিক চারিত্রিক অনুশাসন।"
                  )}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5e1d5] shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#0a5c36] shrink-0" />
                  <h3 className={`text-sm font-bold text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("Spoken English & Public Speaking", "স্পোকেন ইংলিশ ও প্রেজেন্টেশন")}
                  </h3>
                </div>
                <p className={`text-xs text-[#576861] mt-1.5 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(
                    "Regular podium speeches and confidence drills that turn young students into fluent, fearless communicators.",
                    "নিয়মিত স্টেজ উপস্থাপনা ও বিতর্ক অনুশীলনের মাধ্যমে শিশুদের জড়তাহীন ইংরেজি বক্তা হিসেবে তৈরি করা হয়।"
                  )}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#e5e1d5] shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-[#0a5c36] shrink-0" />
                  <h3 className={`text-sm font-bold text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("Proprietary Textbooks", "নিজস্ব প্রকাশিত বই")}
                  </h3>
                </div>
                <p className={`text-xs text-[#576861] mt-1.5 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(
                    "Unique, school-developed educational materials and workbooks designed to facilitate integrated learning.",
                    "বাইয়্যিনাহ একাডেমিক টিম কর্তৃক রচিত অনন্য ওয়ার্কবুক ও শিক্ষা উপকরণ, যা পড়াশোনাকে সহজবোধ্য করে।"
                  )}
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/our-curriculum"
                className={`inline-flex items-center gap-2 text-sm font-bold text-[#0a5c36] hover:text-[#073826] transition-colors group ${language === "bn" ? "font-bengali" : ""}`}
              >
                <span>{t("Discover our complete academic structure", "আমাদের সম্পূর্ণ শিক্ষাক্রমের বিস্তারিত দেখুন")}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
