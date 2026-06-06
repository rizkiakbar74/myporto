import type { ElementType } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { contactLinks, profile } from "@/data/profile";
import SectionHeader from "./SectionHeader";
import SectionReveal from "./SectionReveal";

const iconMap: Record<string, ElementType> = {
  Instagram,
  Email: Mail,
  GitHub: Github,
  LinkedIn: Linkedin,
};

export default function Contact() {
  return (
    <section id="kontak" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeader eyebrow="Contact" title="Let’s keep it simple." description="If you want to talk about a project or just say hi, feel free to reach out." align="center" />

        <SectionReveal>
          <div className="glass-card relative overflow-hidden rounded-[2.2rem] p-7 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-cyanx/18 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-28 left-8 h-72 w-72 rounded-full bg-violetx/14 blur-[100px]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanx">Let’s Connect</p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Open for projects, collaborations, and good conversations.</h3>
                <p className="mt-5 text-base leading-8 text-slate-300">Instagram and email are the easiest ways to reach me.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={profile.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyanx px-6 py-3.5 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-white">
                    Instagram <Instagram size={17} />
                  </a>
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-cyanx/35 hover:bg-white/10">
                    Send Email <Mail size={17} />
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map((link) => {
                  const Icon = iconMap[link.label] ?? ArrowUpRight;
                  return (
                    <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="group rounded-[1.6rem] border border-white/10 bg-ink/45 p-5 transition hover:-translate-y-1 hover:border-cyanx/35 hover:bg-cyanx/[0.06]">
                      <div className="mb-5 flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyanx/10 text-cyanx transition group-hover:bg-cyanx group-hover:text-ink">
                          <Icon size={20} />
                        </span>
                        <ArrowUpRight className="text-slate-500 transition group-hover:text-cyanx" size={18} />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{link.label}</p>
                      <p className="mt-2 break-words text-sm font-semibold leading-6 text-white">{link.value}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
