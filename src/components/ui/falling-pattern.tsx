"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type FallingPatternProps = React.ComponentProps<"div"> & {
  color?: string;
  colors?: [string, string, string];
  backgroundColor?: string;
  duration?: number;
  density?: number;
  alwaysAnimate?: boolean;
};

type RainLayer = {
  colorIndex: number;
  durationScale: number;
  delay: number;
  opacity: number;
  position: string;
  sizeScale: number;
  streak: string;
};

const rainLayers: RainLayer[] = [
  {
    colorIndex: 0,
    durationScale: 0.72,
    delay: -7,
    opacity: 1,
    position: "16px 24px",
    sizeScale: 0.82,
    streak: "radial-gradient(3.5px 110px at 22% 18%, COLOR, transparent)",
  },
  {
    colorIndex: 1,
    durationScale: 1.08,
    delay: -19,
    opacity: 0.9,
    position: "72px 138px",
    sizeScale: 1.14,
    streak: "radial-gradient(3px 86px at 68% 58%, COLOR, transparent)",
  },
  {
    colorIndex: 2,
    durationScale: 0.54,
    delay: -31,
    opacity: 0.95,
    position: "128px 62px",
    sizeScale: 1.48,
    streak: "radial-gradient(3px 74px at 46% 36%, COLOR, transparent)",
  },
  {
    colorIndex: 0,
    durationScale: 1.42,
    delay: -43,
    opacity: 0.65,
    position: "184px 196px",
    sizeScale: 1.82,
    streak: "radial-gradient(2px 54px at 78% 72%, COLOR, transparent)",
  },
];

export function FallingPattern({
  color = "var(--primary)",
  colors,
  backgroundColor = "var(--background)",
  duration = 80,
  density = 1,
  alwaysAnimate = false,
  className,
  ...props
}: FallingPatternProps) {
  const reduceMotion = useReducedMotion();
  const tileWidth = 180 / density;
  const tileHeight = 260 / density;
  const palette = colors ?? [color, color, color];
  const shouldReduceMotion = reduceMotion && !alwaysAnimate;

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ backgroundColor }}
      {...props}
    >
      {rainLayers.map((layer, index) => (
        <motion.div
          key={`${layer.colorIndex}-${layer.durationScale}`}
          className="absolute inset-x-0 -top-full h-[200%] will-change-transform"
          style={{
            backgroundImage: layer.streak.replace("COLOR", palette[layer.colorIndex]),
            backgroundPosition: layer.position,
            backgroundSize: `${tileWidth * layer.sizeScale}px ${tileHeight * layer.sizeScale}px`,
            opacity: layer.opacity,
          }}
          animate={shouldReduceMotion ? undefined : { y: ["0%", `${45 + index * 4}%`] }}
          transition={{
            delay: layer.delay,
            duration: duration * layer.durationScale,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, transparent 0, transparent 1px, ${backgroundColor} 1.5px)`,
          backgroundSize: `${12 / density}px ${12 / density}px`,
        }}
      />
    </div>
  );
}
