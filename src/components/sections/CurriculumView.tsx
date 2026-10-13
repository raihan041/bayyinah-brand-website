"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { curriculumPillars, classGroups } from "@/data/curriculumData";
import { useLanguage } from "@/context/LanguageContext";

const bnGroupDescriptions: Record<string, string> = {
  "early-years": "খেলার ছলে বর্ণমালা শেখা, সঠিক উচ্চারণ, আদব-কায়দা ও আনন্দময় পরিবেশের মাধ্যমে শিশুর প্রাক-প্রাথমিক ভিত্তি গঠন।",
  kindergarten: "প্রাথমিক পঠন, সুন্দর হাতের লেখা, প্রাথমিক গণিত এবং তাজবীদসহ আরবি হরফ পরিচিতির মাধ্যমে শিশুর সামগ্রিক বিকাশ।",
  primary: "এনসিটিবি পাঠ্যক্রমের (ইংলিশ ও বাংলা ভার্সন) সমন্বয়ে কুরআন তিলাওয়াত, বিজ্ঞান ভাবনা ও স্টেজ উপস্থাপনায় পারদর্শিতা।",
  "junior-secondary": "বিশ্লেষণাত্মক চিন্তা, গণিত, ব্যবহারিক বিজ্ঞান ল্যাব, তথ্যপ্রযুক্তি ও বিতর্ক চর্চার মাধ্যমে নেতৃত্ব বিকাশ।",
  secondary: "জাতীয় বোর্ড পরীক্ষার সুনিপুণ প্রস্তুতি, উচ্চতর বিষয়ভিত্তিক দক্ষতা ও দায়িত্বশীল নৈতিক মূল্যবোধের সুদৃঢ় ভিত্তি।",
};

export default function CurriculumView() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Curriculum Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-12 pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 size-96 rounded-full bg-[#0a5c36]/25 blur-3xl" />
          <div className="absolute inset-0 bg-dark-grid opacity-50" />
        </div>

        <div className="relative site-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
              <BookOpen className="size-3.5" />
              {t("Integrated Academic Framework", "সমন্বিত শিক্ষাক্রম রূপরেখা")}
            </div>

            <h1 className={`text-2xl sm:text-4xl lg:text-[2.6rem] 2xl:text-5xl font-extrabold tracking-tight text-white leading-[1.2] ${language === "bn" ? "font-bengali text-3xl sm:text-4xl lg:text-[2.6rem] 2xl:text-5xl" : ""}`}>
              {t("Academic Rigour Anchored in Divine Guidance.", "জাতীয় শিক্ষাক্রম ও বিশুদ্ধ দীনিয়্যাতের বাস্তবায়ন।")}
            </h1>

            <p className={`text-sm sm:text-base text-white/80 mt-4 leading-relaxed ${language === "bn" ? "font-bengali text-base sm:text-lg" : ""}`}>
              {t(
                "Bayyinah Ideal School delivers the Bangladesh National Curriculum & Textbook Board (NCTB) syllabi in both English Version and Bangla Version. We ensure full alignment with national board examinations while pioneering proprietary pedagogical workbooks and Quranic Tajweed.",
                "বাইয়্যিনাহ আইডিয়াল স্কুলে বাংলাদেশ জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (এনসিটিবি) অনুমোদিত সিলেবাসে ইংলিশ ভার্সন ও বাংলা ভার্সনে প্লে থেকে দশম শ্রেণি পর্যন্ত আন্তরিক ও মানসম্মত পাঠদান পরিচালিত হয়।"
              )}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact#enquiry-form"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#071f16] font-bold text-sm shadow-md transition-all text-center ${language === "bn" ? "font-bengali text-base" : ""}`}
              >
                <span>{t("Admission Enquiry", "ভর্তি আবেদন")}</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#class-groups"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all text-center ${language === "bn" ? "font-bengali text-base" : ""}`}
              >
                <span>{t("Browse Class Groups", "শ্রেণিভিত্তিক রূপরেখা")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Distinction Note */}
      <section className="py-7 bg-[#fef3c7] border-b border-[#fcd34d]">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-[#92400e]">
            <ShieldCheck className="size-6 text-[#d97706] shrink-0" />
            <div className={language === "bn" ? "font-bengali text-sm" : ""}>
              <strong className="font-bold text-[#78350f]">
                {t("Important Academic Clarification:", "গুরুত্বপূর্ণ একাডেমিক তথ্য:")}
              </strong>{" "}
              {t(
                "Bayyinah Ideal School operates under the verified Bangladesh NCTB framework. Our English Version teaches the complete national syllabus with English as the medium of instruction, ensuring seamless national board eligibility, alongside our robust Bangla Version stream.",
                "বাইয়্যিনাহ আইডিয়াল স্কুল সরকার অনুমোদিত এনসিটিবি কারিকুলাম অনুসরণ করে। আমাদের ইংলিশ ভার্সনে জাতীয় শিক্ষাক্রমের পূর্ণাঙ্গ পাঠ্যবই ইংরেজি মাধ্যমে অত্যন্ত যত্নসহকারে পড়ানো হয়।"
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              {t("Pedagogical Architecture", "শিক্ষা কাঠামোর চার স্তম্ভ")}
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Four Interlocking Educational Pillars", "বাইয়্যিনাহ কারিকুলামের মূল ভিত্তি")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-2 ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "How we harmonize modern sciences, linguistics, and prophetic ethics into a cohesive curriculum.",
                "যেভাবে আমরা আধুনিক বিজ্ঞান, ভাষাগত দক্ষতা ও নবীজি (সা.)-এর সুমহান চরিত্রকে এক সূত্রে গেঁথেছি।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white p-7 sm:p-9 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#0a5c36]/10 text-[#0a5c36] ${language === "bn" ? "font-bengali" : ""}`}>
                      {t(pillar.tag, idx === 0 ? "প্রাতিষ্ঠানিক ভিত্তি" : idx === 1 ? "নৈতিক উৎকর্ষ" : idx === 2 ? "ভাষাগত দক্ষতা" : "নিজস্ব প্রকাশনা")}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  </div>

                  <h3 className={`text-xl font-bold text-[#182621] leading-snug ${language === "bn" ? "font-bengali text-2xl text-[#0a5c36]" : ""}`}>
                    {t(pillar.title, pillar.bnTitle)}
                  </h3>

                  <p className={`text-sm text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali text-sm" : ""}`}>
                    {t(
                      pillar.description,
                      idx === 0
                        ? "বাংলাদেশ জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ডের দিকনির্দেশনা অনুযায়ী ইংলিশ ও বাংলা ভার্সনে পূর্ণাঙ্গ পাঠদান।"
                        : idx === 1
                        ? "বিশুদ্ধ মাখরাজ ও তাজবীদের সাথে কুরআন তিলাওয়াত, প্রয়োজনীয় হাদিস মুখস্থ এবং চারিত্রিক আদব-আখলাক অর্জন।"
                        : idx === 2
                        ? "ইংরেজি কথোপকথন ও নিয়মিত পোডিয়াম বক্তব্যের মাধ্যমে আন্তর্জাতিক যোগাযোগে সাবলীল করে তোলা।"
                        : "বাইয়্যিনাহ একাডেমিক টিম কর্তৃক রচিত স্বকীয় সহায়ক পাঠ্যবই ও ওয়ার্কবুক।"
                    )}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-5 space-y-2 pt-4 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700">
                    {pillar.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-[#0a5c36] shrink-0 mt-0.5" />
                        <span className={`leading-snug ${language === "bn" ? "font-bengali" : ""}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proprietary Textbooks Feature Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#071f16] text-white border-b border-white/10">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <span className={`inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-3 ${language === "bn" ? "font-bengali" : ""}`}>
                <Sparkles className="size-3.5" />
                {t("Exclusive School Publications", "আমাদের নিজস্ব প্রকাশিত বইসমূহ")}
              </span>

              <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-white tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Specially Developed Textbooks & Pedagogical Kits", "বিশেষ সহায়ক পাঠ্যবই ও উদ্ভাবনী শিক্ষা উপকরণ")}
              </h2>

              <p className={`text-sm sm:text-base text-white/80 mt-4 leading-relaxed ${language === "bn" ? "font-bengali text-base" : ""}`}>
                {t(
                  "As articulated by our academic leadership, conventional textbooks often create artificial separation between science and moral discernment. Bayyinah writes, edits, and produces tailored workbooks, phonics primers, and Tajweed sheets that enrich classroom lessons.",
                  "বাইয়্যিনাহ প্রতিটি শ্রেণিকে এমনভাবে সাজিয়েছে, যেখানে জাতীয় শিক্ষাক্রম বইয়ের পাশাপাশি নিজস্ব বই ও ব্যতিক্রমধর্মী শিক্ষামূলক ম্যাটেরিয়ালস দ্বারা সমৃদ্ধ। মুখস্থের চাপ কমিয়ে প্রায়োগিক শিখনকে সহজ করে তোলাই আমাদের লক্ষ্য।"
                )}
              </p>

              <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-white/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#f59e0b] shrink-0" />
                  <span className={language === "bn" ? "font-bengali" : ""}>
                    {t("Custom English spoken drills and interactive dialogue primers", "কাস্টম স্পোকেন ইংলিশ ড্রিল ও ইন্টারঅ্যাক্টিভ ডায়ালগ")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#f59e0b] shrink-0" />
                  <span className={language === "bn" ? "font-bengali" : ""}>
                    {t("Integrated Tajweed & Masnoon Dua workbooks", "তাজবীদ ও মাসনুন দোয়ার সমন্বিত ওয়ার্কবুক")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-[#f59e0b] shrink-0" />
                  <span className={language === "bn" ? "font-bengali" : ""}>
                    {t("Hands-on activity workbooks complementing NCTB mathematics & science", "গণিত ও বিজ্ঞান সহায়ক ব্যবহারিক অ্যাক্টিভিটি শিট")}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a5c36]/20">
                <Image
                  src="/images/book-distribution.jpg"
                  alt="Students joyfully holding Bayyinah published textbooks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-white">
                  <p className={`font-mono text-xs text-[#fcd34d] font-semibold ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("ANNUAL BOOK DISTRIBUTION DAY", "বই বিতরণী উৎসব")}
                  </p>
                  <p className={`text-sm font-bold text-white mt-0.5 ${language === "bn" ? "font-bengali" : ""}`}>
                    {t("Students with their new NCTB & Bayyinah proprietary learning books.", "নতুন শিক্ষাবর্ষে এনসিটিবি ও বাইয়্যিনাহর নিজস্ব বই হাতে শিক্ষার্থীরা।")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Class Groups Section */}
      <section id="class-groups" className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              {t("Class Groups & Syllabi", "শ্রেণিভিত্তিক রূপরেখা")}
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Class-by-Class Academic Focus", "প্রতিটি শ্রেণির বিশেষ পাঠ্যসূচী")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-2 ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "Detailed breakdown of learning goals and subjects across all five school divisions.",
                "নার্সারি থেকে দশম শ্রেণি পর্যন্ত প্রতিটি স্তরের পাঠদান লক্ষ্য ও বিষয়সমূহের বিশদ বিবরণ।"
              )}
            </p>
          </div>

          <div className="space-y-10">
            {classGroups.map((group) => (
              <div
                key={group.id}
                id={group.id}
                className="rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-10 shadow-xs scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#0a5c36]/10 text-[#0a5c36] ${language === "bn" ? "font-bengali" : ""}`}>
                        {group.grades}
                      </span>
                      <span className="text-xs text-[#576861] font-mono">
                        {t(`Age: ${group.ageGroup}`, `বয়স: ${group.ageGroup}`)}
                      </span>
                    </div>

                    <h3 className={`text-xl sm:text-2xl font-extrabold text-[#182621] ${language === "bn" ? "font-bengali text-2xl" : ""}`}>
                      {t(group.name, group.bnName)}
                    </h3>

                    <p className={`text-sm text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                      {t(group.description, bnGroupDescriptions[group.id] || group.description)}
                    </p>

                    <div className="mt-6">
                      <Link
                        href={`/contact?class=${encodeURIComponent(group.grades)}#enquiry-form`}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs font-bold shadow-2xs transition-all ${language === "bn" ? "font-bengali" : ""}`}
                      >
                        <span>{t(`Enquire for ${group.grades}`, `${group.grades} ভর্তির তথ্য`)}</span>
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0 lg:border-l lg:border-neutral-100 lg:pl-8">
                    <div>
                      <h4 className={`text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                        {t("Subjects Covered:", "পাঠ্য বিষয়সমূহ:")}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {group.subjects.map((sub, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[#0a5c36]" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                        {t("Special Pedagogical Features:", "বিশেষ শিখন বৈশিষ্ট্য:")}
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {group.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="size-3.5 text-[#d97706] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
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
