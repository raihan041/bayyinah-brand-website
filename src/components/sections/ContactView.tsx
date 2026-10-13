"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon } from "@/components/ui/Icons";
import { schoolInfo } from "@/data/schoolInfo";
import ContactForm from "@/components/ui/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactView() {
  const { language, t } = useLanguage();

  return (
    <>
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#072418] via-[#051c13] to-[#04160f] text-white pt-12 pb-20 border-b border-white/10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-1/4 size-96 rounded-full bg-[#0a5c36]/25 blur-3xl" />
          <div className="absolute inset-0 bg-dark-grid opacity-50" />
        </div>

        <div className="relative site-container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/40 bg-[#f59e0b]/15 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#fcd34d] font-bold mb-4">
              <Building className="size-3.5" />
              {t("Campus & Admissions Desk", "ক্যাম্পাস ও ভর্তি তথ্য")}
            </div>

            {language === "bn" ? (
              <h1 className="hero-title-bn font-extrabold tracking-tight text-white font-bengali">
                {t(
                  "Connect With Bayyinah Ideal School.",
                  "সরাসরি যোগাযোগ ও ভর্তি তথ্যের জন্য আমাদের স্বাগতম।"
                )}
              </h1>
            ) : (
              <h1 className="hero-title-en font-extrabold tracking-tight text-white">
                {t(
                  "Connect With Bayyinah Ideal School.",
                  "সরাসরি যোগাযোগ ও ভর্তি তথ্যের জন্য আমাদের স্বাগতম।"
                )}
              </h1>
            )}

            <p
              className={`hero-desc mt-3.5 sm:mt-4 text-sm sm:text-[15px] lg:text-[15.5px] text-white/80 leading-relaxed max-w-2xl ${
                language === "bn" ? "font-bengali text-sm sm:text-[15.5px]" : ""
              }`}
            >
              {t(
                "We warmly invite parents, guardians, and education enthusiasts to reach out. Visit our campus in East Rampura, Dhaka or get in touch via phone, email, or our online enquiry form.",
                "সম্মানিত অভিভাবক ও শুভানুধ্যায়ীদের যেকোনো তথ্য ও পরামর্শের জন্য আমাদের সাথে যোগাযোগের সাদর আমন্ত্রণ। রামপুরা ক্যাম্পাসে সরাসরি আসুন অথবা ফোন ও অনলাইন ফরমের মাধ্যমে যোগাযোগ করুন।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: School Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span
                  className={`font-mono text-xs uppercase tracking-wider text-[#0a5c36] font-bold ${
                    language === "bn" ? "font-bengali" : ""
                  }`}
                >
                  {t("Verified Contact Channels", "অফিসিয়াল যোগাযোগের মাধ্যম")}
                </span>
                <h2
                  className={`text-2xl sm:text-3xl font-extrabold text-[#182621] mt-2 ${
                    language === "bn" ? "font-bengali" : ""
                  }`}
                >
                  {t("Official Communication", "সরাসরি যোগাযোগ")}
                </h2>
                <p
                  className={`text-sm text-[#576861] mt-1 leading-relaxed ${
                    language === "bn" ? "font-bengali" : ""
                  }`}
                >
                  {t(
                    "All channels are monitored directly by the Bayyinah Ideal School administrative desk.",
                    "বাইয়্যিনাহ আইডিয়াল স্কুলের প্রশাসনিক ডেস্ক থেকে সার্বক্ষণিক তথ্য সহায়তা দেওয়া হয়।"
                  )}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="p-5 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold text-[#182621] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t("Campus Location", "ক্যাম্পাস ঠিকানা")}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm text-[#576861] mt-1 leading-relaxed ${
                        language === "bn" ? "font-bengali text-sm text-[#0a5c36] font-medium" : ""
                      }`}
                    >
                      {language === "bn"
                        ? schoolInfo.contact.address.fullBn
                        : schoolInfo.contact.address.fullEn}
                    </p>
                  </div>
                </div>

                {/* Telephone Hotlines */}
                <div className="p-5 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold text-[#182621] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t("Telephone Hotlines", "হটলাইন ও ফোন")}
                    </h3>
                    <div className="mt-1.5 space-y-1">
                      {schoolInfo.contact.phones.map((phone, idx) => (
                        <div key={phone.number} className="flex items-center gap-2">
                          <a
                            href={`tel:${phone.raw}`}
                            className="text-xs sm:text-sm font-bold text-[#0a5c36] hover:underline"
                          >
                            {phone.number}
                          </a>
                          <span
                            className={`text-[11px] text-[#576861] ${
                              language === "bn" ? "font-bengali" : ""
                            }`}
                          >
                            (
                            {t(
                              phone.label,
                              idx === 0
                                ? "তথ্য ও ভর্তি অফিস"
                                : "হেল্পলাইন ও ম্যানেজমেন্ট"
                            )}
                            )
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Official Email */}
                <div className="p-5 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold text-[#182621] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t("Official Email", "ইমেইল")}
                    </h3>
                    <a
                      href={`mailto:${schoolInfo.contact.email}`}
                      className="text-xs sm:text-sm font-bold text-[#0a5c36] hover:underline block mt-1"
                    >
                      {schoolInfo.contact.email}
                    </a>
                    <span
                      className={`text-[11px] text-[#576861] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t(
                        "Monitored by the School Managing Board",
                        "পরিচালনা পর্ষদ কর্তৃক সার্বক্ষণিক পর্যবেক্ষিত"
                      )}
                    </span>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-5 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold text-[#182621] ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      {t("Campus Visiting Hours", "সাক্ষাতের সময়সূচী")}
                    </h3>
                    <div
                      className={`text-xs sm:text-sm text-[#576861] mt-1 space-y-0.5 ${
                        language === "bn" ? "font-bengali" : ""
                      }`}
                    >
                      <p>
                        {t(
                          schoolInfo.contact.officeHours.weekdays,
                          "রবিবার – বৃহস্পতিবার: সকাল ৮:০০ – দুপুর ৩:৩০"
                        )}
                      </p>
                      <p>
                        {t(
                          schoolInfo.contact.officeHours.saturday,
                          "শনিবার: সকাল ৯:০০ – দুপুর ১:০০"
                        )}
                      </p>
                      <p className="text-red-700 font-medium">
                        {t(
                          schoolInfo.contact.officeHours.friday,
                          "শুক্রবার: বন্ধ (জুমুআ)"
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Link */}
                <div className="p-5 rounded-2xl bg-white border border-[#e5e1d5] shadow-2xs flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
                      <FacebookIcon className="size-5" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-bold text-[#182621] ${
                          language === "bn" ? "font-bengali" : ""
                        }`}
                      >
                        {t("Facebook Page", "ফেসবুক পেইজ")}
                      </h4>
                      <p
                        className={`text-xs text-[#576861] ${
                          language === "bn" ? "font-bengali" : ""
                        }`}
                      >
                        {t("Bayyinah Ideal School, Main Branch", "বাইয়্যিনাহ আইডিয়াল স্কুল, মূল শাখা")}
                      </p>
                    </div>
                  </div>

                  <a
                    href={schoolInfo.contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877F2] hover:bg-[#1567d3] text-white text-xs font-semibold shadow-2xs transition-colors"
                  >
                    <span className={language === "bn" ? "font-bengali" : ""}>
                      {t("Visit Page", "পেইজে যান")}
                    </span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Admission Enquiry Form (7 cols) */}
            <div id="enquiry-form" className="lg:col-span-7 scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map Section */}
      <section className="py-12 sm:py-16 bg-[#f6f3eb] border-b border-[#e5e1d5]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span
                className={`font-mono text-xs uppercase tracking-wider text-[#0a5c36] font-bold ${
                  language === "bn" ? "font-bengali" : ""
                }`}
              >
                {t("Geographic Coordinates", "ক্যাম্পাস অবস্থান")}
              </span>
              <h2
                className={`text-xl sm:text-3xl font-extrabold text-[#182621] mt-1 ${
                  language === "bn" ? "font-bengali" : ""
                }`}
              >
                {t("How to Reach Our Rampura Campus", "আমাদের রামপুরা ক্যাম্পাসে যেভাবে আসবেন")}
              </h2>
              <p
                className={`text-xs sm:text-sm text-[#576861] mt-1 ${
                  language === "bn" ? "font-bengali" : ""
                }`}
              >
                {t(
                  "Located on the main DIT Road at Rampura Bazar, easily accessible via Hatirjheel, Badda, and Malibagh.",
                  "রামপুরা বাজার ডিআইটি রোডে প্রধান সড়কের পাশেই ক্যাম্পাস। হাতিরঝিল, বাড্ডা ও মালিবাগ থেকে সরাসরি যোগাযোগ সুবিধাজনক।"
                )}
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Rampura+Bazar+DIT+Road+Dhaka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#e5e1d5] text-xs font-bold text-[#0a5c36] hover:bg-neutral-50 shadow-2xs transition-all w-fit"
            >
              <span className={language === "bn" ? "font-bengali text-xs" : ""}>
                {t("Open in Google Maps", "গুগল ম্যাপে দেখুন")}
              </span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-3xl overflow-hidden border border-[#e5e1d5] shadow-sm bg-white h-[380px] sm:h-[450px] relative">
            <iframe
              title="Bayyinah Ideal School Rampura Location Map"
              src="https://maps.google.com/maps?q=17+East+Rampura+DIT+Road+Dhaka+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
