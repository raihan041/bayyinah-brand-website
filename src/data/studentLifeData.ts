export interface StudentActivity {
  id: string;
  title: string;
  bnTitle: string;
  category: "Academics" | "Celebrations" | "Spiritual" | "Creative" | "Co-curricular";
  description: string;
  bnDescription: string;
  highlights: string[];
  image: string;
  altText: string;
}

export const studentActivities: StudentActivity[] = [
  {
    id: "annual-book-distribution",
    title: "National Book Distribution Day",
    bnTitle: "বই বিতরণী উৎসব",
    category: "Celebrations",
    description:
      "A cherished annual tradition where students joyfully receive brand-new academic textbooks along with Bayyinah’s proprietary workbooks, celebrating the start of an inspiring academic voyage.",
    bnDescription:
      "নতুন শিক্ষাবর্ষের শুরুতে শিক্ষার্থীদের হাতে নতুন পাঠ্যপুস্তক তুলে দেওয়ার বর্ণাঢ্য আয়োজন। ওদের উচ্ছ্বসিত হাসি ও বেড়ে ওঠা আমাদের অনুপ্রাণিত করে।",
    highlights: ["Free textbook distribution", "Bayyinah proprietary learning kits", "Principal's welcome address", "Parent-teacher camaraderie"],
    image: "/images/book-distribution.jpg",
    altText: "Students in modest school uniform, hijabs, and prayer caps smiling cheerfully holding new textbooks",
  },
  {
    id: "public-speaking-presentations",
    title: "English Presentation & Public Speaking",
    bnTitle: "ইংরেজি বক্তব্য ও উপস্থাপনা অনুশীলন",
    category: "Academics",
    description:
      "Classroom podium sessions where students overcome stage fright and deliver articulate speeches in English, fostering lifelong communication prowess and intellectual poise.",
    bnDescription:
      "ছোটবেলা থেকেই শিক্ষার্থীদের স্টেজে দাঁড়িয়ে কথা বলার জড়তা কাটিয়ে সাবলীল ইংরেজি বক্তৃতায় দক্ষ করে তোলা হয়।",
    highlights: ["Weekly podium speech drills", "Interactive debate clubs", "Vocabulary acquisition games", "Confidence development"],
    image: "/images/english-presentation.jpg",
    altText: "Student in smart school uniform presenting at podium before classroom peers in hijabs and formal school attire",
  },
  {
    id: "quran-tajweed-memorization",
    title: "Quran Recitation with Tajweed & Hifz",
    bnTitle: "তাজবীদসহ কুরআন তিলাওয়াত ও হিফজ",
    category: "Spiritual",
    description:
      "Daily morning and specialized periods dedicated to melodious Quranic recitation, precise Makhraj, Hadith studies, and moral reflection under certified Quran mentors.",
    bnDescription:
      "বিশুদ্ধ মাখরাজ ও তাজবীদের সাথে কুরআন তিলাওয়াত এবং হাদীসের মর্মার্থ অনুধাবনের মাধ্যমে শিক্ষার্থীদের অন্তরে খোদাভীতি ও মানবিকতার উন্মেষ।",
    highlights: ["Authentic Makhraj articulation", "Surah memorization with meaning", "Daily prophetic Duas", "Tarbiyah and good character drills"],
    image: "/images/quran-tajweed-study.jpg",
    altText: "Students in white hijabs and prayer caps reciting the Quran with wooden rehal bookstands under teacher guidance",
  },
  {
    id: "science-stem-experiments",
    title: "Hands-on Science & STEM Exploration",
    bnTitle: "ব্যবহারিক বিজ্ঞান ও ল্যাবরেটরি অনুসন্ধান",
    category: "Academics",
    description:
      "Nurturing budding scientists through experimental inquiry, biological specimen observation with microscopes, physics demonstrations, and analytical problem-solving.",
    bnDescription:
      "বিজ্ঞানকে কেবল বইয়ের পাতায় সীমাবদ্ধ না রেখে ল্যাবে বাস্তব পরীক্ষা-নিরীক্ষার মাধ্যমে শিক্ষার্থীদের সৃষ্টিশীল চিন্তাকে শাণিত করা হয়।",
    highlights: ["Microscope specimen analysis", "Interactive group laboratory projects", "Scientific journal documentation", "Safety and lab protocol training"],
    image: "/images/science-stem-lab.jpg",
    altText: "Female students and teacher in hijabs and male students in full trousers conducting biology microscope experiments",
  },
  {
    id: "calligraphy-arts",
    title: "Arabic & Bengali Calligraphy Workshop",
    bnTitle: "আরবি ও বাংলা চারুলিপি কর্মশালা",
    category: "Creative",
    description:
      "Celebrating the rich aesthetic heritage of Islamic and Bengali arts. Students learn traditional reed-pen calligraphy, developing patience, fine motor control, and creative beauty.",
    bnDescription:
      "ঐতিহ্যবাহী ক্যালিগ্রাফি ও চিত্রাঙ্কনের মাধ্যমে শিক্ষার্থীদের সৃজনশীলতা, ধৈর্য ও নান্দনিক রুচির নান্দনিক বিকাশ ঘটে।",
    highlights: ["Traditional reed pen and ink work", "Bangla & Arabic typography", "Art exhibitions on campus", "Focus and patience building"],
    image: "/images/art-calligraphy.jpg",
    altText: "Students and teacher in hijabs and Islamic school attire practicing Arabic and Bengali calligraphy with reed pens",
  },
  {
    id: "library-reading-culture",
    title: "Campus Library & Research Corner",
    bnTitle: "স্কুল লাইব্রেরি ও বই পড়ার আনন্দ",
    category: "Academics",
    description:
      "A quiet sanctuary filled with illustrated encyclopedias, Islamic history, science stories, and classical literature, inspiring an insatiable thirst for lifelong reading.",
    bnDescription:
      "উন্মুক্ত লাইব্রেরিতে শিক্ষার্থীরা দেশ-বিদেশের শিক্ষামূলক বই, ইতিহাস ও বিজ্ঞান পাঠে নিমগ্ন থাকে।",
    highlights: ["Curated child-safe literature", "Weekly reading circles", "Book review presentations", "Independent research guidance"],
    image: "/images/school-library.jpg",
    altText: "Students in modest hijabs, prayer caps, and long trousers reading together in the Bayyinah school library",
  },
  {
    id: "computer-ict-literacy",
    title: "Digital ICT & Computer Education",
    bnTitle: "কম্পিউটার শিক্ষা ও ডিজিটাল সাক্ষরতা",
    category: "Academics",
    description:
      "Preparing 21st-century learners with fundamental computer operations, keyboard typing, coding logic, and responsible digital navigation under guided teacher supervision.",
    bnDescription:
      "আধুনিক তথ্যপ্রযুক্তির সুফলকে কাজে লাগিয়ে ভবিষ্যৎ পৃথিবীর উপযোগী দক্ষ নাগরিক তৈরিতে আমাদের আইসিটি ল্যাব সার্বক্ষণিক সক্রিয়।",
    highlights: ["Individual computer workstations", "Typing fluency & basic office tools", "Introduction to computational logic", "Ethical internet awareness"],
    image: "/images/computer-ict-lab.jpg",
    altText: "Students and teacher in hijabs and full-length trousers learning coding and computing in the ICT lab",
  },
  {
    id: "kindergarten-early-discovery",
    title: "Joyful Early Childhood Discoveries",
    bnTitle: "প্রাক-প্রাথমিক আনন্দময় শিখন",
    category: "Co-curricular",
    description:
      "In Nursery and Kindergarten, learning happens through laughter, songs, colorful wooden puzzles, sensory blocks, and affectionate teacher guidance.",
    bnDescription:
      "স্নেহময় পরিবেশে খেলাচ্ছলে বর্ণমালা চেনা, ছড়া গান ও সুন্দর ব্যবহারের প্রথম পাঠ পায় আমাদের ছোট্ট সোনামণিরা।",
    highlights: ["Sensory play equipment", "Nursery rhymes and moral stories", "Loving teacher-student bond", "Safe carpeted play arenas"],
    image: "/images/nursery-kindergarten.jpg",
    altText: "Kindergarten children in modest attire and teacher in hijab exploring wooden alphabet blocks and books",
  },
];

export const studentLifeHighlights = [
  {
    title: "Moral & Cultural Atmosphere",
    description:
      "A respectful school community where greetings of Salam, honesty, humility, and mutual care are practiced everyday by students and teachers alike.",
  },
  {
    title: "Holistic Health & Cleanliness",
    description:
      "Emphasis on personal hygiene, Sunnah dining manners, daily physical activity, and a clean campus environment for optimal student wellbeing.",
  },
  {
    title: "Parent-Teacher Partnership",
    description:
      "Regular open consultations and transparent academic reporting, ensuring families and teachers work together in nurturing each child's potential.",
  },
];
