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
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
