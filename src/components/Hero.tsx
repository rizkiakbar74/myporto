"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { Code2, Download, Github, Instagram, Layers3, Linkedin, Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import TypewriterText from "./TypewriterText";

const floatingWords = ["Clean Code", "System Design", "Database", "Responsive", "IT Operation", "UI Flow"];

const socialLinks = [
  {
    label: "Instagram",
    href: profile.instagram,
    icon: Instagram,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

const introVariants: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, delay, ease: "easeOut" },
  }),
} as any;

function HeroButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") || href.startsWith("/") ? "_blank" : undefined}
      rel={href.startsWith("http") || href.startsWith("/") ? "noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={
        variant === "primary"
          ? "inline-flex h-12 min-w-[182px] items-center justify-center gap-2 rounded-full bg-cyanx px-6 text-sm font-black text-ink shadow-[0_18px_60px_rgba(34,211,238,0.2)] transition hover:bg-white"
          : "inline-flex h-12 min-w-[132px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:border-cyanx/35 hover:bg-white/[0.08] hover:text-cyanx"
      }
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isHeroInView = useInView(sectionRef, { amount: 0.22, margin: "0px 0px -12% 0px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const visualScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.03]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const frameProgress = useTransform(scrollYProgress, [0, 0.78], ["16%", "88%"]);

  return (
    <section ref={sectionRef} id="beranda" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <motion.div style={{ scale: glowScale }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-bluex/14 blur-[120px]" />
        <div className="absolute right-0 top-32 h-[24rem] w-[24rem] rounded-full bg-cyanx/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violetx/10 blur-[120px]" />
        <div className="grid-mask absolute inset-0 opacity-35" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingWords.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: [0.03, 0.1, 0.03], y: [0, index % 2 === 0 ? -6 : 6, 0] } : { opacity: 0.03, y: 0 }}
            transition={{ duration: 9 + index * 0.4, repeat: isHeroInView ? Infinity : 0, ease: "easeInOut" }}
            className="absolute hidden select-none text-xl font-black text-white/[0.06] sm:block lg:text-2xl"
            style={{ left: `${(index * 17) % 90}%`, top: `${12 + ((index * 15) % 74)}%` }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div style={{ y: copyY }} className="max-w-3xl">
          <motion.p custom={0.05} variants={introVariants} initial="hidden" animate="visible" className="text-lg font-bold text-cyanx sm:text-xl">
            Hey, I&apos;m
          </motion.p>

          <motion.h1 custom={0.15} variants={introVariants} initial="hidden" animate="visible" className="mt-4 text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>

          <motion.p custom={0.24} variants={introVariants} initial="hidden" animate="visible" className="mt-4 text-xl font-black text-slate-400">
            {profile.role}
          </motion.p>

          <motion.div custom={0.33} variants={introVariants} initial="hidden" animate="visible" className="mt-7 flex min-h-10 items-center">
            <TypewriterText
              words={[
                "Staff Programmer & IT Operation",
                "Web Developer",
                "Information Systems Builder",
                "Frontend & UI Enthusiast",
              ]}
              className="text-2xl font-semibold tracking-[-0.03em] text-cyanx sm:text-3xl"
              active={isHeroInView}
            />
          </motion.div>

          <motion.p custom={0.42} variants={introVariants} initial="hidden" animate="visible" className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.subheadline}
          </motion.p>

          <motion.p custom={0.5} variants={introVariants} initial="hidden" animate="visible" className="mt-6 max-w-xl text-base font-bold leading-7 text-white sm:text-lg">
            I like building things that feel simple, clean, and easy to use.
          </motion.p>

          <motion.div custom={0.58} variants={introVariants} initial="hidden" animate="visible" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <HeroButton href={profile.instagram}>
              Connect on Instagram <Instagram size={17} />
            </HeroButton>
            <HeroButton href={profile.cv} variant="secondary">
              View CV <Download size={16} />
            </HeroButton>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY, scale: visualScale }} className="relative">
          <motion.div
            initial={{ opacity: 0, y: 38, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="glass-card relative mx-auto aspect-[4/4.2] w-full max-w-[33rem] overflow-hidden rounded-[2.4rem] border border-white/10 p-4 shadow-[0_30px_90px_rgba(6,9,24,0.65)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_25%,rgba(124,58,237,0.14),transparent_24%),radial-gradient(circle_at_52%_100%,rgba(15,98,254,0.12),transparent_32%)]" />

            <div className="relative z-10 flex items-center justify-between px-2 py-1.5">
              <motion.div
                animate={isHeroInView ? { y: [0, -3, 0] } : { y: 0 }}
                transition={{ duration: 3.8, repeat: isHeroInView ? Infinity : 0, ease: "easeInOut" }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-cyanx"
              >
                <Code2 size={15} />
              </motion.div>
              <motion.div
                animate={isHeroInView ? { opacity: [0.7, 1, 0.7] } : { opacity: 0.75 }}
                transition={{ duration: 3.4, repeat: isHeroInView ? Infinity : 0, ease: "easeInOut" }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-cyanx"
              >
                <Sparkles size={15} />
              </motion.div>
            </div>

            <div className="absolute right-4 top-20 z-50 flex flex-col items-end gap-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isHeroInView ? { opacity: 1, x: 0, y: [0, -3, 0] } : { opacity: 1, x: 0, y: 0 }}
                    transition={{
                      opacity: { duration: 0.45, delay: 0.38 + index * 0.08 },
                      x: { duration: 0.45, delay: 0.38 + index * 0.08 },
                      y: { duration: 3.2 + index * 0.25, repeat: isHeroInView ? Infinity : 0, ease: "easeInOut" },
                    }}
                    className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] text-cyanx backdrop-blur-xl transition-all duration-300 hover:w-40 hover:border-cyanx/35 hover:bg-cyanx/12"
                    aria-label={item.label}
                  >
                    <span className="whitespace-nowrap pl-4 pr-2 text-xs font-bold text-white opacity-0 transition duration-200 group-hover:opacity-100">
                      {item.label}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center">
                      <Icon size={19} />
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <motion.div animate={isHeroInView ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 30, repeat: isHeroInView ? Infinity : 0, ease: "linear" }} className="absolute left-1/2 top-[54%] h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanx/12" />
            <motion.div animate={isHeroInView ? { rotate: -360 } : { rotate: 0 }} transition={{ duration: 40, repeat: isHeroInView ? Infinity : 0, ease: "linear" }} className="absolute left-1/2 top-[54%] h-[88%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violetx/12" />

            <div className="absolute inset-x-10 bottom-0 h-44 rounded-full bg-gradient-to-t from-ink via-ink/70 to-transparent blur-xl" />

            <motion.div animate={isHeroInView ? { x: ["-120%", "125%"] } : { x: "-120%" }} transition={{ duration: 7.4, repeat: isHeroInView ? Infinity : 0, repeatDelay: 2.4, ease: "easeInOut" }} className="pointer-events-none absolute inset-y-0 z-30 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <motion.div animate={isHeroInView ? { y: ["-20%", "120%"] } : { y: "-20%" }} transition={{ duration: 7.6, repeat: isHeroInView ? Infinity : 0, repeatDelay: 2.8, ease: "easeInOut" }} className="pointer-events-none absolute inset-x-0 z-30 h-24 bg-gradient-to-b from-transparent via-cyanx/10 to-transparent" />

            <motion.div initial={{ opacity: 0, y: 42, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.95, delay: 0.34, ease: "easeOut" }} className="absolute inset-x-0 bottom-0 z-20 flex h-[94%] items-end justify-center">
              <Image src="/images/rizki-profile-cutout.png" alt="Muhammad Rizki Akbar" width={705} height={857} priority sizes="(max-width: 768px) 86vw, 520px" className="h-full w-auto object-contain object-bottom drop-shadow-[0_30px_70px_rgba(34,211,238,0.18)]" />
            </motion.div>

            <div className="absolute bottom-5 left-5 right-5 z-40 rounded-2xl border border-white/10 bg-ink/72 p-4 backdrop-blur-xl">
              <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                <span className="inline-flex items-center gap-2 text-cyanx">
                  <Sparkles size={12} /> Now Building
                </span>
                <span>PDSI • ITI</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ width: frameProgress }} className="h-full rounded-full bg-gradient-to-r from-cyanx via-bluex to-violetx" />
              </div>
              <div className="mt-3 overflow-hidden rounded-2xl border border-cyanx/10 bg-black/28 px-3.5 py-2.5 font-mono text-xs text-slate-200 shadow-[inset_0_0_30px_rgba(34,211,238,0.04)]">
                <TypewriterText
                  words={[
                    "building clean web interfaces",
                    "supporting campus IT operations",
                    "creating useful digital systems",
                    "making workflows easier to use",
                  ]}
                  typingSpeed={64}
                  deletingSpeed={28}
                  pauseDelay={1000}
                  startDelay={900}
                  className="max-w-full text-slate-200"
                  cursorClassName="h-[1em] bg-cyanx"
                  active={isHeroInView}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
