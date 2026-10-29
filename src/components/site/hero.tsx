"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Award, Clapperboard, Globe, PenTool, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { BRAND } from "@/lib/site-data";

/* ------------------------------ orbit machinery ---------------------------- */

interface OrbitItemProps {
  /** base angle in degrees */
  base: number;
  /** ellipse radii in % of container */
  rx: number;
  ry: number;
  /** seconds per revolution */
  period: number;
  children: React.ReactNode;
}

/** Items circle the sphere on an elliptical path, scaling & fading with depth,
 *  and swap z-index so they pass in front of / behind the sphere. */
function OrbitItem({ base, rx, ry, period, children }: OrbitItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = ((now - start) / 1000 / period) % 1;
      const theta = ((base + t * 360) * Math.PI) / 180;
      const x = Math.cos(theta) * rx;
      const y = Math.sin(theta) * ry;
      const depth = (Math.sin(theta) + 1) / 2; // 0 = back (top), 1 = front (bottom)
      const el = ref.current;
      if (el) {
        el.style.left = `calc(50% + ${x}%)`;
        el.style.top = `calc(50% + ${y}%)`;
        el.style.transform = `translate(-50%, -50%) scale(${(0.8 + 0.25 * depth).toFixed(3)})`;
        el.style.opacity = (0.55 + 0.45 * depth).toFixed(3);
        el.style.zIndex = depth > 0.55 ? "20" : "1";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [base, rx, ry, period]);

  return (
    <div ref={ref} className="absolute top-0 left-0 will-change-transform">
      {children}
    </div>
  );
}

function Chip({
  icon,
  label,
  value,
  dark = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-background/90 px-3 py-2.5 shadow-xl backdrop-blur">
      <span className={`grid h-8 w-8 place-items-center rounded-xl text-white ${dark ? "bg-ink" : "bg-brand"}`}>
        {icon}
      </span>
      <span>
        <span className="block text-[10px] uppercase tracking-widest text-ink-soft">{label}</span>
        <span className="block text-sm font-bold leading-tight text-ink">{value}</span>
      </span>
    </div>
  );
}

function IconTile({ icon, brand = false }: { icon: React.ReactNode; brand?: boolean }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background/90 shadow-lg backdrop-blur">
      <span className={brand ? "text-brand" : "text-ink"}>{icon}</span>
    </div>
  );
}

/* ---------------------------------- sphere --------------------------------- */

function Sphere() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="absolute inset-[22%] z-10"
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--gx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        el.style.setProperty("--gy", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brand via-brand to-brand/70 shadow-[0_40px_80px_-24px_oklch(0.595_0.238_27.2/0.55)]">
        {/* dotted texture */}
        <div
          className="absolute inset-0 opacity-70 mix-blend-screen"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.9) 1px, transparent 1.6px)",
            backgroundSize: "12px 12px",
            WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 55%, transparent 72%)",
            maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 55%, transparent 72%)",
          }}
        />
        {/* latitude lines */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          {[20, 35, 50, 65, 80].map((cy, i) => (
            <ellipse
              key={cy}
              cx="50"
              cy={cy}
              rx="48"
              ry={[33, 19.5, 6, 19.5, 33][i]}
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.3"
            />
          ))}
        </svg>
        {/* longitude lines */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          {[15, 30, 50, 70, 85].map((cx, i) => (
            <ellipse
              key={cx}
              cx={cx}
              cy="50"
              rx={[37.5, 24, 6, 24, 37.5][i]}
              ry="48"
              fill="none"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="0.3"
            />
          ))}
        </svg>
        {/* mouse-follow highlight */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.55), transparent 55%)" }}
        />
        {/* inner shading */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_-30px_-40px_80px_rgba(0,0,0,0.35),inset_20px_20px_40px_rgba(255,255,255,0.15)]" />
      </div>
    </div>
  );
}

/* ----------------------------------- hero ---------------------------------- */

export function Hero({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh-bg absolute inset-0" aria-hidden />
      <div
        className="grid-bg absolute inset-0 opacity-40"
        aria-hidden
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* floating decorations */}
      <div className="animate-float-slow pointer-events-none absolute -left-10 top-32 h-40 w-40 rounded-[2rem] bg-gradient-to-br from-brand to-brand/40 opacity-20 blur-2xl" aria-hidden />
      <div className="animate-float-slower pointer-events-none absolute right-10 top-20 h-24 w-24 rounded-full border border-brand/30" aria-hidden />
      <div className="animate-float-slow pointer-events-none absolute bottom-10 right-1/3 h-16 w-16 rotate-12 rounded-2xl bg-ink/90" aria-hidden />

      <div className="container-x relative pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-ink/80 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Creative &amp; Digital Agency · Dhaka
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-6xl lg:text-7xl">
                We build your <br className="hidden sm:block" />
                brand <span className="text-gradient-brand">digitally.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                We help businesses grow through Digital Marketing, Brand Identity, Creative Design,
                Business Automation, Studio &amp; Video Production, and Business Consultation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={BRAND.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_18px_40px_-14px_oklch(0.595_0.238_27.2/0.7)] transition-transform hover:-translate-y-0.5"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </a>
                <a
                  href="#/portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/portfolio");
                  }}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-background/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:border-ink"
                >
                  View Portfolio
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-6 text-sm text-ink-soft">
                <div className="flex -space-x-2">
                  {[
                    { t: "A", c: "#ED1C24" },
                    { t: "B", c: "#111111" },
                    { t: "C", c: "#F5A5A8" },
                    { t: "D", c: "#333333" },
                  ].map((a) => (
                    <span
                      key={a.t}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-background text-[10px] font-semibold text-white"
                      style={{ background: a.c }}
                    >
                      {a.t}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-brand" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="text-xs">Trusted by 200+ brands worldwide</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3D visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-lg"
            style={{ perspective: 1200 }}
          >
            {/* tilted dashed orbit rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="absolute h-[92%] w-[92%] rounded-[50%] border border-dashed border-ink/15" style={{ transform: "rotateX(68deg)" }} />
              <div className="absolute h-[74%] w-[74%] rounded-[50%] border border-dashed border-brand/25" style={{ transform: "rotateX(68deg)" }} />
              <div className="absolute h-[58%] w-[58%] rounded-[50%] border border-brand/10" style={{ transform: "rotateX(68deg)" }} />
            </div>

            <Sphere />

            {/* orbiting stat chips */}
            <OrbitItem base={0} rx={40} ry={17} period={52}>
              <Chip icon={<TrendingUp className="h-4 w-4" aria-hidden />} label="ROAS" value="+312%" />
            </OrbitItem>
            <OrbitItem base={180} rx={40} ry={17} period={52}>
              <Chip dark icon={<Sparkles className="h-4 w-4" aria-hidden />} label="Campaigns live" value="48 running" />
            </OrbitItem>
            <OrbitItem base={90} rx={40} ry={17} period={52}>
              <Chip dark icon={<Globe className="h-4 w-4" aria-hidden />} label="Countries" value="14 served" />
            </OrbitItem>
            <OrbitItem base={270} rx={40} ry={17} period={52}>
              <Chip dark icon={<Users className="h-4 w-4" aria-hidden />} label="Clients" value="200+" />
            </OrbitItem>

            {/* orbiting icon tiles */}
            <OrbitItem base={45} rx={33} ry={14} period={38}>
              <IconTile brand icon={<PenTool className="h-5 w-5" aria-hidden />} />
            </OrbitItem>
            <OrbitItem base={225} rx={33} ry={14} period={38}>
              <IconTile icon={<Clapperboard className="h-5 w-5" aria-hidden />} />
            </OrbitItem>
            <OrbitItem base={135} rx={33} ry={14} period={38}>
              <IconTile brand icon={<Zap className="h-5 w-5" aria-hidden />} />
            </OrbitItem>
            <OrbitItem base={315} rx={33} ry={14} period={38}>
              <IconTile icon={<Award className="h-5 w-5" aria-hidden />} />
            </OrbitItem>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
