import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  getCaseStudy,
  type JourneyFlow,
  type CompetitorAnalysis,
  type SolutionFeature,
  type UserTesting,
  type UserTestingFeedback,
} from "@/data/caseStudies";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Aaron de Netto`,
    description: cs.description,
  };
}

function SectionHeading({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-1 self-stretch bg-accent rounded-full shrink-0" aria-hidden="true" />
      <h2
        className={`font-extrabold leading-tight tracking-tight ${light ? "text-background" : "text-ink"}`}
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "-0.04em" }}
      >
        {children}
      </h2>
    </div>
  );
}

function Arrow({ accent }: { accent?: boolean }) {
  return (
    <div className="flex flex-col items-center ml-6" aria-hidden="true">
      <div className={`w-px h-5 ${accent ? "bg-accent/50" : "bg-ink/20"}`} />
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L5 5L9 1"
          stroke={accent ? "var(--color-accent)" : "var(--color-ink)"}
          strokeOpacity={accent ? 0.5 : 0.25}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function JourneyFlowDiagram({ flow }: { flow: JourneyFlow }) {
  const stepVariantClasses: Record<string, string> = {
    entry: "bg-[#f2f1ec] border border-ink/10 text-ink",
    auth:  "bg-[#f2f1ec] border border-ink/10 text-ink",
    hub:   "bg-ink text-background",
  };

  return (
    <div className="pl-6 flex flex-col gap-10">
      {/* Scenario description */}
      <p className="text-base text-ink-light leading-relaxed max-w-2xl">{flow.scenario}</p>

      {/* Linear steps */}
      <div className="flex flex-col items-start gap-0 max-w-sm">
        {flow.steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-start w-full">
            <div
              className={[
                "w-full rounded-sm px-5 py-4 flex flex-col gap-1.5",
                stepVariantClasses[step.variant ?? "entry"],
              ].join(" ")}
            >
              <span
                className={`text-xs font-bold uppercase tracking-widest ${
                  step.variant === "hub" ? "text-background/50" : "text-ink-light"
                }`}
              >
                {step.tag}
              </span>
              <p
                className={`font-bold text-base leading-snug ${
                  step.variant === "hub" ? "text-background" : "text-ink"
                }`}
              >
                {step.label}
              </p>
              {step.detail && (
                <p
                  className={`text-sm leading-relaxed mt-1 ${
                    step.variant === "hub" ? "text-background/60" : "text-ink-light"
                  }`}
                >
                  {step.detail}
                </p>
              )}
            </div>
            {i < flow.steps.length - 1 && <Arrow />}
          </div>
        ))}

        {/* Arrow to branches */}
        <Arrow />
      </div>

      {/* Branch grid */}
      <div className="flex flex-col gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-light">
          From the Dashboard
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {flow.branches.map((branch) => (
            <div
              key={branch.label}
              className="bg-background border border-ink/10 rounded-sm px-5 py-4 flex flex-col gap-2"
            >
              <p className="font-bold text-sm text-ink">{branch.label}</p>
              {branch.sub && (
                <p className="text-sm text-ink-light leading-relaxed">{branch.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="flex flex-col items-start gap-0 max-w-sm">
        <Arrow accent />
        <div className="w-full rounded-sm px-5 py-4 bg-accent/10 border border-accent/20">
          <span className="text-xs font-bold uppercase tracking-widest text-accent/70">Outcome</span>
          <p className="font-bold text-base text-ink mt-1">{flow.outcome}</p>
        </div>
      </div>
    </div>
  );
}

function CompetitorAnalysisSection({ data }: { data: CompetitorAnalysis }) {
  return (
    <div className="flex flex-col gap-12">
      <p className="pl-6 text-base text-ink-light leading-relaxed max-w-2xl">{data.context}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.competitors.map((c) => (
          <div
            key={c.name}
            className="bg-background border border-ink/8 rounded-sm flex flex-col gap-0 overflow-hidden"
          >
            {/* Card header */}
            <div className="px-6 py-5 border-b border-ink/8 flex items-start justify-between gap-4">
              <p className="font-bold text-base text-ink">{c.name}</p>
              <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-accent/10 text-accent shrink-0">
                {c.category}
              </span>
            </div>

            {/* Strengths + Weaknesses */}
            <div className="grid grid-cols-2 divide-x divide-ink/8 flex-1">
              <div className="px-5 py-5 flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-light mb-1">Strengths</p>
                <ul className="flex flex-col gap-2.5">
                  {c.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-ink-light">{s}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-5 flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-light mb-1">Weaknesses</p>
                <ul className="flex flex-col gap-2.5">
                  {c.weaknesses.map((w, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ink/25 shrink-0" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-ink-light">{w}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Takeaway */}
            {c.takeaway && (
              <div className="px-6 py-4 border-t border-ink/8 bg-accent/5">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1.5">Takeaway</p>
                <p className="text-sm leading-relaxed text-ink-light">{c.takeaway}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Insights row */}
      {data.insights && data.insights.length > 0 && (
        <div className="pl-6 flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-light">Key Insights</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.insights.map((insight, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink-light">{insight}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SolutionFeaturesSection({ features }: { features: SolutionFeature[] }) {
  return (
    <div className="pl-6 flex flex-col gap-6">
      <p className="text-xs font-bold uppercase tracking-widest text-ink-light">
        Key features in scope
      </p>
      <div className="flex flex-wrap gap-3">
        {features.map((f) => (
          <div
            key={f.label}
            className={[
              "flex items-center gap-2 rounded-sm px-4 py-2.5 border text-sm font-semibold",
              f.isNew
                ? "bg-accent/10 border-accent/20 text-ink"
                : "bg-background border-ink/10 text-ink-light",
            ].join(" ")}
          >
            {f.label}
            {f.isNew && (
              <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm bg-accent text-background leading-none">
                New
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function UserTestingSection({ data }: { data: UserTesting }) {
  return (
    <div className="flex flex-col gap-10 pl-6">
      <p className="text-base text-ink-light leading-relaxed max-w-2xl">{data.context}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Meta */}
        <div className="flex flex-col gap-6">
          {[
            { label: "Method",       value: data.method },
            { label: "Participants", value: data.participants },
            { label: "Duration",     value: data.duration },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-light">{label}</p>
              <p className="text-base leading-relaxed text-ink">{value}</p>
            </div>
          ))}
        </div>

        {/* Tasks */}
        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-light">Tasks</p>
          <ul className="flex flex-col gap-4">
            {data.tasks.map((t) => (
              <li key={t.number} className="flex items-start gap-4">
                <span className="text-accent font-bold text-sm tabular-nums shrink-0 mt-0.5">{t.number}</span>
                <p className="text-base leading-relaxed text-ink-light">{t.task}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function UserTestingFeedbackSection({ data }: { data: UserTestingFeedback }) {
  return (
    <div className="flex flex-col gap-10 pl-6">
      <p className="text-base text-ink-light leading-relaxed max-w-2xl">{data.context}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-light">What Worked</p>
          <ul className="flex flex-col gap-4">
            {data.positive.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink-light">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-light">What Needed Work</p>
          <ul className="flex flex-col gap-4">
            {data.improvements.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-ink/25 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink-light">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {data.keyInsight && (
        <div className="border-l-2 border-accent pl-6 py-1">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Key Insight</p>
          <p className="text-lg leading-relaxed text-ink font-medium">{data.keyInsight}</p>
        </div>
      )}
    </div>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const nextProject = cs.nextSlug
    ? projects.find((p) => p.slug === cs.nextSlug)
    : null;

  const sectionPadding = "px-6 md:px-12";
  const sectionSpacing = { paddingTop: "clamp(4rem, 8vw, 7rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" };

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className={`bg-ink text-background ${sectionPadding} pt-40 pb-24`}
          aria-labelledby="cs-title"
        >
          <div className="max-w-5xl">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-background/40 hover:text-background transition-colors mb-12"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Work
            </Link>

            <div className="flex flex-wrap gap-2 mb-8">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-background/10 text-background/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              id="cs-title"
              className="font-extrabold text-background leading-[0.92]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)", letterSpacing: "-0.04em" }}
            >
              {cs.title}
            </h1>

            <p className="mt-8 text-background/40 text-xs font-bold uppercase tracking-widest">
              {cs.company} · {cs.year}
            </p>
          </div>
        </section>

        {/* ── Brief ────────────────────────────────────────────────────────── */}
        <section
          className={`bg-background ${sectionPadding}`}
          style={sectionSpacing}
          aria-labelledby="cs-brief"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            <SectionHeading>The Brief</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pl-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-light">What</p>
                <p className="text-lg leading-relaxed text-ink-light">{cs.brief}</p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-light">User</p>
                <p className="text-lg leading-relaxed text-ink-light">{cs.user}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenges ───────────────────────────────────────────────────── */}
        <section
          className={`bg-[#f2f1ec] ${sectionPadding}`}
          style={sectionSpacing}
          aria-labelledby="cs-challenges"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <SectionHeading>Potential Challenges</SectionHeading>
            <ul className="flex flex-col gap-5 pl-6">
              {cs.challenges.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <p className="text-lg leading-relaxed text-ink-light">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Objectives ───────────────────────────────────────────────────── */}
        <section
          className={`bg-background ${sectionPadding}`}
          style={sectionSpacing}
          aria-labelledby="cs-objectives"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <SectionHeading>Objectives & Goals</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-6">
              {cs.objectives.map((obj, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent">{i + 1}</span>
                  </div>
                  <p className="text-lg leading-relaxed text-ink-light">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── User Needs ───────────────────────────────────────────────────── */}
        <section
          className={`bg-[#f2f1ec] ${sectionPadding}`}
          style={sectionSpacing}
          aria-labelledby="cs-user-needs"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <SectionHeading>User Needs</SectionHeading>
            <ul className="flex flex-col gap-5 pl-6">
              {cs.userNeeds.map((need, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  <p className="text-lg leading-relaxed text-ink-light">{need}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Key Questions ────────────────────────────────────────────────── */}
        <section
          className={`bg-background ${sectionPadding}`}
          style={sectionSpacing}
          aria-labelledby="cs-questions"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-10">
            <SectionHeading>Key Questions</SectionHeading>
            <ul className="flex flex-col gap-6 pl-6">
              {cs.keyQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="text-accent font-bold text-sm tabular-nums shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-ink-light">{q}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Competitor Analysis ──────────────────────────────────────────── */}
        {cs.competitorAnalysis && (
          <section
            className={`bg-[#f2f1ec] ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-competitors"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>Competitor Analysis</SectionHeading>
              <CompetitorAnalysisSection data={cs.competitorAnalysis} />
            </div>
          </section>
        )}

        {/* ── Journey Flow ─────────────────────────────────────────────────── */}
        {cs.journeyFlow && (
          <section
            className={`bg-background ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-journey"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>Journey Flow</SectionHeading>
              <JourneyFlowDiagram flow={cs.journeyFlow} />
            </div>
          </section>
        )}

        {/* ── Solution Features ────────────────────────────────────────────── */}
        {cs.solutionFeatures && cs.solutionFeatures.length > 0 && (
          <section
            className={`bg-background ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-solution"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>Solution</SectionHeading>
              <SolutionFeaturesSection features={cs.solutionFeatures} />
            </div>
          </section>
        )}

        {/* ── Wireframes ───────────────────────────────────────────────────── */}
        {cs.wireframes && cs.wireframes.length > 0 && (
          <section
            className={`bg-[#f2f1ec] ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-wireframes"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>Lo-Fidelity Wireframes</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pl-6">
                {cs.wireframes.map((frame) => (
                  <div key={frame.label} className="flex flex-col gap-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-ink-light">
                      {frame.label}
                    </p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={frame.src}
                      alt={frame.label}
                      className="w-full border border-ink/10 bg-background object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── User Testing ─────────────────────────────────────────────────── */}
        {cs.userTesting && (
          <section
            className={`bg-background ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-user-testing"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>User Testing</SectionHeading>
              <UserTestingSection data={cs.userTesting} />
            </div>
          </section>
        )}

        {/* ── User Testing Feedback ─────────────────────────────────────────── */}
        {cs.userTestingFeedback && (
          <section
            className={`bg-[#f2f1ec] ${sectionPadding}`}
            style={sectionSpacing}
            aria-labelledby="cs-testing-feedback"
          >
            <div className="max-w-5xl mx-auto flex flex-col gap-10">
              <SectionHeading>Testing Feedback</SectionHeading>
              <UserTestingFeedbackSection data={cs.userTestingFeedback} />
            </div>
          </section>
        )}

        {/* ── Detailed Design ──────────────────────────────────────────────── */}
        <section
          className={`bg-ink text-background ${sectionPadding}`}
          style={sectionSpacing}
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-12">

            {/* Heading + framing copy */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <SectionHeading light>Detailed Design</SectionHeading>
              {cs.detailedDesign && (
                <p className="text-background/50 text-sm leading-relaxed md:max-w-xs md:text-right">
                  {cs.detailedDesign.context}
                </p>
              )}
            </div>

            {/* Screen gallery */}
            {cs.detailedDesign && cs.detailedDesign.screens.length > 0 && (
              cs.detailedDesign.frameType === "mobile" ? (
                /* ── Mobile phone frames — 4-up row ── */
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {cs.detailedDesign.screens.map((screen) => (
                    <div key={screen.label} className="flex flex-col gap-4 items-center">
                      {/* Phone shell */}
                      <div className="w-full rounded-[2rem] border-[6px] border-background/20 bg-background/5 overflow-hidden flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                        {/* Status bar + dynamic island */}
                        <div className="flex justify-center items-center pt-3 pb-2 bg-background/5">
                          <div className="w-14 h-[18px] rounded-full bg-background/15 flex items-center justify-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-background/20" aria-hidden="true" />
                            <span className="w-1 h-1 rounded-full bg-background/15" aria-hidden="true" />
                          </div>
                        </div>
                        {/* Screen content */}
                        <div className="aspect-[9/18] relative overflow-hidden bg-background/5">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={screen.src}
                            alt={screen.label}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                          />
                        </div>
                        {/* Home indicator */}
                        <div className="flex justify-center items-center py-2.5 bg-background/5">
                          <span className="w-16 h-[4px] rounded-full bg-background/20" aria-hidden="true" />
                        </div>
                      </div>
                      {/* Label + description below the phone */}
                      <div className="flex flex-col gap-1.5 w-full text-center">
                        <div className="flex items-baseline justify-center gap-2">
                          {screen.number && (
                            <span className="text-accent font-bold text-xs tabular-nums shrink-0">
                              {screen.number}
                            </span>
                          )}
                          <p className="text-xs font-bold uppercase tracking-widest text-background/40">
                            {screen.label}
                          </p>
                        </div>
                        <p className="text-xs leading-relaxed text-background/50">
                          {screen.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* ── Browser chrome frames — 2-column grid ── */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cs.detailedDesign.screens.map((screen) => (
                    <div key={screen.label} className="flex flex-col gap-4">
                      <div className="rounded-sm overflow-hidden border border-background/10">
                        <div className="bg-background/5 px-4 py-2.5 flex items-center gap-2 border-b border-background/10">
                          <span className="w-2.5 h-2.5 rounded-full bg-background/15 shrink-0" aria-hidden="true" />
                          <span className="w-2.5 h-2.5 rounded-full bg-background/15 shrink-0" aria-hidden="true" />
                          <span className="w-2.5 h-2.5 rounded-full bg-background/15 shrink-0" aria-hidden="true" />
                        </div>
                        <div className="aspect-[16/10] bg-background/5 relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={screen.src}
                            alt={screen.label}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 pl-1">
                        <div className="flex items-baseline gap-3">
                          {screen.number && (
                            <span className="text-accent font-bold text-sm tabular-nums shrink-0">
                              {screen.number}
                            </span>
                          )}
                          <p className="text-xs font-bold uppercase tracking-widest text-background/40">
                            {screen.label}
                          </p>
                        </div>
                        <p className="text-sm leading-relaxed text-background/60">
                          {screen.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )}

            {/* Feedback — strengths + considerations */}
            {cs.detailedDesign?.feedback && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-2">
                <div className="flex flex-col gap-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-background/40">
                    Design Strengths
                  </p>
                  <ul className="flex flex-col gap-4">
                    {cs.detailedDesign.feedback.strengths.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-background/60">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-background/40">
                    Open Considerations
                  </p>
                  <ul className="flex flex-col gap-4">
                    {cs.detailedDesign.feedback.considerations.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-background/25 shrink-0" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-background/60">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* CTA row */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6 border-t border-background/10">
              <p className="text-background/40 text-sm leading-relaxed max-w-sm">
                {cs.detailedDesign?.ctaNote ?? "Prototype available on request."}
              </p>
              <a
                href={`mailto:aaden.designs@gmail.com?subject=Prototype Access Request — ${cs.title}`}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-widest bg-background text-ink hover:bg-accent hover:text-background transition-all duration-200 shrink-0"
              >
                Request access to review prototype
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </section>

        {/* ── Next Case Study ──────────────────────────────────────────────── */}
        {nextProject && (
          <section
            className={`bg-background border-t border-surface ${sectionPadding}`}
            style={sectionSpacing}
          >
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-ink-light mb-8">
                Next Case Study
              </p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex flex-col gap-3"
                aria-label={`Next: ${nextProject.title}`}
              >
                <h3
                  className="font-extrabold text-accent group-hover:text-ink transition-colors duration-300 leading-[0.92]"
                  style={{ fontSize: "clamp(2rem, 5vw, 5rem)", letterSpacing: "-0.04em" }}
                >
                  {nextProject.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-ink-light">
                  {nextProject.company} · {nextProject.year}
                </p>
              </Link>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
