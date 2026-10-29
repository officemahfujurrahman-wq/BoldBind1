"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { WHY_POINTS, WHY_STATS } from "@/lib/site-data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function WhySection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-brand/30 blur-3xl" aria-hidden />
      <div className="container-x relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
                Why Bold Bind
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                A partner that treats your brand like our own.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-white/70">
                We combine strategy, design, and technology under one roof so ambitious teams move
                faster — without juggling five different vendors.
              </p>
            </Reveal>
            <div className="mt-10 space-y-3">
              {WHY_POINTS.map((point, i) => (
                <Reveal key={point} delay={0.1 + i * 0.06}>
                  <div className="flex items-center gap-3 text-white/85">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {point}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Stagger className="grid grid-cols-2 gap-4">
            {WHY_STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                  <div className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 text-sm text-white/60">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
