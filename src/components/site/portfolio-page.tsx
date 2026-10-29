"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";
import { PORTFOLIO_FILTERS, PORTFOLIO_PROJECTS } from "@/lib/site-data";

const CASE_STUDY = [
  {
    label: "Challenge",
    text: "A 12-year-old retailer needed to modernize their brand without alienating loyal customers.",
  },
  {
    label: "Solution",
    text: "Refreshed identity system, tone of voice, and a launch campaign across paid and organic.",
  },
  {
    label: "Process",
    text: "Discovery workshops, strategy sprint, identity design, campaign production.",
  },
  {
    label: "Results",
    text: "+312% ROAS, 4.2M impressions, 38% lift in branded search in 90 days.",
  },
];

export function PortfolioPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [filter, setFilter] = useState("All");
  const projects = PORTFOLIO_PROJECTS.filter(
    (p) => filter === "All" || p.cat === filter
  );

  return (
    <main>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Portfolio</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Work we&apos;re <span className="text-gradient-brand">proud of.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              A selection of recent projects across branding, marketing, design, video, and
              automation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "border-ink bg-ink text-white"
                    : "border-border bg-background text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={project.size === "lg" ? "lg:row-span-2" : ""}
              >
                <a
                  href={`#/portfolio/${project.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/portfolio/${project.slug}`);
                  }}
                  className="group relative block h-full overflow-hidden rounded-3xl"
                >
                  <div
                    className={`w-full bg-gradient-to-br ${project.tone} transition-transform duration-700 group-hover:scale-105 ${
                      project.size === "lg" ? "aspect-[3/5]" : "aspect-[4/5]"
                    }`}
                  >
                    <div className="grid h-full place-items-center font-display text-3xl font-bold text-white/25">
                      {project.cat}
                    </div>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between rounded-2xl border border-white/20 bg-background/85 p-4 backdrop-blur-lg">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-brand uppercase">
                        {project.cat}
                      </p>
                      <p className="mt-1 font-semibold text-ink">{project.title}</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured case study */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Case study</span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Kinetic Rebrand — from local shop to national retailer.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {CASE_STUDY.map((item) => (
              <Reveal key={item.label}>
                <div className="h-full rounded-3xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold tracking-widest text-brand uppercase">{item.label}</p>
                  <p className="mt-4 text-sm text-ink-soft">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="font-display text-xl leading-relaxed text-ink md:text-2xl">
                &ldquo;Bold Bind rebuilt our brand from the ground up and gave us a marketing
                engine that actually delivers. Best decision we made this year.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-ink-soft">
                — Ayesha Rahman, Founder, Kinetic Retail
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[2rem] bg-ink p-10 text-center text-white md:p-20">
              <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-5xl">
                Have a project in mind?
              </h3>
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/contact");
                }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold"
              >
                Start a conversation <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
