import SectionReveal from "./SectionReveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <SectionReveal className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : ""}`}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyanx">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
    </SectionReveal>
  );
}
