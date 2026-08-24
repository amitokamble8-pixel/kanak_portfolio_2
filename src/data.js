/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Kanak",
  last: "Devnani",
  fullName: "Kanak Devnani",
  tagline: "Finding my voice through ideas, leadership, and meaningful conversations.",
  location: "", // TODO: not stated in the source document
  email: "", // TODO: not stated in the source document
  phone: "", // TODO: not stated in the source document
  headline: "Finding my voice through ideas, leadership, and meaningful conversations.",
  subheadline:
    "Whether I'm leading a Model United Nations committee, writing poetry, or exploring economics, I'm inspired by opportunities that encourage thoughtful dialogue, creativity, and positive impact.",
  bio: [
    "Hi, I'm Kanak, an IB student with a growing interest in Economics, communication, and leadership. Whether I'm leading a Model United Nations committee, writing poetry, or exploring economics, I'm inspired by opportunities that encourage thoughtful dialogue, creativity, and positive impact.",
    "I enjoy understanding how ideas influence people and how effective communication can inspire change. Through writing, Model United Nations, teaching debate, and community initiatives, I've discovered that learning extends far beyond the classroom. Every experience has helped me become a more confident communicator, thoughtful leader, and lifelong learner.",
    "I'm driven by curiosity and the opportunity to make an impact through ideas. I enjoy asking questions, exploring different perspectives, and sharing knowledge with others. Whether I'm mentoring students, writing poetry, or participating in discussions on global issues, I believe every experience helps me grow both academically and personally.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    instagram: "",
    twitter: "",
  },
  cv: "", // "↓ Download Resume" button target
  photo: "/placeholder-profile.png", // profile photo
  aboutPhoto: "/placeholder-about.png", // about page photo
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Researchy & Experience", to: "/work" },
      { label: "Projects", to: "/projects" },
      { label: "Areas of Interests", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Community", to: "/volunteering" },
  { label: "Music & Activities", to: "/sports" },
];

/* ---- Profile highlights (hero cards on the home page) ---- */

export const HIGHLIGHTS = [
  {
    icon: "📝",
    title: "Writer & Storyteller",
    desc: "Passionate about creative writing with published poems and a self-authored book.",
  },
  {
    icon: "🎤",
    title: "Debate & MUN Leader",
    desc: "Growing as a communicator through Model United Nations, mentoring, and public speaking.",
  },
  {
    icon: "📈",
    title: "Economics Enthusiast",
    desc: "Exploring economics through academics and practical business experiences.",
  },
];

/* ---- Experience (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "hk-assets-management-internship",
    role: "Finance & Business Intern",
    org: "HK Assets Management Limited",
    logo: "",
    location: "",
    dates: "Four-day internship",
    meta: "Four-day internship ·",
    badge: "Internship",
    desc: "Completed a four-day internship at HK Assets Management Limited, gaining an introduction to the fundamentals of finance, investment, and asset management.",
    bullets: [
      "Explored investment fundamentals and how financial markets operate",
      "Gained an introduction to asset management and day-to-day business operations",
      "Developed business awareness, financial literacy, analytical thinking, and professional communication",
    ],
    tags: ["Finance", "Investment", "Asset Management", "Business Operations"],
    photoPlaceholder: "Internship Photos & Certificate",
    featured: true,
  },
  {
    slug: "mycaptain-business-course",
    role: "Participant",
    org: "MyCaptain Business Course",
    logo: "",
    location: "",
    dates: "",
    meta: "",
    badge: "Course",
    desc: "Expanded my understanding of business fundamentals through practical learning and entrepreneurial concepts, strengthening my interest in economics and business strategy.",
    bullets: [
      "Studied business fundamentals through practical, applied learning",
      "Explored entrepreneurial concepts and business strategy",
    ],
    tags: ["Business", "Entrepreneurship", "Economics"],
    photoPlaceholder: "Course Certificate",
    featured: true,
  },
  {
    slug: "model-united-nations",
    role: "Delegate, Committee Chair & School Tutor",
    org: "Model United Nations",
    logo: "",
    location: "",
    dates: "",
    meta: "",
    badge: "Leadership",
    desc: "Participated in multiple MUN conferences while taking on leadership responsibilities as a tutor and committee chair.",
    bullets: [
      "Represented delegations across multiple MUN conferences",
      "Chaired a committee, guiding debate and managing proceedings",
      "Tutored fellow students as a school MUN tutor",
    ],
    tags: ["Public Speaking", "Diplomacy", "Mentorship"],
    featured: true,
  },
  {
    slug: "debate-education-initiative",
    role: "Head of Media",
    org: "Debate Education Initiative",
    logo: "",
    location: "India",
    dates: "",
    meta: "India ·",
    badge: "Volunteer",
    desc: "Supporting underprivileged students in India by teaching debate and communication skills.",
    bullets: [
      "Serve as Head of Media for the initiative",
      "Handle NGO communication and outreach",
      "Manage the initiative's Instagram presence",
    ],
    tags: ["Teaching", "Communication", "Social Impact"],
    featured: false,
  },
];

/* ---- Writing & publications (renders as "Projects" cards) ---- */

export const PROJECTS = [
  {
    name: "Published Short Book",
    org: "Independent Publication",
    meta: "",
    desc: "Published my own short book, marking an important milestone in my creative journey.",
    tags: ["Creative Writing", "Publishing", "Storytelling"],
    photoPlaceholder: "Book Cover",
    featured: true,
  },
  {
    name: "School Poetry Collection",
    org: "School Publication",
    meta: "Two consecutive years",
    desc: "Selected poems featured in my school's poetry collection for two consecutive years.",
    tags: ["Poetry", "Creative Writing"],
    photoPlaceholder: "Poetry Collection",
    featured: true,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🏆",
    title: "Model United Nations Chair",
    meta: "Leadership",
    detail: "Chaired an MUN committee after participating in multiple conferences as a delegate.",
    link: "",
    featured: true,
  },
  {
    icon: "🎤",
    title: "School MUN Tutor",
    meta: "Leadership",
    detail: "Mentored fellow students in Model United Nations preparation and public speaking.",
    link: "",
    featured: true,
  },
  {
    icon: "📖",
    title: "Published Short Book",
    meta: "Writing",
    detail: "Authored and published a short book — an important milestone in my creative journey.",
    link: "",
    featured: true,
  },
  {
    icon: "✍️",
    title: "Featured in School Poetry Collection",
    meta: "Two consecutive years",
    detail: "Selected poems published in the school's poetry collection two years running.",
    link: "",
    featured: true,
  },
  {
    icon: "💼",
    title: "HK Assets Management Internship",
    meta: "Professional Learning",
    detail: "Four-day internship covering finance, investment, and asset management fundamentals.",
    link: "",
    featured: true,
  },
  {
    icon: "📊",
    title: "MyCaptain Business Course",
    meta: "Professional Learning",
    detail: "Completed a course in business fundamentals and entrepreneurial concepts.",
    link: "",
    featured: false,
  },
  {
    icon: "📷",
    title: "Head of Media — Photography Club",
    meta: "Leadership",
    detail: "Promoted school initiatives and competitions through visual storytelling and digital communication.",
    link: "",
    featured: false,
  },
  {
    icon: "🌱",
    title: "Community Engagement",
    meta: "Volunteering",
    detail: "Volunteered at a school for children with disabilities and taught debate to underprivileged students.",
    link: "",
    featured: false,
  },
];

/* ---- Interests (renders on the /publications route) ---- */

export const ARTICLES = [
  {
    title: "Economics & Financial Markets",
    outlet: "Investment fundamentals, asset management, and business strategy",
    link: "",
  },
  {
    title: "Communication, Debate & Model United Nations",
    outlet: "Public speaking, diplomacy, and persuasive argument",
    link: "",
  },
  {
    title: "Creative Writing & Poetry",
    outlet: "Storytelling, published poems, and a self-authored short book",
    link: "",
  },
  {
    title: "Digital Design & Visual Storytelling",
    outlet: "Media management, photography, and social communication",
    link: "",
  },
];

/* ---- Leadership, teaching & community ---- */

export const VOLUNTEER = {
  intro:
    "Leadership, to me, is about creating opportunities for others to learn, participate, and grow. Through mentoring, volunteering, and student-led initiatives, I've developed the confidence to communicate ideas, collaborate with diverse groups, and contribute meaningfully to my community.",
  stats: [
    { value: "4", label: "Leadership Roles" }, // TODO: verify — counted from the document
    { value: "2", label: "Community Initiatives" }, // TODO: verify
    { value: "2", label: "Head of Media Positions" }, // TODO: verify
  ],
  orgs: [
    {
      name: "Model United Nations",
      role: "Delegate · Committee Chair · School Tutor",
      desc: "Participated in multiple MUN conferences while taking on leadership responsibilities as a tutor and committee chair.",
    },
    {
      name: "Debate Education Initiative",
      role: "Head of Media",
      desc: "Supporting underprivileged students in India by teaching debate and communication skills, while handling NGO communication and Instagram management.",
    },
    {
      name: "Community Service",
      role: "Volunteer",
      desc: "Volunteered at a school supporting children with disabilities, contributing my time and learning the importance of empathy and inclusion.",
    },
    {
      name: "Photography Club",
      role: "Head of Media",
      desc: "Helped promote school initiatives and competitions through visual storytelling and digital communication.",
    },
  ],
  skills: ["Leadership", "Communication", "Mentorship", "Collaboration", "Community Engagement"],
};

/* ---- Activities & interests (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "🎤",
    name: "Model United Nations",
    desc: "Delegate, committee chair, and school tutor across multiple conferences, building confidence in debate and diplomacy.",
  },
  {
    icon: "✍️",
    name: "Creative Writing & Poetry",
    desc: "Writing poetry and short-form fiction, with published work and poems featured in the school collection for two consecutive years.",
  },
  {
    icon: "📷",
    name: "Photography Club",
    desc: "Head of Media, promoting school initiatives and competitions through visual storytelling and digital communication.",
  },
  {
    icon: "🌍",
    name: "Debate Teaching & Community Work",
    desc: "Teaching debate and communication skills to underprivileged students, and volunteering at a school for children with disabilities.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Communication & Leadership",
    items: ["Public Speaking", "Debate", "Model United Nations", "Mentorship", "Collaboration"],
  },
  {
    group: "Business & Economics",
    items: ["Investment Fundamentals", "Financial Markets", "Asset Management", "Business Operations", "Financial Literacy"],
  },
  {
    group: "Creative & Media",
    items: ["Creative Writing", "Poetry", "Digital Design", "Photography", "Social Media Management"],
  },
  {
    group: "Languages",
    items: ["English", "French"], // English listed as language of study; French from the IB curriculum
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "", // TODO: school name not stated in the source document
    location: "",
    level: "IB Diploma Programme",
    dates: "Class of 2028",
    gpa: "",
    coursework: [
      "Economics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "French",
      "Digital Design",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */

export const LOOKING_AHEAD =
  "I hope to continue writing, participate in literary competitions, and contribute to future school publications while exploring new ways to tell meaningful stories.";

/* ---- Photo / gallery placeholders from the source document ---- */

export const GALLERIES = [
  { key: "leadership", label: "Leadership Gallery", images: [] },
  { key: "writing", label: "Writing Showcase", images: [] },
  { key: "certificates", label: "Certificates", images: [], note: "A visual gallery of certificates, recognitions, and accomplishments." },
  { key: "community", label: "Community Gallery", images: [] },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Writing", to: "/projects" },
  { label: "Achievements", to: "/awards" },
  { label: "Interests", to: "/publications" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
