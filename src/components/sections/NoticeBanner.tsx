"use client";

import Link from "next/link";
import { Bell, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function NoticeBanner() {
  const { language, t } = useLanguage();
  const notice = schoolInfo.currentNotice;

  if (!notice || !notice.isCurrent) return null;

  return (
    <section className="py-10 bg-[#05331e] text-white border-y border-[#0a5c36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-xs">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-xl bg-[#f59e0b] text-[#05331e] flex items-center justify-center shrink-0 shadow-md">
              <Bell className="size-6 animate-bounce" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className={`font-mono text-xs uppercase tracking-wider text-[#fcd34d] font-bold bg-[#f59e0b]/20 px-2.5 py-0.5 rounded border border-[#f59e0b]/30 ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(`${notice.category} Announcement`, "শিক্ষাবর্ষ বিজ্ঞপ্তি")}
                </span>
                <span className="text-xs text-white/60 flex items-center gap-1 font-mono">
                  <Calendar className="size-3" />
                  {t(`Dated: ${notice.date}`, `তারিখ: ২৪ সেপ্টেম্বর`)}
                </span>
                <span className={`text-[11px] text-[#34d399] font-medium flex items-center gap-1 ${language === "bn" ? "font-bengali" : ""}`}>
                  <ShieldCheck className="size-3" />
                  {t("Verified School Notice", "অফিসিয়াল নোটিশ")}
                </span>
              </div>

              <h3 className={`text-base sm:text-lg font-bold text-white ${language === "bn" ? "font-bengali text-lg sm:text-xl" : ""}`}>
                {t(notice.title, "আসন্ন শিক্ষাবর্ষের ভর্তি কার্যক্রম চলছে")}
              </h3>
              <p className={`text-xs sm:text-sm text-white/75 mt-1 max-w-3xl leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                {t(
                  notice.description,
                  "প্লে, নার্সারি, কেজি ও ১ম থেকে ১০ম শ্রেণি পর্যন্ত ইংলিশ ভার্সন ও বাংলা ভার্সনে নতুন শিক্ষাবর্ষের ভর্তি ফরম সংগ্রহ ও আবেদন চলছে। সরাসরি ক্যাম্পাস বা অনলাইন থেকে তথ্য সংগ্রহ করা যাবে।"
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/contact#enquiry-form"
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#071f16] font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 ${language === "bn" ? "font-bengali" : ""}`}
            >
              <span>{t("Apply / Enquire Now", "ভর্তি আবেদন / তথ্য")}</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href={`tel:${schoolInfo.contact.phones[0].raw}`}
              className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors ${language === "bn" ? "font-bengali" : ""}`}
            >
              {t("Call Admission Desk", "ভর্তি ডেস্কে কল")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
