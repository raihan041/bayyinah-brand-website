"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, Film, Filter, Eye } from "lucide-react";
import { photoGallery, videoGallery } from "@/data/mediaData";
import Lightbox from "@/components/ui/Lightbox";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryClient() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [photoCategory, setPhotoCategory] = useState<string>("All");
  const [videoCategory, setVideoCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Available photo categories
  const photoCategories = [
    { en: "All", bn: "সব" },
    { en: "Classroom", bn: "শ্রেণিকক্ষ" },
    { en: "Celebrations", bn: "উৎসব" },
    { en: "Spiritual", bn: "দ্বীনিয়্যাত" },
    { en: "Arts & STEM", bn: "বিজ্ঞান ও শিল্প" },
    { en: "Campus", bn: "ক্যাম্পাস" },
  ];

  const videoCategories = [
    { en: "All", bn: "সব" },
    { en: "Presentations", bn: "উপস্থাপনা" },
    { en: "Recitation", bn: "তিলাওয়াত" },
    { en: "Events", bn: "অনুষ্ঠান" },
    { en: "Academics", bn: "শিক্ষা" },
  ];

  // Filtered photos
  const filteredPhotos =
    photoCategory === "All"
      ? photoGallery
      : photoGallery.filter((p) => p.category === photoCategory);

  // Filtered videos
  const filteredVideos =
    videoCategory === "All"
      ? videoGallery
      : videoGallery.filter((v) => v.category === videoCategory);

  const openLightbox = (id: string) => {
    const idx = filteredPhotos.findIndex((p) => p.id === id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <div>
      {/* Tab Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#e5e1d5]">
        <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex rounded-2xl bg-neutral-100 p-1.5 border border-[#e5e1d5]">
          <button
            type="button"
            onClick={() => setActiveTab("photos")}
            className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${language === "bn" ? "font-bengali" : ""} ${
              activeTab === "photos"
                ? "bg-[#0a5c36] text-white shadow-xs"
                : "text-[#576861] hover:text-[#182621]"
            }`}
          >
            <Images className="size-4 shrink-0" />
            <span className="truncate">{t(`Photos (${photoGallery.length})`, `ছবি (${photoGallery.length})`)}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${language === "bn" ? "font-bengali" : ""} ${
              activeTab === "videos"
                ? "bg-[#0a5c36] text-white shadow-xs"
                : "text-[#576861] hover:text-[#182621]"
            }`}
          >
            <Film className="size-4 shrink-0" />
            <span className="truncate">{t(`Videos (${videoGallery.length})`, `ভিডিও (${videoGallery.length})`)}</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <Filter className="size-3.5 text-[#576861] shrink-0 mr-1 hidden sm:block" />
          {activeTab === "photos"
            ? photoCategories.map((cat) => (
                <button
                  key={cat.en}
                  type="button"
                  onClick={() => setPhotoCategory(cat.en)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${language === "bn" ? "font-bengali" : ""} ${
                    photoCategory === cat.en
                      ? "bg-[#182621] text-white"
                      : "bg-white border border-[#e5e1d5] text-[#576861] hover:bg-neutral-50"
                  }`}
                >
                  {t(cat.en, cat.bn)}
                </button>
              ))
            : videoCategories.map((cat) => (
                <button
                  key={cat.en}
                  type="button"
                  onClick={() => setVideoCategory(cat.en)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${language === "bn" ? "font-bengali" : ""} ${
                    videoCategory === cat.en
                      ? "bg-[#182621] text-white"
                      : "bg-white border border-[#e5e1d5] text-[#576861] hover:bg-neutral-50"
                  }`}
                >
                  {t(cat.en, cat.bn)}
                </button>
              ))}
        </div>
      </div>

      {/* Photos View */}
      {activeTab === "photos" && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#e5e1d5] bg-white overflow-hidden shadow-xs hover:border-[#0a5c36] hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-106"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 text-[#182621] text-xs font-bold shadow-md ${language === "bn" ? "font-bengali" : ""}`}>
                      <Eye className="size-4 text-[#0a5c36]" />
                      <span>{t("View Full Photo", "সম্পূর্ণ ছবি দেখুন")}</span>
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold">
                    {photo.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className={`text-base font-bold text-[#182621] leading-snug group-hover:text-[#0a5c36] transition-colors ${language === "bn" ? "font-bengali text-lg" : ""}`}>
                    {t(photo.title, photo.bnTitle)}
                  </h3>
                  <p className={`text-xs text-[#576861] mt-2 line-clamp-2 leading-relaxed ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t(photo.caption, photo.bnCaption || photo.caption)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className={`text-center py-16 text-[#576861] ${language === "bn" ? "font-bengali" : ""}`}>
              <p>{t("No photographs found in this category.", "এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।")}</p>
            </div>
          )}
        </>
      )}

      {/* Videos View */}
      {activeTab === "videos" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col rounded-3xl border border-[#e5e1d5] bg-white overflow-hidden shadow-xs p-2"
              >
                <VideoPlayer video={video} />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase font-bold text-[#d97706] bg-[#fef3c7] px-2.5 py-0.5 rounded">
                      {video.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {t(`Duration: ${video.duration}`, `সময়কাল: ${video.duration}`)}
                    </span>
                  </div>
                  <h3 className={`text-base sm:text-lg font-bold text-[#182621] leading-snug ${language === "bn" ? "font-bengali text-lg" : ""}`}>
                    {t(video.title, video.bnTitle)}
                  </h3>
                  <p className={`text-xs sm:text-sm text-[#576861] mt-2 leading-relaxed ${language === "bn" ? "font-bengali text-xs" : ""}`}>
                    {t(video.description, "পোডিয়ামে দাঁড়িয়ে শিক্ষার্থীদের সাবলীল ইংরেজি বক্তব্য ও উপস্থাপনা অনুশীলন।")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className={`text-center py-16 text-[#576861] ${language === "bn" ? "font-bengali" : ""}`}>
              <p>{t("No video showcases found in this category.", "এই ক্যাটাগরিতে কোনো ভিডিও পাওয়া যায়নি।")}</p>
            </div>
          )}
        </>
      )}

      {/* Accessible Lightbox Modal */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
