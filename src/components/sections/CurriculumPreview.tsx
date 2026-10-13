"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { classGroups } from "@/data/curriculumData";
import { useLanguage } from "@/context/LanguageContext";

const bnGroupDescriptions: Record<string, string> = {
  "early-years": "খেলার ছলে বর্ণমালা শেখা, সঠিক উচ্চারণ, আদব-কায়দা ও আনন্দময় পরিবেশের মাধ্যমে শিশুর প্রাক-প্রাথমিক ভিত্তি গঠন।",
  kindergarten: "প্রাথমিক পঠন, সুন্দর হাতের লেখা, প্রাথমিক গণিত এবং তাজবীদসহ আরবি হরফ পরিচিতির মাধ্যমে শিশুর সামগ্রিক বিকাশ।",
  primary: "এনসিটিবি পাঠ্যক্রমের (ইংলিশ ও বাংলা ভার্সন) সমন্বয়ে কুরআন তিলাওয়াত, বিজ্ঞান ভাবনা ও স্টেজ উপস্থাপনায় পারদর্শিতা।",
  "junior-secondary": "বিশ্লেষণাত্মক চিন্তা, গণিত, ব্যবহারিক বিজ্ঞান ল্যাব, তথ্যপ্রযুক্তি ও বিতর্ক চর্চার মাধ্যমে নেতৃত্ব বিকাশ।",
  secondary: "জাতীয় বোর্ড পরীক্ষার সুনিপুণ প্রস্তুতি, উচ্চতর বিষয়ভিত্তিক দক্ষতা ও দায়িত্বশীল নৈতিক মূল্যবোধের সুদৃঢ় ভিত্তি।",
};

export default function CurriculumPreview() {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              <Layers className="size-3.5" />
              {t("Academic Class Groups", "একাডেমিক শ্রেণিসমূহ")}
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Structured Programmes from Nursery to Class 10", "নার্সারি থেকে ১০ম শ্রেণি পর্যন্ত সুবিন্যস্ত পাঠ্যক্রম")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "Available in both English Version and Bangla Version, each class group is tailored with age-appropriate cognitive stimulation, moral lessons, and spoken English drills.",
                "ইংলিশ ভার্সন ও বাংলা ভার্সন উভয় মাধ্যমে বয়সোপযোগী মেধা বিকাশ, চারিত্রিক শিক্ষা ও সাবলীল ইংরেজি প্রশিক্ষণ সহকারে পরিচালিত।"
              )}
            </p>
          </div>

          <Link
            href="/our-curriculum"
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs sm:text-sm font-bold shadow-xs transition-all w-full sm:w-fit text-center ${language === "bn" ? "font-bengali" : ""}`}
          >
            <span>{t("View Full Curriculum & Syllabus", "সম্পূর্ণ শিক্ষাক্রম ও সিলেবাস দেখুন")}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Class Groups Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classGroups.map((group) => (
            <div
              key={group.id}
              className="flex flex-col justify-between rounded-2xl border border-[#e5e1d5] bg-white p-5 sm:p-7 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-neutral-100 text-[#0a5c36] ${language === "bn" ? "font-bengali" : ""}`}>
                    {group.grades}
                  </span>
                  <span className={`text-xs font-medium text-[#576861] ${language === "bn" ? "font-bengali" : ""}`}>
                    {group.ageGroup}
                  </span>
                </div>

                <h3 className={`text-lg font-bold text-[#182621] leading-snug ${language === "bn" ? "font-bengali text-xl" : ""}`}>
                  {t(group.name, group.bnName)}
                </h3>

                <p className={`text-xs sm:text-sm text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(group.description, bnGroupDescriptions[group.id] || group.description)}
                </p>

                {/* Key subjects pill list */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <span className={`text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-2 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t("Key Academic Subjects:", "মূল বিষয়সমূহ:")}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.subjects.slice(0, 4).map((sub, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-neutral-50 text-neutral-700 border border-neutral-200"
                      >
                        {sub}
                      </span>
                    ))}
                    {group.subjects.length > 4 && (
                      <span className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-500">
                        +{group.subjects.length - 4} {t("more", "টি আরও")}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={`/our-curriculum#${group.id}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold text-[#0a5c36] hover:underline ${language === "bn" ? "font-bengali" : ""}`}
                >
                  <BookOpen className="size-3.5" />
                  <span>{t("Explore Syllabus", "সিলেবাস দেখুন")}</span>
                </Link>
                <Link
                  href="/contact#enquiry-form"
                  className={`text-xs font-medium text-neutral-500 hover:text-[#182621] ${language === "bn" ? "font-bengali" : ""}`}
                >
                  {t(`Enquire for ${group.grades} →`, `ভর্তি তথ্য →`)}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
