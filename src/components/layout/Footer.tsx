"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";
import { FacebookIcon } from "@/components/ui/Icons";
import { schoolInfo } from "@/data/schoolInfo";
import { footerQuickLinks } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-[#051e15] text-white/80 border-t border-white/10 pt-16 pb-24 lg:pb-12 selection:bg-[#f59e0b] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: School Identity & Philosophy (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full overflow-hidden p-0.5 bg-white shrink-0 border border-[#f59e0b]/40">
                <Image
                  src="/images/logo.png"
                  alt="Bayyinah Ideal School"
                  width={48}
                  height={48}
                  className="object-contain size-full"
                />
              </div>
              <div>
                <h3 className={`text-lg font-bold text-white tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(schoolInfo.name.en, schoolInfo.name.bn)}
                </h3>
                <p className="font-bengali text-xs text-[#f59e0b] font-medium leading-tight">
                  {schoolInfo.motto.bn}
                </p>
              </div>
            </div>

            <p className={`text-sm text-white/70 leading-relaxed mt-1 ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "A contemporary Islamic school in Rampura, Dhaka blending Bangladesh NCTB curricula (English Version & Bangla Version) with Quranic Tajweed, character mentoring, and fluent spoken English skills.",
                "ঢাকা পূর্ব রামপুরায় অবস্থিত এনসিটিবি অনুমোদিত আধুনিক ইংলিশ ও বাংলা ভার্সন দ্বীনি শিক্ষা প্রতিষ্ঠান। কুরআন তাজবীদ, চারিত্রিক তারবিয়াহ ও সাবলীল ইংরেজি কথোপকথনের অনন্য উদ্যোগ।"
              )}
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/80 italic">
              <p className={`leading-relaxed text-[#fef3c7] ${language === "bn" ? "font-bengali" : ""}`}>
                &ldquo;{t(schoolInfo.philosophy.en, schoolInfo.philosophy.bn)}&rdquo;
              </p>
              <p className="text-[11px] text-white/60 not-italic mt-1 text-right font-medium">
                — {schoolInfo.philosophy.author}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="font-mono text-xs bg-white/10 px-2.5 py-1 rounded text-white/80 border border-white/10">
                School Code: {schoolInfo.code}
              </span>
              <span className="font-mono text-xs bg-white/10 px-2.5 py-1 rounded text-white/80 border border-white/10">
                BIIN: {schoolInfo.biin}
              </span>
              <span className="font-mono text-xs bg-[#f59e0b]/20 px-2.5 py-1 rounded text-[#fcd34d] border border-[#f59e0b]/30">
                Est. {schoolInfo.established}
              </span>
            </div>
          </div>

          {/* Col 2: Useful Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-mono flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f59e0b]"></span>
              {t("Quick Exploration", "গুরুত্বপূর্ণ লিঙ্ক")}
            </h4>
            <ul className="space-y-2 mt-1">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group inline-flex items-center gap-1.5 text-sm text-white/75 hover:text-white transition-colors ${language === "bn" ? "font-bengali" : ""}`}
                  >
                    <span className="text-xs text-white/40 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all">
                      ›
                    </span>
                    <span>{t(link.title, link.bnTitle)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Verified Contact & Office Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white font-mono flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[#f59e0b]"></span>
              {t("Campus & Contact", "ক্যাম্পাস ও যোগাযোগ")}
            </h4>

            <div className="space-y-3 mt-1 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <div>
                  <p className={`text-white font-medium ${language === "bn" ? "font-bengali" : ""}`}>
                    {t(schoolInfo.contact.address.fullEn, schoolInfo.contact.address.fullBn)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-4 text-[#f59e0b] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {schoolInfo.contact.phones.map((phone) => (
                    <a
                      key={phone.number}
                      href={`tel:${phone.raw}`}
                      className="text-white hover:text-[#f59e0b] transition-colors underline decoration-white/20 underline-offset-4"
                    >
                      {phone.number}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-4 text-[#f59e0b] shrink-0" />
                <a
                  href={`mailto:${schoolInfo.contact.email}`}
                  className="text-white hover:text-[#f59e0b] transition-colors underline decoration-white/20 underline-offset-4"
                >
                  {schoolInfo.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <div className={`text-xs space-y-0.5 text-white/70 ${language === "bn" ? "font-bengali" : ""}`}>
                  <p>{t(schoolInfo.contact.officeHours.weekdays, "রবি – বৃহস্পতি: সকাল ৮:০০ – বিকাল ৩:৩০")}</p>
                  <p>{t(schoolInfo.contact.officeHours.saturday, "শনিবার: সকাল ৯:০০ – দুপুর ১:০০")}</p>
                  <p className="text-[#fcd34d]/80">{t(schoolInfo.contact.officeHours.friday, "শুক্রবার: বন্ধ (জুমুআহ)")}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={schoolInfo.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1877F2]/15 border border-[#1877F2]/30 text-white hover:bg-[#1877F2]/25 transition-all text-xs font-semibold"
                >
                  <FacebookIcon className="size-3.5 text-[#1877F2]" />
                  <span className={language === "bn" ? "font-bengali" : ""}>
                    {t("Official Facebook Page", "অফিসিয়াল ফেসবুক পেজ")}
                  </span>
                  <ArrowUpRight className="size-3 text-white/50" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className={language === "bn" ? "font-bengali" : ""}>
            &copy; {new Date().getFullYear()} {t(schoolInfo.name.en, schoolInfo.name.bn)}. {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
          </p>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/privacy-policy"
              className={`hover:text-white transition-colors flex items-center gap-1 ${language === "bn" ? "font-bengali" : ""}`}
            >
              <ShieldCheck className="size-3 text-[#f59e0b]" />
              <span>{t("Privacy & Data Protection", "গোপনীয়তা ও তথ্য সুরক্ষা")}</span>
            </Link>
            <span className="text-white/20">·</span>
            <span className={`text-white/50 ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Approved by Managing Board", "পরিচালনা পর্ষদ কর্তৃক অনুমোদিত")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
