"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./logo";
import { BRAND } from "@/lib/site-data";

const SERVICE_LINKS = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Brand Identity", slug: "brand-identity" },
  { label: "Creative Design", slug: "creative-design" },
  { label: "Business Automation", slug: "business-automation" },
  { label: "Business Consultation", slug: "business-consultation" },
  { label: "Studio & Video Production", slug: "studio-video" },
];

const COMPANY_LINKS = [
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Careers", path: "/careers" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
];

const SOCIAL_ICONS = [Facebook, Instagram, Linkedin, Youtube];

export function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl" aria-hidden />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("/");
              }}
              aria-label="Bold Bind — home"
            >
              <Logo />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
              We build brands digitally. A creative &amp; digital agency helping ambitious
              businesses grow through strategy, design, and automation.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {BRAND.socials.map((social, i) => {
                const Icon = SOCIAL_ICONS[i];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-all hover:border-brand hover:bg-brand hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.slug}>
                  <a
                    href={`#/services/${link.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/services/${link.slug}`);
                    }}
                    className="text-white/80 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Company</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={`#${link.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.path);
                    }}
                    className="text-white/80 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a href={BRAND.phoneHref}>{BRAND.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span>
                  {BRAND.addressLine1}
                  <br />
                  {BRAND.addressLine2}
                </span>
              </li>
              <li className="text-white/60">{BRAND.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Bold Bind. All rights reserved.</p>
          <p className="text-xs text-white/50">Crafted in Dhaka · Serving worldwide</p>
        </div>
      </div>
    </footer>
  );
}
