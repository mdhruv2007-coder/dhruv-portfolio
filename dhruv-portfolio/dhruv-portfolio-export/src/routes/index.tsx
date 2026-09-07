import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import MetricStrip from "@/components/MetricStrip";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "M Dhruv — ML Systems & Telemetry Engineering" },
      {
        name: "description",
        content:
          "Portfolio of M Dhruv: low-latency ML inference, Formula Student battery intelligence and CFD surrogate models, measured in milliseconds.",
      },
      { property: "og:title", content: "M Dhruv — ML Systems & Telemetry Engineering" },
      {
        property: "og:description",
        content:
          "Low-latency ML inference, Formula Student battery intelligence and aerodynamic surrogate models.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <MetricStrip />

      <section className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
        <SectionHeading
          index="03"
          eyebrow="Featured engineering records"
          title="Applied ML systems built for motion."
          description="Two focused backends: battery safety intelligence for a Formula Student EV, and an aerodynamic model that replaces CFD solves."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              to="/work"
              className="plate group relative overflow-hidden p-6 transition-colors hover:border-signal md:p-8"
            >
              <img
                src={project.visual}
                alt={project.visualAlt}
                loading="lazy"
                width={1408}
                height={1008}
                className="h-44 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
              <p className="rule-label mt-6">REC.{project.index}</p>
              <h3
                className={`mt-2 font-display text-3xl font-extrabold tracking-tight md:text-4xl ${
                  project.slugTone === "signal" ? "text-signal" : "text-data"
                }`}
              >
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
              <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-foreground/80">
                {project.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                Open record <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-5 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-10">
          <h2 className="font-display text-3xl font-extrabold leading-[0.95] tracking-tight md:text-4xl">
            Looking for an intern who ships measurable systems?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-signal bg-signal px-6 py-3.5 font-mono text-sm uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-transparent hover:text-signal"
          >
            Open contact console <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
