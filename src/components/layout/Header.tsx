"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { mainNavItems } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Top emergency / notice announcement bar */}
      <div className="bg-[#05331e] text-white/90 text-xs py-1.5 px-4 sm:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#f59e0b]">
              <span className="size-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
              {t(`${schoolInfo.currentNotice.category} Notice:`, "শিক্ষাবর্ষ বিজ্ঞপ্তি:")}
            </span>
            <span className="truncate max-w-xl text-white/80">
              {t(schoolInfo.currentNotice.title, "আসন্ন শিক্ষাবর্ষের ভর্তি কার্যক্রম চলছে")} ({schoolInfo.currentNotice.date})
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/75">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded text-white/90">
                BIIN: {schoolInfo.biin}
              </span>
              <span className="font-mono text-[11px] bg-white/10 px-2 py-0.5 rounded text-white/90">
                CODE: {schoolInfo.code}
              </span>
            </div>
            <a
              href={`tel:${schoolInfo.contact.phones[0].raw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label={`Call ${schoolInfo.contact.phones[0].number}`}
            >
              <Phone className="size-3 text-[#f59e0b]" />
              <span className="font-medium">{schoolInfo.contact.phones[0].number}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e1d5] py-2.5"
            : "bg-[#fdfbf7] border-b border-[#e5e1d5]/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & School Title */}
            <Link
              href="/"
              className="group flex items-center gap-3 transition-transform focus-visible:outline-2 focus-visible:outline-[#0a5c36] rounded-lg"
              aria-label="Bayyinah Ideal School — Back to Home"
            >
              <div className="relative size-11 sm:size-12 shrink-0 rounded-full overflow-hidden p-0.5 bg-white border border-[#0a5c36]/20 shadow-xs group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="Bayyinah Ideal School Logo"
                  width={48}
                  height={48}
                  className="object-contain size-full"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`text-sm sm:text-lg font-extrabold tracking-tight text-[#071f16] group-hover:text-[#0a5c36] transition-colors leading-tight truncate ${language === "bn" ? "font-bengali" : ""}`}>
                  {t(schoolInfo.name.en, schoolInfo.name.bn)}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-[#0a5c36] leading-tight truncate font-bengali">
                  {schoolInfo.motto.bn}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                const navTitle = t(item.title, item.bnTitle);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      language === "bn" ? "font-bengali text-sm" : ""
                    } ${
                      isActive
                        ? "text-[#0a5c36] bg-[#0a5c36]/8 font-bold"
                        : "text-[#182621]/80 hover:text-[#0a5c36] hover:bg-neutral-100/60"
                    }`}
                  >
                    {navTitle}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button, Language Switcher & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher />

              <Link
                href="/contact#enquiry-form"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a5c36]"
              >
                <span className={language === "bn" ? "font-bengali" : ""}>
                  {t("Admission Enquiry", "ভর্তি আবেদন")}
                </span>
                <ArrowRight className="size-3.5" />
              </Link>

              {/* Mobile quick call icon */}
              <a
                href={`tel:${schoolInfo.contact.phones[0].raw}`}
                className="sm:hidden p-2.5 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] hover:bg-[#0a5c36]/20 transition-colors"
                aria-label="Direct call admissions"
              >
                <Phone className="size-4" />
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-[#182621] hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-[#0a5c36] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="size-6 text-red-600" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e5e1d5] bg-white px-4 pt-3 pb-8 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-70px)] overflow-y-auto">
            {/* Top row with Notice & Language Switcher */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-[11px] font-bold text-[#0a5c36]">
                BIIN: {schoolInfo.biin} · {schoolInfo.code}
              </span>
              <LanguageSwitcher />
            </div>

            {/* Notice banner pill on mobile */}
            <div className="mb-3 p-2.5 rounded-xl bg-[#05331e] text-white text-xs flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 truncate">
                <span className="size-2 rounded-full bg-[#f59e0b] animate-pulse shrink-0" />
                <span className="font-semibold text-[#f59e0b] shrink-0">
                  {t(`${schoolInfo.currentNotice.category}:`, "বিজ্ঞপ্তি:")}
                </span>
                <span className="truncate text-white/85 text-[11px]">
                  {t(schoolInfo.currentNotice.title, "ভর্তি কার্যক্রম চলমান")}
                </span>
              </div>
            </div>

            {/* Clean Mobile Nav links */}
            <div className="flex flex-col gap-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href;
                const title = t(item.title, item.bnTitle);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      language === "bn" ? "font-bengali text-base" : ""
                    } ${
                      isActive
                        ? "text-[#0a5c36] bg-[#0a5c36]/10 font-bold border-l-4 border-[#0a5c36]"
                        : "text-[#182621] hover:bg-neutral-50"
                    }`}
                  >
                    <span>{title}</span>
                    <ArrowRight className="size-3.5 text-neutral-300" />
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-2.5">
              <Link
                href="/contact#enquiry-form"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0a5c36] text-white font-bold text-sm shadow-sm ${language === "bn" ? "font-bengali" : ""}`}
              >
                <span>{t("Admission Enquiry", "ভর্তি আবেদন করুন")}</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href={`tel:${schoolInfo.contact.phones[0].raw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#071f16] font-semibold text-xs border border-neutral-200 transition-colors"
              >
                <Phone className="size-3.5 text-[#0a5c36]" />
                <span>{t(`Call Hotline: ${schoolInfo.contact.phones[0].number}`, `হটলাইন: ${schoolInfo.contact.phones[0].number}`)}</span>
              </a>

              <div className="mt-2 text-xs text-center text-neutral-600 space-y-0.5">
                <p className="font-semibold text-neutral-800">{t(schoolInfo.name.en, schoolInfo.name.bn)}</p>
                <p className="text-[11px] text-neutral-500">17, East-Rampura, DIT Road, Dhaka-1219 · Code: {schoolInfo.code}</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
