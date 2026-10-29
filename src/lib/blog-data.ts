/* Blog posts extracted verbatim from the original Bold Bind site. */

export interface BlogBodyBlock {
  type: "p" | "h2" | "list" | "quote";
  text?: string;
  items?: string[];
  cite?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  cat: string;
  read: string;
  featured?: boolean;
  tone: string;
  date: string;
  author: string;
  excerpt: string;
  body: BlogBodyBlock[];
}

export const BLOG_POSTS = [
  {
    "slug": "choosing-best-digital-marketing-agency-bangladesh",
    "title": "How to choose the best digital marketing agency in Bangladesh",
    "cat": "Marketing",
    "read": "9 min",
    "featured": true,
    "tone": "from-brand via-brand/70 to-ink",
    "date": "July 15, 2026",
    "author": "Bold Bind Editorial",
    "excerpt": "A founder's guide to evaluating digital marketing agencies in Dhaka — services, pricing, red flags, and what actually separates the top agencies from the rest.",
    "body": [
      {
        "type": "p",
        "text": "If you're searching for the best digital marketing agency in Bangladesh, you've probably noticed the same problem every founder in Dhaka runs into: hundreds of agencies, near-identical service lists, and almost no way to tell them apart until money is already spent. This guide is the framework we wish more clients used before they hired us — or anyone else."
      },
      {
        "type": "p",
        "text": "Bangladesh's digital economy is growing fast. Meta, Google, TikTok, and Shopify have all matured locally, and there are now dozens of capable agencies — from established players like Bizcope and American Best IT to boutique studios like Bold Bind. The right choice depends less on who's biggest and more on which agency actually fits the stage your business is in."
      },
      {
        "type": "h2",
        "text": "What a digital marketing agency in Dhaka should actually do"
      },
      {
        "type": "p",
        "text": "A real digital marketing agency doesn't just 'run ads.' It owns the full loop between attention and revenue — strategy, creative, media buying, analytics, and iteration. Before you shortlist anyone, make sure they can cover the core disciplines below."
      },
      {
        "type": "list",
        "items": [
          "Performance marketing — Meta, Google, TikTok, and YouTube ads with clear ROAS targets",
          "SEO — technical audits, on-page optimization, and content that ranks locally",
          "Social media management — organic strategy, content calendars, community",
          "Creative production — static, video, and motion designed for paid feeds",
          "Web design & development — landing pages that convert the traffic you paid for",
          "Analytics & reporting — GA4, Meta Pixel, server-side tracking, and weekly readouts"
        ]
      },
      {
        "type": "p",
        "text": "If an agency's proposal is heavy on 'posting' and light on measurement, that's your first red flag. Posts don't grow businesses; systems do."
      },
      {
        "type": "h2",
        "text": "The 8 evaluation criteria we'd use ourselves"
      },
      {
        "type": "list",
        "items": [
          "Case studies with real numbers — ROAS, CAC, revenue, not just 'engagement'",
          "Industry fit — have they scaled a business in your category (DTC, SaaS, F&B, real estate)?",
          "Team seniority — who actually runs the account day-to-day, not just the pitch",
          "Creative capability in-house — or a network they can trust for shoots and motion",
          "Reporting cadence — weekly dashboards + monthly strategy reviews, not just screenshots",
          "Contract structure — month-to-month with a clear scope beats 12-month lock-ins",
          "Local market fluency — Bangla + English creative, local payment gateways, festivals",
          "Communication — a Slack/WhatsApp response time you'd tolerate from a colleague"
        ]
      },
      {
        "type": "h2",
        "text": "Bangladesh-specific nuances most agencies miss"
      },
      {
        "type": "p",
        "text": "Global playbooks only get you 70% of the way. The last 30% is what wins in Dhaka, Chattogram, and Sylhet — and it's where most foreign or generic agencies quietly underperform."
      },
      {
        "type": "list",
        "items": [
          "Meta remains the dominant channel for most SMEs — TikTok is rising fast for Gen Z",
          "Cash on delivery still drives 60%+ of ecommerce checkouts; your funnel must respect that",
          "Local payment rails (bKash, Nagad, SSLCommerz) need proper Pixel/conversion API setup",
          "Ramadan, Eid, Pahela Baishakh, and Victory Day are non-negotiable campaign windows",
          "Bangla creative outperforms English for mass-market brands — hybrid works for premium",
          "Influencer marketing is cheaper and more effective here than in most global markets"
        ]
      },
      {
        "type": "h2",
        "text": "Agency vs freelancer vs in-house — which one first?"
      },
      {
        "type": "p",
        "text": "Under BDT 1 lakh/month in ad spend, a specialist freelancer often outperforms an agency simply because you get senior attention. Between BDT 1–5 lakh/month, a small boutique agency is usually the sweet spot — enough team depth, still owner-attention. Above BDT 5 lakh/month, either a larger agency or an in-house hire supported by an agency for spikes."
      },
      {
        "type": "quote",
        "text": "The best agency isn't the biggest one. It's the one whose senior team is still in the room when your account has a bad week."
      },
      {
        "type": "h2",
        "text": "How pricing actually works in Bangladesh"
      },
      {
        "type": "p",
        "text": "Most agencies price on one of three models — and it matters which one you sign."
      },
      {
        "type": "list",
        "items": [
          "Retainer — a flat monthly fee (typical: BDT 40k–3 lakh depending on scope)",
          "Percentage of ad spend — usually 10–20%, aligns incentives on scale but not on efficiency",
          "Performance / hybrid — a base fee plus a bonus tied to ROAS or revenue milestones"
        ]
      },
      {
        "type": "p",
        "text": "Always ask what's included: is creative production separate? Is landing page work billed extra? Are ad spend, influencer fees, and boosting budgets on top? A cheap retainer with everything billed extra is not cheap."
      },
      {
        "type": "h2",
        "text": "10 questions to ask before you sign"
      },
      {
        "type": "list",
        "items": [
          "Show me two case studies from my industry — with the numbers.",
          "Who is the senior lead on my account, and how many other accounts do they run?",
          "How many creatives will you produce per month, and who reviews them?",
          "What's your process for a bad month — how do you diagnose and fix?",
          "How do you set up tracking (GA4, Pixel, CAPI, server-side)?",
          "What tools do you use for reporting, and can I have live dashboard access?",
          "What's the exit clause if this isn't working after 90 days?",
          "Do you white-label any of this to another vendor?",
          "How do you handle content in Bangla vs English?",
          "What's one thing our current strategy is doing wrong right now?"
        ]
      },
      {
        "type": "p",
        "text": "The last question is the tell. Agencies that can answer it in 30 seconds are the ones actually paying attention."
      },
      {
        "type": "h2",
        "text": "Red flags to walk away from"
      },
      {
        "type": "list",
        "items": [
          "Guaranteed rankings, guaranteed leads, or guaranteed ROAS — nobody can guarantee these",
          "12-month lock-in contracts before you've seen 30 days of work",
          "Vanity metrics in reports: reach, impressions, likes — with no revenue tie",
          "The pitch team disappears after you sign and juniors run the account",
          "No clear tracking setup — Pixel firing on 'PageView' only, no purchase events",
          "Copy-paste proposals that could apply to any brand in any category"
        ]
      },
      {
        "type": "h2",
        "text": "Where Bold Bind fits"
      },
      {
        "type": "p",
        "text": "Bold Bind is a Dhaka-based creative and digital agency built for founders who want strategy, creative, and performance under one roof. We work best with brands doing BDT 1–15 lakh/month in ad spend that need senior attention, in-house video and motion, and a weekly reporting rhythm that treats marketing like a P&L, not a mystery."
      },
      {
        "type": "p",
        "text": "If you're comparing agencies right now — including the larger names — we'd rather help you ask better questions than pitch you cold. Book a 30-minute strategy call from our contact page and we'll audit your current setup for free, whether or not you end up hiring us."
      },
      {
        "type": "h2",
        "text": "TL;DR — how to choose"
      },
      {
        "type": "list",
        "items": [
          "Match agency size to your stage, not to their brand",
          "Insist on case studies with real revenue numbers",
          "Ask who runs your account day-to-day",
          "Avoid long lock-ins and guaranteed-outcome promises",
          "Prioritize local market fluency: Bangla creative, festivals, COD, local rails",
          "Pick the agency whose reporting you'd actually read every Monday"
        ]
      }
    ]
  },
  {
    "slug": "brand-systems-compound-growth-2026",
    "title": "How brand systems compound growth in 2026",
    "cat": "Branding",
    "read": "6 min",
    "tone": "from-brand via-brand/70 to-ink",
    "date": "July 8, 2026",
    "author": "Bold Bind Editorial",
    "excerpt": "Why treating brand as a system — not a logo — is the biggest growth lever of the next five years.",
    "body": [
      {
        "type": "p",
        "text": "Most founders still think of brand as a logo, a color, and a website. That definition worked in 2015. In 2026 it's the reason growth stalls: your marketing team ships a new asset every day, and none of them feel like they come from the same company."
      },
      {
        "type": "h2",
        "text": "Brand as an operating system"
      },
      {
        "type": "p",
        "text": "A brand system is the shared source of truth every team — marketing, sales, product, HR — uses to make decisions. It defines not just what you look like, but how you talk, what you promise, and what you refuse to do."
      },
      {
        "type": "list",
        "items": [
          "A positioning statement your CEO can recite from memory",
          "Verbal identity: voice, tone, and 20 words you never use",
          "Visual identity: logo, type, color, motion, and photography rules",
          "Application patterns: ads, decks, product UI, packaging, email"
        ]
      },
      {
        "type": "h2",
        "text": "Why it compounds"
      },
      {
        "type": "p",
        "text": "Every touchpoint that feels on-brand does two jobs: it converts today's customer and it deposits recognition in tomorrow's. Over 24 months, that recognition is worth more than any single campaign — it lowers your CAC on every channel at the same time."
      },
      {
        "type": "quote",
        "text": "A great brand system doesn't slow your team down. It removes 80% of the small decisions so they can focus on the 20% that matter.",
        "cite": "Bold Bind Studio"
      },
      {
        "type": "h2",
        "text": "How to start this quarter"
      },
      {
        "type": "p",
        "text": "You don't need a six-month rebrand. Start with a two-week brand sprint: audit your last 90 days of output, extract the patterns that already work, kill the ones that don't, and document what's left. That single artifact will change how the next quarter feels."
      }
    ]
  },
  {
    "slug": "performance-creative-playbook-dtc",
    "title": "The performance-creative playbook we run for DTC",
    "cat": "Marketing",
    "read": "8 min",
    "tone": "from-ink via-brand to-brand/50",
    "date": "June 24, 2026",
    "author": "Bold Bind Growth",
    "excerpt": "The exact ad-testing framework that took a DTC client from 1.4x to 4.6x ROAS in 90 days.",
    "body": [
      {
        "type": "p",
        "text": "Ninety percent of DTC ad accounts we audit have the same problem: too many creatives, no framework, no learning. Spend goes up, ROAS goes down, and no one can explain why one ad works."
      },
      {
        "type": "h2",
        "text": "The four-quadrant test grid"
      },
      {
        "type": "p",
        "text": "Every week we ship creatives across four axes: hook, format, angle, and offer. Each new ad only changes one variable so we can attribute learning to a single lever. Boring on the outside, brutal on the results."
      },
      {
        "type": "list",
        "items": [
          "Hook: problem, promise, pattern-interrupt, social proof",
          "Format: UGC, studio, motion-graphics, founder-to-camera",
          "Angle: value, status, safety, novelty",
          "Offer: bundle, discount, free-gift, guarantee"
        ]
      },
      {
        "type": "h2",
        "text": "The 3-2-2 launch rule"
      },
      {
        "type": "p",
        "text": "For every new product we launch three hooks, two formats, and two offers in week one. That's twelve ads — enough signal in 7 days to kill the losers and double-down. Anything fewer is guessing."
      },
      {
        "type": "quote",
        "text": "Creative is the last durable performance lever. Everything else — targeting, bidding, placements — gets commoditized by the platforms."
      },
      {
        "type": "h2",
        "text": "Reporting that actually informs"
      },
      {
        "type": "p",
        "text": "We tag every ad with its variables so the weekly report reads like a science experiment: 'Problem hooks beat promise hooks by 2.3x this week; UGC beat studio for cold, studio won for warm.' That's the report a CFO can act on."
      },
      {
        "type": "h2",
        "text": "The 90-day compound"
      },
      {
        "type": "p",
        "text": "Run this loop for 12 weeks and you'll have 100+ tested creatives, a scorecard of what works for your brand, and a ROAS that stops fighting the algorithm and starts riding it."
      }
    ]
  },
  {
    "slug": "automating-ops-human-touch",
    "title": "Automating operations without losing the human touch",
    "cat": "Automation",
    "read": "5 min",
    "tone": "from-brand/80 to-ink",
    "date": "June 12, 2026",
    "author": "Bold Bind Automation",
    "excerpt": "A practical guide to picking which workflows to automate first — and which to leave alone.",
    "body": [
      {
        "type": "p",
        "text": "The temptation with automation is to point it at everything. That's how you end up with a stack that emails customers three times about the same order and a support inbox no human ever reads."
      },
      {
        "type": "h2",
        "text": "The 'boring, repeatable, low-empathy' filter"
      },
      {
        "type": "p",
        "text": "Before we automate a workflow we ask three questions: is it boring, is it repeatable, is it low-empathy? All three yes — automate. Any single no — leave a human in the loop."
      },
      {
        "type": "list",
        "items": [
          "Order confirmations, invoices, receipts — automate",
          "Refund requests over $500 — human",
          "Lead qualification (round-robin, scoring) — automate",
          "Sales call follow-ups on hot leads — human, augmented"
        ]
      },
      {
        "type": "h2",
        "text": "Design for the edge case"
      },
      {
        "type": "p",
        "text": "Every automation needs an escape hatch. When something looks unusual, the system should route it to a person — not press on and create a mess. That single design choice separates automations customers love from ones they hate."
      },
      {
        "type": "quote",
        "text": "Automate the process, not the relationship."
      },
      {
        "type": "h2",
        "text": "Where to start"
      },
      {
        "type": "p",
        "text": "Pick the workflow your team complains about most on Slack. Map it end-to-end. Automate the 60% in the middle. Keep humans on the start and the finish. Measure the hours saved every week — that's your ROI story."
      }
    ]
  },
  {
    "slug": "motion-design-high-converting-ads",
    "title": "Motion design principles for high-converting ads",
    "cat": "Design",
    "read": "7 min",
    "tone": "from-brand to-brand/40",
    "date": "May 30, 2026",
    "author": "Bold Bind Studio",
    "excerpt": "Six motion rules our creative team uses on every paid social ad.",
    "body": [
      {
        "type": "p",
        "text": "Motion is the difference between a scroll and a stop. Get the first 0.8 seconds right and you buy yourself the next three. Miss it and the best copy in the world won't save you."
      },
      {
        "type": "h2",
        "text": "Six rules we don't break"
      },
      {
        "type": "list",
        "items": [
          "Move something in the first 8 frames — or lose the viewer",
          "One idea per shot. Cut, don't crossfade",
          "Type must be readable at 240p with sound off",
          "Ease in-out is a crutch; anticipate and overshoot",
          "End on the offer, not the logo",
          "If a frame doesn't earn its place, delete it"
        ]
      },
      {
        "type": "h2",
        "text": "Motion is UX"
      },
      {
        "type": "p",
        "text": "The best product-ad motion doesn't scream 'ad' — it demonstrates value. A 3-second loop of the product doing the thing beats a 30-second explainer every time."
      },
      {
        "type": "quote",
        "text": "Motion tells the viewer where to look. Everything else tells them what to think."
      }
    ]
  },
  {
    "slug": "in-house-vs-agency-creative-model",
    "title": "In-house vs agency: choosing the right creative model",
    "cat": "Branding",
    "read": "4 min",
    "tone": "from-ink to-brand/70",
    "date": "May 18, 2026",
    "author": "Bold Bind Editorial",
    "excerpt": "A founder's decision framework for scaling creative production.",
    "body": [
      {
        "type": "p",
        "text": "There is no universally right answer. There is a right answer for your stage, your volume, and your ambition. Here's how to figure out which is which."
      },
      {
        "type": "h2",
        "text": "The volume test"
      },
      {
        "type": "p",
        "text": "Below 20 assets a month, hire an agency. Between 20 and 100, hybrid. Above 100, build in-house with agency spikes for launches. Volume dictates cost per asset, and cost per asset dictates model."
      },
      {
        "type": "h2",
        "text": "The taste test"
      },
      {
        "type": "p",
        "text": "In-house teams learn your brand deeply but drift toward safe. Agencies push harder but ramp slowly. The hybrid model — in-house for volume, agency for breakthroughs — is often the sharpest of both."
      },
      {
        "type": "quote",
        "text": "The best creative orgs we've seen aren't in-house or agency. They're both, with a very clear boundary."
      }
    ]
  },
  {
    "slug": "product-video-shot-list-founders",
    "title": "Product video shot list for founders on a budget",
    "cat": "Studio",
    "read": "5 min",
    "tone": "from-brand/70 to-ink",
    "date": "May 4, 2026",
    "author": "Bold Bind Studio",
    "excerpt": "The 12-shot list we bring on every founder-led product shoot.",
    "body": [
      {
        "type": "p",
        "text": "You don't need a $50k production to look premium. You need 12 shots, one afternoon, and a plan. This is the exact list we use on founder shoots."
      },
      {
        "type": "h2",
        "text": "The 12 shots"
      },
      {
        "type": "list",
        "items": [
          "Hero product on a clean surface, top-down",
          "Product in-hand, 3/4 angle",
          "Founder to camera, medium close-up",
          "Product being used, over-the-shoulder",
          "Detail macro: material, texture, seam",
          "Packaging reveal, slow open",
          "Before/after or transformation",
          "Customer reaction, candid",
          "Environment / lifestyle wide",
          "Text overlay-safe negative space plate",
          "Cutdown-friendly loop (2s)",
          "End card with logo and offer"
        ]
      },
      {
        "type": "h2",
        "text": "Shoot for the edit"
      },
      {
        "type": "p",
        "text": "Every shot should have a plate version — the same frame without talent or product — so your editor can composite text or extend the shot. Costs nothing on set, saves everything in post."
      }
    ]
  },
  {
    "slug": "ai-in-creative-process",
    "title": "AI in the creative process — what actually works",
    "cat": "Design",
    "read": "6 min",
    "tone": "from-brand via-ink to-brand/60",
    "date": "April 22, 2026",
    "author": "Bold Bind Studio",
    "excerpt": "Where AI is genuinely useful in a design workflow — and where it still gets in the way.",
    "body": [
      {
        "type": "p",
        "text": "AI is neither a replacement for design taste nor a novelty. Used well, it's a force multiplier for the boring parts. Used badly, it's how you end up with 400 mediocre logos and no direction."
      },
      {
        "type": "h2",
        "text": "Where AI helps"
      },
      {
        "type": "list",
        "items": [
          "Moodboarding and reference gathering (10x faster)",
          "Copy variations for A/B testing at scale",
          "Rough motion previz before shoot day",
          "Background removal, upscaling, cleanup",
          "Transcription and rough subtitle passes"
        ]
      },
      {
        "type": "h2",
        "text": "Where AI hurts"
      },
      {
        "type": "list",
        "items": [
          "Final brand marks — still needs a human eye",
          "Illustration with narrative — soul is the point",
          "Copy that carries the brand voice",
          "Anything a client will scrutinize pixel-by-pixel"
        ]
      },
      {
        "type": "quote",
        "text": "AI shortens the distance between idea and artifact. Taste still decides which artifact ships."
      }
    ]
  },
  {
    "slug": "landing-page-conversion-checklist",
    "title": "The 20-point landing page conversion checklist",
    "cat": "Marketing",
    "read": "6 min",
    "tone": "from-brand to-ink",
    "date": "April 10, 2026",
    "author": "Bold Bind Growth",
    "excerpt": "The exact checklist we run against every landing page before spend goes live.",
    "body": [
      {
        "type": "p",
        "text": "Half of the traffic problem is a landing page problem. Before you touch your ads, run your page against this list. If you fail more than three, fix the page first."
      },
      {
        "type": "h2",
        "text": "Above the fold"
      },
      {
        "type": "list",
        "items": [
          "One sentence tells me what this is",
          "One image shows the product doing the thing",
          "One CTA — not two",
          "Loads in under 1.5s on 4G",
          "Works one-handed on mobile"
        ]
      },
      {
        "type": "h2",
        "text": "Body"
      },
      {
        "type": "list",
        "items": [
          "Three real benefits (not features)",
          "One objection handled per section",
          "Social proof within the first scroll",
          "Visual hierarchy: I can skim in 6 seconds",
          "Every claim has proof (number, quote, or demo)"
        ]
      },
      {
        "type": "h2",
        "text": "Bottom"
      },
      {
        "type": "list",
        "items": [
          "FAQ answers the 5 most common blockers",
          "Repeat the CTA before the fold ends",
          "Trust: guarantee, returns, contact",
          "No dead links, no lorem, no broken analytics"
        ]
      },
      {
        "type": "quote",
        "text": "A great ad drives clicks. A great page turns them into customers."
      }
    ]
  }
] as const;
