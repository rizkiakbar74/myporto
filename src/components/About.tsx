"use client";

import { motion, useInView } from "framer-motion";
import { Code2, GraduationCap, MapPin, ServerCog } from "lucide-react";
import { useRef } from "react";
import { profile } from "@/data/profile";
import SectionHeader from "./SectionHeader";
import SectionReveal from "./SectionReveal";

const chips = [
  { icon: ServerCog, label: "IT Operation" },
  { icon: Code2, label: "Web Development" },
  { icon: GraduationCap, label: "Information Systems" },
  { icon: MapPin, label: "Bogor, Indonesia" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isAboutInView = useInView(sectionRef, { amount: 0.24, margin: "0px 0px -12% 0px" });

  return (
    <section ref={sectionRef} id="tentang" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeader eyebrow="About" title="A quick intro." description="I like simple systems, clean interfaces, and work that feels useful." />

        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <SectionReveal>
            <div className="relative mx-auto flex aspect-square max-w-[460px] items-center justify-center rounded-full">
              {[0, 1, 2].map((ring) => (
                <motion.div key={ring} animate={isAboutInView ? { rotate: ring % 2 ? -360 : 360 } : { rotate: 0 }} transition={{ duration: 24 + ring * 8, repeat: isAboutInView ? Infinity : 0, ease: "linear" }} className="absolute rounded-full border border-cyanx/12" style={{ inset: `${ring * 44}px` }} />
              ))}
              <motion.div animate={isAboutInView ? { scale: [1, 1.06, 1], opacity: [0.65, 1, 0.65] } : { scale: 1, opacity: 0.65 }} transition={{ duration: 3.6, repeat: isAboutInView ? Infinity : 0, ease: "easeInOut" }} className="absolute h-32 w-32 rounded-full bg-cyanx/18 blur-3xl" />
              <div className="glass-card relative z-10 max-w-[310px] rounded-[2rem] p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyanx">Core Focus</p>
                <p className="mt-4 text-3xl font-black leading-tight text-white">Useful digital work, made simple.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">Clean, practical, and easy to use.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <p className="text-lg leading-9 text-slate-200">{profile.about}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {chips.map((item) => (
                  <motion.div key={item.label} whileHover={{ y: -4 }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyanx/10 text-cyanx">
                      <item.icon size={20} />
                    </span>
                    <span className="text-sm font-bold text-white">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
