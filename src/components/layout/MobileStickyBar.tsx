"use client";

import Link from "next/link";
import { Phone, ArrowRight, FileText } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileStickyBar() {
  const { language, t } = useLanguage();
  const primaryPhone = schoolInfo.contact.phones[0];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#e5e1d5] px-3 py-2 shadow-2xl safe-area-inset-bottom">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Call button */}
        <a
          href={`tel:${primaryPhone.raw}`}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#071f16] font-bold text-xs transition-colors border border-neutral-200 ${language === "bn" ? "font-bengali" : ""}`}
          aria-label={`Call Admissions ${primaryPhone.number}`}
        >
          <div className="size-6 rounded-full bg-[#0a5c36] text-white flex items-center justify-center shrink-0">
            <Phone className="size-3 text-white" />
          </div>
          <span className="truncate">{t("Call Hotline", "হটলাইনে কল")}</span>
        </a>

        {/* Admission Enquiry button */}
        <Link
          href="/contact#enquiry-form"
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white font-bold text-xs shadow-sm transition-all ${language === "bn" ? "font-bengali" : ""}`}
        >
          <FileText className="size-3.5 text-[#fcd34d]" />
          <span className="truncate">{t("Admission Enquiry", "ভর্তি আবেদন")}</span>
          <ArrowRight className="size-3 text-white/80" />
        </Link>
      </div>
    </div>
  );
}
