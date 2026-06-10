"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import SectionReveal from "./SectionReveal";

const getCarouselPosition = (index: number, currentIndex: number) => {
  const total = projects.length;
  let position = (index - currentIndex + total) % total;

  if (position > Math.floor(total / 2)) {
    position -= total;
  }

  return position;
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(projects.length / 2));
  const [isPaused, setIsPaused] = useState(false);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % projects.length);
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(showNext, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, showNext]);

  const activeProject = projects[currentIndex];

  return (
    <section id="projek" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute left-[-16rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_68%)]" />
        <div className="absolute right-[-16rem] top-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_68%)]" />
      </div>

      <div className="container-shell relative">
        <SectionReveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.34em] text-cyanx">
              Selected Projects
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Explore my{" "}
              <span className="bg-gradient-to-r from-cyanx to-violetx bg-clip-text text-transparent">
                featured work
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              A rotating showcase of websites and applications built for personal,
              business, and institutional needs.
            </p>
          </div>
        </SectionReveal>

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative flex h-[330px] items-center justify-center sm:h-[410px] lg:h-[470px]">
            <div className="relative flex h-full w-full items-center justify-center [perspective:1200px]">
              {projects.map((project, index) => {
                const position = getCarouselPosition(index, currentIndex);
                const isActive = position === 0;
                const isAdjacent = Math.abs(position) === 1;

                return (
                  <button
                    key={project.title}
                    type="button"
                    aria-label={`Show ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setCurrentIndex(index)}
                    className="absolute h-[280px] w-[78vw] max-w-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-left shadow-2xl outline-none transition-all duration-700 ease-out focus-visible:ring-2 focus-visible:ring-cyanx sm:h-[360px] sm:w-[62vw] lg:h-[420px] lg:w-[600px]"
                    style={{
                      transform: `
                        translateX(${position * 48}%)
                        scale(${isActive ? 1 : isAdjacent ? 0.82 : 0.68})
                        rotateY(${position * -12}deg)
                      `,
                      zIndex: isActive ? 10 : isAdjacent ? 5 : 1,
                      opacity: isActive ? 1 : isAdjacent ? 0.36 : 0,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                      visibility: Math.abs(position) > 1 ? "hidden" : "visible",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={isActive}
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 62vw, 600px"
                      className="object-cover transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-cyanx">
                          {project.category}
                        </p>
                        <h3 className="mt-2 text-xl font-black text-white sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>
                      <span className="hidden rounded-full border border-white/15 bg-ink/60 px-4 py-2 text-xs font-bold text-slate-200 backdrop-blur-md sm:block">
                        {project.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label="Previous project"
              onClick={showPrevious}
              className="absolute left-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur-md transition hover:border-cyanx/50 hover:bg-cyanx hover:text-ink sm:left-4 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={showNext}
              className="absolute right-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur-md transition hover:border-cyanx/50 hover:bg-cyanx hover:text-ink sm:right-4 sm:h-12 sm:w-12"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="mx-auto mt-8 max-w-3xl text-center"
            >
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                {activeProject.description}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {activeProject.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {activeProject.href ? (
                <motion.a
                  href={activeProject.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-cyanx px-6 py-3 text-sm font-black text-ink transition hover:bg-white"
                >
                  Visit project
                  <ArrowUpRight size={17} />
                </motion.a>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2" aria-label="Project carousel navigation">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                aria-label={`Show ${project.title}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-9 bg-cyanx" : "w-2 bg-white/20 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
