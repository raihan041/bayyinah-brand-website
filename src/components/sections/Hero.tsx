"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, MapPin, Play } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 2xl:pt-16 2xl:pb-24">
      {/* Background radial glow & subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-[#0a5c36]/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 size-[32rem] rounded-full bg-[#d97706]/15 blur-3xl" />
        <div className="absolute inset-0 bg-dark-grid opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04160f] via-transparent to-[#072418]/60" />
      </div>

      <div className="relative site-container">
        {/* Top verified badge pill */}
        <div className="flex flex-wrap items-center gap-2 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#fef3c7] font-medium backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="font-bengali font-semibold">{schoolInfo.motto.bn}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/75 font-mono">
            <ShieldCheck className="size-3.5 text-[#108456]" />
            <span>School Code: {schoolInfo.code} · BIIN: {schoolInfo.biin}</span>
          </div>
        </div>

        {/* Main Grid: Headline & Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {language === "bn" ? (
              <h1 className="hero-title-bn font-extrabold tracking-tight text-white font-bengali">
                আধুনিক জাতীয় শিক্ষাক্রম ও{" "}
                <span className="bg-gradient-to-r from-[#fcd34d] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  বিশুদ্ধ দীনিয়্যাতের অনন্য সমন্বয়।
                </span>
              </h1>
            ) : (
              <h1 className="hero-title-en font-extrabold tracking-tight text-white">
                Where Academic Rigour Meets{" "}
                <span className="bg-gradient-to-r from-[#fcd34d] via-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
                  Prophetic Character.
                </span>
              </h1>
            )}

            <p className={`hero-desc mt-3.5 sm:mt-4 text-sm sm:text-[15px] lg:text-[15.5px] text-white/80 leading-relaxed max-w-xl ${language === "bn" ? "font-bengali text-sm sm:text-[15.5px]" : ""}`}>
              {t(
                "Located in East Rampura, Dhaka, Bayyinah Ideal School offers Bangladesh NCTB English Version and Bangla Version curricula, integrated with Tajweed-grounded Quranic studies, fluent English public speaking, and moral discipline.",
                "ঢাকা পূর্ব রামপুরায় অবস্থিত বাইয়্যিনাহ আইডিয়াল স্কুলে এনসিটিবি অনুমোদিত ইংলিশ ভার্সন ও বাংলা ভার্সনে প্লে থেকে দশম শ্রেণি পর্যন্ত মানসম্মত পাঠদান, বিশুদ্ধ তাজবীদসহ কুরআন শিক্ষা ও সাবলীল ইংরেজি প্রশিক্ষণ প্রদান করা হয়।"
              )}
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact#enquiry-form"
                className={`hero-btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#071f16] font-bold text-xs sm:text-sm shadow-lg shadow-[#f59e0b]/20 transition-all hover:scale-102 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-white ${language === "bn" ? "font-bengali text-sm sm:text-base" : ""}`}
              >
                <span>{t("Admission Enquiry", "ভর্তি আবেদন")}</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/our-curriculum"
                className={`hero-btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all focus-visible:outline-2 focus-visible:outline-white ${language === "bn" ? "font-bengali text-sm sm:text-base" : ""}`}
              >
                <BookOpen className="size-4 text-[#fcd34d]" />
                <span>{t("Explore Curriculum", "শিক্ষাক্রম দেখুন")}</span>
              </Link>

              <Link
                href="/gallery"
                className={`inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white px-2 py-1 transition-colors ${language === "bn" ? "font-bengali" : ""}`}
              >
                <div className="size-6 sm:size-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="size-2.5 sm:size-3 text-[#f59e0b] translate-x-0.5 fill-[#f59e0b]" />
                </div>
                <span>{t("Watch School Video", "ভিডিও দেখুন")}</span>
              </Link>
            </div>

            {/* Campus quick tag */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-xs text-white/60">
              <MapPin className="size-3.5 text-[#f59e0b]" />
              <span className={language === "bn" ? "font-bengali" : ""}>
                {t("17, East-Rampura, DIT Road, Rampura Bazar, Dhaka-1219", "১৭, ইস্ট-রামপুরা, ডিআইটি রোড, রামপুরা বাজার, ঢাকা-১২১৯")}
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="hero-card-wrapper relative mx-auto max-w-md lg:max-w-[420px] xl:max-w-[460px] 2xl:max-w-none">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#0a5c36] via-[#f59e0b]/30 to-[#0e8456] opacity-50 blur-lg" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#071f16] shadow-2xl">
                <div className="relative aspect-4/3 sm:aspect-16/11 w-full">
                  <Image
                    src="/images/hero-learning.jpg"
                    alt="Students actively studying in classroom at Bayyinah Ideal School"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Floating pill over image */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl flex items-center gap-2 text-white">
                  <div className="size-2 rounded-full bg-[#108456]" />
                  <span className={`font-mono text-xs font-semibold tracking-wide ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("Authentic Campus Life", "ক্যাম্পাস পরিবেশ")}
                  </span>
                </div>

                {/* Bottom caption block */}
                <div className="p-3.5 sm:p-4.5 bg-[#071f16]/95 border-t border-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] sm:text-xs uppercase tracking-wider text-[#f59e0b] font-mono font-semibold">
                        {t("Dual Academic Streams", "দুই ভার্সনে পাঠদান")}
                      </p>
                      <h3 className={`text-xs sm:text-sm lg:text-base font-bold text-white mt-0.5 ${language === "bn" ? "font-bengali" : ""}`}>
                        {t("English Version & Bangla Version (NCTB)", "ইংলিশ ভার্সন ও বাংলা ভার্সন (এনসিটিবি)")}
                      </h3>
                      <p className={`text-[11px] sm:text-xs text-white/70 mt-1 ${language === "bn" ? "font-bengali" : ""}`}>
                        {t("Play Group through Class 10 with proprietary learning kits & Tajweed.", "প্লে গ্রুপ থেকে ১০ম শ্রেণি পর্যন্ত নিজস্ব বই ও তাজবীদসহ পাঠদান।")}
                      </p>
                    </div>

                    <div className="size-10 sm:size-11 rounded-xl bg-white/10 border border-white/15 p-1 shrink-0 flex items-center justify-center">
                      <Image
                        src="/images/logo.png"
                        alt="BIS Logo"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benchmark / Credentials Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-10 2xl:mt-14 pt-4 sm:pt-5 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
            {schoolInfo.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="hero-stat-card p-3 sm:p-3.5 lg:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col text-left transition-all hover:bg-white/[0.06]"
              >
                <span className="hero-stat-value text-base sm:text-xl lg:text-2xl font-extrabold text-white font-heading">
                  {stat.value}
                </span>
                <span className={`hero-stat-label font-mono text-[9.5px] sm:text-[10.5px] lg:text-[11px] font-semibold tracking-wider uppercase text-[#fcd34d] mt-1 line-clamp-1 ${language === "bn" ? "font-bengali" : ""}`}>
                  {idx === 0
                    ? t(stat.label, "প্রতিষ্ঠা সন")
                    : idx === 1
                    ? t(stat.label, "শিক্ষাক্রম মাধ্যম")
                    : idx === 2
                    ? t(stat.label, "সরকারি স্বীকৃতি")
                    : t(stat.label, "শ্রেণিসমূহ")}
                </span>
                <span className={`hero-stat-sublabel text-[10px] sm:text-[11px] text-white/50 mt-0.5 line-clamp-1 sm:line-clamp-none ${language === "bn" ? "font-bengali" : ""}`}>
                  {idx === 0
                    ? t(stat.sublabel, "প্রতিষ্ঠিত ও পরিচালিত")
                    : idx === 1
                    ? t(stat.sublabel, "ইংলিশ ও বাংলা ভার্সন")
                    : idx === 2
                    ? t(stat.sublabel, `স্কুল কোড ${schoolInfo.code}`)
                    : t(stat.sublabel, "প্লে থেকে দশম শ্রেণি")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
