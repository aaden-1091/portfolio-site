export interface JourneyStep {
  tag:     string;
  label:   string;
  detail?: string;
  variant?: "entry" | "auth" | "hub";
}

export interface JourneyBranch {
  label: string;
  sub?:  string;
}

export interface JourneyFlow {
  scenario: string;
  steps:    JourneyStep[];
  branches: JourneyBranch[];
  outcome:  string;
}

export interface Wireframe {
  label: string;
  src:   string;
}

export interface DetailedDesignScreen {
  number?:     string;
  label:       string;
  description: string;
  src:         string;
}

export interface DesignFeedback {
  strengths:      string[];
  considerations: string[];
}

export interface DetailedDesign {
  context:   string;
  screens:   DetailedDesignScreen[];
  feedback?: DesignFeedback;
  ctaNote:   string;
}

export interface CaseStudy {
  slug:            string;
  title:           string;
  company:         string;
  year:            string;
  tags:            string[];
  description:     string;
  brief:           string;
  user:            string;
  challenges:      string[];
  objectives:      string[];
  userNeeds:       string[];
  keyQuestions:    string[];
  journeyFlow?:    JourneyFlow;
  wireframes?:     Wireframe[];
  detailedDesign?: DetailedDesign;
  prototypeUrl?:   string;
  nextSlug?:       string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug:        "readystudent-admin-portal",
    title:       "Student Management System Design",
    company:     "ReadyTech",
    year:        "2025",
    tags:        ["SaaS", "UX Design"],
    description: "Redesign an admin portal to streamline workflows for educators and administrators.",
    brief:
      "Schools were managing VET course applications manually — spreadsheets, email chains, no single source of truth. The task was to design a portal where enrolment officers could submit applications on behalf of entire student cohorts, keep track of where each one sat, and not lose their mind doing it.",
    user:
      "A school enrolment officer juggling applications for an entire student cohort — often without a dedicated system, relying on manual processes that don't scale.",
    challenges: [
      "No digital system for tracking — everything lived in spreadsheets and email threads",
      "Existing manual processes were too slow to handle applications at cohort scale",
      "Wide range of tech-literacy — the portal had to work for everyone, not just the confident users",
      "Build constraints that ruled out complex integrations from the start",
      "Lean team with limited support — the design had to be self-explanatory",
    ],
    objectives: [
      "Build a portal that lets schools submit student applications — individually or in bulk — without the friction of manual processes.",
      "Design something usable at any tech-literacy level. No training manual required.",
      "Establish a component library that keeps the experience coherent as the product grows.",
      "Lock down data access properly — student records needed real authentication, not just a password.",
    ],
    userNeeds: [
      "Submit applications for individual students or an entire cohort in a single flow.",
      "Edit application details without starting over — course choices, contact info, preferences.",
      "See exactly where each application sits without chasing anyone for an update.",
      "Know when something changes — accepted, waitlisted, rejected — without having to check back manually.",
      "Attach documents directly in the portal, no separate email attachments.",
      "Pull a report on how the cohort is tracking, not rebuild one from a spreadsheet.",
    ],
    keyQuestions: [
      "Walk me through how you manage applications today — what does that actually look like?",
      "How long does it take to get through a single application? What about a full cohort?",
      "Once you've submitted, how do you keep track of what's been accepted or rejected?",
      "What tools are you using right now — spreadsheets, email, something else entirely?",
      "Who else is involved in this process, and where do the handoffs happen?",
      "Where does the current process break down for you?",
      "If you could change one thing about how this works, what would it be?",
      "What would make this genuinely easier to do every single day?",
    ],
    journeyFlow: {
      scenario:
        "Mapping the full flow from a school's intranet through to TAFE submission — tracing how an enrolment officer moves through the portal and where the key decisions happen.",
      steps: [
        {
          tag:     "Entry",
          label:   "School Intranet",
          variant: "entry",
        },
        {
          tag:     "Authentication",
          label:   "Log in to ReadyStudent Portal",
          variant: "auth",
        },
        {
          tag:    "Portal",
          label:  "Portal Dashboard",
          detail: "Quick access to: Application Submission, Application Status, Course Availability, Student Profiles",
          variant: "hub",
        },
      ],
      branches: [
        { label: "Bulk Submission",       sub: "Upload multiple applications in one go" },
        { label: "Individual Submission", sub: "Step through a single application from scratch" },
        { label: "Student Profiles",      sub: "Build out student profiles and keep them current" },
        { label: "Applications",          sub: "See the full picture across all active applications" },
        { label: "Courses",               sub: "Browse available courses — synced live with TAFE" },
        { label: "Admin Profile",         sub: "Manage account settings and access controls" },
      ],
      outcome: "Application(s) submitted to TAFE",
    },
    wireframes: [
      { label: "College Intranet Homepage",    src: "https://www.figma.com/api/mcp/asset/1501af0c-3ca7-4a5e-9760-829e5568a566" },
      { label: "Portal Login",                 src: "https://www.figma.com/api/mcp/asset/5839488f-a98c-4747-8973-7b097b49c89d" },
      { label: "Portal Dashboard V1",          src: "https://www.figma.com/api/mcp/asset/b48eaf83-5898-440a-b5ed-9d246e0b8dd5" },
      { label: "Portal Dashboard V2",          src: "https://www.figma.com/api/mcp/asset/e0c6b337-e031-48cd-9167-42d48443906a" },
      { label: "Student Profiles",             src: "https://www.figma.com/api/mcp/asset/5b4e5bda-6bc7-4db4-8a2e-5eb6f04400b6" },
      { label: "Individual Profile",           src: "https://www.figma.com/api/mcp/asset/e75b67f7-e7ff-403b-9f7e-cc552ecb8532" },
      { label: "Bulk Application — Upload",    src: "https://www.figma.com/api/mcp/asset/dab1d4a4-94f2-43a3-9dcd-daa9b85f7477" },
      { label: "Bulk Application — Review",    src: "https://www.figma.com/api/mcp/asset/b1fadf1e-b2d1-4c09-bbad-07e25e6755ed" },
      { label: "Individual Application",       src: "https://www.figma.com/api/mcp/asset/507d06df-393c-4eb5-a1d7-8e62be59a7b8" },
    ],
    detailedDesign: {
      context: "Four screens from the mid-fidelity prototype — desktop-first, covering the core submission flows. Close enough to final to test assumptions.",
      screens: [
        {
          number:      "01",
          label:       "Portal Login",
          description: "A school-issued credential gives each enrolment officer their own authenticated session — no shared logins.",
          src:         "/screenshots/readystudent/login.png",
        },
        {
          number:      "02",
          label:       "Dashboard",
          description: "Three primary actions above the fold. Application status without navigating away from the home view.",
          src:         "/screenshots/readystudent/dashboard.png",
        },
        {
          number:      "03",
          label:       "Student Profiles",
          description: "Filterable, sortable cohort view — application status visible across every enrolment without digging.",
          src:         "/screenshots/readystudent/student-profiles.png",
        },
        {
          number:      "04",
          label:       "Bulk Submission",
          description: "Upload a CSV or Excel export from the school's existing system. Review the full cohort before submitting.",
          src:         "/screenshots/readystudent/bulk-submission.png",
        },
      ],
      feedback: {
        strengths: [
          "End-to-end flow mapped from school intranet through to TAFE submission — no gaps in the user journey",
          "Action-oriented dashboard surfaces three primary tasks above the fold, without requiring nav literacy",
          "Status visibility built into multiple surfaces — progress trackable at both dashboard and cohort level",
          "CSV and Excel upload meets users at their existing tooling — no custom data entry required",
          "Finite status taxonomy (Draft → Submitted → Under Review → Accepted / Waitlisted / Rejected) maps cleanly to a state machine",
        ],
        considerations: [
          "Desktop-first at 1440px — responsive behaviour for tablet and mobile needs scoping before build",
          "Login screen carries no school or TAFE branding — risk of low confidence for first-time users",
          "Live data dependencies (activity feed, course sync) require an API coupling strategy with TAFE systems before implementation",
          "Error states, loading states, and empty states not yet defined — required before build handoff",
          "Bulk submission validation errors on malformed CSV rows need a resolution flow",
        ],
      },
      ctaNote: "The prototype covers the full submission flow — login through to TAFE handoff. Desktop-first, mid-fidelity.",
    },
    nextSlug: "private-media-ux-uplift",
  },
  {
    slug:        "private-media-ux-uplift",
    title:       "UX Uplift & Pattern Library",
    company:     "Private Media",
    year:        "2024",
    tags:        ["UX Design", "Design Systems"],
    description: "Unify five publications under one pattern library.",
    brief:
      "Private Media runs four mastheads — Crikey, The Mandarin, SmartCompany, and Inc. Australia — each with its own audience, tone, and commercial model. The brief was to lift the UX across all four to meet current reader expectations, reduce friction in subscription flows, and build a shared pattern library that lets each publication move fast without reinventing the wheel.",
    user:
      "Mobile-first Australian news readers — checking headlines on a commute, following specific columnists, expecting the same frictionless experience they get from mainstream apps. Research conducted with 16 mobile users based across Australia.",
    challenges: [
      "Four publications with divergent design languages — a unified system had to feel coherent without flattening brand identity",
      "Legacy CMS infrastructure with limited front-end flexibility, constraining what could be templated",
      "Any design decision had to scale across multiple live editorial sites without disrupting daily publishing",
      "Subscription and paywall flows built at different times, with no consistent logic across publications",
      "Pattern library needed to serve both design and development teams with different tooling and workflows",
    ],
    objectives: [
      "Revamp the UX across all four publications to meet 2024 reader expectations — not just aesthetic updates.",
      "Deliver a mobile-optimised experience across every template: homepage, article, category, search, and account.",
      "Reduce friction in the subscription and checkout flow to support commercial growth targets.",
      "Build a scalable design system that works across publications without sacrificing brand differentiation.",
      "Standardise components and interaction patterns in a shared pattern library for both design and engineering.",
    ],
    userNeeds: [
      "Get to relevant content fast — without scrolling through noise.",
      "Search that anticipates what you're looking for before finishing the query.",
      "Browse by topic or section without losing the thread of what's relevant.",
      "Create a free account without hitting a hard paywall as the first interaction.",
      "Set reading preferences so the homepage reflects the content that actually matters.",
      "Subscribe and complete checkout without re-entering details or hitting dead ends.",
      "A reading experience that works with a screen reader and doesn't break on accessibility tools.",
    ],
    keyQuestions: [
      "What news apps or publications do you use regularly, and what keeps you coming back?",
      "Walk me through how you typically browse — do you start on the homepage, or come through search?",
      "How do you find content on a topic you care about? What does that process actually look like?",
      "Have you ever started a subscription and abandoned it? What stopped you?",
      "How often do you hit a paywall, and what do you do when you do?",
      "What's the most frustrating part of reading news on your phone?",
      "If you could change one thing about how these publications work on mobile, what would it be?",
    ],
    wireframes: [
      { label: "Homepage",                  src: "https://www.figma.com/api/mcp/asset/d6845d08-99b8-49d4-a789-6ce54defb1f4" },
      { label: "Columnist Section",         src: "https://www.figma.com/api/mcp/asset/ee5f9116-af5b-40b7-b10a-0b00e727fb9c" },
      { label: "Article Listing",           src: "https://www.figma.com/api/mcp/asset/a596d883-626a-4ba9-9e6a-9d6d8284c08f" },
      { label: "Navigation Menu",           src: "https://www.figma.com/api/mcp/asset/adec5dd9-8ce7-4f66-af90-1a1c29b8918f" },
      { label: "Category Article List",     src: "https://www.figma.com/api/mcp/asset/a976c94f-2c97-44c9-810f-ea1e8268a372" },
      { label: "Opinion & Category Page",   src: "https://www.figma.com/api/mcp/asset/5f3568c8-c36d-4aa0-9a51-733dcbf9622b" },
      { label: "Article Detail",            src: "https://www.figma.com/api/mcp/asset/9b4c355d-c51f-4df2-90b4-5231d5b76ab2" },
      { label: "Account — Personal Details",src: "https://www.figma.com/api/mcp/asset/9355606d-197f-49f0-8719-5535538e6813" },
      { label: "Search",                    src: "https://www.figma.com/api/mcp/asset/dd99b1e2-65fc-425c-8a6e-c8f352aecbcf" },
    ],
    detailedDesign: {
      context: "High-fidelity screens across The Mandarin and SmartCompany — covering the key reader and subscriber journeys. Designs reflect publication-specific branding applied within the shared pattern library.",
      screens: [
        {
          number:      "01",
          label:       "Homepage — The Mandarin",
          description: "Hero-led homepage with editorial hierarchy. Columnist profiles and category navigation above the fold — built from pattern library components, reskinned for The Mandarin's brand.",
          src:         "https://www.figma.com/api/mcp/asset/da5a4d8d-a3e1-4dc0-ba4a-01416f230c8d",
        },
        {
          number:      "02",
          label:       "Article Page — SmartCompany",
          description: "Article template with structured metadata, inline CTAs, and paywall positioning. Reading experience optimised for long-form business journalism on mobile.",
          src:         "https://www.figma.com/api/mcp/asset/3afd1104-2366-4b41-97a8-48e897098a47",
        },
        {
          number:      "03",
          label:       "Subscription & Account",
          description: "Subscriber dashboard with plan details and account controls. Account status and renewal date visible without digging through settings.",
          src:         "https://www.figma.com/api/mcp/asset/a188a471-ccd1-41aa-b224-8791c199c075",
        },
        {
          number:      "04",
          label:       "Profile — SmartCompany",
          description: "Reader profile with content preference controls and newsletter management. One place to manage the full subscription relationship.",
          src:         "https://www.figma.com/api/mcp/asset/a9448c53-c011-464f-b47b-7507f26bb12d",
        },
      ],
      feedback: {
        strengths: [
          "Pattern library approach means changes propagate across all four publications — one update, four sites",
          "Mobile-first templates cover every core reader journey: browse, search, read, subscribe, manage account",
          "Publication-level theming preserves brand differentiation without requiring separate component sets",
          "Subscription flow redesign directly addresses the drop-off points identified in user research",
          "Accessibility baked into the component spec from the start — not retrofitted after sign-off",
        ],
        considerations: [
          "CMS integration constraints may limit how dynamically some components can be populated in production",
          "Content preference controls depend on a personalisation backend not yet scoped at time of design",
          "Paywall placement logic varies by publication — needs a unified ruleset before development handoff",
          "Pattern library governance (ownership, versioning, deprecation) needs defining before the dev team adopts it",
          "Checkout flow tested on standard subscription tiers — gift and corporate subscription edge cases not yet covered",
        ],
      },
      ctaNote: "Designs cover the full reader and subscriber journey across mobile and desktop — discovery through to paywall, account creation, and ongoing management.",
    },
    nextSlug: "target-plp-uplift",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
