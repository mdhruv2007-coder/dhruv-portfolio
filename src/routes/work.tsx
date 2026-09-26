import { createFileRoute } from "@tanstack/react-router";
import ProjectRecord from "@/components/ProjectRecord";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — APEX.AI & AERO.AI engineering records | M Dhruv" },
      {
        name: "description",
        content:
          "Two applied ML backends: APEX.AI battery intelligence with ~2.3 ms p99 inference, and AERO.AI, a CFD surrogate for NACA airfoils.",
      },
      { property: "og:title", content: "Work — APEX.AI & AERO.AI engineering records" },
      {
        property: "og:description",
        content:
          "Battery safety intelligence and aerodynamic surrogate modeling, documented with real numbers.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-16 md:px-10 md:py-24">
      <SectionHeading
        index="01"
        eyebrow="Project records"
        title="Inspectable engineering reports."
        description="Each record lists the problem, the measured result, the stack and a sample of what the API actually returns."
      />

      <div className="mt-12 space-y-10">
        {projects.map((project) => (
          <ProjectRecord key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
