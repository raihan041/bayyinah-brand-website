"use client";

import { GraduationCap, Quote } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import {
  leadershipProfiles,
  verifiedFaculty,
  academicDepartments,
} from "@/data/teachersData";
import { useLanguage } from "@/context/LanguageContext";

const bnDeptDescriptions: Record<string, string> = {
  "English Communication & Public Speaking":
    "ইংরেজি ভাষার সাবলীলতা, সঠিক উচ্চারণ, ব্যাকরণ ও স্টেজে দাঁড়িয়ে স্পষ্ট উপস্থাপনার জন্য নিবেদিত শিক্ষক মণ্ডলী।",
  "Islamic Studies & Quranic Sciences":
    "অভিজ্ঞ ক্বারী ও ওলামায়ে কেরামের পরিচালনায় বিশুদ্ধ মাখরাজ, তাজবীদ, মাসনুন দোয়া ও চারিত্রিক তারবিয়াত প্রদান।",
  "Science, Mathematics & ICT":
    "গণিতের মৌলিক ভিত্তি, ব্যবহারিক বিজ্ঞান পর্যবেক্ষণ ও সরাসরি কম্পিউটার ল্যাব প্রশিক্ষণের সমন্বয়।",
  "Bangla Language & Social Studies":
    "মাতৃভাষার প্রতি গভীর মমতা, প্রমিত উচ্চারণ, সৃজনশীল লেখালেখি ও জাতীয় ইতিহাসের যথার্থ পাঠ।",
  "Early Years & Kindergarten Mentorship":
    "কোমলমতি শিশুদের জন্য পরম স্নেহময় ও আনন্দঘন পরিবেশে প্রাথমিক বর্ণমালা ও আদব-কায়দা শিক্ষা।",
};

export default function TeachersView() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-12 pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/3 size-96 rounded-full bg-[#0a5c36]/20 blur-3xl" />
          <div className="absolute inset-0 bg-dark-grid opacity-50" />
        </div>

        <div className="relative site-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
              <GraduationCap className="size-3.5" />
              {t("Institutional Leadership & Faculty", "নেতৃত্ব ও অভিজ্ঞ শিক্ষকমণ্ডলী")}
            </div>

            {language === "bn" ? (
              <h1 className="hero-title-bn font-extrabold tracking-tight text-white font-bengali">
                {t(
                  "Guided by Verified Scholars & Educators.",
                  "যোগ্য শিক্ষক ও দূরদর্শী নির্দেশনায় বিকশিত হয় প্রকৃত মেধা ও চরিত্র।"
                )}
              </h1>
            ) : (
              <h1 className="hero-title-en font-extrabold tracking-tight text-white">
                {t(
                  "Guided by Verified Scholars & Educators.",
                  "যোগ্য শিক্ষক ও দূরদর্শী নির্দেশনায় বিকশিত হয় প্রকৃত মেধা ও চরিত্র।"
                )}
              </h1>
            )}

            <p
              className={`hero-desc mt-3.5 sm:mt-4 text-sm sm:text-[15px] lg:text-[15.5px] text-white/80 leading-relaxed max-w-2xl ${
                language === "bn" ? "font-bengali text-sm sm:text-[15.5px]" : ""
              }`}
            >
              {t(
                "At Bayyinah Ideal School, our academic philosophy is driven by experienced scholars who unite postgraduate social research, legal training from the University of Dhaka, and classical Islamic scholarship.",
                "বাইয়্যিনাহ আইডিয়াল স্কুলে আধুনিক উচ্চশিক্ষা ও বিশুদ্ধ ইসলামি জ্ঞানের সমন্বয়ে অভিজ্ঞ শিক্ষকমণ্ডলীর প্রত্যক্ষ নির্দেশনায় শিক্ষার্থীদের মেধা ও নৈতিকতা গড়ে তোলা হয়।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              {t("School Leadership", "পরিচালনা ও নেতৃত্ব")}
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t("Institutional Leadership & Board", "প্রতিষ্ঠান পরিচালনা ও একাডেমিক নেতৃত্ব")}
            </h2>
            <p
              className={`text-sm sm:text-base text-[#576861] mt-2 ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t(
                "The verified leadership guiding academic governance, syllabus harmony, and ethical standards at Bayyinah Ideal School.",
                "বাইয়্যিনাহ আইডিয়াল স্কুলের সার্বিক দিকনির্দেশনা ও সিলেবাস প্রণয়নে নিবেদিত দায়িত্বশীল নেতৃত্ব।"
              )}
            </p>
          </div>

          <div className="space-y-12">
            {leadershipProfiles.map((leader) => (
              <div
                key={leader.id}
                id={leader.id}
                className="rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-10 shadow-xs scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#0a5c36]/10 text-[#0a5c36] ${
                          language === "bn" ? "font-bengali" : ""
                        }`}
                      >
                        {t(leader.role, leader.bnRole)}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl font-extrabold text-[#182621] ${
                        language === "bn" ? "font-bengali text-3xl" : ""
                      }`}
                    >
                      {t(leader.name, leader.bnName)}
                    </h3>

                    <p
                      className={`text-xs font-medium text-[#576861] mt-2 ${
                        language === "bn" ? "font-bengali text-sm" : ""
                      }`}
                    >
                      {t(
                        leader.department,
                        leader.id === "principal"
                          ? "একাডেমিক নেতৃত্ব ও বিদ্যালয় প্রশাসন"
                          : "পরিচালনা পর্ষদ ও কৌশলগত উন্নয়ন"
                      )}
                    </p>

                    {leader.experience && (
                      <p
                        className={`text-xs text-neutral-600 mt-3 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100 ${
                          language === "bn" ? "font-bengali" : "font-mono"
                        }`}
                      >
                        {t(
                          leader.experience,
                          leader.id === "principal"
                            ? "শিক্ষা প্রশাসন ও পরিচালনায় ১৫+ বছরের অভিজ্ঞতা"
                            : "সমাজকল্যাণ, হাদিস গবেষণা ও শিক্ষাদানে সুদীর্ঘ অভিজ্ঞতা"
                        )}
                      </p>
                    )}
                  </div>

                  <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-neutral-100 lg:pl-8">
                    {/* Academic Degrees */}
                    <div>
                      <h4
                        className={`text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 flex items-center gap-2 ${
                          language === "bn" ? "font-bengali text-xs" : ""
                        }`}
                      >
                        <GraduationCap className="size-4 text-[#0a5c36]" />
                        <span>
                          {t(
                            "Verified Academic Degrees & Appointments",
                            "শিক্ষাগত যোগ্যতা ও পূর্ব অভিজ্ঞতা"
                          )}
                        </span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {leader.qualifications.map((qual, qIdx) => (
                          <div
                            key={qIdx}
                            className={`p-3 rounded-xl bg-neutral-50/80 border border-neutral-100 text-xs font-medium text-neutral-800 leading-snug ${
                              language === "bn" ? "font-bengali text-sm" : ""
                            }`}
                          >
                            {qual}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Official Philosophy & Message */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#f6f3eb] border border-[#e5e1d5]">
                      <div className="flex items-start gap-3">
                        <Quote className="size-5 text-[#d97706] shrink-0 opacity-75 mt-0.5" />
                        <div>
                          <p
                            className={`text-xs uppercase tracking-wider text-[#b45309] font-bold mb-1.5 ${
                              language === "bn" ? "font-bengali" : "font-mono"
                            }`}
                          >
                            {t("Official Message & Academic Philosophy", "বাণী ও শিক্ষাদর্শন")}
                          </p>
                          <p
                            className={`text-xs sm:text-sm text-[#182621] leading-relaxed ${
                              language === "bn"
                                ? "font-bengali text-sm sm:text-base leading-relaxed"
                                : ""
                            }`}
                          >
                            {t(leader.bio, leader.bnBio || leader.bio)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Specializations */}
                    {leader.specialization && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[11px] uppercase tracking-wider text-neutral-400 font-bold ${
                            language === "bn" ? "font-bengali" : "font-mono"
                          }`}
                        >
                          {t("Core Focus:", "মূল ক্ষেত্র:")}
                        </span>
                        {leader.specialization.map((spec, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Mentorship & Department Structure */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f6f3eb] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="max-w-2xl mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d97706]/30 bg-[#fef3c7] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#b45309] font-bold">
              {t("Faculty Departments", "একাডেমিক বিভাগসমূহ")}
            </span>
            <h2
              className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t(
                "Academic Wings & Specialized Mentorship",
                "বিশেষায়িত বিষয়ভিত্তিক পাঠদান ও মেন্টরশিপ"
              )}
            </h2>
            <p
              className={`text-sm sm:text-base text-[#576861] mt-2 ${
                language === "bn" ? "font-bengali" : ""
              }`}
            >
              {t(
                "Teaching standards across our academic departments, led by qualified subject instructors.",
                "দক্ষ ও অভিজ্ঞ বিষয়ভিত্তিক শিক্ষকদের তত্ত্বাবধানে প্রতিটি বিভাগে আন্তরিক শিক্ষা কার্যক্রম।"
              )}
            </p>
          </div>

          {/* Verified Mentor Card */}
          <div className="mb-10">
            <h3
              className={`text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-4 ${
                language === "bn" ? "font-bengali text-xs" : ""
              }`}
            >
              {t("Featured Communication Specialist", "বিশেষায়িত যোগাযোগ প্রশিক্ষক")}
            </h3>
            {verifiedFaculty.map((mentor) => (
              <div
                key={mentor.id}
                className="rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-8 shadow-xs"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#d97706]/10 text-[#d97706] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t(mentor.role, mentor.bnRole)}
                    </span>
                    <h4
                      className={`text-xl font-bold text-[#182621] mt-2 ${
                        language === "bn" ? "font-bengali text-2xl" : ""
                      }`}
                    >
                      {t(mentor.name, mentor.bnName)}
                    </h4>
                    <p
                      className={`text-xs text-[#576861] mt-1 ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t(mentor.department, "ইংরেজি ভাষা ও যোগাযোগ বিভাগ")}
                    </p>
                  </div>

                  <div className="md:col-span-7 md:border-l md:border-neutral-100 md:pl-6">
                    <p
                      className={`text-xs sm:text-sm text-[#576861] leading-relaxed ${
                        language === "bn" ? "font-bengali text-sm" : ""
                      }`}
                    >
                      {t(
                        mentor.bio,
                        "ছোটবেলা থেকেই শিক্ষার্থীদের স্বতঃস্ফূর্ত ইংরেজি কথোপকথন, সমৃদ্ধ শব্দভাণ্ডার ও স্টেজে দাঁড়িয়ে উপস্থাপনায় আত্মবিশ্বাসী করে তোলা।"
                      )}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {mentor.qualifications.map((q, qIdx) => (
                        <span
                          key={qIdx}
                          className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 font-medium"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Department Wings Grid */}
          <h3
            className={`text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-4 ${
              language === "bn" ? "font-bengali text-xs" : ""
            }`}
          >
            {t("Academic Department Overview", "একাডেমিক বিভাগসমূহের বিবরণ")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicDepartments.map((dept, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#e5e1d5] bg-white p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="size-10 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center font-bold text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h4
                    className={`text-base font-bold text-[#182621] leading-snug ${
                      language === "bn" ? "font-bengali text-lg text-[#0a5c36]" : ""
                    }`}
                  >
                    {t(dept.name, dept.bnName)}
                  </h4>
                  <p
                    className={`text-xs text-[#576861] mt-2.5 leading-relaxed ${
                      language === "bn" ? "font-bengali text-xs leading-relaxed" : ""
                    }`}
                  >
                    {t(dept.description, bnDeptDescriptions[dept.name] || dept.description)}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-100 flex flex-wrap gap-1.5">
                  {dept.keyFocus.map((f, fIdx) => (
                    <span
                      key={fIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Notice */}
      <section className="py-12 bg-white border-b border-[#e5e1d5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3
            className={`text-lg font-bold text-[#182621] ${
              language === "bn" ? "font-bengali text-xl" : ""
            }`}
          >
            {t("Faculty Roster & Recruitment Notice", "শিক্ষক নিয়োগ ও তথ্যাবলী")}
          </h3>
          <p
            className={`text-xs sm:text-sm text-[#576861] mt-2 leading-relaxed ${
              language === "bn" ? "font-bengali text-sm" : ""
            }`}
          >
            {t(
              "In compliance with institutional privacy standards, full profiles of newly joined subject teachers are published after academic board confirmation. If you are a certified educator seeking to join our mission, you may submit your curriculum vitae to",
              "প্রতিষ্ঠানের নীতিমালা অনুযায়ী নতুন শিক্ষকদের বিস্তারিত প্রোফাইল একাডেমিক বোর্ড অনুমোদনের পর যুক্ত করা হয়। আপনি যদি নৈতিক মূল্যবোধসম্পন্ন ও যোগ্য শিক্ষক হিসেবে বাইয়্যিনাহ পরিবারে যুক্ত হতে চান, তবে সিভি পাঠাতে পারেন:"
            )}{" "}
            <a
              href={`mailto:${schoolInfo.contact.email}`}
              className="text-[#0a5c36] font-bold hover:underline"
            >
              {schoolInfo.contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
