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
  context:    string;
  frameType?: "browser" | "mobile";
  screens:    DetailedDesignScreen[];
  feedback?:  DesignFeedback;
  ctaNote:    string;
}

export interface CompetitorEntry {
  name:       string;
  category:   string;
  strengths:  string[];
  weaknesses: string[];
  takeaway?:  string;
}

export interface CompetitorAnalysis {
  context:     string;
  competitors: CompetitorEntry[];
  insights?:   string[];
}

export interface UserTestingTask {
  number: string;
  task:   string;
}

export interface UserTesting {
  context:      string;
  method:       string;
  participants: string;
  duration:     string;
  tasks:        UserTestingTask[];
}

export interface UserTestingFeedback {
  context:     string;
  positive:    string[];
  improvements:string[];
  keyInsight?: string;
}

export interface SolutionFeature {
  label:  string;
  isNew?: boolean;
}

export interface CaseStudy {
  slug:                 string;
  title:                string;
  company:              string;
  year:                 string;
  tags:                 string[];
  description:          string;
  brief:                string;
  user:                 string;
  challenges:           string[];
  objectives:           string[];
  userNeeds:            string[];
  keyQuestions:         string[];
  competitorAnalysis?:  CompetitorAnalysis;
  journeyFlow?:         JourneyFlow;
  solutionFeatures?:    SolutionFeature[];
  wireframes?:          Wireframe[];
  userTesting?:         UserTesting;
  userTestingFeedback?: UserTestingFeedback;
  detailedDesign?:      DetailedDesign;
  prototypeUrl?:        string;
  nextSlug?:            string;
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
    competitorAnalysis: {
      context:
        "Four major digital mastheads were benchmarked against Private Media's publications — mapping where the market had raised the bar and where the opportunity to lead remained.",
      competitors: [
        {
          name:     "The Guardian Australia",
          category: "Quality / Independent",
          strengths: [
            "Contribution model removes the emotional friction of a hard paywall",
            "Mobile-first reading experience — clean typography, minimal ad interruption",
            "Columnist visibility and follow mechanics drive repeat engagement",
            "Accessible navigation with predictable category structure",
          ],
          weaknesses: [
            "Less category depth than commercial rivals — content can feel narrow",
            "Subscription CTAs repeat across long articles and can feel persistent",
          ],
          takeaway:
            "The contribution model lowers the barrier to subscription without sacrificing revenue. Decoupling the ask from the hard paywall was a design principle taken directly from this benchmark.",
        },
        {
          name:     "Sydney Morning Herald / Nine Digital",
          category: "Legacy Masthead",
          strengths: [
            "Large article library with deep category architecture",
            "Columnist profiles and bylines drive repeat visits",
            "Search surfaces archive content — not just recent articles",
          ],
          weaknesses: [
            "Heavy ad load disrupts reading experience, especially on mobile",
            "Homepage feels cluttered — hierarchy is hard to parse at speed",
            "Newsletter management buried deep in account settings",
          ],
          takeaway:
            "Category pages and columnist content are high-value retention tools — confirmed the priority placed on both in the pattern library. Newsletter discoverability became a direct fix.",
        },
        {
          name:     "The Australian / News Corp",
          category: "Business / Political",
          strengths: [
            "Clear subscription value proposition on pricing and plans page",
            "Consistent desktop experience across all sections",
            "Strong political and business coverage for a loyal audience",
          ],
          weaknesses: [
            "Mobile UX is dated by 2023 standards — layouts feel ported from desktop",
            "Hard paywall triggers at very shallow scroll depth, causing high bounce",
            "Account creation is tightly coupled to subscription — friction at both steps",
          ],
          takeaway:
            "Hard paywall at shallow scroll equals high bounce. Decoupling account creation from the subscription flow was a direct response to this pattern.",
        },
        {
          name:     "ABC News",
          category: "Public Broadcast",
          strengths: [
            "The benchmark for mobile readability and accessibility across all Australian news",
            "Clean typography and whitespace — fast to scan on a small screen",
            "No paywall friction — sets a high bar for perceived content value",
          ],
          weaknesses: [
            "No subscription, personalisation, or columnist follow mechanics",
            "Limited account functionality — no preference management",
          ],
          takeaway:
            "ABC set the accessibility and readability baseline that the pattern library had to meet or exceed on mobile. Every article template was checked against this benchmark.",
        },
      ],
      insights: [
        "Paywall placement is the single biggest conversion friction point — the depth of first trigger matters more than the messaging",
        "Columnist content drives repeat visits, yet no competitor had a strong columnist-follow mechanic — this was identified as a differentiation opportunity",
        "Decoupling account creation from subscription consistently improves funnel completion across the competitive set",
        "Mobile typography and ad load density are the two most cited pain points — both within design's control to address",
      ],
    },
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
    userTesting: {
      context:
        "Moderated usability testing conducted with 16 mobile users across Australia — a mix of existing Private Media subscribers and readers who had never subscribed. Sessions were recorded and analysed across five structured tasks.",
      method:       "Moderated usability testing (think-aloud protocol)",
      participants: "16 mobile users — 8 existing subscribers, 8 lapsed or non-subscribers — across Melbourne, Sydney, and Brisbane",
      duration:     "45–60 minutes per session",
      tasks: [
        { number: "01", task: "Find an article on a topic you care about using the search bar" },
        { number: "02", task: "Navigate to the opinion section and find a columnist you'd want to follow" },
        { number: "03", task: "Create a free account without committing to a subscription" },
        { number: "04", task: "Complete a subscription checkout for the plan that suits you best" },
        { number: "05", task: "Update your newsletter preferences from your account dashboard" },
      ],
    },
    userTestingFeedback: {
      context:
        "Patterns surfaced from 16 moderated sessions — findings that directly shaped the final design decisions across search, paywall placement, and account flows.",
      positive: [
        "Navigation hierarchy required no prompting — 14 of 16 users found category sections without guidance",
        "Columnist profiles drove stronger engagement than anticipated — 12 of 16 users explored columnist content beyond the assigned task",
        "Free account creation completed successfully by 14 of 16 participants — clear visual separation from the subscription flow was the deciding factor",
        "Mobile article reading experience rated positively across all sessions — typography scale and line length specifically cited",
      ],
      improvements: [
        "Predictive search results appeared too slowly — 9 of 16 users abandoned the search input before results loaded",
        "Paywall message triggered too early in article scroll — described as feeling 'baited and switched' by multiple participants",
        "Subscription pricing page lacked clear tier differentiation — most users couldn't identify the right plan without assistance",
        "Newsletter preferences were impossible to locate unaided — 8 of 16 users failed to complete the task",
      ],
      keyInsight:
        "The biggest barrier to subscription wasn't price — it was unclear value communication at the moment of decision. Users didn't understand what they'd get that they weren't already getting for free. The redesigned pricing page addresses this directly.",
    },
    detailedDesign: {
      context:   "High-fidelity screens across The Mandarin and SmartCompany — covering the key reader and subscriber journeys. Designs reflect publication-specific branding applied within the shared pattern library.",
      frameType: "mobile",
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
  {
    slug:        "target-plp-uplift",
    title:       "Product Listing Uplift",
    company:     "Target Australia",
    year:        "2023",
    tags:        ["UX Design", "E-commerce"],
    description: "Uplift the product listing experience for the Target Australia app.",
    brief:
      "Target Australia's app product listing page was built for the web era — dense layouts, small product cards, buried filters, and no native mobile interactions. The brief was to redesign the PLP to match how Australians actually shop on their phones: faster browsing, smarter filtering, and enough product context to make a decision without tapping into every item individually.",
    user:
      "Mobile shoppers scanning the Target Australia app across categories — checking size availability, comparing prices, and deciding whether something is worth a closer look. Often browsing on the go, with limited patience for extra taps.",
    challenges: [
      "Important product details — size, material, availability — required extra taps to surface, creating hesitation at the point of decision",
      "Filters and sorting options were buried or unclear, reducing the time users spent engaging with the listing page",
      "An overloaded layout made it harder for users to focus on products rather than the interface around them",
      "Development and technology constraints shaped which native mobile interactions could be introduced within scope",
      "A single PLP template had to hold across Target's full catalogue — clothing, homewares, electronics, and groceries",
    ],
    objectives: [
      "Simplify the PLP layout so browsing, comparing, and filtering products requires fewer taps and less cognitive load.",
      "Surface price, size, and availability at the listing level — so users can decide without drilling into individual product pages.",
      "Introduce native mobile interactions: swipe-through images, quick add to cart, and a slide-out filter panel.",
      "Add personalised product recommendations to reduce navigation paralysis and help users discover relevant items.",
      "Design a scalable template that holds across Target's full product catalogue — not just fashion.",
    ],
    userNeeds: [
      "Efficient browsing and filtering to find what they want without losing their place in the list",
      "Product details — price, size, availability — visible at a glance without tapping into each item",
      "Fast load times and smooth interactions on mobile — the same standard they expect from other shopping apps",
      "Product recommendations based on their browsing patterns — not generic or irrelevant suggestions",
      "Clear size options and real-time stock updates, so they don't add something to cart that isn't available",
      "Quick visibility of trending items, deals, and new arrivals without needing to sort manually",
    ],
    keyQuestions: [
      "How do you typically start looking for something on a shopping app — search first, or browse by category?",
      "Walk me through the last time you used a filter on a product listing. What were you trying to do, and did it work?",
      "When you're scanning products on your phone, what information do you need to decide whether something is worth tapping into?",
      "Have you ever added something to your cart directly from a listing page without going into the product detail? What made that possible?",
      "What frustrates you most about browsing products on mobile — too many steps, not enough information, or something else?",
      "If you find something you like but you're not sure about the size, what do you do?",
      "How useful is seeing similar or recommended products while browsing? Does it help you discover things, or does it distract?",
    ],
    competitorAnalysis: {
      context:
        "Four retailers were benchmarked across browsing, filtering, product detail surfacing, and mobile interaction — mapping the standard that Target's PLP needed to meet or exceed.",
      competitors: [
        {
          name:     "ASOS",
          category: "Global Fashion",
          strengths: [
            "PLP handles easy scrolling and quick filtering — the experience holds even across a catalogue of thousands of SKUs",
            "Personalised product suggestions appear at listing level based on browsing history — before users have searched for anything",
          ],
          weaknesses: [
            "Navigation can feel overwhelming for users not specifically looking for fashion",
            "Mobile filtering requires multiple taps — not a native-feeling interaction on iOS or Android",
          ],
          takeaway:
            "Personalisation at listing level reduces discovery friction — users land on products that already match their history, meaning less browsing depth needed to find something relevant.",
        },
        {
          name:     "H&M",
          category: "High Street Fashion",
          strengths: [
            "Easily accessible size guides reduce hesitation before opening a product detail page",
            "Clear colour swatches with easy toggling between sizes and styles directly at listing level",
          ],
          weaknesses: [
            "Product card images are small on mobile, requiring zoom or a tap into the PDP to assess quality",
            "Filter panel interaction is not always predictably dismissable — causes confusion mid-session",
          ],
          takeaway:
            "Size confidence at listing level is a direct conversion driver — surfacing size and colour on the card removes the main reason users tap away without adding to cart.",
        },
        {
          name:     "Cotton On",
          category: "Australian Retail",
          strengths: [
            "PLP is highly responsive and consistent across device sizes — tested on smaller iOS screens",
            "Intuitive sorting options (new arrivals, price, bestsellers) — top two sort criteria match observed user behaviour",
          ],
          weaknesses: [
            "Product descriptions on the PLP are minimal — users often need to tap through for material or fit information",
            "Promotional labels compete visually with product images, reducing scan clarity",
          ],
          takeaway:
            "Sorting hierarchy matters as much as filtering — new arrivals and bestsellers cover the majority of PLP sort interactions and should be surfaced first, not buried in a dropdown.",
        },
        {
          name:     "Sephora",
          category: "Beauty Retail",
          strengths: [
            "Interactive features — colour swatches, zoomable images, product demos — make the listing experience actively engaging",
            "Key product attributes (ingredients, certifications) surfaced upfront for users with specific needs or restrictions",
          ],
          weaknesses: [
            "Category-specific features don't translate directly to general retail — the detail level suits beauty but adds noise to other product types",
            "Performance on lower-end mobile devices can degrade under heavy asset load",
          ],
          takeaway:
            "Category-specific attribute surfacing is a cross-category conversion pattern — what Sephora does for ingredients maps directly to what Target needed for fashion: size, material, and fit notes on the listing card.",
        },
      ],
      insights: [
        "Personalisation at listing level consistently reduces navigation depth — users find relevant products faster when the list is already filtered to their interests",
        "Size and colour confidence at listing level is the most cited reason users converted without opening individual product pages",
        "Sorting hierarchy (new arrivals, price, bestsellers) covers the majority of use cases — the filter panel is for power users, not the default interaction",
        "Attribute surfacing is a cross-category pattern — whether ingredients in beauty or material in fashion, the conversion impact is the same",
      ],
    },
    journeyFlow: {
      scenario:
        "Mapping the end-to-end flow from app entry through to purchase — tracing how a user moves from the homepage into the PLP and the key decision branches the redesign had to serve.",
      steps: [
        {
          tag:     "Entry",
          label:   "App Homepage",
          variant: "entry",
        },
        {
          tag:     "Navigation",
          label:   "Search or Category Browse",
          detail:  "Users enter via: Search bar, Category navigation, Deals or Featured sections",
          variant: "entry",
        },
        {
          tag:     "Solution",
          label:   "Product Listing Page",
          detail:  "The redesigned PLP — the core uplift focus. Browsing, filtering, and product comparison all happen here.",
          variant: "hub",
        },
      ],
      branches: [
        { label: "Quick Add",       sub: "Add to cart directly from the listing without opening the product detail page" },
        { label: "See Similar",     sub: "Browse related products surfaced alongside the current listing" },
        { label: "Wishlist",        sub: "Save items for later — visible and accessible across sessions" },
        { label: "Product Detail",  sub: "Tap through to the full PDP for more information on a specific item" },
        { label: "Checkout",        sub: "Basket and cart — triggered from Quick Add or after visiting the PDP" },
      ],
      outcome: "Item added to cart and checkout completed — via Quick Add from the listing or after reviewing the product detail page",
    },
    solutionFeatures: [
      { label: "Product Images" },
      { label: "Details — Description & Price" },
      { label: "Ratings" },
      { label: "Deals",           isNew: true },
      { label: "Labels",          isNew: true },
      { label: "Quick Add",       isNew: true },
      { label: "See Similar",     isNew: true },
      { label: "Wishlist" },
      { label: "Colour Swatches", isNew: true },
    ],
    wireframes: [
      { label: "Product Listing Page",         src: "https://www.figma.com/api/mcp/asset/99ccd712-fb6f-4ce4-b811-cf99580d96f1" },
      { label: "Filter Panel",                 src: "https://www.figma.com/api/mcp/asset/e94295a9-07d5-4ec3-bef9-b35706f0663c" },
      { label: "Quick Add",                    src: "https://www.figma.com/api/mcp/asset/5910de19-fcf7-4ef7-ac78-25022e0d422f" },
      { label: "See Similar",                  src: "https://www.figma.com/api/mcp/asset/e4c38de6-9063-4489-80f0-1781728854fd" },
      { label: "Browse Flow",                  src: "https://www.figma.com/api/mcp/asset/e50faf77-886d-4733-a4d5-c5c703d6fa6b" },
      { label: "Category Navigation",          src: "https://www.figma.com/api/mcp/asset/b5a13f09-1782-4276-8720-cf1c6f649f8a" },
    ],
    userTesting: {
      context:
        "Moderated usability testing conducted with 8 mobile users based across Australia — covering browsing, filtering, wishlist, and purchase flows across the redesigned PLP.",
      method:       "Moderated usability testing (mobile device, think-aloud protocol)",
      participants: "8 mobile users based across Australia — mix of regular Target app shoppers and infrequent users",
      duration:     "45 minutes per session",
      tasks: [
        { number: "01", task: "Browse the product listing page and find an item you'd consider buying" },
        { number: "02", task: "Use the filter options to narrow results down to a specific size and colour" },
        { number: "03", task: "Add a product directly to cart from the listing without tapping into the product detail page" },
        { number: "04", task: "Use the See Similar feature to discover a related product" },
        { number: "05", task: "Save an item to your wishlist, then navigate away and return to it" },
      ],
    },
    userTestingFeedback: {
      context:
        "Findings from 8 moderated mobile sessions — patterns that directly influenced the filter simplification, card sizing, image swipe, and See Similar interactions in the final build.",
      positive: [
        "Users liked filtering by multiple criteria — colour, size, ratings — without leaving the listing page",
        "Larger product cards gave users a better view of items, helping them shortlist faster at listing level",
        "Swiping through product images on the listing card was immediately intuitive — adopted by all participants without prompting",
        "See Similar surfaced adjacent products users hadn't considered — rated as one of the most useful additions in the session",
      ],
      improvements: [
        "Too many visible filter options made it hard to focus — users defaulted to ignoring the panel rather than engaging with it",
        "The slide-out filter entry point wasn't always easy to locate — placement needed to be more visually prominent",
        "Some users felt overwhelmed by the number of swipeable images per card — a curated cap on assets per listing was recommended",
        "Price comparison across similar products on the listing was absent — users wanted to scan relative pricing without tapping into each item",
      ],
      keyInsight:
        "The filter panel was designed to be comprehensive, but users needed it to be decisive. The most effective filters — size and price — were buried under less-used options. Simplifying the initial view to two or three high-impact criteria resolved the friction immediately in follow-up testing.",
    },
    detailedDesign: {
      context:   "Four high-fidelity screens from the final build — all shipped, tested in production, and deployed to the Target Australia app.",
      frameType: "mobile",
      screens: [
        {
          number:      "01",
          label:       "Product Listing Page",
          description: "Redesigned grid with larger cards, colour swatches, deal labels, and rating visibility. Quick Add surfaced as a primary affordance on each card.",
          src:         "https://www.figma.com/api/mcp/asset/5ea79a4d-61c1-466c-84df-a7163bdae729",
        },
        {
          number:      "02",
          label:       "Filter Panel",
          description: "Slide-out filter with simplified top-level options. Size and price defaulted above the fold — advanced filters accessible below.",
          src:         "https://www.figma.com/api/mcp/asset/8a3e4709-41b4-4ec4-a509-cac947aa66cc",
        },
        {
          number:      "03",
          label:       "Quick Add",
          description: "A size selector opens directly over the listing card — cart without leaving the PLP. Single-tap from browse to basket.",
          src:         "https://www.figma.com/api/mcp/asset/a872aca7-e76a-4dcd-b7ed-a010c87fdd09",
        },
        {
          number:      "04",
          label:       "See Similar",
          description: "Related products surface inline on the PLP — contextual discovery without a separate search or navigation step.",
          src:         "https://www.figma.com/api/mcp/asset/0da9b0a7-c547-44ac-9267-378901562366",
        },
      ],
      feedback: {
        strengths: [
          "Larger cards with swipeable images reduced the need to tap into PDPs — product quality assessable at listing level",
          "Quick Add eliminated the main conversion barrier — users could go from browsing to cart in a single interaction",
          "See Similar turned the PLP into a discovery layer — adjacent products surfaced at the moment users were already in browse mode",
          "Colour swatches and deal labels at listing level gave users the context needed to shortlist without clicking through",
          "All five new features shipped and deployed — validated with the product and engineering team within the agreed scope",
        ],
        considerations: [
          "Filter simplification resulted in a two-tier pattern (primary + advanced) — secondary tier needs post-launch discoverability monitoring",
          "Image swiping on listing cards increases asset load per page — performance on lower-end Android devices needs tracking",
          "See Similar depends on a recommendation engine — the logic quality determines the feature's perceived value in production",
          "Price comparison across listing cards remains an open gap — addressed in the brief for the next PLP iteration",
        ],
      },
      ctaNote: "All five new features — Quick Add, See Similar, Colour Swatches, Deal Labels, and Wishlist — were scoped with the product team, built, tested, and deployed to the Target Australia app.",
    },
    nextSlug: "target-create-a-look",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
