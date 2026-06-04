"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { profile } from "@/data/profile";
import SectionHeader from "./SectionHeader";

const firstRow = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
const secondRow = galleryImages.slice(Math.ceil(galleryImages.length / 2));

function MarqueeRow({ reverse = false, items }: { reverse?: boolean; items: typeof galleryImages }) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: reverse ? 32 : 38, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-4"
      >
        {doubled.map((item, index) => (
          <a
            key={`${item.src}-${index}`}
            href={item.href ?? profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Instagram gallery photo"
            className="group relative h-48 w-72 shrink-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] shadow-[0_22px_70px_rgba(0,0,0,0.28)] transition hover:-translate-y-1 md:h-56 md:w-80"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="320px"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <motion.div
              animate={{ x: ["-120%", "135%"] }}
              transition={{ duration: 6.5, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink/35 text-cyanx opacity-0 backdrop-blur transition group-hover:opacity-100">
              <Instagram size={15} />
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="galeri" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-shell relative">
        <SectionHeader
          eyebrow="Instagram Gallery"
          title="A moving gallery with personal moments from Instagram."
          description="The photos are stored locally, so they work on localhost and Vercel without depending on Instagram embeds."
        />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-cyanx px-6 py-3 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-white"
          >
            Open Instagram <ArrowUpRight size={17} />
          </a>
          <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            {profile.instagramHandle}
          </span>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}
