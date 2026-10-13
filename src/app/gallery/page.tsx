import type { Metadata } from "next";
import GalleryHeader from "@/components/sections/GalleryHeader";
import GalleryClient from "@/components/sections/GalleryClient";
import AdmissionCta from "@/components/sections/AdmissionCta";

export const metadata: Metadata = {
  title: "Photos & Videos Gallery | Authentic Campus Life at Bayyinah",
  description:
    "Explore the photo and video gallery of Bayyinah Ideal School in Rampura, Dhaka. Watch student English speeches, Quran recitation showcases, and classroom activities.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHeader />

      {/* Main Interactive Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fdfbf7] border-b border-[#e5e1d5]">
        <div className="site-container">
          <GalleryClient />
        </div>
      </section>

      {/* Admission CTA */}
      <AdmissionCta />
    </>
  );
}
