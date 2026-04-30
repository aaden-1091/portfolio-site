import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index:   number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { slug, title, description, image, tags } = project;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/work/${slug}`}
      className="group flex flex-col"
      aria-label={`View case study: ${title}`}
    >
      {/* Index number */}
      <span className="font-mono text-xs text-ink-light mb-2">{indexLabel}</span>

      {/* Image */}
      <div className="relative aspect-square bg-surface overflow-hidden mb-3">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized={false}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        {/* Tint lifts on hover */}
        <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />

        {/* Slide-up CTA reveal */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-ink px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background">
              Read case study
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl font-bold tracking-tight text-accent group-hover:text-ink transition-colors duration-300">
          {title}
        </h3>
<div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <p className="text-xs text-ink-light leading-relaxed mt-1">{description}</p>
      </div>
    </Link>
  );
}
