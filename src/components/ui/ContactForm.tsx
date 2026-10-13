"use client";

import { useState } from "react";
import { Send, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    phone: "",
    email: "",
    classGrade: "Class 1",
    curriculumStream: "English Version",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrepared, setIsPrepared] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.parentName.trim()) {
      newErrors.parentName = t("Please enter parent or guardian's name", "অভিভাবকের নাম লিখুন");
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("Phone number is required", "মোবাইল নম্বর আবশ্যক");
    } else if (!/^(\+?88)?01[3-9]\d{8}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = t("Please enter a valid 11-digit Bangladeshi mobile number", "সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন");
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("Please enter a valid email address", "সঠিক ইমেইল ঠিকানা দিন");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsPrepared(true);
    }
  };

  const mailtoSubject = encodeURIComponent(
    `Admission Enquiry: ${formData.studentName || "Student"} - ${formData.classGrade} (${formData.curriculumStream})`
  );

  const mailtoBody = encodeURIComponent(
    `Dear Bayyinah Ideal School Admissions Desk,\n\nI would like to enquire about admission for the upcoming academic session.\n\nEnquiry Details:\n• Parent/Guardian: ${formData.parentName}\n• Student Name: ${formData.studentName || "Not specified"}\n• Contact Phone: ${formData.phone}\n• Email: ${formData.email || "Not provided"}\n• Class of Interest: ${formData.classGrade}\n• Curriculum Stream: ${formData.curriculumStream}\n\nMessage / Special Queries:\n${formData.message || "Please provide information regarding admission circular, syllabus, and campus visit schedule."}\n\nThank you.`
  );

  const mailtoUrl = `mailto:${schoolInfo.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div className="bg-white rounded-2xl border border-[#e5e1d5] p-5 sm:p-8 shadow-xs">
      <div className="mb-6">
        <span className={`font-mono text-xs uppercase tracking-wider text-[#0a5c36] font-semibold bg-[#0a5c36]/10 px-2.5 py-1 rounded-md ${language === "bn" ? "font-bengali" : ""}`}>
          {t("Official Admission Desk", "ভর্তি আবেদন ও তথ্য ডেস্ক")}
        </span>
        <h3 className={`text-xl sm:text-2xl font-bold text-[#182621] mt-2 ${language === "bn" ? "font-bengali" : ""}`}>
          {t("Admission & General Enquiry", "ভর্তি ও সাধারণ তথ্যানুসন্ধান")}
        </h3>
        <p className={`text-sm text-[#576861] mt-1 ${language === "bn" ? "font-bengali" : ""}`}>
          {t(
            "Complete the form below to initiate your admission enquiry. You can submit directly via email or call our hotline.",
            "ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য নিচের ফরমটি পূরণ করুন অথবা সরাসরি আমাদের হটলাইনে যোগাযোগ করুন।"
          )}
        </p>
      </div>

      {isPrepared ? (
        <div className="p-6 rounded-xl bg-[#eaf6f0] border border-[#0a5c36]/30 animate-in fade-in duration-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="size-6 text-[#0a5c36] shrink-0 mt-0.5" />
            <div>
              <h4 className={`text-base font-bold text-[#0a5c36] ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Enquiry Ready for Dispatch", "আবেদন প্রস্তুত সম্পন্ন")}
              </h4>
              <p className={`text-xs sm:text-sm text-[#182621]/80 mt-1 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                {t(
                  `Your enquiry for ${formData.parentName} regarding ${formData.classGrade} (${formData.curriculumStream}) has been prepared. Choose your preferred direct communication method below:`,
                  `${formData.parentName}-এর পক্ষে ${formData.classGrade} (${formData.curriculumStream}) ভর্তির আবেদন প্রস্তুত হয়েছে। নিচের মাধ্যমে যোগাযোগ করুন:`
                )}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={mailtoUrl}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white font-semibold text-sm shadow-xs transition-all text-center ${language === "bn" ? "font-bengali" : ""}`}
            >
              <Mail className="size-4" />
              <span>{t("Send via Email Client", "ইমেইলের মাধ্যমে পাঠান")}</span>
            </a>

            <a
              href={`tel:${schoolInfo.contact.phones[0].raw}`}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#0a5c36] text-[#0a5c36] hover:bg-[#0a5c36]/5 font-semibold text-sm transition-all text-center ${language === "bn" ? "font-bengali" : ""}`}
            >
              <Phone className="size-4" />
              <span>{t(`Call Hotline (${schoolInfo.contact.phones[0].number})`, `হটলাইনে কল করুন (${schoolInfo.contact.phones[0].number})`)}</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsPrepared(false)}
            className={`mt-4 text-xs text-[#576861] hover:text-[#182621] underline underline-offset-4 ${language === "bn" ? "font-bengali" : ""}`}
          >
            {t("← Modify Form Information", "← ফরম সংশোধন করুন")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="parentName" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Parent / Guardian Name", "অভিভাবকের নাম")} <span className="text-red-500">*</span>
              </label>
              <input
                id="parentName"
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder={t("e.g. Md. Rafiqul Islam", "যেমন: মো. রফিকুল ইসলাম")}
                className={`w-full h-11 px-3.5 rounded-xl border text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36] ${
                  errors.parentName ? "border-red-400 bg-red-50/20" : "border-[#e5e1d5]"
                }`}
              />
              {errors.parentName && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.parentName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="studentName" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Student Name (Optional)", "শিক্ষার্থীর নাম (ঐচ্ছিক)")}
              </label>
              <input
                id="studentName"
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder={t("e.g. Abdullah", "যেমন: আব্দুল্লাহ")}
                className="w-full h-11 px-3.5 rounded-xl border border-[#e5e1d5] text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Contact Phone / WhatsApp", "মোবাইল / হোয়াটসঅ্যাপ")} <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="01781509592"
                className={`w-full h-11 px-3.5 rounded-xl border text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36] ${
                  errors.phone ? "border-red-400 bg-red-50/20" : "border-[#e5e1d5]"
                }`}
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Email Address (Optional)", "ইমেইল (ঐচ্ছিক)")}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="guardian@example.com"
                className={`w-full h-11 px-3.5 rounded-xl border text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36] ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#e5e1d5]"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="size-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="classGrade" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Class of Interest", "আবেদনের শ্রেণি")}
              </label>
              <select
                id="classGrade"
                value={formData.classGrade}
                onChange={(e) => setFormData({ ...formData, classGrade: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-[#e5e1d5] text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36]"
              >
                <option value="Play Group">Play Group</option>
                <option value="Nursery Group">Nursery Group</option>
                <option value="K.G. Group">Kindergarten (K.G.)</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
              </select>
            </div>

            <div>
              <label htmlFor="curriculumStream" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Curriculum Stream", "ভার্সন")}
              </label>
              <select
                id="curriculumStream"
                value={formData.curriculumStream}
                onChange={(e) => setFormData({ ...formData, curriculumStream: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-[#e5e1d5] text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36]"
              >
                <option value="English Version">{t("English Version (NCTB)", "ইংলিশ ভার্সন (এনসিটিবি)")}</option>
                <option value="Bangla Version">{t("Bangla Version (NCTB)", "বাংলা ভার্সন (এনসিটিবি)")}</option>
                <option value="Undecided / Need Counselling">{t("Undecided / Need Counselling", "পরামর্শ প্রয়োজন")}</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={`block text-xs font-semibold text-[#182621] mb-1 ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Your Message / Questions", "আপনার জিজ্ঞাসা বা মন্তব্য")}
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t(
                "Please ask any questions about admission dates, curriculum books, transportation, or campus visits...",
                "ভর্তি ফরম, সিলেবাস বা ক্যাম্পাস পরিদর্শন সংক্রান্ত যেকোনো প্রশ্ন লিখুন..."
              )}
              className="w-full p-3.5 rounded-xl border border-[#e5e1d5] text-sm bg-neutral-50/50 focus:bg-white transition-colors outline-none focus:ring-2 focus:ring-[#0a5c36]"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white font-semibold text-sm shadow-xs transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[#0a5c36] ${language === "bn" ? "font-bengali text-base" : ""}`}
            >
              <span>{t("Review & Proceed to Contact", "আবেদন যাচাই ও যোগাযোগ করুন")}</span>
              <Send className="size-4" />
            </button>

            <span className={`text-xs text-[#576861] ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Need immediate support? Call ", "জরুরি প্রয়োজনে কল করুন: ")}
              <a
                href={`tel:${schoolInfo.contact.phones[0].raw}`}
                className="font-bold text-[#0a5c36] hover:underline"
              >
                {schoolInfo.contact.phones[0].number}
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
