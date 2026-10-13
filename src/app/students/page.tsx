import type { Metadata } from "next";
import StudentsView from "@/components/sections/StudentsView";
import AdmissionCta from "@/components/sections/AdmissionCta";

export const metadata: Metadata = {
  title: "Student Life & Community | Bayyinah Ideal School",
  description:
    "Discover student life at Bayyinah Ideal School in Rampura, Dhaka. Celebrations, annual book day, science experiments, public speaking, and moral mentorship.",
};

export default function StudentsPage() {
  return (
    <>
      <StudentsView />
      <AdmissionCta />
    </>
  );
}
