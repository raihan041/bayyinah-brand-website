import type { Metadata } from "next";
import CurriculumView from "@/components/sections/CurriculumView";
import AdmissionCta from "@/components/sections/AdmissionCta";

export const metadata: Metadata = {
  title: "Our Curriculum | NCTB English & Bangla Version with Islamic Studies",
  description:
    "Explore Bayyinah Ideal School's curriculum: NCTB English Version and Bangla Version, combined with Quranic Tajweed, proprietary books, and spoken English communication from Nursery to Class 10.",
};

export default function CurriculumPage() {
  return (
    <>
      <CurriculumView />
      <AdmissionCta />
    </>
  );
}
