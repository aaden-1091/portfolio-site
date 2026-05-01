import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function WorkGrid() {
  return (
    <section
      id="work"
      className="px-6 md:px-12 bg-background"
      style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}
      aria-labelledby="work-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <h2
          id="work-heading"
          className="font-extrabold leading-none tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}
        >
          Selected <span className="block">Archives.</span>
        </h2>
        <p className="text-xs font-bold uppercase tracking-widest text-ink-light">
          {String(projects.length).padStart(2, "0")} case studies
        </p>
      </div>

      {/* Equal 2×2 grid — no hierarchy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Archive CTA */}
      <div className="mt-12 flex justify-start">
        <Link href="#work">
          <Button variant="ghost" arrow className="group text-xl font-bold">
            View full archive
          </Button>
        </Link>
      </div>
    </section>
  );
}
