import { Check, ChevronDown, Cpu } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/portfolio";

export default function ProjectRecord({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const tone = project.slugTone === "signal" ? "text-signal" : "text-data";
  const toneBorder = project.slugTone === "signal" ? "border-signal/50" : "border-data/50";

  return (
    <article className="plate grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
      <div className="relative order-1 overflow-hidden border-b border-border lg:order-2 lg:border-b-0 lg:border-l">
        <div className="scanline relative h-full min-h-[240px]">
          <img
            src={project.visual}
            alt={project.visualAlt}
            loading="lazy"
            width={1408}
            height={1008}
            className="h-full w-full object-cover"
          />
        </div>
        <span
          className={`absolute left-4 top-4 border ${toneBorder} bg-background/80 px-2 py-1 font-mono text-xs ${tone}`}
        >
          REC.{project.index}
        </span>

        <div className="border-t border-border bg-background/70 p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="rule-label">live system sample</span>
            <span className="flex items-center gap-2 font-mono text-xs text-data">
              <span className="h-1.5 w-1.5 rounded-full bg-data" /> nominal
            </span>
          </div>
          <pre className="overflow-x-auto border border-border bg-background p-4 font-mono text-xs leading-relaxed">
            <code>
              <span className="text-muted-foreground">// {project.endpoint}</span>
              {"\n{\n"}
              {project.payload.map((row) => (
                <span key={row.key}>
                  {"  "}
                  <span className="text-muted-foreground">&quot;{row.key}&quot;</span>
                  {": "}
                  <span className={row.highlight ? tone : "text-foreground"}>{row.value}</span>
                  {",\n"}
                </span>
              ))}
              {"}"}
            </code>
          </pre>
        </div>
      </div>

      <div className="order-2 p-6 md:p-9 lg:order-1">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-border px-2 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h3 className={`font-display text-4xl font-extrabold tracking-tight md:text-5xl ${tone}`}>
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <Cpu size={26} strokeWidth={1.4} className="shrink-0 text-muted-foreground" aria-hidden="true" />
        </div>

        <p className="mt-6 text-sm leading-relaxed text-foreground/85 md:text-base">{project.description}</p>

        <div className="mt-8 grid grid-cols-1 border border-border sm:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="border-b border-border p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <p className="rule-label">{m.label}</p>
              <p className="mt-2 font-mono text-2xl font-bold tracking-tight">{m.value}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{m.note}</p>
            </div>
          ))}
        </div>

        <ul className="mt-8 space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
              <Check size={16} className={`mt-0.5 shrink-0 ${tone}`} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="bg-secondary px-2.5 py-1 font-mono text-[11px] text-foreground/80">
              {s}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-8 flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-signal hover:text-signal"
        >
          {open ? "Hide architecture" : "Inspect architecture"}
          <ChevronDown size={14} className={open ? "rotate-180 transition-transform" : "transition-transform"} />
        </button>

        {open && (
          <div className="rise-in mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border border-border p-4 font-mono text-xs text-muted-foreground">
            {project.architecture.map((step, i) => (
              <span key={step} className="flex items-center gap-3">
                <span className="text-foreground">{step}</span>
                {i < project.architecture.length - 1 && <span className={tone}>→</span>}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
