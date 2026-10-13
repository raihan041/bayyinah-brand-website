import type { Metadata } from "next";
import ContactView from "@/components/sections/ContactView";

export const metadata: Metadata = {
  title: "Contact Us & Admission Enquiry | Bayyinah Ideal School Rampura",
  description:
    "Contact Bayyinah Ideal School in East Rampura, DIT Road, Dhaka-1219. Phone: 01781-509592, 01680076613. Enquire about admissions for Nursery through Class 10.",
};

export default function ContactPage() {
  return <ContactView />;
}
