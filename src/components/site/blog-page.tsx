"use client";

import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { BLOG_FILTERS, BLOG_POSTS } from "@/lib/site-data";

export function BlogPage() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const posts = BLOG_POSTS.filter(
    (p) => (filter === "All" || p.cat === filter) && p.title.toLowerCase().includes(query.toLowerCase())
  );
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  return (
    <main>
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Insights</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Playbooks &amp; <span className="text-gradient-brand">perspective.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex max-w-md items-center gap-2 rounded-full border border-border bg-background/80 px-5 py-3 backdrop-blur">
              <Search className="h-4 w-4 text-ink-soft" aria-hidden />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-ink-soft"
                aria-label="Search articles"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-16">
        <div className="container-x">
          <Reveal>
            <a
              href={`#/blog/${featured.slug}`}
              className="group grid gap-6 rounded-[2rem] border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1.2fr_1fr] md:p-8"
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${featured.tone}`}>
                <div className="grid-bg absolute inset-0 opacity-15" aria-hidden />
                <div className="absolute inset-0 grid place-items-center font-display text-4xl font-bold text-white/40">
                  {featured.cat}
                </div>
              </div>
              <div className="flex flex-col justify-center p-4 md:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                  {featured.cat} · Featured
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-ink-soft">{featured.excerpt}</p>
                <p className="mt-2 text-sm text-ink-soft">{featured.read} read</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Read the article{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {BLOG_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "border-ink bg-ink text-white"
                    : "border-border text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <a
                  href={`#/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.tone}`}>
                    <div className="grid-bg absolute inset-0 opacity-15" aria-hidden />
                    <div className="absolute inset-0 grid place-items-center font-display text-3xl font-bold text-white/40">
                      {post.cat}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2 text-xs text-ink-soft">
                      <span className="font-semibold text-brand">{post.cat}</span> · {post.read} read
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-brand">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm text-ink-soft">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                      Read article{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
          {posts.length === 0 && (
            <p className="mt-10 text-center text-ink-soft">No articles match your search.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <Reveal>
            <div className="grid gap-8 rounded-[2rem] bg-ink p-10 text-white md:grid-cols-[1.2fr_1fr] md:items-center md:p-14">
              <div>
                <h3 className="font-display text-3xl font-bold md:text-4xl">
                  Get the Bold Bind newsletter.
                </h3>
                <p className="mt-3 text-white/70">
                  Monthly playbooks on branding, marketing, and growth. No spam.
                </p>
              </div>
              <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  aria-label="Email address"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/40 focus:border-brand"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold">
                  Subscribe <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
