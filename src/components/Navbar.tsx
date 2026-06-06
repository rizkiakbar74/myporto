"use client";

import { motion } from "framer-motion";
import { Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#beranda" },
  { label: "About", href: "#tentang" },
  { label: "Experience", href: "#pengalaman" },
  { label: "Projects", href: "#projek" },
  { label: "Gallery", href: "#galeri" },
  { label: "Skills", href: "#keahlian" },
  { label: "Contact", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/78 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          : "border-b border-white/[0.06] bg-ink/58 backdrop-blur-xl"
      }`}
    >
      <nav className="container-shell flex h-20 items-center justify-between gap-4">
        <motion.a
          href="#beranda"
          aria-label="Back to home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -1 }}
          className="group inline-flex items-center gap-2.5"
        >
          <span className="text-lg font-black tracking-[-0.05em] text-white sm:text-[1.65rem]">
            Rizkiakbar74<span className="text-cyanx">.Dev</span>
          </span>
          <motion.span
            whileHover={{ rotate: 14, scale: 1.06 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-cyanx/20 bg-cyanx/10 text-cyanx"
          >
            <Sparkles size={12} />
          </motion.span>
        </motion.a>

        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.03 * index, ease: "easeOut" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
          <div className="container-shell flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
