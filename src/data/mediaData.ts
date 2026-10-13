export interface PhotoItem {
  id: string;
  title: string;
  bnTitle: string;
  category: "Classroom" | "Celebrations" | "Spiritual" | "Arts & STEM" | "Campus";
  src: string;
  alt: string;
  caption: string;
  bnCaption: string;
  aspectRatio: "16:9" | "4:3" | "1:1";
}

export interface VideoItem {
  id: string;
  title: string;
  bnTitle: string;
  category: "Presentations" | "Recitation" | "Academics" | "Events";
  description: string;
  posterSrc: string;
  duration: string;
  platform: "Facebook" | "YouTube" | "Campus Archive";
  sourceUrl: string;
  embedId?: string;
  isAvailable: boolean;
}

export const photoGallery: PhotoItem[] = [
  {
    id: "photo-1",
    title: "Collaborative Academic Learning",
    bnTitle: "শ্রেণিকক্ষে দলীয় শিখন ও পাঠচর্চা",
    category: "Classroom",
    src: "/images/hero-learning.jpg",
    alt: "Bayyinah Ideal School students with female students wearing neat hijabs and male students in full-length trousers studying together in classroom",
    caption: "Students engaged in interactive discussion and group problem-solving in a bright, modern Islamic classroom.",
    bnCaption: "শ্রেণিকক্ষে আনন্দঘন পরিবেশে সহপাঠীদের সাথে দলীয় শিখন ও আলোচনায় নিমগ্ন শিক্ষার্থীরা।",
    aspectRatio: "16:9",
  },
  {
    id: "photo-2",
    title: "English Speech & Confidence Drills",
    bnTitle: "ইংরেজি বক্তৃতা ও উপস্থাপনা অনুশীলন",
    category: "Classroom",
    src: "/images/english-presentation.jpg",
    alt: "Student speaking at Bayyinah Ideal School podium before audience of peers in hijabs and formal school uniform",
    caption: "Classroom podium sessions instilling natural poise, clear articulation, and public speaking courage.",
    bnCaption: "পডিয়ামে দাঁড়িয়ে নির্ভীক চিত্তে বক্তব্য উপস্থাপন ও ইংরেজি ভাষার দখল চর্চা।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-3",
    title: "National Book Distribution Celebration",
    bnTitle: "জাতীয় পাঠ্যপুস্তক বিতরণ উৎসব",
    category: "Celebrations",
    src: "/images/book-distribution.jpg",
    alt: "Primary school students in white hijabs, prayer caps, and full trousers joyfully holding new textbooks in courtyard",
    caption: "Joyful faces receiving new academic books and Bayyinah's custom workbooks on Book Day.",
    bnCaption: "বই বিতরণী উৎসবে নতুন পাঠ্যপুস্তক হাতে হাসিমুখে শিক্ষার্থীরা।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-4",
    title: "Hands-on Science & Microscope Observation",
    bnTitle: "বিজ্ঞানাগারে মাইক্রোস্কোপে পর্যবেক্ষণ",
    category: "Arts & STEM",
    src: "/images/science-stem-lab.jpg",
    alt: "Students and teacher in hijabs and lab coats observing biological specimens using a microscope",
    caption: "Bridging textbook concepts with empirical discovery in our well-equipped school science laboratory.",
    bnCaption: "বিজ্ঞানের জটিল তত্ত্বসমূহ হাতে-কলমে ল্যাবরেটরিতে প্রমাণের মাধ্যমে বাস্তবিক শিখন।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-5",
    title: "Quran Recitation with Tajweed & Duas",
    bnTitle: "বিশুদ্ধ তাজবীদসহ কুরআন তিলাওয়াত",
    category: "Spiritual",
    src: "/images/quran-tajweed-study.jpg",
    alt: "Students in white hijabs and prayer caps reciting Quran on traditional wooden rehal bookstands with teacher guidance",
    caption: "Daily Quranic phonetics and character mentoring under certified teachers of Islamic sciences.",
    bnCaption: "অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে বিশুদ্ধ উচ্চারণে পবিত্র কুরআন তিলাওয়াত ও আখলাক শিক্ষা।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-6",
    title: "School Library & Research Reading",
    bnTitle: "বিদ্যালয় গ্রন্থাগারে নীরব পাঠচর্চা",
    category: "Classroom",
    src: "/images/school-library.jpg",
    alt: "Students in hijabs, prayer caps, and long trousers reading together at a wooden library table",
    caption: "Quiet hours in the campus library discovering science encyclopedias and inspiring literature.",
    bnCaption: "স্কুল লাইব্রেরিতে উন্মুক্ত বইয়ের সান্নিধ্যে জ্ঞানপিপাসা মেটানোর সুন্দর মুহূর্ত।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-7",
    title: "Traditional Arabic & Bengali Calligraphy",
    bnTitle: "আরবি ও বাংলা বর্ণশিল্প অনুশীলন",
    category: "Arts & STEM",
    src: "/images/art-calligraphy.jpg",
    alt: "Students and teacher in modest hijabs writing Arabic and Bengali calligraphy with reed pens and ink",
    caption: "Nurturing aesthetic discernment and disciplined patience through the traditional art of the pen.",
    bnCaption: "কলম ও কালির সমন্বয়ে বর্ণিল ক্যালিগ্রাফি অনুশীলনের মাধ্যমে নান্দনিক রুচির উন্মেষ।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-8",
    title: "Morning Assembly & Campus Discipline",
    bnTitle: "সকালের প্রাত্যহিক সমাবেশ ও শৃঙ্খলা",
    category: "Campus",
    src: "/images/campus-assembly.jpg",
    alt: "Students in disciplined rows with female students in white hijabs and male students in prayer caps and full trousers at morning assembly",
    caption: "Daily morning assembly fostering national pride, mutual respect, and disciplined punctuality.",
    bnCaption: "প্রতিদিনের শুরুতে শপথ বাক্য ও শৃঙ্খলার মধ্য দিয়ে নতুন দিনের পথচলা শুরু।",
    aspectRatio: "16:9",
  },
  {
    id: "photo-9",
    title: "Early Childhood Play & Alphabet Numeracy",
    bnTitle: "প্রাক-প্রাথমিক আনন্দময় বর্ণমালা ও খেলা",
    category: "Classroom",
    src: "/images/nursery-kindergarten.jpg",
    alt: "Early childhood kindergarten students and teacher in hijab exploring wooden alphabet blocks and picture books",
    caption: "Gentle stimulation through sensory tactile blocks, stories, and caring teacher warmth in early years.",
    bnCaption: "খেলার ছলে বর্ণমালা শেখা ও সৃজনশীল কল্পনার প্রথম জগৎ গড়ে তোলা।",
    aspectRatio: "4:3",
  },
  {
    id: "photo-10",
    title: "ICT Computer Workstation Laboratory",
    bnTitle: "আধুনিক কম্পিউটার ল্যাবে তথ্যপ্রযুক্তি চর্চা",
    category: "Arts & STEM",
    src: "/images/computer-ict-lab.jpg",
    alt: "Students and teacher in hijabs and school uniforms working at desktop computer workstations in ICT lab",
    caption: "Equipping young minds with computational literacy and essential digital competencies.",
    bnCaption: "একুশ শতকের চ্যালেঞ্জ মোকাবেলায় শিক্ষার্থীদের আধুনিক কম্পিউটার দক্ষতা অর্জন।",
    aspectRatio: "4:3",
  },
];

export const videoGallery: VideoItem[] = [
  {
    id: "video-1",
    title: "Primary Students English Speaking & Public Confidence",
    bnTitle: "প্রাথমিক শিক্ষার্থীদের সাবলীল ইংরেজি বক্তৃতা ও পরিবেশনা",
    category: "Presentations",
    description:
      "A showcase of young students from early grades demonstrating spontaneous English vocabulary, stage presence, and confidence trained under Bayyinah's presentation curriculum.",
    posterSrc: "/images/english-presentation.jpg",
    duration: "3:45",
    platform: "Facebook",
    sourceUrl: "https://www.facebook.com/bayyinahidealscl/?locale=bn_IN",
    isAvailable: true,
  },
  {
    id: "video-2",
    title: "Annual Quran Recitation & Tajweed Showcase",
    bnTitle: "বার্ষিক কুরআন তিলাওয়াত ও হুসনুত তাজবীদ প্রতিযোগিতা",
    category: "Recitation",
    description:
      "Students reciting verses of the Holy Quran with precise Makhraj articulation and melodious inflection, guided by the department of Islamic sciences.",
    posterSrc: "/images/quran-tajweed-study.jpg",
    duration: "5:20",
    platform: "Facebook",
    sourceUrl: "https://www.facebook.com/bayyinahidealscl/?locale=bn_IN",
    isAvailable: true,
  },
  {
    id: "video-3",
    title: "National Textbook Festival & Academic Year Inauguration",
    bnTitle: "পাঠ্যপুস্তক উৎসব ও নতুন শিক্ষাবর্ষ উদ্বোধন অনুষ্ঠান",
    category: "Events",
    description:
      "Highlights from the festive book distribution ceremony featuring speeches by Principal Md. Nasir Bin Ismail and joyful moments of students with their new books.",
    posterSrc: "/images/book-distribution.jpg",
    duration: "4:15",
    platform: "Facebook",
    sourceUrl: "https://www.facebook.com/bayyinahidealscl/?locale=bn_IN",
    isAvailable: true,
  },
  {
    id: "video-4",
    title: "Science Experiments & Classroom Discovery Tour",
    bnTitle: "বিজ্ঞানাগারে হাতে-কলমে শিখন ও ক্লাসরুম পরিক্রমা",
    category: "Academics",
    description:
      "An inside look into student STEM laboratory sessions, microscope specimen examinations, and collaborative classroom inquiries in Rampura campus.",
    posterSrc: "/images/science-stem-lab.jpg",
    duration: "4:50",
    platform: "Facebook",
    sourceUrl: "https://www.facebook.com/bayyinahidealscl/?locale=bn_IN",
    isAvailable: true,
  },
];
