const interests = [
  {
    emoji: "🔪",
    title: "Culinary Chemistry",
    body:  "Cooking well is about timing, balance, and knowing when to stop. Turns out good mise en place and good design systems are basically the same discipline.",
  },
  {
    emoji: "🏔️",
    title: "Mountains",
    body:  "Weekends belong to trails and summit views, no apology. Navigating uncertain terrain toward a clear goal has a way of making UX friction impossible to ignore.",
  },
  {
    emoji: "🏢",
    title: "Urban Exploration",
    body:  "Getting intentionally lost in an unfamiliar city is one of life's best tools — reading signage, watching where people pause, noticing what breaks flow. That habit never switches off.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 border-t border-ink/10"
      style={{ paddingTop: "clamp(4rem, 10vw, 8rem)", paddingBottom: "clamp(4rem, 10vw, 8rem)" }}
      aria-labelledby="about-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
        {/* Sticky label */}
        <div className="md:col-span-4">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight md:sticky md:top-24"
          >
            The Context.
          </h2>
        </div>

        {/* Content */}
        <div className="md:col-span-8 md:col-start-6 flex flex-col gap-12">
          <p className="text-2xl md:text-4xl font-semibold leading-snug text-ink">
            Weekends look nothing like a Figma file. Cooking, hiking, and
            wandering strange cities are where the best thinking quietly
            happens.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-ink/10">
            {interests.map(({ emoji, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-xl" aria-hidden="true">
                  {emoji}
                </div>
                <h3 className="font-bold text-lg text-ink">{title}</h3>
                <p className="text-ink-light text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
