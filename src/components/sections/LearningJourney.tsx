"use client";

import { Sparkles } from "lucide-react";
import { educationalJourney } from "@/data/curriculumData";
import { useLanguage } from "@/context/LanguageContext";

const bnStepDescriptions = [
  "স্নেহ ও মানসিক নিরাপত্তার মধ্য দিয়ে শিশুর শিক্ষার সূচনা। প্লে ও নার্সারিতে খেলার ছলে বর্ণমালা, ধ্বনিবিজ্ঞান ও প্রাথমিক ইসলামী শিষ্টাচার (আদব) অর্জন।",
  "পোডিয়াম প্রেজেন্টেশনের মাধ্যমে জড়তা দূরীকরণ। সহপাঠীদের সামনে কথা বলা, বাংলা ও ইংরেজিতে সঠিক পঠন এবং বিশুদ্ধ তাজবীদসহ কুরআন তিলাওয়াত।",
  "এনসিটিবি পাঠ্যক্রম ও বাইয়্যিনাহর নিজস্ব সহায়ক বইয়ের সমন্বয়ে বিজ্ঞান চর্চা, কম্পিউটার ল্যাব, প্রকৃতির পাঠ ও সততার আলোয় বুদ্ধিবৃত্তিক বিকাশ।",
  "জাতীয় বোর্ড পরীক্ষার ধারাবাহিক প্রস্তুতি, গভীর খোদাভীতি ও সমাজের কল্যাণে নিবেদিত আদর্শ নাগরিক হিসেবে তরুণ শিক্ষার্থীদের রূপায়ণ।",
];

export default function LearningJourney() {
  const { language, t } = useLanguage();

  const badgeClasses = [
    "organic-badge-1",
    "organic-badge-2",
    "organic-badge-3",
    "organic-badge-4",
  ];

  return (
    <section className="relative overflow-hidden bg-[#071f16] text-white py-12 sm:py-16 lg:py-20 border-b border-white/10">
      {/* Background radial glow & grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#0a5c36]/20 blur-3xl" />
        <div className="absolute inset-0 bg-dark-grid opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 2xl:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-1.5 font-mono text-xs tracking-wider uppercase text-[#fcd34d] font-bold">
            <Sparkles className="size-3 text-[#f59e0b]" />
            {t("Student Growth Trajectory", "শিক্ষার্থীদের ক্রমবিকাশ")}
          </span>
          <h2 className={`text-2xl sm:text-3xl lg:text-[2.35rem] 2xl:text-4xl font-extrabold text-white mt-3.5 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
            {t("The Bayyinah Educational Journey", "বাইয়্যিনাহর শিক্ষাদান পরিক্রমা")}
          </h2>
          <p className={`text-sm sm:text-base text-white/70 mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
            {t(
              "How our integrated pedagogy nurtures young minds from foundational play into principled, articulate scholars and leaders.",
              "আনন্দময় শৈশব থেকে শুরু করে কীভাবে প্রতিটি শিক্ষার্থী ধাপে ধাপে আত্মবিশ্বাসী, মার্জিত ও আদর্শ নাগরিকে পরিণত হয়।"
            )}
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical dashed timeline connector */}
          <div className="absolute top-6 bottom-6 left-5 sm:left-6 w-0.5 border-l-2 border-dashed border-white/20" />

          {/* Timeline Steps */}
          <div className="space-y-8 sm:space-y-10">
            {educationalJourney.map((step, idx) => {
              const badgeClass = badgeClasses[idx % badgeClasses.length];
              return (
                <div key={step.step} className="relative pl-12 sm:pl-18">
                  {/* Organic Badge Number Node */}
                  <div
                    className={`absolute top-1 left-0 flex size-9 sm:size-12 items-center justify-center font-heading text-xs sm:text-base font-black text-white shadow-lg transition-transform hover:scale-105 ${badgeClass}`}
                    style={{
                      backgroundColor: step.color,
                      boxShadow: `0 4px 18px ${step.color}55`,
                    }}
                  >
                    <span>{step.step}</span>
                  </div>

                  {/* Glassmorphic Journey Card */}
                  <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-7 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/[0.07]">
                    {/* Top step tag & Age range */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className="font-mono text-[10.5px] sm:text-xs font-bold tracking-wider uppercase"
                        style={{ color: step.color === "#064E2B" ? "#34d399" : step.color === "#0D6E43" ? "#4ade80" : "#fbbf24" }}
                      >
                        {step.tag}
                      </span>

                      <span className={`font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/10 ${language === "bn" ? "font-bengali" : ""}`}>
                        {step.age}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div>
                      <h3 className={`text-base sm:text-xl font-bold text-white leading-snug ${language === "bn" ? "font-bengali text-lg sm:text-2xl text-[#fcd34d]" : ""}`}>
                        {t(step.title, step.bnTitle)}
                      </h3>
                    </div>

                    {/* Step description */}
                    <p className={`text-xs sm:text-sm text-white/75 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                      {t(step.description, bnStepDescriptions[idx] || step.description)}
                    </p>

                    {/* Qualitative Deliverable Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                      {step.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] sm:text-[11px] text-white/85"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
