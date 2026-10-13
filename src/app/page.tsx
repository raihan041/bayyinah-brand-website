import Hero from "@/components/sections/Hero";
import SchoolIntro from "@/components/sections/SchoolIntro";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CurriculumPreview from "@/components/sections/CurriculumPreview";
import LearningJourney from "@/components/sections/LearningJourney";
import TeacherPreview from "@/components/sections/TeacherPreview";
import StudentLifePreview from "@/components/sections/StudentLifePreview";
import MediaShowcase from "@/components/sections/MediaShowcase";
import NoticeBanner from "@/components/sections/NoticeBanner";
import AdmissionCta from "@/components/sections/AdmissionCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SchoolIntro />
      <WhyChooseUs />
      <CurriculumPreview />
      <LearningJourney />
      <TeacherPreview />
      <StudentLifePreview />
      <MediaShowcase />
      <NoticeBanner />
      <AdmissionCta />
    </>
  );
}
