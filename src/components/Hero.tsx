"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Database, Download, ExternalLink, Instagram, Layers3, Sparkles } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import MagneticButton from "./MagneticButton";
import TypewriterText from "./TypewriterText";

const floatingWords = [
  "Clean Code",
  "System Design",
  "Security",
  "User Friendly",
  "Database",
  "API Development",
  "Responsive",
  "Performance",
  "IT Operation",
  "Best Practice",
];

const stackBadges = [
  { label: "Next.js", icon: Code2 },
  { label: "Database", icon: Database },
  { label: "UI System", icon: Layers3 },
];

const introVariants = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const portraitVariants = {
  hidden: { opacity: 0, y: 54, scale: 0.92, filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const copyY = useTransform(scrollYProgress, [0, 1], [0, 88]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -88]);
  const visualScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.07]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const frameProgress = useTransform(scrollYProgress, [0, 0.78], ["18%", "92%"]);

  return (
    <section
      ref={sectionRef}
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <motion.div style={{ scale: glowScale }} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-bluex/16 blur-[130px]" />
        <div className="absolute right-0 top-28 h-[28rem] w-[28rem] rounded-full bg-cyanx/13 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violetx/12 blur-[130px]" />
        <div className="grid-mask absolute inset-0 opacity-45" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingWords.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.04, 0.16, 0.04], y: [0, index % 2 === 0 ? -10 : 10, 0] }}
            transition={{ duration: 7 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
            className="absolute hidden select-none text-xl font-black text-white/[0.08] sm:block lg:text-2xl"
            style={{
              left: `${(index * 17) % 92}%`,
              top: `${10 + ((index * 13) % 78)}%`,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div style={{ y: copyY }} className="max-w-3xl">
          <motion.p
            custom={0.05}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="text-lg font-bold text-cyanx sm:text-xl"
          >
            Hey, I’m
          </motion.p>

          <motion.h1
            custom={0.15}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={0.24}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-4 text-xl font-black text-slate-400"
          >
            {profile.role}
          </motion.p>

          <motion.div
            custom={0.33}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-7 flex min-h-10 items-center"
          >
            <TypewriterText
              words={[
                "Staff Programmer & IT Operation",
                "Web Developer",
                "Information Systems Builder",
                "Frontend & UI Enthusiast",
              ]}
              className="text-2xl font-semibold tracking-[-0.03em] text-cyanx sm:text-3xl"
            />
          </motion.div>

          <motion.p
            custom={0.43}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.p
            custom={0.52}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-base font-bold leading-7 text-white sm:text-lg"
          >
            I don’t just make interfaces look good — I build systems that feel clean, usable, and ready to grow.
          </motion.p>

          <motion.div
            custom={0.62}
            variants={introVariants}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton
              href={profile.instagram}
              target="_blank"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyanx px-7 py-3.5 text-sm font-black text-ink shadow-[0_20px_60px_rgba(34,211,238,0.22)] transition hover:bg-white"
            >
              Connect on Instagram <Instagram size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton
              href={profile.cv}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-bold text-white transition hover:border-cyanx/40 hover:bg-white/10"
            >
              View CV <Download size={17} />
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: visualY, scale: visualScale }} className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-cyanx/20 via-bluex/8 to-violetx/20 blur-3xl" />

          <motion.div
            variants={portraitVariants}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-[0_40px_130px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:rounded-[2.4rem]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_35%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_82%_80%,rgba(139,92,246,0.17),transparent_36%)]" />
            <div className="absolute inset-0 grid-pattern opacity-25" />

            <div className="relative min-h-[450px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1224]/78 sm:min-h-[500px] sm:rounded-[2rem]">
              <div className="absolute left-6 top-6 z-30 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyanx/25 bg-cyanx/10 text-cyanx shadow-[0_0_30px_rgba(34,211,238,0.16)]">
                  <Code2 size={20} />
                </span>
                <span className="hidden rounded-2xl border border-white/10 bg-ink/40 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 backdrop-blur sm:inline-flex">
                  Next.js Portfolio
                </span>
              </div>

              <div className="absolute right-6 top-6 z-30 flex flex-col gap-3">
                {stackBadges.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                      transition={{ duration: 4.2 + index, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink/55 text-cyanx shadow-[0_20px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                      title={item.label}
                    >
                      <Icon size={20} />
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-[54%] h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanx/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-[54%] h-[92%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violetx/15"
              />

              <div className="absolute inset-x-10 bottom-0 h-44 rounded-full bg-gradient-to-t from-ink via-ink/70 to-transparent blur-xl" />

              <motion.div
                animate={{ x: ["-120%", "135%"] }}
                transition={{ duration: 5.8, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 z-30 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
              <motion.div
                animate={{ y: ["-20%", "120%"] }}
                transition={{ duration: 4.8, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-x-0 z-30 h-28 bg-gradient-to-b from-transparent via-cyanx/16 to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, y: 54, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 bottom-0 z-20 flex h-[94%] items-end justify-center"
              >
                <Image
                  src="/images/rizki-profile-cutout.png"
                  alt="Muhammad Rizki Akbar"
                  width={705}
                  height={857}
                  priority
                  sizes="(max-width: 768px) 86vw, 520px"
                  className="h-full w-auto object-contain object-bottom drop-shadow-[0_30px_70px_rgba(34,211,238,0.22)]"
                />
              </motion.div>

              <div className="absolute bottom-5 left-5 right-5 z-40 rounded-2xl border border-white/10 bg-ink/72 p-4 backdrop-blur-2xl">
                <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                  <span className="inline-flex items-center gap-2 text-cyanx">
                    <Sparkles size={12} /> Motion UI
                  </span>
                  <span>PDSI • ITI</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div style={{ width: frameProgress }} className="h-full rounded-full bg-gradient-to-r from-cyanx via-bluex to-violetx" />
                </div>
                <div className="mt-3 rounded-2xl border border-cyanx/10 bg-black/28 px-3.5 py-2.5 font-mono text-xs text-slate-300 shadow-[inset_0_0_30px_rgba(34,211,238,0.04)]">
                  <span className="text-cyanx">instagram : @Rizkiakbar74 </span>
                  <TypewriterText
                    words={[
                      "welcome to my portfolio",
                      "building clean web interfaces",
                      "supporting campus information systems",
                      "making workflows easier to use",
                    ]}
                    typingSpeed={68}
                    deletingSpeed={30}
                    pauseDelay={950}
                    startDelay={900}
                    className="text-slate-200"
                    cursorClassName="h-[1em] bg-cyanx"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.86 }}
            className="glass-card absolute -right-2 bottom-20 z-50 hidden items-center gap-3 rounded-3xl px-5 py-4 transition hover:-translate-y-1 md:flex"
          >
            <Instagram size={19} className="text-cyanx" />
            <span className="text-sm font-bold text-white">instagram : @Rizkiakbar74</span>
            <ExternalLink size={14} className="text-slate-500" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
