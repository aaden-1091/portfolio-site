const collaborators = [
  "IKEA", "Target Australia", "ReadyTech", "Bastion", "Team Global Express",
  "ASIC", "Sixt", "SES Australia", "Private Media", "RACGP",
];

export default function Marquee() {
  const doubled = [...collaborators, ...collaborators];

  return (
    <section
      className="bg-surface border-t border-ink/10 overflow-hidden"
      style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}
      aria-label="Cohorts and collaborators"
    >
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-xs uppercase font-bold tracking-widest text-ink-light">
          Cohorts &amp; Collaborators
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden" aria-hidden="true">
        <div className="flex items-center space-x-16 py-4 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-4xl md:text-6xl font-bold text-ink/20 hover:text-ink transition-colors duration-300 cursor-default select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
