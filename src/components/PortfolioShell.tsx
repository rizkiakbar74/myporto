"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "@/components/About";
import CinematicBackground from "@/components/CinematicBackground";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function PortfolioShell() {
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = introDone ? originalOverflow : "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [introDone]);

  return (
    <main className="relative overflow-hidden">
      {!introDone && <IntroLoader onComplete={finishIntro} />}
      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
        animate={introDone ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 18, filter: "blur(12px)" }}
        transition={{ duration: 0.72, ease: "easeOut" }}
        aria-hidden={!introDone}
      >
        <CinematicBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Gallery />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
    </main>
  );
}
