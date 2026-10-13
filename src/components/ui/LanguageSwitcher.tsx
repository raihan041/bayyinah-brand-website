"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

export default function LanguageSwitcher({ className = "", compact = false }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className={`inline-flex items-center rounded-xl bg-neutral-100 p-1 border border-[#e5e1d5] ${className}`}
    >
      {!compact && (
        <span className="pl-2 pr-1 text-neutral-500 hidden sm:inline-flex items-center">
          <Globe className="size-3.5 text-[#0a5c36]" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
          language === "en"
            ? "bg-[#0a5c36] text-white shadow-xs"
            : "text-[#576861] hover:text-[#182621]"
        }`}
        aria-pressed={language === "en"}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("bn")}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold font-bengali transition-all ${
          language === "bn"
            ? "bg-[#0a5c36] text-white shadow-xs"
            : "text-[#576861] hover:text-[#182621]"
        }`}
        aria-pressed={language === "bn"}
      >
        বাংলা
      </button>
    </div>
  );
}
