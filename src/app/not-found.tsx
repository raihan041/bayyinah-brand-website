"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#fdfbf7] px-4 py-20 text-center">
      <div className="max-w-md mx-auto">
        <span className="font-mono text-xs font-bold px-3 py-1 rounded-md bg-[#0a5c36]/10 text-[#0a5c36]">
          404 ERROR
        </span>
        <h1
          className={`text-3xl sm:text-4xl font-extrabold text-[#182621] mt-4 ${
            language === "bn" ? "font-bengali" : ""
          }`}
        >
          {t("Page Not Found", "পৃষ্ঠাটি পাওয়া যায়নি")}
        </h1>
        <p
          className={`text-sm text-[#576861] mt-2 leading-relaxed ${
            language === "bn" ? "font-bengali" : ""
          }`}
        >
          {t(
            "The page you are looking for might have been moved, removed, or is temporarily unavailable.",
            "আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে বা সাময়িকভাবে অনুপলব্ধ রয়েছে।"
          )}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs font-bold shadow-sm transition-all w-full sm:w-auto ${
              language === "bn" ? "font-bengali text-sm" : ""
            }`}
          >
            <Home className="size-4" />
            <span>{t("Back to Home", "মূল পাতায় ফিরুন")}</span>
          </Link>
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#e5e1d5] text-[#182621] text-xs font-semibold hover:bg-neutral-50 shadow-2xs transition-all w-full sm:w-auto ${
              language === "bn" ? "font-bengali text-sm" : ""
            }`}
          >
            <ArrowLeft className="size-4" />
            <span>{t("Contact Us", "যোগাযোগ করুন")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
