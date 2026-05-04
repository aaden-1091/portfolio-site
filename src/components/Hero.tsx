import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl">
        <Badge status="available" label="Aaron de Netto" />

        <h1
          id="hero-heading"
          className="font-extrabold lowercase text-ink mt-4"
          style={{ fontSize: "clamp(4rem, 8vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
        >
          experience-led <br />
          <span className="text-accent-fill">design</span> <br />
          that moves people.
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8 md:mt-16">
          <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed text-ink-light">
            Leading design from discovery to delivery — across retail,
            government, enterprise, and media. A track record in CRO,
            accessibility, and design systems translates complex, high-stakes
            problems into experiences that hold up at scale. The craft is in
            making it look effortless.
          </p>

          <div className="flex flex-col items-start md:items-end gap-1.5 text-sm font-medium uppercase tracking-widest text-ink-light">
            <span>Currently based in</span>
            <span className="text-ink flex items-center gap-2 font-semibold">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Melbourne, Australia · AEST (UTC+10)
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ink"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className="w-12 h-px bg-ink" />
      </div>
    </section>
  );
}
