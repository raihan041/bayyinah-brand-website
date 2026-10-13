export interface TeacherProfile {
  id: string;
  name: string;
  bnName: string;
  role: string;
  bnRole: string;
  category: "Leadership" | "Faculty" | "Specialist";
  department: string;
  qualifications: string[];
  bio: string;
  bnBio?: string;
  experience?: string;
  specialization?: string[];
  isLeadership?: boolean;
}

export const leadershipProfiles: TeacherProfile[] = [
  {
    id: "principal",
    name: "Md. Nasir Bin Ismail",
    bnName: "মো. নাসির বিন ইসমাঈল",
    role: "Principal",
    bnRole: "অধ্যক্ষ",
    category: "Leadership",
    department: "Academic Leadership & School Administration",
    qualifications: [
      "LL.B., LL.M. — University of Dhaka (ঢাকা বিশ্ববিদ্যালয়)",
      "Dawra-e-Hadith (Takmil) — Al-Haiatul Ulya (হাইয়্যাতুল উলইয়া)",
      "B.A. (Fazil) — Islamic University (ইসলামিক ইউনিভার্সিটি)",
      "Former Vice Principal — Iqra Bangladesh School (ইকরা বাংলাদেশ স্কুল)",
    ],
    bio: "Guiding Bayyinah with a deep commitment to harmonizing modern higher academic standards with authentic prophetic morals. Under his stewardship, the school bridges the divide between religious awareness and contemporary educational readiness.",
    bnBio:
      "জাগতিক জ্ঞানকে বাদ দিয়ে শুধু ধর্মীয় জ্ঞান যেমন পরিপূর্ণ নয়, অনুরূপভাবে ধর্মীয় জ্ঞানকে বাদ দিয়ে জাগতিক জ্ঞানও কল্যাণকর নয়। একুশ শতকের তরুণ প্রজন্মকে নৈতিক ও বুদ্ধিবৃত্তিক উভয় ক্ষেত্রে নেতৃত্ব দিতে সক্ষম করাই আমাদের লক্ষ্য।",
    experience: "15+ Years in Academic Administration & Institutional Governance",
    specialization: ["Institutional Leadership", "Islamic Jurisprudence & Ethics", "Curriculum Harmonization"],
    isLeadership: true,
  },
  {
    id: "chairman",
    name: "Abu Hurairah Al-Maruf",
    bnName: "আবু হুরায়রা আল-মারুফ",
    role: "Chairman",
    bnRole: "চেয়ারম্যান, পরিচালনা পর্ষদ",
    category: "Leadership",
    department: "School Management Board & Strategic Development",
    qualifications: [
      "M.S.S. in Social Welfare — Institute of Social Welfare and Research, University of Dhaka (ঢাকা বিশ্ববিদ্যালয়)",
      "M.A. in Hadith — Islamic Arabic University (ইসলামি আরবি বিশ্ববিদ্যালয়)",
      "B.S.S. (Honours) — National University (জাতীয় বিশ্ববিদ্যালয়)",
      "B.A. (Fazil) — Islamic University (ইসলামি বিশ্ববিদ্যালয়)",
      "Dawra-e-Hadith (Takmil/Masters) — Al-Haiatul Ulya (হাইয়্যাতুল উলয়্যা)",
      "Former Instructor — Saifur's (Job Program)",
    ],
    bio: "A visionary educator combining social research from Dhaka University with classical Islamic scholarship. He leads the development of Bayyinah's proprietary textbooks and dynamic pedagogy.",
    bnBio:
      "সৃষ্টিশীলতা ও অতুলনীয় মানবিক চরিত্রের ব্যক্তিত্ব তৈরির প্রাথমিক স্তম্ভ হচ্ছে শিক্ষাপ্রতিষ্ঠান। শিক্ষার্থীদের বিশুদ্ধ জ্ঞান বিতরণ ও ধর্মীয় চর্চাকে সমুন্নত রেখে পরিশুদ্ধ মনের সুনাগরিক হিসেবে গড়ে তোলা আমাদের মূলব্রত।",
    experience: "Extensive background in Social Welfare, Hadith Scholarship & Educational Research",
    specialization: ["Proprietary Textbook Development", "Social Pedagogics", "Communication & Job Readiness Training"],
    isLeadership: true,
  },
];

export const verifiedFaculty: TeacherProfile[] = [
  {
    id: "sakib-english",
    name: "Sajjadur Rahman Sakib",
    bnName: "সাজ্জাদুর রহমান সাকিব",
    role: "Lead English Communication & Presentation Mentor",
    bnRole: "প্রভাষক, ইংরেজি যোগাযোগ ও উপস্থাপনা",
    category: "Faculty",
    department: "English Language & Communication Wing",
    qualifications: [
      "Spoken English & Phonetics Specialist",
      "Lead Trainer for Student Public Speaking Contests",
    ],
    bio: "Pioneering interactive English communication sessions where students as young as Class 1 practice spontaneous speaking, vocabulary acquisition, and podium presentations.",
    specialization: ["Public Speaking", "Child Spoken English", "Stage Presentation Confidence"],
  },
];

export const academicDepartments = [
  {
    name: "English Communication & Public Speaking",
    bnName: "ইংরেজি কথোপকথন ও উপস্থাপনা বিভাগ",
    description:
      "Dedicated instructors training students in verbal fluency, pronunciation, grammar, and confident stage presentations.",
    keyFocus: ["Phonics & Vocabulary", "Interactive Dialogue", "Debate & Speech"],
  },
  {
    name: "Islamic Studies & Quranic Sciences",
    bnName: "কুরআন ও দীনিয়্যাত বিভাগ",
    description:
      "Expert Qaris and Islamic scholars guiding Tajweed recitation, foundational Hifz, Hadith memorization, and character mentoring.",
    keyFocus: ["Makhraj & Tajweed", "Daily Masnoon Duas", "Tarbiyah & Akhlaq"],
  },
  {
    name: "Science, Mathematics & ICT",
    bnName: "বিজ্ঞান, গণিত ও তথ্যপ্রযুক্তি বিভাগ",
    description:
      "Facilitating conceptual understanding in mathematics, practical science observations, and hands-on computer literacy.",
    keyFocus: ["Analytical Thinking", "Science Lab Experiments", "Digital ICT Literacy"],
  },
  {
    name: "Bangla Language & Social Studies",
    bnName: "বাংলা ভাষা ও সমাজবিদ্যা বিভাগ",
    description:
      "Cultivating love for the mother tongue, Bangla literary appreciation, national history, and global awareness.",
    keyFocus: ["Literary Expression", "Creative Writing", "History & Heritage"],
  },
  {
    name: "Early Years & Kindergarten Mentorship",
    bnName: "প্রাক-প্রাথমিক ও নার্সারি যত্ন বিভাগ",
    description:
      "Gentle, trained educators creating a safe, nurturing, play-based environment for our youngest learners.",
    keyFocus: ["Sensory Development", "Joyful Learning", "Habit Formation"],
  },
];
