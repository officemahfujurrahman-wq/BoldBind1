/* Case studies extracted verbatim from the original Bold Bind site. */

export interface PortfolioProject {
  slug: string;
  title: string;
  cat: string;
  size: "lg" | "md";
  tone: string;
  client: string;
  year: string;
  summary: string;
  results: { v: string; l: string }[];
  scope: string;
  challenge: string;
  solution: string;
  process: string;
  outcome: string;
  quote: { text: string; author: string };
}

export const PORTFOLIO_PROJECTS = [
  {
    "slug": "kinetic-rebrand",
    "title": "Kinetic Rebrand",
    "cat": "Branding",
    "size": "lg",
    "tone": "from-brand to-brand/60",
    "client": "Kinetic Retail",
    "year": "2025",
    "summary": "A 12-year-old retailer modernized without alienating loyal customers.",
    "results": [
      {
        "v": "+312%",
        "l": "ROAS"
      },
      {
        "v": "4.2M",
        "l": "Impressions"
      },
      {
        "v": "+38%",
        "l": "Branded search"
      }
    ],
    "scope": "Brand strategy · Identity · Launch campaign",
    "challenge": "After 12 years, Kinetic's identity felt tired next to newer DTC entrants — but 60% of revenue came from loyal customers who recognized the old marks. A wholesale rebrand risked churning the base while a cosmetic refresh wouldn't move the needle.",
    "solution": "We ran a two-week brand sprint with the leadership team, isolated the three visual cues customers actually recognized (color, wordmark rhythm, product photography style), and rebuilt the system around them. Everything else got a modern treatment.",
    "process": "Discovery workshops → customer interviews → visual audit → identity design → guidelines → launch campaign across paid, email, retail, and packaging over a focused 10-week window.",
    "outcome": "Zero drop in repeat purchase rate, +312% ROAS on the launch campaign, and 4.2M impressions in the first 90 days. Branded search lifted 38% — the strongest signal a rebrand can produce.",
    "quote": {
      "text": "Bold Bind rebuilt our brand from the ground up and gave us a marketing engine that actually delivers. Best decision we made this year.",
      "author": "Ayesha Rahman, Founder, Kinetic Retail"
    }
  },
  {
    "slug": "halcyon-launch",
    "title": "Halcyon Launch",
    "cat": "Marketing",
    "size": "md",
    "tone": "from-ink to-brand",
    "client": "Halcyon Foods",
    "year": "2025",
    "summary": "Full-funnel launch campaign that hit revenue target in 6 weeks.",
    "results": [
      {
        "v": "6 wk",
        "l": "To target"
      },
      {
        "v": "3.8x",
        "l": "ROAS"
      },
      {
        "v": "12k",
        "l": "Signups"
      }
    ],
    "scope": "Launch strategy · Paid media · Landing pages · Email",
    "challenge": "Halcyon had 8 weeks to hit a Q3 revenue target with a product no one had heard of and no email list. A traditional launch would take twice that.",
    "solution": "A compressed launch stack: three landing-page variants, a nine-ad creative grid, a five-email nurture, and a founder-story film. Everything shipped in week one.",
    "process": "Positioning workshop → creative sprint → paid launch → weekly optimization cadence → retention flow after week 4.",
    "outcome": "Hit revenue target two weeks early. 3.8x blended ROAS. 12,000 first-party emails captured — an asset the team owns forever.",
    "quote": {
      "text": "The Bold Bind team ran our launch like operators, not vendors. We hit target with room to spare.",
      "author": "Tanvir Hasan, CEO, Halcyon Foods"
    }
  },
  {
    "slug": "vertex-product-film",
    "title": "Vertex Product Film",
    "cat": "Video",
    "size": "md",
    "tone": "from-brand/80 to-ink",
    "client": "Vertex Health",
    "year": "2025",
    "summary": "Hero product film + cutdowns across paid social and retail.",
    "results": [
      {
        "v": "2.4M",
        "l": "Views"
      },
      {
        "v": "18%",
        "l": "CTR"
      },
      {
        "v": "9",
        "l": "Cutdowns"
      }
    ],
    "scope": "Concept · Direction · Production · Post",
    "challenge": "A new medical wearable in a category where every ad looks the same: white background, slow zoom, dry voiceover. Vertex needed a film that felt human without losing clinical credibility.",
    "solution": "A single-day shoot with real patients, hand-held B-camera for warmth, and locked-off A-camera for the hero product beats. Nine cutdowns from one master.",
    "process": "Two-week pre-pro, one shoot day, three weeks of post — including motion graphics, sound design, and platform-specific versioning.",
    "outcome": "2.4M organic + paid views, 18% average CTR on paid social (3.5x the category benchmark), and a hero film the sales team still uses in every enterprise pitch.",
    "quote": {
      "text": "The film outperformed every benchmark we set — and it made our category look boring by comparison.",
      "author": "Kabir Ahmed, CMO, Vertex Health"
    }
  },
  {
    "slug": "lumen-design-system",
    "title": "Lumen Design System",
    "cat": "Design",
    "size": "md",
    "tone": "from-brand to-ink/70",
    "client": "Lumen",
    "year": "2024",
    "summary": "Unified design system across web, product, and marketing.",
    "results": [
      {
        "v": "120+",
        "l": "Components"
      },
      {
        "v": "3x",
        "l": "Ship speed"
      },
      {
        "v": "1",
        "l": "Source of truth"
      }
    ],
    "scope": "Design system · Component library · Documentation",
    "challenge": "Three teams (marketing, product, sales) each maintained their own visual language. Every launch required a translation layer, and nothing looked like it came from the same company.",
    "solution": "A single Figma library plus a React component set, mapped 1:1 to design tokens. Governance model with a monthly review to keep it alive.",
    "process": "Audit → token architecture → component build in priority order → adoption sprints with each team.",
    "outcome": "120+ components in production, 3x faster shipping on marketing pages, and a single source of truth every team actually uses.",
    "quote": {
      "text": "The best creative partner we've ever worked with. Their design system is our source of truth.",
      "author": "Priya Menon, Head of E-commerce, Lumen"
    }
  },
  {
    "slug": "meridian-crm",
    "title": "Meridian CRM",
    "cat": "Automation",
    "size": "lg",
    "tone": "from-ink to-brand/70",
    "client": "Meridian Logistics",
    "year": "2024",
    "summary": "Custom CRM + WhatsApp automation for a 40-person sales team.",
    "results": [
      {
        "v": "-62%",
        "l": "Manual work"
      },
      {
        "v": "2.1x",
        "l": "Reply rate"
      },
      {
        "v": "24/7",
        "l": "Coverage"
      }
    ],
    "scope": "CRM design · WhatsApp automation · Dashboards",
    "challenge": "40 reps managing leads across three spreadsheets, WhatsApp, and email. Response times ranged from 2 minutes to 2 days depending on who was on duty.",
    "solution": "A custom CRM with round-robin routing, WhatsApp API integration, and an out-of-hours auto-responder that captured intent and set expectations.",
    "process": "Workflow mapping → CRM build → WhatsApp integration → dashboards → training and rollout.",
    "outcome": "Manual data entry dropped 62%. Reply rate 2.1x. 24/7 first-touch coverage without hiring a night shift.",
    "quote": {
      "text": "The automation team saved us 40 hours a week. Onboarding paid for itself in the first month.",
      "author": "Rahul Verma, COO, Meridian Logistics"
    }
  },
  {
    "slug": "orbital-social",
    "title": "Orbital Social",
    "cat": "Marketing",
    "size": "md",
    "tone": "from-brand to-brand/30",
    "client": "Orbital",
    "year": "2024",
    "summary": "Always-on organic social program for a fintech challenger.",
    "results": [
      {
        "v": "+180%",
        "l": "Followers"
      },
      {
        "v": "5.2%",
        "l": "Engagement"
      },
      {
        "v": "90",
        "l": "Assets/mo"
      }
    ],
    "scope": "Content strategy · Design · Community management",
    "challenge": "A challenger fintech with a big product story and no consistent voice online. Posts were sporadic, off-brand, and drove zero pipeline.",
    "solution": "A weekly content engine with four pillars, 90 assets a month, and a community team responding to every DM within an hour.",
    "process": "Strategy → content pillars → design system → editorial calendar → weekly production and reporting cadence.",
    "outcome": "Followers grew 180% year-on-year, engagement rate 5.2% (10x industry avg), and organic social became the second-largest signup channel.",
    "quote": {
      "text": "Rare to find an agency that pairs sharp design with real business thinking. Bold Bind delivers both.",
      "author": "Maria Chen, Head of Growth, Orbital"
    }
  },
  {
    "slug": "nova-packaging",
    "title": "Nova Packaging",
    "cat": "Branding",
    "size": "md",
    "tone": "from-brand/70 to-ink",
    "client": "Nova Retail",
    "year": "2024",
    "summary": "Packaging system that lifted shelf conversion in a crowded aisle.",
    "results": [
      {
        "v": "+41%",
        "l": "Shelf lift"
      },
      {
        "v": "12",
        "l": "SKUs"
      },
      {
        "v": "1",
        "l": "System"
      }
    ],
    "scope": "Packaging strategy · Structural design · Print production",
    "challenge": "Nova's 12 SKUs looked like 12 different brands on shelf. In a crowded aisle they blended into the noise; retailers were threatening to delist slow movers.",
    "solution": "A single packaging system with a shared masthead, category-coded color, and one dominant hero image per SKU. Instantly scannable at 2 metres.",
    "process": "Shelf audit → structural design → print testing → retail rollout across 400 stores.",
    "outcome": "41% shelf conversion lift measured across a 90-day A/B in matched-pair stores. Zero SKUs delisted the following quarter.",
    "quote": {
      "text": "Bold Bind became the creative engine behind our launch — every touchpoint feels premium now.",
      "author": "Ayesha Rahman, Founder, Nova Retail"
    }
  },
  {
    "slug": "ember-commercial",
    "title": "Ember Commercial",
    "cat": "Video",
    "size": "lg",
    "tone": "from-ink to-brand/40",
    "client": "Ember",
    "year": "2023",
    "summary": "60-second TV commercial + digital variants for a national brand.",
    "results": [
      {
        "v": "8M",
        "l": "Reach"
      },
      {
        "v": "72",
        "l": "TVCs aired"
      },
      {
        "v": "4",
        "l": "Cities"
      }
    ],
    "scope": "Creative direction · Production · Post · Media delivery",
    "challenge": "Ember needed a national brand moment on a regional brand budget — and a TVC ready for air in six weeks.",
    "solution": "A single-location shoot with modular scenes designed to cut into a 60, three 15s, and 4 city-specific variants.",
    "process": "Concept → boards → three-day shoot → post → media delivery in all required formats.",
    "outcome": "8M reach in the first flight, 72 TVCs aired across four cities, and a hero spot the client still runs 18 months later.",
    "quote": {
      "text": "Bold Bind's brand refresh unlocked category leadership for us. Every touchpoint feels premium now.",
      "author": "Nadia Islam, Marketing Director, Ember"
    }
  },
  {
    "slug": "pixelforge-ui",
    "title": "Pixelforge UI",
    "cat": "Design",
    "size": "md",
    "tone": "from-brand to-ink",
    "client": "Pixelforge",
    "year": "2023",
    "summary": "Marketing site + product UI refresh for a B2B SaaS.",
    "results": [
      {
        "v": "+64%",
        "l": "Trial signups"
      },
      {
        "v": "-30%",
        "l": "Bounce"
      },
      {
        "v": "9.2",
        "l": "PageSpeed"
      }
    ],
    "scope": "Marketing site · Product UI · Design system",
    "challenge": "A powerful B2B product wrapped in a marketing site that felt seven years old. Trial signups had plateaued and bounce was 68% on the homepage.",
    "solution": "New marketing site built on a clean design system, unified with a lightweight product UI refresh so the two felt like the same company.",
    "process": "Positioning refresh → site IA → design system → build → product UI polish.",
    "outcome": "Trial signups +64%, bounce -30%, and a 9.2 PageSpeed score maintained six months post-launch.",
    "quote": {
      "text": "Sharp thinkers, faster execution. We shipped a full brand and site in six weeks — and it converts.",
      "author": "Samuel Okafor, Founder, Pixelforge"
    }
  }
] as const;
