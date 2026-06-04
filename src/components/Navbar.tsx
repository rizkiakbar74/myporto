"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-2xl">
      <nav className="container-shell flex h-20 items-center justify-between">
        <motion.a
          href="#beranda"
          aria-label="Back to home"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -2 }}
          className="group relative inline-flex items-center"
        >
          <motion.span
            aria-hidden="true"
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-transparent via-cyanx/25 to-transparent blur-md"
          />
          <span className="relative text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
            Rizkiakbar74<span className="text-cyanx">.Dev</span>
          </span>
          <motion.span
            layoutId="brand-dot"
            className="ml-2 mt-1 h-2 w-2 rounded-full bg-cyanx shadow-[0_0_22px_rgba(34,211,238,0.9)]"
          />
        </motion.a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.04 * index, ease: "easeOut" }}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18, ease: "easeOut" }}
          whileHover={{ y: -2 }}
          className="hidden rounded-full border border-cyanx/35 bg-cyanx/10 px-5 py-2.5 text-sm font-semibold text-cyanx transition hover:bg-cyanx hover:text-ink lg:inline-flex"
        >
          Instagram
        </motion.a>

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
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-2xl bg-cyanx px-4 py-3 text-center text-sm font-bold text-ink"
            >
              Instagram
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
