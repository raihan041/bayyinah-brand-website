"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Film, Images } from "lucide-react";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { photoGallery, videoGallery } from "@/data/mediaData";
import { useLanguage } from "@/context/LanguageContext";

export default function MediaShowcase() {
  const { language, t } = useLanguage();
  const featuredVideo = videoGallery[0];
  const galleryThumbnails = photoGallery.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#fdfbf7] border-b border-[#e5e1d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d97706]/30 bg-[#fef3c7] px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-[#b45309] font-bold">
              <Images className="size-3.5" />
              {t("Moments & Media", "চিত্রশালা ও ভিডিও")}
            </span>
            <h2 className={`text-2xl sm:text-4xl font-extrabold text-[#182621] mt-3 tracking-tight leading-tight ${language === "bn" ? "font-bengali" : ""}`}>
              {t("Glimpses of Learning & Campus Milestones", "ক্যাম্পাস জীবনের আনন্দময় মুহূর্তসমূহ")}
            </h2>
            <p className={`text-sm sm:text-base text-[#576861] mt-3 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
              {t(
                "Explore authentic photography from our classroom lessons, science explorations, annual prize distributions, and watch our students speak with confidence.",
                "শ্রেণিকক্ষের প্রামাণ্য ছবি, বিজ্ঞান ল্যাব, বার্ষিক পুরস্কার বিতরণী এবং শিক্ষার্থীদের আত্মবিশ্বাসী বক্তব্য উপভোগ করুন।"
              )}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/gallery"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0a5c36] hover:bg-[#073826] text-white text-xs sm:text-sm font-bold shadow-xs transition-all w-full sm:w-fit text-center ${language === "bn" ? "font-bengali" : ""}`}
            >
              <span>{t("Explore Full Gallery", "সম্পূর্ণ গ্যালারি দেখুন")}</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Media Showcase Grid: Video Feature on Left (7 cols) + Photo Collage on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Video Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider text-[#0a5c36] flex items-center gap-1.5 ${language === "bn" ? "font-bengali" : ""}`}>
                <Film className="size-3.5" />
                {t("Featured Student Presentation", "শিক্ষার্থীর ইংরেজি উপস্থাপনা")}
              </span>
              <span className={`text-xs text-[#576861] font-mono ${language === "bn" ? "font-bengali" : ""}`}>
                {t("Click to load video", "ভিডিও চালু করতে ক্লিক করুন")}
              </span>
            </div>

            <VideoPlayer video={featuredVideo} />

            <div className="p-4 rounded-xl bg-white border border-[#e5e1d5] shadow-2xs">
              <h4 className={`text-sm font-bold text-[#182621] ${language === "bn" ? "font-bengali text-base" : ""}`}>
                {t(featuredVideo.title, featuredVideo.bnTitle)}
              </h4>
              <p className={`text-xs text-[#576861] mt-1.5 leading-relaxed ${language === "bn" ? "font-bengali" : ""}`}>
                {t(featuredVideo.description, "শ্রেণিকক্ষের পোডিয়ামে শিক্ষার্থীদের নির্ভীক ইংরেজি বক্তব্য ও উপস্থাপনা অনুশীলন।")}
              </p>
            </div>
          </div>

          {/* Photo Collage Preview (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider text-[#182621] flex items-center gap-1.5 ${language === "bn" ? "font-bengali" : ""}`}>
                <Images className="size-3.5 text-[#0a5c36]" />
                {t("Recent Photographs", "সাম্প্রতিক আলোকচিত্র")}
              </span>
              <Link
                href="/gallery"
                className={`text-xs font-bold text-[#0a5c36] hover:underline ${language === "bn" ? "font-bengali" : ""}`}
              >
                {t(`View all (${photoGallery.length}) →`, `সব ছবি (${photoGallery.length}) →`)}
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {galleryThumbnails.map((photo) => (
                <Link
                  key={photo.id}
                  href="/gallery"
                  className="group relative aspect-4/3 rounded-xl overflow-hidden border border-[#e5e1d5] bg-neutral-100 shadow-2xs hover:shadow-md transition-all"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                    <span className={`text-[11px] text-white font-medium line-clamp-1 ${language === "bn" ? "font-bengali" : ""}`}>
                      {t(photo.title, photo.bnTitle)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
