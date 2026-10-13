# Bayyinah Ideal School — Official Brand Website

A contemporary, responsive, high-performance brand website for **Bayyinah Ideal School (বাইয়্যিনাহ আইডিয়াল স্কুল)**, located in East Rampura, Dhaka, Bangladesh. Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 1. Verified School Identity & Accreditations

- **English Name**: Bayyinah Ideal School
- **Bengali Name**: বাইয়্যিনাহ আইডিয়াল স্কুল
- **Motto**: "দুনিয়া ও আখিরাতের কল্যাণে..." (*"For the good of this world and the Hereafter..."*)
- **Core Philosophy**: *"জাগতিক জ্ঞানকে বাদ দিয়ে শুধু ধর্মীয় জ্ঞান যেমন পরিপূর্ণ নয়, অনুরূপভাবে ধর্মীয় জ্ঞানকে বাদ দিয়ে জাগতিক জ্ঞানও কল্যাণকর নয় ৷ — বাইয়্যিনাহ"*
- **Government Recognition / Identifiers**:
  - **School Code**: `470965`
  - **BIIN**: `02045`
  - **Established**: `2020`
- **Location**: 17, East-Rampura, DIT Road (Main Road), Rampura Bazar, Dhaka-1219, Bangladesh
- **Contact Helplines**:
  - `01781-509592` (Admissions & Info)
  - `01680076613` (Management Desk)
- **Official Email**: `bismanagingboard@gmail.com`
- **Official Social Presence**: [Bayyinah Ideal School on Facebook](https://www.facebook.com/bayyinahidealscl/?locale=bn_IN)

---

## 2. Key Architecture & Features

### Core Pages & Routes
- `/` — **Homepage**:
  - Editorial hero with verified credentials, dual-version callout, and benchmark metrics.
  - School Introduction featuring verified educational philosophy and authentic photography.
  - "Why Choose Bayyinah" section with evidence-based reasons.
  - Curriculum Preview across Nursery to Class 10.
  - **Learning Journey**: Timeline presentation inspired by Devizur's journey format with organic step nodes, tags, and deliverable badges.
  - Meet Our Teachers & Leadership preview.
  - Student Life highlights.
  - Media Showcase with featured video player and photo collage.
  - Verified Academic Notice Banner (Dated: 24 Sep).
  - Prominent Admission & Campus Visit Call-to-Action.
- `/our-curriculum` — **Our Curriculum**:
  - Verified NCTB curriculum framework (English Version & Bangla Version).
  - Clarification distinguishing "English Version" from "English Medium".
  - Dedicated focus on proprietary textbooks and learning kits (*"আমাদের প্রকাশিত বইসুমুহ"*).
  - Class-by-class syllabus breakdown (Playgroup to Class 10).
- `/teachers` — **Teachers & Academic Leadership**:
  - Detailed profiles of Principal **Md. Nasir Bin Ismail** (LL.B., LL.M. - DU, Dawra-e-Hadith) and Chairman **Abu Hurairah Al-Maruf** (M.S.S. - DU, M.A. in Hadith, Dawra-e-Hadith).
  - Lead communication mentor **Sajjadur Rahman Sakib**.
  - Departmental wings and academic teaching standards.
- `/students` — **Student Life & Community**:
  - Community activities: National Book Distribution Day, English podium presentations, Quran recitation & Tajweed, STEM laboratory, calligraphy arts, and school library culture.
  - Safe, respectful presentation focusing on student growth without exposing private personal records.
- `/gallery` — **Photos & Videos**:
  - Category filters for classroom, events, spiritual studies, arts & STEM, and campus life.
  - Fully accessible photo lightbox with keyboard navigation (`Escape`, Arrow keys `←` / `→`), focus trapping, and captions.
  - Interactive video showcases with titles, duration, platform badges, and lazy-loading.
- `/contact` — **Contact Us**:
  - Click-to-call phone hotlines, official email, verified physical address, and campus visiting hours.
  - Verified Google Map embed for 17 East Rampura, DIT Road.
  - Transparent admission enquiry form with instant input validation and direct routing (avoids fake "message sent" notifications).
- `/privacy-policy` — **Privacy & Data Protection Policy**:
  - Comprehensive disclosure on parental contact usage, student media consent, and institutional safeguarding.
- `/sitemap.xml` & `/robots.txt` — Dynamic SEO sitemap and crawler instructions.

---

## 3. Technology Stack

- **Framework**: Next.js 16.3.8 (App Router, Turbopack)
- **Language**: TypeScript 5 (Strict Mode)
- **Styling**: Tailwind CSS v4 with custom design tokens (`@theme`)
- **Typography**: Next/Font with Google Fonts:
  - `Plus Jakarta Sans` for editorial headings
  - `Manrope` for body text
  - `Noto Sans Bengali` for authentic Bengali typography
- **Icons**: Lucide Icons & Custom SVG components
- **Component Pattern**: Server Components by default; Client Components used selectively for interactive features (Header scroll/drawer, Lightbox, Video Player, Contact Form, Gallery Tabs).

---

## 4. Local Installation & Development

### Prerequisites
- Node.js `v20.x` or `v22.x`
- npm `v10.x` or higher

### Steps
1. **Clone or Navigate to the Repository**:
   ```bash
   cd c:/Projects/bayyinah/bsm-brand-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the assigned port) in your browser.

4. **Verify TypeScript & Linting**:
   ```bash
   npm run lint
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Start Production Server**:
   ```bash
   npm run start
   ```

---

## 5. How to Update Content & Data

All school content is centralized and typed in `src/data/`:
- **`src/data/schoolInfo.ts`**: Update phone numbers, email, address, current notices, and accreditation numbers.
- **`src/data/curriculumData.ts`**: Update class groups, subjects, syllabus details, and journey stages.
- **`src/data/teachersData.ts`**: Add new faculty members, qualifications, or department descriptions.
- **`src/data/studentLifeData.ts`**: Add new student activities, celebrations, or campus traditions.
- **`src/data/mediaData.ts`**: Add photos, captions, and video recordings to the gallery.
- **`ASSET_MANIFEST.md`**: Complete log of all photographic, graphic, and video assets.

---

## 6. Verification Summary

- **Production Build**: Successfully compiled with Turbopack, generating static pages for all 12 routes with 0 errors.
- **ESLint & TypeScript**: Passed with 0 errors and 0 warnings.
- **Live HTTP Check**: All 9 routes tested against the running server, returning HTTP 200 OK.
- **Accessibility & UX**:
  - Semantic HTML (`header`, `main`, `footer`, `section`, `article`, `nav`, `h1`-`h4`).
  - Schema.org School Structured Data (`School`, `EducationalOrganization`).
  - Prefers-reduced-motion respected in CSS.
  - Lightbox with keyboard trap and Escape listener.
  - Verified click-to-call links and direct email generation.
