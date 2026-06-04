"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const INTRO_TEXT = "welcome to my portfolio";
const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 86)}%`,
  top: `${14 + ((index * 23) % 72)}%`,
  size: index % 3 === 0 ? "h-2.5 w-2.5" : index % 3 === 1 ? "h-1.5 w-1.5" : "h-1 w-1",
  delay: index * 0.18,
}));

const orbitRings = ["h-48 w-48", "h-64 w-64", "h-80 w-80", "h-[26rem] w-[26rem]"];

type IntroLoaderProps = {
  onComplete: () => void;
};

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const letters = useMemo(() => INTRO_TEXT.split(""), []);
  const [typedLength, setTypedLength] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (typedLength >= INTRO_TEXT.length) {
      const leaveTimer = window.setTimeout(() => setIsLeaving(true), 850);
      const completeTimer = window.setTimeout(onComplete, 1450);

      return () => {
        window.clearTimeout(leaveTimer);
        window.clearTimeout(completeTimer);
      };
    }

    const currentChar = INTRO_TEXT[typedLength] ?? "";
    const speed = currentChar === " " ? 62 : 78;
    const timer = window.setTimeout(() => setTypedLength((value) => value + 1), speed);

    return () => window.clearTimeout(timer);
  }, [typedLength, onComplete]);

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#081326] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,98,254,0.14),transparent_34%),radial-gradient(circle_at_65%_55%,rgba(34,211,238,0.08),transparent_30%)]" />
          <div className="grid-mask absolute inset-0 opacity-20" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {orbitRings.map((ring, index) => (
              <motion.div
                key={ring}
                animate={{ rotate: index % 2 === 0 ? 360 : -360, scale: [1, 1.035, 1] }}
                transition={{ duration: 18 + index * 5, repeat: Infinity, ease: "linear" }}
                className={`absolute left-1/2 top-1/2 ${ring} -translate-x-1/2 -translate-y-1/2 rounded-full border border-bluex/10`}
              />
            ))}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanx/20"
            >
              <span className="absolute left-9 top-8 h-2.5 w-2.5 rounded-full bg-bluex shadow-[0_0_28px_rgba(15,98,254,0.85)]" />
            </motion.div>
          </motion.div>

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0.12, 0.62, 0.12], y: [0, particle.id % 2 === 0 ? -18 : 18, 0], scale: [0.8, 1.1, 0.8] }}
              transition={{ duration: 4.5 + particle.id * 0.15, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
              className={`absolute rounded-full bg-bluex/70 shadow-[0_0_26px_rgba(15,98,254,0.7)] ${particle.size}`}
              style={{ left: particle.left, top: particle.top }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 px-6 text-center"
          >
            <h1 className="min-h-[4.6rem] text-balance text-4xl font-black tracking-[-0.06em] text-bluex sm:text-6xl lg:text-7xl">
              <span aria-label={INTRO_TEXT}>{letters.slice(0, typedLength).join("")}</span>
              <motion.span
                aria-hidden="true"
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="ml-2 inline-block h-[0.92em] w-1 translate-y-1 rounded-full bg-bluex shadow-[0_0_24px_rgba(15,98,254,0.95)]"
              />
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((typedLength / INTRO_TEXT.length) * 100, 100)}%` }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mx-auto mt-7 h-1 max-w-md rounded-full bg-gradient-to-r from-cyanx via-bluex to-violetx shadow-[0_0_40px_rgba(15,98,254,0.35)]"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: typedLength >= INTRO_TEXT.length ? 1 : 0, y: typedLength >= INTRO_TEXT.length ? 0 : 12 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-cyanx/80 sm:text-sm"
            >
              created with <span className="text-white">❤️</span> by Muhammad Rizki Akbar
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
