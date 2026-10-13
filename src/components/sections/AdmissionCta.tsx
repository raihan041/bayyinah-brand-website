"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function AdmissionCta() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#063b23] via-[#052b1a] to-[#031c11] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 size-96 rounded-full bg-[#f59e0b]/15 blur-3xl" />
        <div className="absolute inset-0 bg-dark-grid opacity-30" />
      </div>

      <div className="relative site-container">
        <div className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <span className={`inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold ${language === "bn" ? "font-bengali" : ""}`}>
                <ShieldCheck className="size-3.5" />
                {t("Admissions Ongoing · Nursery to Class 10", "ভর্তি কার্যক্রম চলমান · নার্সারি থেকে ১০ম শ্রেণি")}
              </span>

              <h2 className={`text-2xl sm:text-3xl lg:text-[2.2rem] 2xl:text-4xl font-extrabold text-white mt-4 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
                {t(
                  "Give Your Child the Gift of Both Worlds.",
                  "সন্তানের সোনালী ভবিষ্যৎ ও নৈতিক চরিত্র গঠনে এক অনন্য প্রতিষ্ঠান।"
                )}
              </h2>

              <p className={`text-xs sm:text-base text-white/80 mt-3 sm:mt-4 leading-relaxed max-w-2xl ${language === "bn" ? "font-bengali" : ""}`}>
                {t(
                  "We warmly invite parents to tour our Rampura campus, review our proprietary books and NCTB syllabus, and consult with our academic leadership. Registration forms are available at the admissions desk.",
                  "রামপুরা ক্যাম্পাসে এসে আমাদের স্বনামধন্য শিক্ষকবৃন্দের সাথে কথা বলুন, নিজস্ব পাঠ্যবই ও এনসিটিবি সিলেবাস পর্যবেক্ষণ করুন এবং ভর্তির জন্য সরাসরি আবেদন ফরম সংগ্রহ করুন।"
                )}
              </p>

              {/* CTAs */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/contact#enquiry-form"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-[#071f16] font-bold text-sm shadow-xl shadow-[#f59e0b]/25 transition-all hover:scale-102 text-center ${language === "bn" ? "font-bengali text-base" : ""}`}
                >
                  <span>{t("Submit Admission Enquiry", "ভর্তি আবেদন করুন")}</span>
                  <ArrowRight className="size-4" />
                </Link>

                <a
                  href={`tel:${schoolInfo.contact.phones[0].raw}`}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all text-center ${language === "bn" ? "font-bengali" : ""}`}
                >
                  <Phone className="size-4 text-[#fcd34d]" />
                  <span>{t(`Call ${schoolInfo.contact.phones[0].number}`, `হটলাইন: ${schoolInfo.contact.phones[0].number}`)}</span>
                </a>
              </div>
            </div>

            {/* Right Verified Contact Card (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white/[0.06] border border-white/10 p-6 sm:p-7 backdrop-blur-md space-y-4">
              <h3 className={`text-sm font-mono uppercase tracking-wider text-[#fcd34d] font-bold ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Direct Contact & Campus Hours", "যোগাযোগ ও অফিস সময়সূচী")}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`text-white block font-medium ${language === "bn" ? "font-bengali" : ""}`}>
                      {t("Campus Location:", "ক্যাম্পাস ঠিকানা:")}
                    </strong>
                    <span className={language === "bn" ? "font-bengali" : ""}>
                      {t(schoolInfo.contact.address.fullEn, schoolInfo.contact.address.fullBn)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`text-white block font-medium ${language === "bn" ? "font-bengali" : ""}`}>
                      {t("Direct Admissions Helpline:", "ভর্তি হেল্পলাইন:")}
                    </strong>
                    <div className="flex flex-col gap-0.5">
                      {schoolInfo.contact.phones.map((p) => (
                        <a
                          key={p.number}
                          href={`tel:${p.raw}`}
                          className="hover:text-[#fcd34d] transition-colors underline decoration-white/20"
                        >
                          {p.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div>
                    <strong className={`text-white block font-medium ${language === "bn" ? "font-bengali" : ""}`}>
                      {t("Official Inquiry Email:", "অফিসিয়াল ইমেইল:")}
                    </strong>
                    <a
                      href={`mailto:${schoolInfo.contact.email}`}
                      className="hover:text-[#fcd34d] transition-colors underline decoration-white/20"
                    >
                      {schoolInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                  <Clock className="size-4 text-[#f59e0b] shrink-0 mt-0.5" />
                  <div className={`text-xs text-white/70 ${language === "bn" ? "font-bengali" : ""}`}>
                    <p>{t(schoolInfo.contact.officeHours.weekdays, "রবি – বৃহস্পতি: সকাল ৮:০০ – বিকাল ৩:৩০")}</p>
                    <p>{t(schoolInfo.contact.officeHours.saturday, "শনিবার: সকাল ৯:০০ – দুপুর ১:০০")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
