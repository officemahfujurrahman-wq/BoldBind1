"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./reveal";
import { BRAND, PORTFOLIO_PROJECTS } from "@/lib/site-data";

const GUARANTEES = ["On time, on budget", "Cross-functional team", "Measurable outcomes", "Post-launch support"];

export function PortfolioDetailPage({ slug }: { slug: string }) {
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) {
    return (
      <main className="container-x py-40 text-center">
        <h1 className="font-display text-4xl font-bold">Case study not found</h1>
        <a href="#/portfolio" className="mt-6 inline-block text-brand hover:underline">
          Back to portfolio
        </a>
      </main>
    );
  }

  const related = PORTFOLIO_PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);
  const meta = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Category", value: project.cat },
    { label: "Scope", value: project.scope },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <a href="#/portfolio" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-brand">
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-90" aria-hidden /> Back to portfolio
            </a>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">{project.cat}</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-lg text-ink-soft">{project.summary}</p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {meta.map((m) => (
                  <div key={m.label} className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-[10px] font-semibold tracking-widest text-ink-soft uppercase">{m.label}</p>
                    <p className="mt-1 text-sm font-semibold text-ink">{m.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="pb-16">
        <div className="container-x">
          <Reveal>
            <div className={`relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.tone}`}>
              <div className="grid-bg absolute inset-0 opacity-15" aria-hidden />
              <div className="absolute inset-0 grid place-items-center font-display text-5xl font-bold text-white/30">
                {project.cat}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20">
        <div className="container-x grid gap-14 lg:grid-cols-4">
          {[
            { label: "Challenge", text: project.challenge },
            { label: "Solution", text: project.solution },
            { label: "Process", text: project.process },
            { label: "Outcome", text: project.outcome },
          ].map((item) => (
            <Reveal key={item.label}>
              <div className="h-full rounded-3xl border border-border bg-card p-6">
                <p className="text-xs font-semibold tracking-widest text-brand uppercase">{item.label}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="bg-surface py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Results that speak.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {project.results.map((r) => (
              <Reveal key={r.l}>
                <div className="rounded-3xl border border-border bg-card p-10 text-center">
                  <p className="font-display text-5xl font-bold text-brand">{r.v}</p>
                  <p className="mt-3 text-sm text-ink-soft">{r.l}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <figure className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-10">
              <blockquote className="font-display text-xl leading-relaxed text-ink md:text-2xl">
                &ldquo;{project.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-soft">
                — {project.quote.author}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
              {GUARANTEES.map((g) => (
                <li key={g} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-ink">{g}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20">
          <div className="container-x">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">More work.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <a href={`#/portfolio/${p.slug}`} className="group block overflow-hidden rounded-3xl">
                    <div className={`aspect-[4/5] bg-gradient-to-br ${p.tone} transition-transform duration-700 group-hover:scale-105`}>
                      <div className="grid h-full place-items-center font-display text-3xl font-bold text-white/25">
                        {p.cat}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest text-brand uppercase">{p.cat}</p>
                        <p className="mt-1 font-semibold text-ink">{p.title}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[2rem] bg-ink p-10 text-center text-white md:p-20">
              <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-5xl">
                Want results like these?
              </h3>
              <a
                href={BRAND.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Book Free Consultation <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
