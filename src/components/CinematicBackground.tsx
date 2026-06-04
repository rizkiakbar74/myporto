"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function CinematicBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 1], [1, 0.65, 0.28]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute left-[-14rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyanx/20 blur-[140px]" />
        <div className="absolute right-[-16rem] top-[5rem] h-[38rem] w-[38rem] rounded-full bg-violetx/18 blur-[150px]" />
        <div className="absolute bottom-[-18rem] left-[30%] h-[42rem] w-[42rem] rounded-full bg-bluex/12 blur-[170px]" />
      </motion.div>
      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "44px 44px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.13] grid-pattern"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,13,0.15)_44%,rgba(5,7,13,0.9)_100%)]" />
      <motion.div
        animate={{ opacity: [0.18, 0.36, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyanx/60 to-transparent"
      />
    </div>
  );
}
