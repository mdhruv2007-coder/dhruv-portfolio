import { createFileRoute } from "@tanstack/react-router";
import { BrainCircuit, Code2, GraduationCap, Server, Wind } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { coursework, profile, skillGroups } from "@/data/portfolio";

const icons = [Code2, BrainCircuit, Server, Wind];

export const Route = createFileRoute("/stack")({
  head: () => ({
    meta: [
      { title: "Stack — Python, PyTorch, FastAPI, OpenFOAM | M Dhruv" },
      {
        name: "description",
        content:
          "The tools M Dhruv works in: Python and C, PyTorch and ONNX Runtime, FastAPI backends, and OpenFOAM/XFoil simulation.",
      },
      { property: "og:title", content: "Stack — tools shaped for real-world inference" },
      {
        property: "og:description",
        content: "Languages, deep learning, backend systems and simulation tooling, plus current academic record.",
      },
    ],
  }),
  component: StackPage,
});

function StackPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        index="02"
        eyebrow="Technical architecture"
        title="A stack shaped for real-world inference."
        description="Tools selected for efficient modeling, mathematical simulation and production-minded backend work."
      />

      <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <article key={group.title} className="bg-surface p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className="rule-label">{group.signal}</span>
                <Icon size={22} strokeWidth={1.4} className="text-signal" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2 font-mono text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="border-b border-border pb-2 last:border-b-0">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="plate mt-10 grid gap-5 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:p-8">
        <GraduationCap size={26} strokeWidth={1.4} className="shrink-0 text-data" aria-hidden="true" />
        <div className="min-w-0">
          <p className="rule-label">Current academic record</p>
          <p className="mt-2 font-display text-lg font-bold tracking-tight md:text-xl">{profile.school}</p>
          <p className="mt-2 text-sm text-muted-foreground">{coursework}</p>
        </div>
      </div>
    </div>
  );
}
