"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import SectionHeader from "./SectionHeader";
import SectionReveal from "./SectionReveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="pengalaman" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Experience"
          title="A career path across operations, technical support, and digital systems."
          description="The timeline keeps the real work history from my CV and old portfolio, then highlights my current role at PDSI Institut Teknologi Indonesia."
        />

        <div ref={ref} className="relative mt-12">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 md:block" />
          <motion.div style={{ scaleY, transformOrigin: "top" }} className="absolute left-5 top-0 hidden h-full w-px bg-cyanx md:block" />
          <div className="space-y-6">
            {experiences.map((item, index) => (
              <SectionReveal key={`${item.company}-${item.period}`} delay={index * 0.04}>
                <motion.article
                  whileHover={{ x: 8 }}
                  className="relative grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-card backdrop-blur-xl md:ml-14 md:grid-cols-[190px_1fr]"
                >
                  <div className="absolute -left-[3.35rem] top-8 hidden h-11 w-11 items-center justify-center rounded-2xl border border-cyanx/25 bg-ink text-cyanx md:flex">
                    <Briefcase size={18} />
                  </div>
                  {item.image ? (
                    <div className="relative min-h-40 overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950">
                      <Image src={item.image} alt={item.company} fill sizes="190px" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                    </div>
                  ) : null}
                  <div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyanx">{item.period}</p>
                        <h3 className="mt-2 text-2xl font-black text-white">{item.company}</h3>
                        <p className="mt-2 text-sm font-semibold text-slate-300">{item.role}</p>
                      </div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-cyanx hover:text-white">
                          Visit <ArrowUpRight size={16} />
                        </a>
                      ) : null}
                    </div>
                    <ul className="mt-5 grid gap-2 text-sm leading-7 text-slate-300">
                      {item.description.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyanx" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
