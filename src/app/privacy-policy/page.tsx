import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { schoolInfo } from "@/data/schoolInfo";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | Bayyinah Ideal School",
  description:
    "Privacy and data protection disclosure for Bayyinah Ideal School admission enquiries and website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a5c36] hover:underline mb-8"
        >
          <ArrowLeft className="size-3.5" />
          <span>Back to Home</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e5e1d5] shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-6 border-b border-neutral-100">
            <div className="size-12 rounded-2xl bg-[#0a5c36]/10 text-[#0a5c36] flex items-center justify-center">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#182621]">
                Privacy &amp; Data Protection Policy
              </h1>
              <p className="text-xs text-[#576861] mt-0.5 font-mono">
                Last Updated: Academic Year 2024–2026 · Bayyinah Ideal School (Managing Board)
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-[#576861] leading-relaxed">
            <h2 className="text-base font-bold text-[#182621]">1. Institutional Commitment</h2>
            <p>
              Bayyinah Ideal School (School Code: {schoolInfo.code}, BIIN: {schoolInfo.biin}) respects
              the privacy of students, parents, and prospective families. This policy details how we
              collect, handle, and safeguard information submitted through our official website and
              admission desk.
            </p>

            <h2 className="text-base font-bold text-[#182621]">2. Admission Enquiry Information</h2>
            <p>
              When parents or guardians submit an enquiry via our admission form, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Parent or guardian full name</li>
              <li>Contact telephone or WhatsApp number</li>
              <li>Optional student name and email address</li>
              <li>Preferred class grade (Nursery through Class 10) and curriculum version</li>
              <li>Specific academic or campus visit questions</li>
            </ul>
            <p>
              This information is utilized solely for communicating admission circulars, arranging
              campus tours, and answering parental queries. We never sell, lease, or distribute
              parent contact details to third-party commercial marketing entities.
            </p>

            <h2 className="text-base font-bold text-[#182621]">3. Student Privacy &amp; Media Consent</h2>
            <p>
              In accordance with national educational and child safety standards:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                We do not publish private student records, home addresses, or confidential academic marks.
              </li>
              <li>
                Photographs and video showcases of student presentations and events are captured during
                school activities with parental authorization and displayed exclusively for educational
                and school community purposes.
              </li>
              <li>
                Parents may request the review or removal of any visual media featuring their child by
                contacting the principal’s office.
              </li>
            </ul>

            <h2 className="text-base font-bold text-[#182621]">4. Contact &amp; Grievances</h2>
            <p>
              For inquiries regarding this privacy statement or your submitted information:
            </p>
            <div className="p-4 rounded-xl bg-[#f6f3eb] border border-[#e5e1d5] text-xs text-[#182621] space-y-1">
              <p>
                <strong>Managing Board Desk:</strong> {schoolInfo.contact.email}
              </p>
              <p>
                <strong>Telephone Hotline:</strong> {schoolInfo.contact.phones[0].number}
              </p>
              <p>
                <strong>Campus Address:</strong> {schoolInfo.contact.address.fullEn}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
