"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { BRAND, FAQS, PRICING_TIERS, SERVICE_ICONS, SERVICE_PROCESS, SERVICES } from "@/lib/site-data";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return (
      <main className="container-x py-40 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <a href="#/services" className="mt-6 inline-block text-brand hover:underline">
          Back to services
        </a>
      </main>
    );
  }

  const Icon = SERVICE_ICONS[service.slug];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mesh-bg absolute inset-0 opacity-70" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <a
              href="#/services"
              className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-brand"
            >
              <ArrowUpRight className="h-3.5 w-3.5 -rotate-90" aria-hidden /> Back to services
            </a>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
                  {service.tagline}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                  {service.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg text-ink-soft">{service.desc}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={BRAND.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-14px_oklch(0.595_0.238_27.2/0.7)] transition-transform hover:-translate-y-0.5"
                  >
                    Book Free Consultation <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a
                    href="#/portfolio"
                    className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
                  >
                    See related work
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div
                className={`relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-br ${service.tone}`}
              >
                <div className="grid-bg absolute inset-0 opacity-15" aria-hidden />
                <div className="absolute inset-0 grid place-items-center">
                  {Icon && <Icon className="h-32 w-32 text-white/80" aria-hidden />}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
                What&apos;s included
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                A complete {service.title.toLowerCase()} toolkit.
              </h2>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="font-medium text-ink">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Process</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                How we work.
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICE_PROCESS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <p className="font-display text-4xl font-bold text-brand/30">{step.step}</p>
                  <h3 className="mt-4 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">Pricing</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Simple, scoped engagements.
              </h2>
            </Reveal>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <Reveal key={tier.name}>
                <div
                  className={`h-full rounded-3xl border p-8 ${
                    tier.featured ? "border-transparent bg-ink text-white" : "border-border bg-card"
                  }`}
                >
                  {tier.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold tracking-widest text-white uppercase">
                      <Sparkles className="h-3 w-3" aria-hidden /> Most popular
                    </span>
                  )}
                  <h3 className="mt-4 font-display text-2xl font-bold">{tier.name}</h3>
                  <p className={`mt-1 text-sm ${tier.featured ? "text-white/70" : "text-ink-soft"}`}>
                    {tier.desc}
                  </p>
                  <p className="mt-6 font-display text-4xl font-bold">{tier.price}</p>
                  <ul className={`mt-6 space-y-3 text-sm ${tier.featured ? "text-white/85" : "text-ink"}`}>
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand" aria-hidden /> {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#/contact"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${
                      tier.featured ? "bg-brand text-white" : "bg-ink text-white hover:bg-brand"
                    }`}
                  >
                    Get a quote <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">FAQ</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Common questions.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full rounded-2xl border border-border bg-card p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-ink">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180 text-brand" : "text-ink-soft"
                      }`}
                      aria-hidden
                    />
                  </div>
                  {openFaq === i && <p className="mt-4 text-sm text-ink-soft">{faq.a}</p>}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="rounded-[2rem] bg-ink p-10 text-center text-white md:p-20">
              <h3 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-5xl">
                Let&apos;s build your {service.title.toLowerCase()} engine.
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
