export interface SchoolInfo {
  name: {
    en: string;
    bn: string;
    short: string;
  };
  motto: {
    bn: string;
    en: string;
  };
  philosophy: {
    bn: string;
    en: string;
    author: string;
  };
  quranicTheme: {
    verseArabic: string;
    translationEn: string;
    surah: string;
  };
  code: string;
  biin: string;
  established: number;
  contact: {
    address: {
      street: string;
      area: string;
      city: string;
      postalCode: string;
      country: string;
      fullEn: string;
      fullBn: string;
    };
    phones: Array<{
      number: string;
      raw: string;
      label: string;
      primary?: boolean;
    }>;
    email: string;
    facebook: string;
    facebookPageId: string;
    officeHours: {
      weekdays: string;
      saturday: string;
      friday: string;
    };
  };
  currentNotice: {
    title: string;
    date: string;
    category: string;
    description: string;
    isCurrent: boolean;
  };
  quickStats: Array<{
    label: string;
    value: string;
    sublabel: string;
  }>;
}

export const schoolInfo: SchoolInfo = {
  name: {
    en: "Bayyinah Ideal School",
    bn: "বাইয়্যিনাহ আইডিয়াল স্কুল",
    short: "BIS",
  },
  motto: {
    bn: "দুনিয়া ও আখিরাতের কল্যাণে...",
    en: "For the good of this world and the Hereafter...",
  },
  philosophy: {
    bn: "জাগতিক জ্ঞানকে বাদ দিয়ে শুধু ধর্মীয় জ্ঞান যেমন পরিপূর্ণ নয়, অনুরূপভাবে ধর্মীয় জ্ঞানকে বাদ দিয়ে জাগতিক জ্ঞানও কল্যাণকর নয় ৷",
    en: "Just as worldly knowledge without religious knowledge is not complete, likewise religious knowledge without worldly knowledge is not beneficial.",
    author: "বাইয়্যিনাহ",
  },
  quranicTheme: {
    verseArabic: "إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ",
    translationEn: "Only the knowledgeable servants fear Allah.",
    surah: "Surah Fatir (35:28)",
  },
  code: "470965",
  biin: "02045",
  established: 2020,
  contact: {
    address: {
      street: "17, East-Rampura, DIT Road (Main Road)",
      area: "Rampura Bazar",
      city: "Dhaka",
      postalCode: "1219",
      country: "Bangladesh",
      fullEn: "17, East-Rampura, DIT Road (Main Road), Rampura Bazar, Dhaka-1219, Bangladesh",
      fullBn: "১৭, ইস্ট-রামপুরা, ডিআইটি রোড (মেইন রোড), রামপুরা বাজার, ঢাকা-১২১৯",
    },
    phones: [
      {
        number: "01781-509592",
        raw: "+8801781509592",
        label: "Information & Admission Office",
        primary: true,
      },
      {
        number: "01680076613",
        raw: "+8801680076613",
        label: "Helpline & Management Desk",
      },
    ],
    email: "bismanagingboard@gmail.com",
    facebook: "https://www.facebook.com/bayyinahidealscl/?locale=bn_IN",
    facebookPageId: "100082993039140",
    officeHours: {
      weekdays: "Sunday – Thursday: 8:00 AM – 3:30 PM",
      saturday: "Saturday: 9:00 AM – 1:00 PM",
      friday: "Friday: Closed (Jummah)",
    },
  },
  currentNotice: {
    title: "Admission is going on for upcoming academic session",
    date: "24 Sep",
    category: "Academic",
    description:
      "Admissions open for Play, Nursery, Kindergarten, and Classes 1 to 10 in English Version and Bangla Version. Collect registration forms from campus or enquire online.",
    isCurrent: true,
  },
  quickStats: [
    {
      label: "Foundation Year",
      value: "2020",
      sublabel: "Verified Establishment",
    },
    {
      label: "Curriculum Stream",
      value: "Dual Version",
      sublabel: "English Version & Bangla Version",
    },
    {
      label: "Official Accreditations",
      value: "BIIN 02045",
      sublabel: "School Code 470965",
    },
    {
      label: "Classes Offered",
      value: "Nursery – Class 10",
      sublabel: "Early Years to Secondary",
    },
  ],
};
