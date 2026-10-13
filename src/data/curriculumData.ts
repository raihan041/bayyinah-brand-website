export interface ClassGroup {
  id: string;
  name: string;
  bnName: string;
  grades: string;
  ageGroup: string;
  description: string;
  subjects: string[];
  features: string[];
  accentColor: string;
}

export interface CurriculumPillar {
  title: string;
  bnTitle: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ProprietaryBook {
  title: string;
  bnTitle: string;
  category: string;
  purpose: string;
}

export const curriculumPillars: CurriculumPillar[] = [
  {
    title: "National Curriculum Framework (NCTB)",
    bnTitle: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড অনুসৃত",
    tag: "Academic Foundation",
    description:
      "Strict alignment with Bangladesh National Curriculum and Textbook Board guidelines, offered in both English Version and Bangla Version to prepare students for national academic standards.",
    highlights: [
      "Rigorous Mathematics & Science foundations",
      "Bangla and English literature and language arts",
      "Social Science, Bangladesh studies & ICT literacy",
      "Regular formative evaluations and term examinations",
    ],
    icon: "book-open",
  },
  {
    title: "Integrated Islamic & Moral Ethics",
    bnTitle: "দীনিয়্যাত, কুরআন ও চারিত্রিক উৎকর্ষ",
    tag: "Moral Elevation",
    description:
      "Nurturing sound spiritual values through Quranic recitation with proper Tajweed, foundational Hifz, Hadith memorization, daily prophetic Duas, and practical Islamic character (Adab & Akhlaq).",
    highlights: [
      "Tajweed-centered Quran recitation",
      "Essential Hadith and daily Masnoon Duas",
      "Character building, honesty, and empathy",
      "Tarbiyah integrated across daily classroom life",
    ],
    icon: "heart-handshake",
  },
  {
    title: "Active English Communication & Presentation",
    bnTitle: "ইংরেজি কথোপকথন ও পাবলিক স্পিকিং",
    tag: "Modern Fluency",
    description:
      "A core distinction of Bayyinah: equipping students from early childhood with vocal confidence, phonics, public speaking, and presentation skills so they speak English naturally.",
    highlights: [
      "Spoken English fluency and active dialogue",
      "Classroom presentation and podium speaking practice",
      "Vocabulary building & pronunciation guidance",
      "Regular speech contests and confidence drills",
    ],
    icon: "mic",
  },
  {
    title: "Proprietary Books & Tailored Learning Kits",
    bnTitle: "আমাদের প্রকাশিত বইসমূহ ও বিশেষ শিক্ষাউপকরণ",
    tag: "Exclusive Methodology",
    description:
      "In addition to standard NCTB texts, Bayyinah develops its own custom curriculum books and specialized didactic materials to synthesize general knowledge and moral understanding seamlessly.",
    highlights: [
      "Specially written school workbooks and supplementary texts",
      "Child-friendly illustrated language primers",
      "Hands-on activity sheets and tactile learning kits",
      "Continuously reviewed by academic specialists",
    ],
    icon: "sparkles",
  },
];

export const classGroups: ClassGroup[] = [
  {
    id: "early-years",
    name: "Early Childhood (Play & Nursery)",
    bnName: "প্রাক-প্রাথমিক (প্লে ও নার্সারি)",
    grades: "Play & Nursery",
    ageGroup: "3.5 – 5 Years",
    description:
      "Gentle, play-based early foundation focusing on motor skills, Bangla and English alphabet recognition, phonics, manners, and joyful socialization.",
    subjects: ["Basic English Phonics", "Bangla Barnamala", "Numeracy Play", "Kalima & Short Duas", "Creative Art & Rhymes"],
    features: [
      "Careful emotional nurturing and joyful environment",
      "Sensory tactile toys and alphabet blocks",
      "Safe, carpeted activity zones",
      "Foundational oral communication",
    ],
    accentColor: "#0D6E43",
  },
  {
    id: "kindergarten",
    name: "Kindergarten (K.G. Group)",
    bnName: "কিন্ডারগার্টেন (কে.জি. গ্রুপ)",
    grades: "K.G. Group",
    ageGroup: "5 – 6 Years",
    description:
      "Bridging early discovery with structured learning. Students develop reading, beginner math, handwriting, and daily prayers.",
    subjects: ["English Reading & Writing", "Bangla Bhasha", "Elementary Mathematics", "Arabic Letters & Tajweed", "General Awareness"],
    features: [
      "Spoken English classroom interactions",
      "Neat handwriting practice",
      "Quranic phonetics & Harakat",
      "Interactive group storytelling",
    ],
    accentColor: "#D97706",
  },
  {
    id: "primary",
    name: "Primary Section (Classes 1 – 5)",
    bnName: "প্রাথমিক শাখা (১ম – ৫ম শ্রেণি)",
    grades: "Classes 1, 2, 3, 4, 5",
    ageGroup: "6 – 11 Years",
    description:
      "Core academic development under the NCTB framework (English Version and Bangla Version) combined with Quran recitation, Islamic studies, and presentation training.",
    subjects: [
      "English (Language & Grammar)",
      "Bangla (Sahitya & Byakaran)",
      "Primary Mathematics",
      "Elementary Science",
      "Bangladesh & Global Studies",
      "Quran Majid & Islamic Studies",
    ],
    features: [
      "Public speaking and classroom presentation drills",
      "School-developed supplementary textbooks",
      "Practical science demonstrations",
      "Values-based character mentorship",
    ],
    accentColor: "#1E3A8A",
  },
  {
    id: "junior-secondary",
    name: "Junior Section (Classes 6 – 8)",
    bnName: "নিম্ন মাধ্যমিক শাখা (৬ষ্ঠ – ৮ম শ্রেণি)",
    grades: "Classes 6, 7, 8",
    ageGroup: "11 – 14 Years",
    description:
      "Deepening analytical thinking, mathematical mastery, scientific inquiry, information technology, and principled leadership.",
    subjects: [
      "English Paper I & II",
      "Bangla Paper I & II",
      "General Mathematics",
      "General Science & Laboratory",
      "Information & Communication Tech (ICT)",
      "Islam & Moral Education",
      "History & Social Science",
    ],
    features: [
      "Science laboratory experiments and observations",
      "ICT hands-on computer lab sessions",
      "Structured debates and English speeches",
      "Advanced Hifz and Tajweed recitation options",
    ],
    accentColor: "#0F766E",
  },
  {
    id: "secondary",
    name: "Secondary Section (Classes 9 – 10)",
    bnName: "মাধ্যমিক শাখা (৯ম – ১০ম শ্রেণি)",
    grades: "Classes 9 & 10",
    ageGroup: "14 – 16 Years",
    description:
      "Comprehensive preparation for national board certifications with academic rigor, career guidance, and strong moral grounding.",
    subjects: [
      "Higher Mathematics / General Math",
      "Physics, Chemistry & Biology",
      "English & Bangla Literature",
      "Information & Communication Technology",
      "Islamic Studies & Ethics",
      "Bangladesh & World Civilization",
    ],
    features: [
      "Board examination coaching and continuous assessment",
      "Well-equipped laboratories for practicals",
      "Moral mentorship for young adults",
      "Leadership and social responsibility guidance",
    ],
    accentColor: "#064E2B",
  },
];

export const educationalJourney = [
  {
    step: "01",
    tag: "FOUNDATION · NURTURING",
    title: "Gentle Awakening & Sensory Play",
    bnTitle: "ভিত্তি গঠন ও আনন্দময় শৈশব",
    age: "Ages 3.5 – 5",
    color: "#0D6E43",
    description:
      "Every child begins with warmth and emotional security. In Play and Nursery, learning is a joyful discovery of sounds, colors, letters, and foundational good manners (Adab).",
    badges: ["Sensory Play", "Bangla & English Phonics", "Daily Masnoon Duas", "Motor Skills"],
  },
  {
    step: "02",
    tag: "LITERACY · CONFIDENCE",
    title: "Active Reading & English Fluency",
    bnTitle: "পঠনদক্ষতা ও আত্মবিশ্বাসী প্রকাশ",
    age: "Ages 5 – 8",
    color: "#D97706",
    description:
      "Building confidence at the school podium. Students practice speaking in front of peers, master reading in Bangla and English, and cultivate Tajweed Quranic phonetics.",
    badges: ["Podium Presentations", "Tajweed Recitation", "Arithmetic Thinking", "Handwriting Mastery"],
  },
  {
    step: "03",
    tag: "EXPLORATION · INTEGRATION",
    title: "Scientific Inquiry & Proprietary Texts",
    bnTitle: "জ্ঞানচর্চা ও সৃজনশীল অনুসন্ধান",
    age: "Ages 8 – 12",
    color: "#1E3A8A",
    description:
      "Connecting science with faith. Students utilize NCTB curricula and Bayyinah’s exclusive books to explore nature, science, computer literacy, and the stories of righteous scholars.",
    badges: ["Hands-on Science", "ICT Lab Coding", "Exclusive BIS Books", "Creative Calligraphy"],
  },
  {
    step: "04",
    tag: "CHARACTER · LEADERSHIP",
    title: "Secondary Excellence & Moral Purpose",
    bnTitle: "উচ্চতর মেধা ও নৈতিক নেতৃত্ব",
    age: "Ages 12 – 16",
    color: "#064E2B",
    description:
      "Graduating well-rounded young men and women prepared for higher academic success while carrying deep piety, intellectual clarity, and service to society.",
    badges: ["Board Exam Mastery", "Analytical Science", "Leadership & Ethics", "Global Perspective"],
  },
];
