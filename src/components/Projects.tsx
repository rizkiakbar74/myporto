"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import SectionHeader from "./SectionHeader";
import SectionReveal from "./SectionReveal";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projek" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-bluex/10 blur-[120px]" />
      <div className="container-shell relative">
        <SectionHeader
          eyebrow="Selected Projects"
          title="Old assets, new direction — rebuilt into a cleaner cinematic presentation."
          description="The links and visuals from the old portfolio are still used, but the way they are presented now feels more polished, interactive, and ready for Vercel."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} delay={index * 0.05}>
              <TiltCard className="h-full">
                <motion.article
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-card transition hover:border-cyanx/35"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-20 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.22),transparent_40%)]" />
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <motion.div
                      initial={false}
                      whileHover={{ opacity: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent"
                    />
                    <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/55 px-4 py-2 text-xs font-bold text-cyanx backdrop-blur-xl">
                      {project.status}
                    </div>
                    {project.featured ? (
                      <div className="absolute bottom-5 left-5 rounded-full border border-cyanx/25 bg-cyanx/10 px-4 py-2 text-xs font-bold text-cyanx backdrop-blur-xl">
                        Featured redesign
                      </div>
                    ) : null}
                  </div>

                  <div className="relative p-6 sm:p-7">
                    <div className="mb-4 flex items-start justify-between gap-5">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanx">
                          {project.category}
                        </p>
                        <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
                      </div>
                      {project.href ? (
                        <motion.a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.title}`}
                          whileHover={{ rotate: 12, scale: 1.08 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:bg-cyanx hover:text-ink"
                        >
                          <ArrowUpRight size={20} />
                        </motion.a>
                      ) : null}
                    </div>

                    <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
