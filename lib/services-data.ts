/* Services extracted verbatim from the original Bold Bind site. */

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  tone: string;
}

export const SERVICES = [
  {
    "slug": "digital-marketing",
    "title": "Digital Marketing",
    "tagline": "Performance that compounds.",
    "desc": "Paid media, SEO, and social that build pipeline and brand equity at the same time.",
    "features": [
      "Facebook Ads",
      "Google Ads",
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
      "Analytics"
    ],
    "tone": "from-brand to-brand/60"
  },
  {
    "slug": "brand-identity",
    "title": "Brand Identity",
    "tagline": "Brands people remember.",
    "desc": "Naming, logos, systems, and guidelines that give your business a distinct voice and look.",
    "features": [
      "Logo Design",
      "Brand Strategy",
      "Brand Guidelines",
      "Packaging",
      "Stationery"
    ],
    "tone": "from-ink to-brand"
  },
  {
    "slug": "creative-design",
    "title": "Creative Content & Design",
    "tagline": "Scroll-stopping creative.",
    "desc": "Social, UI, print, and motion — designed to convert and stay on-brand.",
    "features": [
      "Social Media Design",
      "UI Design",
      "Posters",
      "Flyers",
      "Motion Graphics"
    ],
    "tone": "from-brand/80 to-ink"
  },
  {
    "slug": "business-automation",
    "title": "Business Automation",
    "tagline": "Ops that run themselves.",
    "desc": "CRM, ERP, AI, and messaging automations that free your team from repetitive work.",
    "features": [
      "CRM",
      "ERP",
      "WhatsApp Automation",
      "AI Automation",
      "Custom Dashboards"
    ],
    "tone": "from-ink to-brand/60"
  },
  {
    "slug": "business-consultation",
    "title": "Business Consultation",
    "tagline": "Strategy that moves numbers.",
    "desc": "From market entry to growth planning — we help you place the right bets.",
    "features": [
      "Business Strategy",
      "Startup Consulting",
      "Growth Planning",
      "Market Research"
    ],
    "tone": "from-brand to-ink"
  },
  {
    "slug": "studio-video",
    "title": "Studio & Video Production",
    "tagline": "Film that sells.",
    "desc": "In-house studio for commercials, product films, and photography — end to end.",
    "features": [
      "Commercial Videos",
      "Corporate Videos",
      "Product Videos",
      "Photography",
      "Drone",
      "Editing"
    ],
    "tone": "from-brand/70 to-ink"
  }
] as const;
