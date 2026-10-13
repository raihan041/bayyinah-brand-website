import type { Metadata } from "next";
import TeachersView from "@/components/sections/TeachersView";
import AdmissionCta from "@/components/sections/AdmissionCta";

export const metadata: Metadata = {
  title: "Teachers & Leadership | Academic Mentors of Bayyinah Ideal School",
  description:
    "Meet the verified academic leadership and faculty mentors of Bayyinah Ideal School in Rampura, Dhaka. Led by scholars with degrees from Dhaka University and leading institutions.",
};

export default function TeachersPage() {
  return (
    <>
      <TeachersView />
      <AdmissionCta />
    </>
  );
}
