"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoItem } from "@/data/mediaData";

interface LightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < photos.length;
  const currentPhoto = isOpen ? photos[currentIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo view: ${currentPhoto.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Top bar controls */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white/80 z-10">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs bg-white/10 px-2.5 py-1 rounded-md text-white/90">
            {currentIndex + 1} of {photos.length}
          </span>
          <span className="hidden sm:inline-block text-xs font-semibold text-[#f59e0b] uppercase tracking-wider bg-[#f59e0b]/15 px-2 py-0.5 rounded">
            {currentPhoto.category}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
          aria-label="Close photo preview (Escape)"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* Prev button (desktop / tablet) */}
      <button
        type="button"
        onClick={onPrev}
        className="hidden sm:flex absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#f59e0b] z-20"
        aria-label="Previous photo (Left arrow)"
      >
        <ChevronLeft className="size-6" />
      </button>

      {/* Main Image & Caption Container */}
      <div className="flex flex-col items-center max-w-5xl max-h-[85vh] w-full z-10">
        <div className="relative w-full h-[45vh] xs:h-[50vh] sm:h-[65vh] flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* Captions */}
        <div className="mt-3 sm:mt-4 text-center max-w-2xl px-4 text-white">
          <h3 className="text-sm sm:text-lg font-bold text-white leading-tight">
            {currentPhoto.title}
          </h3>
          <p className="font-bengali text-xs sm:text-sm text-[#f59e0b] font-medium mt-0.5">
            {currentPhoto.bnTitle}
          </p>
          <p className="text-xs sm:text-sm text-white/75 mt-1 sm:mt-1.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
            {currentPhoto.caption}
          </p>
        </div>

        {/* Mobile bottom nav controls */}
        <div className="flex sm:hidden items-center justify-between w-full max-w-xs mt-3 px-2 z-20">
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/15 active:bg-white/30 text-white text-xs font-semibold transition-colors"
          >
            <ChevronLeft className="size-4" />
            <span>Prev</span>
          </button>
          <span className="font-mono text-xs text-white/70">
            {currentIndex + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/15 active:bg-white/30 text-white text-xs font-semibold transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Next button (desktop / tablet) */}
      <button
        type="button"
        onClick={onNext}
        className="hidden sm:flex absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-[#f59e0b] z-20"
        aria-label="Next photo (Right arrow)"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}
