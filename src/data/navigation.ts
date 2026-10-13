export interface NavItem {
  title: string;
  bnTitle: string;
  href: string;
  badge?: string;
}

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    bnTitle: "হোম",
    href: "/",
  },
  {
    title: "Our Curriculum",
    bnTitle: "শিক্ষাক্রম",
    href: "/our-curriculum",
  },
  {
    title: "Teachers",
    bnTitle: "শিক্ষকমণ্ডলী",
    href: "/teachers",
  },
  {
    title: "Student Life",
    bnTitle: "শিক্ষার্থীদের জীবন",
    href: "/students",
  },
  {
    title: "Photos & Videos",
    bnTitle: "গ্যালারি",
    href: "/gallery",
  },
  {
    title: "Contact Us",
    bnTitle: "যোগাযোগ",
    href: "/contact",
  },
];

export const footerQuickLinks: NavItem[] = [
  { title: "About Bayyinah", bnTitle: "বাইয়্যিনাহ পরিচিতি", href: "/#about-school" },
  { title: "Why Choose Us", bnTitle: "কেন বাইয়্যিনাহ?", href: "/#why-choose-us" },
  { title: "Curriculum Stream", bnTitle: "পাঠ্যক্রম রূপরেখা", href: "/our-curriculum" },
  { title: "English & Bangla Version", bnTitle: "ভার্সন পরিচিতি", href: "/our-curriculum#class-groups" },
  { title: "Leadership & Faculty", bnTitle: "পরিচালনা ও শিক্ষকবৃন্দ", href: "/teachers" },
  { title: "Photo & Video Gallery", bnTitle: "ছবি ও ভিডিও", href: "/gallery" },
  { title: "Admission Enquiry", bnTitle: "ভর্তি আবেদন", href: "/contact#enquiry-form" },
  { title: "Privacy Policy", bnTitle: "গোপনীয়তা নীতি", href: "/privacy-policy" },
];
