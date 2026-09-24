export interface NewsArticle {
  id: string;
  title: string;
  kicker: string;
  excerpt: string;
  category?: string;
  categorySlug?: string;
  author: string;
  authorRole: string;
  dateline: string;
  publishedAt: string;
  readTime: string;
  image?: string;
  imageCaption?: string;
  isLead?: boolean;
  bulletPoints?: string[];
}

export interface OpinionColumn {
  id: string;
  author: string;
  role: string;
  avatar: string;
  title: string;
  topic: string;
}

export interface ScholarshipTrack {
  id: string;
  title: string;
  badge: string;
  duration: string;
  level: string;
  description: string;
  keySkills: string[];
  careerOpportunities: string[];
  seats: number;
}

export const NEWSPAPER_CONFIG = {
  name: "EBOTECH DIGITAL MEDIA",
  motto: "VERITAS, INNOVATIO & FUTURUM",
  tagline: "The Voice of Truth, Digital Innovation & Independent Journalism",
  edition: "NATIONAL & GLOBAL DIGITAL EDITION",
  volume: "VOL. IV • NO. 1,482",
  established: "EST. 2024",
  weather: [
    { city: "Lagos", temp: "29°C", condition: "Sunny & Humid" },
    { city: "Abuja", temp: "31°C", condition: "Clear Skies" },
    { city: "Port Harcourt", temp: "28°C", condition: "Light Showers" },
    { city: "London", temp: "16°C", condition: "Overcast" },
    { city: "New York", temp: "19°C", condition: "Breezy" },
  ],
  social: {
    facebook: "https://web.facebook.com/profile.php?id=61594061588403",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  markets: [
    { symbol: "USD / NGN", value: "₦1,485.50", change: "+0.45%", isUp: true },
    { symbol: "GBP / NGN", value: "₦1,920.20", change: "+0.20%", isUp: true },
    { symbol: "BRENT CRUDE", value: "$84.30/bbl", change: "-0.65%", isUp: false },
    { symbol: "NGX 30 INDEX", value: "3,892.40 pts", change: "+1.15%", isUp: true },
    { symbol: "BITCOIN", value: "$68,450", change: "+2.40%", isUp: true },
  ],
  breakingNews: [
    " EBO-TECH PROJECT: Applications officially open for 4-week Free Digital Skills Training Project for Ebonyi State Indigenes.",
    " ABUJA SUMMIT: Federal Ministry unveils comprehensive digital economy framework to accelerate 1M tech jobs by 2027.",
    " FINANCIAL WATCH: Central Bank foreign reserves surge to highest level in 22 months amidst foreign inflow rebound.",
    " INNOVATION: African tech hubs secure record funding for indigenous artificial intelligence and clean energy systems.",
    " SPORTS: Super Eagles confirm 28-man squad for upcoming World Cup qualifier matches.",
  ],
  categories: [
    { name: "Home", slug: "", isHome: true },
    { name: "Politics", slug: "politics", isComingSoon: true },
    { name: "Business", slug: "business", isComingSoon: true },
    { name: "Technology", slug: "technology", isComingSoon: true },
    { name: "Entertainment", slug: "entertainment", isComingSoon: true },
    { name: "Sports", slug: "sports", isComingSoon: true },
    { name: "Opinion", slug: "opinion", isComingSoon: true },
    { name: "Education", slug: "education", isComingSoon: true },
   
  ],
};

export const LEAD_ARTICLE: NewsArticle = {
  id: "lead-01",
  title: "AFRICA'S DIGITAL RENAISSANCE: MINISTRIES, TECH LEADERS & MEDIA PLEDGE HISTORIC 1M SKILLS ACCELERATION PROGRAM",
  kicker: "SPECIAL REPORT • FRONTPAGE EXCLUSIVE",
  dateline: "ABUJA & LAGOS",
  category: "Business",
  categorySlug: "business",
  author: "Amina Bello",
  authorRole: "Senior Editorial & Investigative Correspondents",
  publishedAt: "Thursday, September 24, 2026",
  readTime: "6 min read",
  image: "/images/lead-news.jpg",
  imageCaption: "Delegates, policymakers, tech innovators, and media leaders assemble during the high-level plenary of the Africa AI & Digital Economy Summit in Abuja.",
  isLead: true,
  excerpt:
    "In a decisive gathering of federal authorities, technology giants, and leading educational foundations, stakeholders have resolved to transform the continent's digital workforce, prioritizing youth skill acquisition in software engineering, AI, and investigative digital journalism.",
  bulletPoints: [
    "New federal roadmap pledges fast-track fiber optic infrastructure across all 774 local government areas.",
    "Public-private partnerships unlock over $150M in youth digital upskilling and accredited certification vouchers.",
    "Ebotech Digital Media spearheads independent media literacy, AI research labs, and nationwide youth scholarships.",
  ],
};

export const SECONDARY_ARTICLES: NewsArticle[] = [
  {
    id: "sec-01",
    title: "Central Bank Records 22-Month High In FX Inflows As Tech Exports Gain Momentum",
    kicker: "BUSINESS & MARKETS",
    dateline: "LAGOS",
    author: "Tunde Bakare",
    authorRole: "Financial Markets Editor",
    publishedAt: "Today, 11:20 AM",
    readTime: "4 min read",
    category: "Business",
    categorySlug: "business",
    image: "/images/business.jpg",
    imageCaption: "Financial institutions and commercial banking trading floors report enhanced liquidity in interbank trades.",
    excerpt:
      "A strategic surge in diaspora remittances and freelance technology service exports has propelled the national foreign reserve balance to unprecedented stability, according to latest apex bank statistics.",
  },
  {
    id: "sec-02",
    title: "Senate Committee Advances Landmark Artificial Intelligence & Data Sovereignty Bill",
    kicker: "NATIONAL POLITICS",
    dateline: "NATIONAL ASSEMBLY, ABUJA",
    author: "Zainab Aliyu",
    authorRole: "Parliamentary Chief Reporter",
    publishedAt: "Today, 10:15 AM",
    category: "Politics",
    categorySlug: "politics",
    readTime: "3 min read",
    excerpt:
      "The harmonized legislative bill seeks to protect citizen privacy, regulate generative algorithms, and incentivize local cloud infrastructure investments across universities and research institutions.",
  },
  {
    id: "sec-03",
    title: "Clean Energy Micro-Grids Power 140 Rural Healthcare Facilities and Computer Centers",
    kicker: "INVESTIGATION & INFRASTRUCTURE",
    dateline: "KADUNA & ENUGU",
    category: "Technology",
    categorySlug: "technology",
    author: "Obinna Eze",
    authorRole: "Energy & Development Analyst",
    publishedAt: "Today, 09:30 AM",
    readTime: "5 min read",
    excerpt:
      "A joint civic investigation reveals that community-owned solar hybrid installations are bridging the power gap for remote classrooms and diagnostic medical laboratories.",
  },
  {
    id: "sec-04",
    title: "Super Eagles Technical Crew Unveils 28-Man Tactical Roster For Continental Showdown",
    kicker: "SPORTS GAZETTE",
    dateline: "CAIRO & ABUJA",
    author: "Segun Odegbami Jr.",
    authorRole: "Sports Desk Lead",
    category: "Sports",
    categorySlug: "sports",
    publishedAt: "Today, 08:45 AM",
    readTime: "3 min read",
    excerpt:
      "Head coach emphasizes tactical discipline and explosive pace on the wings as European-based stars arrive in camp ahead of crucial double-header qualifiers.",
  },
];

export const OPINION_COLUMNS: OpinionColumn[] = [
  {
    id: "op-01",
    author: "Prof. Oladipo Adeleke",
    role: "Chair of Digital Humanities, University of Ibadan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    topic: "THE DIGITAL FRONTIER",
    title: "Why High-Income Digital Skills are the Inevitable Future of Youth Employment",
  },
  {
    id: "op-02",
    author: "Fatima Zahra Garba",
    role: "Senior Fellow, Pan-African Press Institute",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    topic: "MEDIA ETHICS",
    title: "Truth in the Age of Deepfakes: Why Independent Journalism Still Reigns Supreme",
  },
  {
    id: "op-03",
    author: "Engr. Victor Kalu",
    role: "Principal Architect, Distributed Cloud Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    topic: "INNOVATION DIGEST",
    title: "Building Resilient African Software Stacks for the Next Billion Consumers",
  },
];

export const SCHOLARSHIP_TRACKS: ScholarshipTrack[] = [
  {
    id: "track-canva",
    title: "Canva Design & Visual Content Creation",
    badge: "Creative Track",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    description:
      "Canva fundamentals, design principles, colour, typography, social media graphics, flyers, posters, branding, templates and Canva AI tools.",
    keySkills: [
      "Social Media Graphics & Flyers",
      "Brand Identity & Presentation Decks",
      "Canva AI & Generative Design Tools",
      "Carousel & Poster Design",
    ],
    careerOpportunities: [
      "Graphic Designer",
      "Social Media Designer",
      "Content Designer",
      "Freelance Designer",
    ],
    seats: 20,
  },
  {
    id: "track-capcut",
    title: "CapCut Video Editing & Short-Form Content",
    badge: "Media Track",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    description:
      "Video cutting, transitions, text animation, captions, sound, voiceovers, green screen, speed effects, Reels/TikTok/Shorts, storytelling and CapCut AI tools.",
    keySkills: [
      "Short-Form Video (Reels, TikTok, Shorts)",
      "Captions, Transitions & Sound Design",
      "Talking-Head & Promotional Editing",
      "AI-Assisted Video Tools",
    ],
    careerOpportunities: [
      "Video Editor",
      "Content Creator",
      "Social Media Video Specialist",
      "Freelance Video Editor",
    ],
    seats: 20,
  },
  {
    id: "track-ai-content",
    title: "AI Image & Video Creation",
    badge: "AI & Innovation Track",
    duration: "4 Weeks",
    level: "All Levels",
    description:
      "Generative AI fundamentals, prompt writing, product visuals, AI characters, text-to-video, image-to-video, voiceovers, and responsible AI use.",
    keySkills: [
      "Generative AI Prompt Engineering",
      "AI Product Visuals & Character Design",
      "AI Video & Voiceover Synthesis",
      "AI Creative Workflows (Canva & CapCut)",
    ],
    careerOpportunities: [
      "AI Content Creator",
      "Creative Marketing Assistant",
      "Prompt Specialist",
      "Digital Media Producer",
    ],
    seats: 20,
  },
  {
    id: "track-digital-marketing",
    title: "Digital Marketing & Social Media Management",
    badge: "Growth Track",
    duration: "4 Weeks",
    level: "Beginner to Intermediate",
    description:
      "Social media fundamentals, content strategy, calendars, copywriting, hooks, community management, basic analytics, and social media SEO.",
    keySkills: [
      "Content Strategy & Editorial Calendars",
      "Copywriting, Hooks & Engagement",
      "Social Media Analytics & Community Management",
      "Campaign Planning & Organic SEO",
    ],
    careerOpportunities: [
      "Social Media Manager",
      "Digital Marketing Assistant",
      "Content Strategist",
      "Community Manager",
    ],
    seats: 15,
  },
  {
    id: "track-data-analysis",
    title: "Data Analysis & Digital Productivity",
    badge: "Data & Admin Track",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    description:
      "Excel, Google Sheets, data entry, cleaning, formulas, sorting/filtering, tables, charts, pivot tables, basic dashboards, and Google Workspace.",
    keySkills: [
      "Excel & Google Sheets Mastery",
      "Data Cleaning, Formulas & Pivot Tables",
      "Visual Dashboards & Business Reporting",
      "Google Workspace & Office Productivity",
    ],
    careerOpportunities: [
      "Junior Data Analyst",
      "Data Support Assistant",
      "Administrative Data Officer",
      "Business Support Specialist",
    ],
    seats: 15,
  },
  {
    id: "track-remote-work",
    title: "Digital Productivity, Freelancing & Remote Work",
    badge: "Freelance & Career Track",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    description:
      "Computer fundamentals, email, Google Workspace, file management, AI productivity, professional CV, LinkedIn, freelancing proposals, and client communication.",
    keySkills: [
      "Google Workspace & Cloud File Management",
      "Professional CV & LinkedIn Optimization",
      "Freelance Proposals & Client Acquisition",
      "Remote Work Tools & Etiquette",
    ],
    careerOpportunities: [
      "Virtual Assistant",
      "Freelance Service Provider",
      "Remote Administrative Support",
      "Digital Operations Assistant",
    ],
    seats: 10,
  },
];

export const SCHOLARSHIP_FAQS = [
  {
    q: "Is the Ebotech Digital Media Scholarship really 100% free?",
    a: "Yes! 100% of the tuition, curriculum materials, live mentorship sessions, and certification are fully sponsored by Ebotech Digital Media and partner foundations. Selected candidates will never be asked for application fees or tuition fees.",
  },
  {
    q: "Who is eligible to apply for this scholarship program?",
    a: "The program is open to passionate African youths, students, recent graduates, early-career professionals, and career switchers aged 16 to 35 who are committed to completing the curriculum.",
  },
  {
    q: "Do I need prior tech or journalism experience?",
    a: "Not necessarily! We have tracks suitable for complete beginners (such as Digital Journalism, UI/UX, and AI Tools) as well as foundational tracks for those with basic computer literacy. What matters most is your hunger to learn and consistency.",
  },
  {
    q: "Will I receive a certificate after completing the program?",
    a: "Yes. All students who achieve satisfactory attendance, complete project assignments, and present their capstone project will be awarded an official, verifiable Certificate of Completion from Ebotech Digital Media Academy.",
  },
  {
    q: "Are there job placement or internship opportunities?",
    a: "Top-performing graduates across all tracks will be offered paid internship placements within Ebotech Digital Media, our partner newsrooms, software firms, and corporate digital teams.",
  },
];
