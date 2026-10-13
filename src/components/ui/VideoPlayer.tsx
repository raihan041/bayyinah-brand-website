"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Video as VideoIcon, Volume2 } from "lucide-react";
import { VideoItem } from "@/data/mediaData";

interface VideoPlayerProps {
  video: VideoItem;
  className?: string;
}

export default function VideoPlayer({ video, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#e5e1d5] bg-[#071f16] shadow-sm transition-all hover:shadow-lg ${className}`}
    >
      {isPlaying ? (
        <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="size-12 rounded-full bg-[#0a5c36]/40 flex items-center justify-center mb-3">
            <Volume2 className="size-6 text-[#f59e0b] animate-pulse" />
          </div>
          <h4 className="text-sm font-bold text-white mb-1">{video.title}</h4>
          <p className="text-xs text-white/70 max-w-sm mb-4 leading-relaxed">
            School video demonstrations are officially hosted on the Bayyinah Ideal School verified Facebook video feed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={video.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1877F2] hover:bg-[#1567d3] text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Watch on Official Facebook Page</span>
              <ExternalLink className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setIsPlaying(false)}
              className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
            >
              Close Preview
            </button>
          </div>
        </div>
      ) : (
        <div className="relative aspect-video w-full cursor-pointer" onClick={() => setIsPlaying(true)}>
          <Image
            src={video.posterSrc}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

          {/* Top badges */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[11px] font-mono font-semibold text-white/90 border border-white/10">
              <VideoIcon className="size-3 text-[#f59e0b]" />
              <span>{video.platform}</span>
            </span>

            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-white/90">
              {video.duration}
            </span>
          </div>

          {/* Center Play Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(true);
            }}
            className="absolute inset-0 m-auto size-14 sm:size-16 rounded-full bg-[#0a5c36]/90 hover:bg-[#0a5c36] text-white flex items-center justify-center shadow-xl backdrop-blur-xs transition-transform duration-300 group-hover:scale-110 focus-visible:outline-2 focus-visible:outline-[#f59e0b]"
            aria-label={`Play video: ${video.title}`}
          >
            <Play className="size-6 text-[#f59e0b] translate-x-0.5 fill-[#f59e0b]" />
          </button>

          {/* Bottom Title & Details */}
          <div className="absolute bottom-3 inset-x-3 text-white">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#f59e0b] font-semibold">
              {video.category} Showcase
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-1">
              {video.title}
            </h4>
            <p className="font-bengali text-xs text-white/75 line-clamp-1 mt-0.5">
              {video.bnTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
