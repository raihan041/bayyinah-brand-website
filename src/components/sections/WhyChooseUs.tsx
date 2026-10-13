"use client";

import { Compass, BookCheck, ShieldAlert, Award, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { schoolInfo } from "@/data/schoolInfo";

export default function WhyChooseUs() {
  const { language, t } = useLanguage();

  const reasons = [
    {
      number: "01",
      title: "Balanced Dua-Centred Philosophy",
      bnTitle: "দুনিয়া ও আখিরাতের ভারসাম্যপূর্ণ পাঠদান",
      description:
        "Rooted in the Quranic prayer for good in this world and the Hereafter. We eliminate the false dichotomy between worldly academic excellence and deep religious integrity.",
      bnDescription:
        "দুনিয়া ও আখিরাতের কল্যাণে নিবেদিত শিক্ষা দর্শন। আধুনিক প্রাতিষ্ঠানিক উৎকর্ষ ও চারিত্রিক দ্বীনিয়্যাতের মাঝে কোনো বিরোধ নেই—বরং উভয়ের পূর্ণ সমন্বয়ই আমাদের মূল লক্ষ্য।",
      highlightEn: "NCTB Standards + Islamic Ethics",
      highlightBn: "এনসিটিবি মানদণ্ড + ইসলামী মূল্যবোধ",
      icon: Compass,
    },
    {
      number: "02",
      title: "Proven English Communication & Podium Drills",
      bnTitle: "পডিয়াম প্রেজেন্টেশন ও আত্মবিশ্বাসী ইংরেজি কথোপকথন",
      description:
        "Unlike conventional rote learning, our students regularly speak at the podium, present scientific topics, and practice conversational English from early primary years.",
      bnDescription:
        "মুখস্থ বিদ্যার পরিবর্তে নিয়মিত স্টেজে দাঁড়িয়ে উপস্থাপনা, বিজ্ঞানের বিষয়বস্তু বিশ্লেষণ ও প্রথম শ্রেণি থেকেই আত্মবিশ্বাসী ইংরেজি কথোপকথন চর্চা।",
      highlightEn: "Stage Confidence from Class 1",
      highlightBn: "১ম শ্রেণি থেকেই স্টেজ আত্মবিশ্বাস",
      icon: Award,
    },
    {
      number: "03",
      title: "Proprietary Textbooks & Didactic Kits",
      bnTitle: "নিজস্ব প্রকাশিত বই ও উদ্ভাবনী শিক্ষা উপকরণ",
      description:
        "The school writes, designs, and publishes customized academic workbooks and supplementary materials that bridge textbook theory with practical, values-based application.",
      bnDescription:
        "বিদ্যালয়ের নিজস্ব গবেষক পর্ষদ কর্তৃক রচিত ও প্রকাশিত সহায়ক পাঠ্যবই ও ওয়ার্কবুক, যা মুখস্থের চাপ কমিয়ে প্রায়োগিক শিখনকে সহজ করে তোলে।",
      highlightEn: "Exclusive School Publications",
      highlightBn: "বিদ্যালয়ের নিজস্ব প্রকাশনা",
      icon: BookCheck,
    },
    {
      number: "04",
      title: "Nurturing Rampura Campus & Verified Accreditations",
      bnTitle: "নিরাপদ শিক্ষাঙ্গন ও সরকার নিবন্ধিত বিদ্যালয়",
      description:
        "A disciplined, warm, and secure learning haven in East Rampura (School Code: 470965, BIIN: 02045) under the active guidance of scholars from Dhaka University and leading institutions.",
      bnDescription:
        "ঢাকা বিশ্ববিদ্যালয় ও শীর্ষস্থানীয় প্রতিষ্ঠানের শিক্ষাবিদদের তত্ত্বাবধানে পরিচালিত পূর্ব রামপুরার নিরাপদ ও সুশৃঙ্খল ক্যাম্পাস।",
      highlightEn: `School Code: ${schoolInfo.code} · BIIN: ${schoolInfo.biin}`,
      highlightBn: `কোড: ${schoolInfo.code} · বিআইআইএন: ${schoolInfo.biin}`,
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#f6f3eb] border-b border-[#e5e1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d97706]/30 bg-[#fef3c7] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#b45309] font-bold">
              <span className="size-1.5 rounded-full bg-[#d97706]" />
              {t("The Bayyinah Difference", "বাইয়্যিনাহর বৈশিষ্ট্য")}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Why Discerning Parents Trust Bayyinah", "সচেতন অভিভাবক কেন বাইয়্যিনাহকে বেছে নেন")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "We focus on measurable character growth, clear linguistic fluency, and wholesome academic preparation — verified through our teaching methodology and daily campus practice.",
                "আমরা বিশ্বাস করি পরিমাপযোগ্য চরিত্র গঠন, ভাষাগত সাবলীলতা ও পূর্ণাঙ্গ একাডেমিক প্রস্তুতিতে — যা আমাদের শিক্ষাদান পদ্ধতি ও প্রাত্যহিক অনুশীলনে প্রমাণিত।"
              )}
            </p>
          </div>

          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#0a5c36] hover:text-[#05331e] bg-white border border-[#e5e1d5] px-5 py-3 rounded-xl shadow-2xs hover:shadow-xs transition-all w-full sm:w-fit text-center ${language === "bn" ? "font-bengali" : ""}`}
          >
            <span>{t("Book a Campus Visit", "ক্যাম্পাস পরিদর্শনের আবেদন")}</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Varied Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-9 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-2xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center group-hover:bg-[#0a5c36] group-hover:text-white transition-colors duration-300">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-mono text-sm font-black text-[#d97706]">
                        {reason.number}
                      </span>
                    </div>

                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md bg-neutral-100 text-[#576861] font-semibold ${language === "bn" ? "font-bengali" : ""}`}>
                      {t(reason.highlightEn, reason.highlightBn)}
                    </span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-extrabold text-[#182621] mt-5 leading-snug group-hover:text-[#0a5c36] transition-colors ${language === "bn" ? "font-bengali" : ""}`}>
                    {t(reason.title, reason.bnTitle)}
                  </h3>

                  <p className={`text-sm text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                    {t(reason.description, reason.bnDescription)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
