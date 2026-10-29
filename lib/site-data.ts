import {
  Megaphone,
  Palette,
  PenTool,
  Cog,
  ChartLine,
  Clapperboard,
  Search,
  Compass,
  Layers,
  Rocket,
  TrendingUp,
  Target,
  Heart,
  Users,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { SERVICES, type Service } from "./services-data";
import { PORTFOLIO_PROJECTS, type PortfolioProject } from "./portfolio-data";
import { BLOG_POSTS, type BlogPost } from "./blog-data";

export type { Service, PortfolioProject, BlogPost };
export { SERVICES, PORTFOLIO_PROJECTS, BLOG_POSTS };

/* ---------------------------------- brand --------------------------------- */

export const BRAND = {
  name: "Bold Bind",
  tagline: "We build brands digitally.",
  email: "contact@boldbind.com",
  phone: "+880 1577 301 388",
  phoneHref: "tel:+8801577301388",
  addressLine1: "Section 10, Block-A, Lane 14,",
  addressLine2: "House 4, Mirpur, Dhaka, Bangladesh",
  hours: "Sat – Thu · 10:00 AM – 7:00 PM",
  calendly: "https://calendly.com/contact-boldbind/30min",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/boldbind" },
    { label: "Instagram", href: "https://www.instagram.com/bold_bind" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/boldbind" },
    { label: "YouTube", href: "#" },
  ],
  contactSocials: [
    { label: "Facebook", href: "https://www.facebook.com/boldbind" },
    { label: "Instagram", href: "https://www.instagram.com/bold_bind" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/boldbind" },
    { label: "YouTube", href: "https://www.youtube.com/@boldbind" },
    { label: "Twitter / X", href: "https://twitter.com/boldbind" },
    { label: "WhatsApp", href: "https://wa.me/8801577301388" },
  ],
};

export type PageId =
  | "home"
  | "about"
  | "team"
  | "careers"
  | "services"
  | "portfolio"
  | "blog"
  | "contact";

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------ service icons ----------------------------- */

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "digital-marketing": Megaphone,
  "brand-identity": Palette,
  "creative-design": PenTool,
  "business-automation": Cog,
  "business-consultation": ChartLine,
  "studio-video": Clapperboard,
};

/* ------------------------------ process steps ----------------------------- */

export const PROCESS_STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Search, title: "Discovery", desc: "We dig into your goals, audience, and market." },
  { icon: Compass, title: "Strategy", desc: "A clear roadmap tied to measurable outcomes." },
  { icon: Layers, title: "Design", desc: "Concepts, systems, and creative that stand out." },
  { icon: Rocket, title: "Execution", desc: "Ship fast — campaigns, builds, and content live." },
  { icon: TrendingUp, title: "Growth", desc: "Iterate on data. Compound results month over month." },
];

/* ------------------------------- why-us list ------------------------------ */

export const WHY_POINTS = [
  "Senior strategists on every account",
  "Transparent reporting & analytics",
  "Fast turnarounds without cutting corners",
  "Design that actually converts",
];

export const WHY_STATS = [
  { value: 200, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "In-house experts" },
  { value: 24, suffix: "/7", label: "Support & response" },
];

/* --------------------------------- marquee -------------------------------- */

export const CLIENT_LOGOS = [
  "Northwind",
  "Acme Corp",
  "Lumen",
  "Vertex",
  "Halcyon",
  "Pixelforge",
  "Kinetic",
  "Meridian",
  "Orbital",
  "Skyline",
  "Ember",
  "Nova",
];

/* ------------------------------- testimonials ------------------------------ */

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ayesha Rahman",
    role: "Founder, Nova Retail",
    quote:
      "Bold Bind became the creative engine behind our launch. Ads, brand, and site all felt like one voice — and the numbers spoke for themselves.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "CEO, Halcyon Foods",
    quote:
      "From strategy to production, everything shipped ahead of schedule. Our ROAS jumped 3x in the first quarter.",
    rating: 5,
  },
  {
    name: "Maria Chen",
    role: "Head of Growth, Orbital",
    quote:
      "Rare to find an agency that pairs sharp design with real business thinking. Bold Bind delivers both.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "COO, Meridian Logistics",
    quote:
      "The automation team saved us 40 hours a week. Onboarding paid for itself in the first month.",
    rating: 5,
  },
  {
    name: "Nadia Islam",
    role: "Marketing Director, Ember",
    quote:
      "Bold Bind's brand refresh unlocked category leadership for us. Every touchpoint feels premium now.",
    rating: 5,
  },
  {
    name: "Samuel Okafor",
    role: "Founder, Skyline SaaS",
    quote:
      "Sharp thinkers, faster execution. We shipped a full brand and site in six weeks — and it converts.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Head of E-commerce, Lumen",
    quote:
      "The best creative partner we've ever worked with. Their design system is our source of truth.",
    rating: 5,
  },
  {
    name: "Kabir Ahmed",
    role: "CMO, Vertex Health",
    quote:
      "From video to paid social, the work outperformed every benchmark we set. Truly bold.",
    rating: 5,
  },
];

/* ---------------------------------- about --------------------------------- */

export const CORE_VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Target,
    title: "Outcome first",
    desc: "We measure ourselves by the results we ship for clients — not by hours logged.",
  },
  {
    icon: Heart,
    title: "Craft obsessed",
    desc: "Great design is a business advantage. We refuse to ship anything average.",
  },
  {
    icon: Users,
    title: "Partners, not vendors",
    desc: "We embed with your team, share the pressure, and celebrate the wins together.",
  },
  {
    icon: Sparkles,
    title: "Curious by default",
    desc: "New tools, new formats, new markets — we experiment so you don't have to.",
  },
];

export const TEAM: { name: string; role: string; image: string }[] = [
  { name: "Mahfujur Rahman", role: "Chief Creative Officer (CCO)", image: "/images/team/m1.webp" },
  { name: "Mahmud Hasan Arfat", role: "Operations Manager", image: "/images/team/m2.webp" },
  { name: "Abdulla Molla", role: "Social Media Manager", image: "/images/team/m3.webp" },
  { name: "Alif Sheikh", role: "Digital Marketing Specialist", image: "/images/team/m4.webp" },
  {
    name: "MM Josim Uddin Pulok",
    role: "Customer Relations Executive",
    image: "/images/team/m5.webp",
  },
  { name: "Morshed Kabir", role: "Graphic Designer", image: "/images/team/m6.webp" },
  { name: "Mehdi Hassan", role: "Motion Designer", image: "/images/team/m7.webp" },
  { name: "Ylva Rahman", role: "Video Editor", image: "/images/team/m8.webp" },
  { name: "Fahim Shikder", role: "Creative Production Assistant", image: "/images/team/fahim_shikder.webp" },
  { name: "MD: Nayeem Rahman", role: "Photographer", image: "/images/team/m10.webp" },
];

export const TIMELINE: { year: string; title: string; desc: string }[] = [
  {
    year: "2019",
    title: "Bold Bind is founded",
    desc: "Started as a two-person studio in Mirpur, Dhaka.",
  },
  {
    year: "2021",
    title: "First 50 brands shipped",
    desc: "Scaled the studio to a full-service agency across six disciplines.",
  },
  {
    year: "2023",
    title: "Automation & AI practice",
    desc: "Launched dedicated CRM, ERP, and AI automation services.",
  },
  {
    year: "2025",
    title: "10+ specialists, 200+ projects",
    desc: "Serving brands across South Asia, the Middle East, and Europe.",
  },
];

/* --------------------------------- careers -------------------------------- */

export const PERKS = [
  "Senior teammates on every project",
  "Learning & conference budget",
  "Modern in-house studio",
  "Flexible hybrid schedule",
  "Health & wellness support",
  "Performance bonuses",
];

export const OPEN_ROLES: { title: string; type: string; location: string }[] = [
  { title: "Senior Brand Designer", type: "Full-time", location: "Dhaka / Hybrid" },
  { title: "Performance Marketing Lead", type: "Full-time", location: "Dhaka / Remote" },
  { title: "Motion & Video Editor", type: "Full-time", location: "Dhaka" },
  { title: "Automation / AI Engineer", type: "Full-time", location: "Remote" },
  { title: "Account Manager", type: "Full-time", location: "Dhaka" },
  { title: "Social Media Strategist", type: "Contract", location: "Remote" },
];

/* ----------------------------------- FAQ ----------------------------------- */

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How quickly can we start?",
    a: "Most engagements kick off within a week of the strategy call. Rush timelines are possible for launches.",
  },
  {
    q: "Do you work on retainer or per project?",
    a: "Both. Marketing and automation are typically retainers; brand and video work are usually project-based.",
  },
  {
    q: "Which industries do you serve?",
    a: "We've worked with DTC, SaaS, fintech, F&B, real estate, and B2B service brands across South Asia, the Middle East, and Europe.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We regularly plug into in-house marketing, product, and design teams.",
  },
];

/* --------------------------------- pricing -------------------------------- */

export const PRICING_TIERS: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  featured?: boolean;
}[] = [
  {
    name: "Starter",
    price: "Custom",
    desc: "For focused projects & one-off deliverables.",
    features: ["Discovery workshop", "Single-track delivery", "2 weeks turnaround"],
  },
  {
    name: "Growth",
    price: "Custom",
    desc: "For teams ready to scale outcomes.",
    features: ["Full strategy + execution", "Weekly reporting", "Dedicated project lead"],
    featured: true,
  },
  {
    name: "Partner",
    price: "Custom",
    desc: "For long-term embedded partnerships.",
    features: ["Multi-service retainer", "Priority response", "Quarterly business reviews"],
  },
];

export const SERVICE_PROCESS: { step: string; title: string; desc: string }[] = [
  { step: "01", title: "Discovery", desc: "Audit, goals, audience, and competitive positioning." },
  { step: "02", title: "Strategy", desc: "Roadmap, channels, and success metrics defined." },
  { step: "03", title: "Execution", desc: "We build, launch, and iterate — fast." },
  { step: "04", title: "Growth", desc: "Ongoing optimization, reporting, and expansion." },
];

/* ------------------------------- blog filters ------------------------------ */

export const BLOG_FILTERS = ["All", "Branding", "Marketing", "Design", "Automation", "Studio"];
export const PORTFOLIO_FILTERS = ["All", "Branding", "Marketing", "Design", "Video", "Automation"];
export const BUDGET_RANGES = ["< $2K", "$2K – $5K", "$5K – $15K", "$15K – $50K", "$50K+"];
