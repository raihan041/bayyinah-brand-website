"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Award, UserCheck } from "lucide-react";
import { leadershipProfiles, verifiedFaculty } from "@/data/teachersData";
import { useLanguage } from "@/context/LanguageContext";

export default function TeacherPreview() {
  const { language, t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0a5c36]/20 bg-[#0a5c36]/8 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#0a5c36] font-bold">
              <UserCheck className="size-3.5" />
              {t("Academic Leadership & Faculty", "একাডেমিক নেতৃত্ব ও শিক্ষকবৃন্দ")}
            </span>
            <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Guided by Experienced Scholars & Educators", "অভিজ্ঞ শিক্ষাবিদ ও আলেমদের প্রত্যক্ষ দিকনির্দেশনা")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "Our institutional leaders and mentors hold degrees from Dhaka University and premier Islamic institutions, ensuring deep pedagogical integrity and moral accountability.",
                "ঢাকা বিশ্ববিদ্যালয় ও দেশের শীর্ষস্থানীয় ইসলামী বিদ্যাপীঠের অভিজ্ঞ শিক্ষাবিদদের পরিচালনায় পরিচালিত, যা নিশ্চিত করে আধুনিক পাঠদান ও নৈতিক মানদণ্ড।"
              )}
            </p>
          </div>

          <Link
            href="/teachers"
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs sm:text-sm font-bold shadow-xs transition-all w-full sm:w-fit text-center ${language === "bn" ? "font-bengali" : ""}`}
          >
            <span>{t("Meet All Faculty Members", "সকল শিক্ষকবৃন্দের সাথে পরিচিত হোন")}</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Leadership Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipProfiles.map((leader) => (
            <div
              key={leader.id}
              className="flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white p-5 sm:p-7 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#0a5c36]/10 text-[#0a5c36] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t(leader.role, leader.bnRole)}
                  </span>
                </div>

                <h3 className={`text-xl font-extrabold text-[#182621] leading-snug ${language === "bn" ? "font-bengali text-2xl" : ""}`}>
                  {t(leader.name, leader.bnName)}
                </h3>

                <p className={`text-xs font-medium text-[#576861] mt-2 mb-4 ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(leader.department, "একাডেমিক নেতৃত্ব ও প্রশাসন")}
                </p>

                {/* Verified Academic Degrees */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                  <span className={`text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-1 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t("Verified Academic Qualifications:", "শিক্ষাগত যোগ্যতা:")}
                  </span>
                  {leader.qualifications.slice(0, 3).map((qual, qIdx) => (
                    <div key={qIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <GraduationCap className="size-3.5 text-[#0a5c36] shrink-0 mt-0.5" />
                      <span className={`leading-snug ${language === "bn" ? "font-bengali" : ""}`}>{qual}</span>
                    </div>
                  ))}
                </div>

                {/* Verified Quote / Bio */}
                <p className={`text-xs text-[#576861] mt-4 leading-relaxed italic line-clamp-3 bg-neutral-50 p-3 rounded-xl border border-neutral-100 ${language === "bn" ? "font-bengali text-xs not-italic" : ""}`}>
                  &ldquo;{t(leader.bio, leader.bnBio || leader.bio)}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={`/teachers#${leader.id}`}
                  className={`inline-flex items-center gap-1 text-xs font-bold text-[#0a5c36] hover:underline ${language === "bn" ? "font-bengali" : ""}`}
                >
                  <span>{t("Full Message & Credentials", "বিস্তারিত তথ্য ও পরিচিতি")}</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}

          {/* Third card: Faculty Department highlight */}
          {verifiedFaculty.slice(0, 1).map((mentor) => (
            <div
              key={mentor.id}
              className="flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white p-7 shadow-xs hover:border-[#0a5c36] hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-[#d97706]/10 text-[#d97706] ${language === "bn" ? "font-bengali" : ""}`}>
                    {t(mentor.role, mentor.bnRole)}
                  </span>
                </div>

                <h3 className={`text-xl font-extrabold text-[#182621] leading-snug ${language === "bn" ? "font-bengali text-2xl" : ""}`}>
                  {t(mentor.name, mentor.bnName)}
                </h3>

                <p className={`text-xs font-medium text-[#576861] mt-2 mb-4 ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(mentor.department, "হিফজ ও তাজবীদ বিভাগ")}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-neutral-100">
                  <span className={`text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block mb-1 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t("Specialist Focus:", "বিশেষ পারদর্শিতা:")}
                  </span>
                  {mentor.qualifications.map((qual, qIdx) => (
                    <div key={qIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Award className="size-3.5 text-[#d97706] shrink-0 mt-0.5" />
                      <span className={`leading-snug ${language === "bn" ? "font-bengali" : ""}`}>{qual}</span>
                    </div>
                  ))}
                </div>

                <p className={`text-xs text-[#576861] mt-4 leading-relaxed bg-neutral-50 p-3 rounded-xl border border-neutral-100 line-clamp-3 ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                  {t(mentor.bio, mentor.bnBio || mentor.bio)}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href="/teachers"
                  className={`inline-flex items-center gap-1 text-xs font-bold text-[#0a5c36] hover:underline ${language === "bn" ? "font-bengali" : ""}`}
                >
                  <span>{t("Explore Academic Department", "শিক্ষক বিভাগসমূহ দেখুন")}</span>
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
