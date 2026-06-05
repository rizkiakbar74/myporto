import { Code2, Cpu, Palette, Workflow } from "lucide-react";
import { skillGroups, workflow } from "@/data/skills";
import SectionHeader from "./SectionHeader";
import SectionReveal from "./SectionReveal";

const icons = [Code2, Cpu, Palette, Workflow];

export default function Skills() {
  return (
    <section id="keahlian" className="relative py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Skills & Tools"
          title="A practical mix of web, design, admin work, and IT operation."
          description="The skills are shown honestly based on my CV and this portfolio build. The focus is not a long buzzword list, but the tools that actually support my digital work."
          align="center"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <SectionReveal key={group.title} delay={index * 0.05}>
                <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-cyanx/35 hover:bg-white/[0.06]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyanx/10 text-cyanx">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-white">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{group.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyanx/10 via-white/[0.035] to-violetx/10 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanx">Workflow</p>
              <h3 className="mt-3 text-2xl font-black text-white">Simple process, structured execution.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                A good website does not start from animation. It starts from clear needs, content structure, and a layout people can actually understand.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-ink/35 p-5">
                  <span className="text-sm font-black text-cyanx">0{index + 1}</span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
