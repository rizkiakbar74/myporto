"use client";

import { FallingPattern } from "@/components/ui/falling-pattern";

export default function CinematicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <FallingPattern
        className="absolute inset-0 opacity-20 [filter:brightness(1.45)_saturate(1.35)] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_100%)]"
        colors={[
          "rgb(236, 250, 233)",
          "rgb(223, 233, 233)",
          "rgb(248, 248, 248)",
        ]}
        backgroundColor="#05070d"
        duration={52}
        density={1.2}
        aria-hidden="true"
      />
      <div className="absolute left-[-14rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyanx/20 blur-[110px]" />
      <div className="absolute right-[-16rem] top-[5rem] h-[32rem] w-[32rem] rounded-full bg-violetx/18 blur-[120px]" />
      <div className="absolute bottom-[-18rem] left-[30%] h-[36rem] w-[36rem] rounded-full bg-bluex/14 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.13] grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,13,0.03)_62%,rgba(5,7,13,0.5)_100%)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyanx/70 to-transparent" />
    </div>
  );
}
