"use client";

import { ArrowRight, Eye, Target } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { CORE_VALUES, TEAM, TIMELINE } from "@/lib/site-data";

export function AboutPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">About Us</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              A creative agency <br className="hidden md:block" />
              built to <span className="text-gradient-brand">move brands forward.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg text-ink-soft">
              Bold Bind is a full-service creative &amp; digital agency headquartered in Dhaka. We
              partner with ambitious founders and marketing teams to design, market, and automate
              businesses that lead their category.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-brand/70 to-ink">
              <div className="grid-bg absolute inset-0 opacity-20" aria-hidden />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-semibold tracking-widest text-white/80 uppercase">Since 2019</p>
                <p className="mt-2 font-display text-2xl font-bold text-white">
                  Building bold brands from Bangladesh to the world.
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Our Story</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Where craft meets performance.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-ink-soft">
                <p>
                  Bold Bind started with a simple idea: brands don&apos;t need five different
                  agencies — they need one partner who understands the whole picture. Strategy,
                  design, marketing, and technology, working as a single team.
                </p>
                <p>
                  Today we&apos;re a team of strategists, designers, marketers, filmmakers, and
                  engineers building for founders and marketing leaders who care about how things
                  look and how they perform.
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="rounded-2xl border border-border p-6">
                  <Target className="h-5 w-5 text-brand" aria-hidden />
                  <h3 className="mt-4 font-semibold">Mission</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    Give ambitious businesses the creative and digital firepower usually reserved
                    for global brands.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-border p-6">
                  <Eye className="h-5 w-5 text-brand" aria-hidden />
                  <h3 className="mt-4 font-semibold">Vision</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    Become South Asia&apos;s most-loved creative &amp; digital partner for
                    category-defining brands.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Core Values</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                What we hold ourselves to.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <StaggerItem key={value.title}>
                  <div className="rounded-3xl border border-border bg-card p-8">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{value.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Our Team</span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  Meet the people behind the brand.
                </h2>
              </Reveal>
            </div>
          </div>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <StaggerItem key={member.name}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-card">
                  <div
                    className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${
                      i % 2 ? "from-brand to-ink" : "from-ink to-brand/70"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-background/90 px-4 py-3 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <span className="text-xs font-semibold text-ink">Say hi</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-ink">{member.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Timeline</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Six years, still just getting started.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((item) => (
              <StaggerItem key={item.year}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                  <p className="font-display text-3xl font-bold text-brand">{item.year}</p>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-border bg-surface p-10 md:flex-row md:items-center md:p-16">
              <div className="max-w-xl">
                <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
                  Careers
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  We&apos;re hiring bold thinkers.
                </h3>
                <p className="mt-4 text-ink-soft">
                  If you obsess over craft and outcomes, we&apos;d love to hear from you.
                </p>
              </div>
              <a
                href="#/careers"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/careers");
                }}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand"
              >
                See open roles <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
