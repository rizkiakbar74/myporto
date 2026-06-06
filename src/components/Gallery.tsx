"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { galleryImages } from "@/data/gallery";
import { profile } from "@/data/profile";
import SectionHeader from "./SectionHeader";

const firstRow = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
const secondRow = galleryImages.slice(Math.ceil(galleryImages.length / 2));

function MarqueeRow({
  reverse = false,
  items,
  active,
}: {
  reverse?: boolean;
  items: typeof galleryImages;
  active: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        animate={active ? { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] } : { x: reverse ? "-50%" : "0%" }}
        transition={{ duration: reverse ? 36 : 42, repeat: active ? Infinity : 0, ease: "linear" }}
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
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <motion.div
              animate={active ? { x: ["-120%", "135%"] } : { x: "-120%" }}
              transition={{ duration: 8.5, repeat: active ? Infinity : 0, repeatDelay: 3, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isGalleryInView = useInView(sectionRef, { amount: 0.18, margin: "0px 0px -12% 0px" });

  return (
    <section ref={sectionRef} id="galeri" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-shell relative">
        <SectionHeader eyebrow="Gallery" title="A few personal frames." description="Just photos, simple and clean." />

        <div className="mt-8">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-cyanx px-6 py-3 text-sm font-black text-ink transition hover:-translate-y-1 hover:bg-white"
          >
            Open Instagram <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <MarqueeRow items={firstRow} active={isGalleryInView} />
        <MarqueeRow items={secondRow} reverse active={isGalleryInView} />
      </div>
    </section>
  );
}
