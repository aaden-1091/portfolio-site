"use client";

import Link from "next/link";

const PHOTO_URL = "/illustrations/aaron-photo.jpg";

function CompanyBadge({ name, color }: { name: string; color: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-1 rounded-[2px] text-xs font-semibold shrink-0"
      style={{ backgroundColor: color, color: color === "#433f3f" ? "#fff" : "var(--color-ink)" }}
    >
      {name}
    </span>
  );
}

function RoleHeader({
  company,
  badgeColor,
  title,
  years,
}: {
  company: string;
  badgeColor: string;
  title: string;
  years: string;
}) {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <CompanyBadge name={company} color={badgeColor} />
      <div className="flex flex-1 justify-between items-center gap-2 min-w-0">
        <span className="font-semibold text-ink text-base leading-tight">{title}</span>
        <span className="font-semibold text-ink text-sm whitespace-nowrap shrink-0">{years}</span>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 list-disc list-outside ml-4">
      {items.map((item, i) => (
        <li key={i} className="text-xs text-black leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="border-t border-surface" />;
}

function Pill({ label }: { label: string }) {
  return (
    <span className="bg-surface text-ink text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap">
      {label}
    </span>
  );
}

export default function CVPage() {
  return (
    <div className="bg-background min-h-screen">

      {/* Header */}
      <header className="bg-ink text-white px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start lg:items-center">

          {/* Left: Photo + name + title */}
          <div className="flex items-center gap-5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTO_URL}
              alt="Aaron de Netto"
              className="w-20 h-20 rounded-full object-cover bg-ink shrink-0"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/illustrations/screen-placeholder.svg";
              }}
            />
            <div>
              <h1 className="font-normal text-3xl leading-[1.1] mb-1">
                Aaron<br />de Netto.
              </h1>
              <p className="text-sm font-light text-white/70">Lead Product Designer</p>
            </div>
          </div>

          {/* Centre: Summary */}
          <div className="flex-1">
            <p className="text-xs text-white/80 leading-relaxed font-light">
              Product design leader with 10+ years crafting end-to-end experiences across consumer eCommerce, enterprise SaaS, and B2B platforms. I set design direction across complex, multi-stakeholder problem spaces — partnering with product and engineering to deliver 0-to-1 solutions, scale design systems, and align executive stakeholders. Known for navigating ambiguity with rigour: grounding decisions in research, driving cross-functional alignment, and mentoring teams to do their best work.
            </p>
          </div>

        </div>
      </header>

      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-6">
        <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-ink-light hover:text-ink transition-colors">
          ← Back to portfolio
        </Link>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-4">

            {/* Professional Journey */}
            <section className="bg-background rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.05)] px-5 py-6 flex flex-col gap-6">
              <h2 className="font-semibold text-ink text-2xl">Professional Journey.</h2>

              {/* ReadyTech */}
              <div className="flex flex-col gap-3">
                <RoleHeader company="ReadyTech" badgeColor="#a0e4a0" title="Senior UX Designer" years="2025 – Present" />
                <BulletList items={[
                  "Work within a cross-functional product squad focused within the education sector of ReadyTech on admissions as part of a SaaS Student Management System.",
                  "Lead design across complex problem spaces, from defining opportunities through discovery to delivering validated, dev-ready solutions.",
                  "Conduct usability testing and gather user feedback to iterate and refine designs. Perform quality assurance checks to ensure deliverables meet required design principles (WCAG), and the business requirements.",
                  "Facilitate workshops, align stakeholders, and translate insights into clear design direction.",
                  "Support and mentor UX and Product Designers at all levels, helping them grow through guidance, feedback, and collaboration.",
                ]} />
              </div>

              <Divider />

              {/* Bastion */}
              <div className="flex flex-col gap-3">
                <RoleHeader company="Bastion" badgeColor="#433f3f" title="UX – UI Design Lead" years="2023 – 2025" />
                <BulletList items={[
                  "Engage with stakeholders to understand their business goals, user needs, and requirements.",
                  "Translate stakeholder requirements into effective UX/UI strategies and product solutions that align with the key metrics and KPI deliverables.",
                  "Create wireframes, prototypes, and design mockups to visualise proposed solutions gathering feedback along the way. Collaborate with product and engineering teams to ensure seamless integration of design elements and functionalities dependent on platform requirements.",
                  "Conduct usability testing and gather user feedback to iterate and refine designs. Perform quality assurance checks to ensure deliverables meet required design principles (WCAG), and the business requirements.",
                  "Manage project timelines, budgets, and resources effectively to deliver projects on time and within scope at the highest level.",
                  "Support and mentor UX and Product Designers at all levels, helping them grow through guidance, feedback, and collaboration.",
                  "Conduct workshops, training sessions, and knowledge-sharing activities with clients and internal teams.",
                ]} />
              </div>

              <Divider />

              {/* Target Australia — Manager */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <RoleHeader company="Target Australia" badgeColor="#f5dcdc" title="eCommerce Design Manager" years="2022 – 2023" />
                  <BulletList items={[
                    "Lead and manage a team consisting of UX Designers, Content Designers, UX Researchers, and Front-end Developers providing mentorship and guidance to ensure alignment with Target business goals and professional growth.",
                    "Drive decisions across all digital touchpoints (website and application) based on data-driven insights and analytics working closely with Consumer Insights team.",
                    "Collaborate on the CRO program to optimise conversion rates across digital platforms with a key focus on increasing AOV as well as overall sales.",
                    "Collaborate closely with product management and technology teams to identify, prioritise and implement enhancements based on user feedback and business objectives.",
                    "Work with marketing teams to align seasonal campaigns and promotions with UX/UI strategies to maximise effectiveness whilst also ensuring alignment to the Target Brand.",
                    "Drive innovation within the team through experimentation and adoption of new tools or methodologies to enhance digital experiences.",
                  ]} />
                </div>

                {/* Target Australia — Lead (no badge, same company) */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-semibold text-ink text-base leading-tight">UX – UI Design Lead</span>
                    <span className="font-semibold text-ink text-sm whitespace-nowrap shrink-0">2020 – 2022</span>
                  </div>
                  <BulletList items={[
                    "Following UXD and Human-centred design principles throughout conception to execution, owning and delivering intuitive, efficient, and delightful experiences for all solutions.",
                    "Conduct user journey and empathy mapping to identify customer friction points within the online experience which in turn plays a part in formulating the product strategy.",
                    "Create wireframes, prototypes, and design mockups to visualise proposed solutions and gather feedback.",
                    "Validate and iterate on product solutions to determine viability before progressing to detailed design through feedback sessions, usability testing, A/B, and live testing.",
                    "Adapt product experiences to different audiences based on their needs and the devices they used. This includes responsive design, accessibility considerations and personalisation.",
                    "Provide insights to the Target eCommerce team as well as the broader organisation on the latest trends and tools for UX/UI Design to help support drive the overall customer and user experience design strategy.",
                  ]} />
                </div>
              </div>

              <Divider />

              {/* IKEA */}
              <div className="flex flex-col gap-3">
                <RoleHeader company="IKEA" badgeColor="#fcebaf" title="UX & Digital Product Designer" years="2016 – 2020" />
                <BulletList items={[
                  "Maintain and optimise the IKEA website and mobile app to ensure effective implementation of new product solutions, performance and operations.",
                  "Conduct user journey and empathy mapping to identify customer friction points within the online experience which in turn plays a part in formulating the product strategy.",
                  "Ensure a consistently positive and accessible customer experience across IKEA's web platforms that align with the brand design as well as core guidelines.",
                  "Work closely with the data analytics reviewing web statistics and metrics to optimise the online media mix, functionality, and commercial performance.",
                  "Drive conversion rate optimisation (CRO) efforts by identifying conversion barriers, proposing and implementing solutions to improve online sales, loyalty acquisition and brand perception.",
                ]} />
              </div>
            </section>

            {/* References */}
            <section className="bg-background rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.05)] px-5 py-5 flex items-center gap-3">
              <svg className="w-5 h-5 shrink-0 text-ink-light" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              <p className="font-semibold text-sm text-black">References to be supplied upon request.</p>
            </section>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4">

            {/* Accomplishments */}
            <section className="bg-background rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.05)] px-5 py-6 flex flex-col gap-6">
              <h2 className="font-semibold text-ink text-2xl">Accomplishments.</h2>

              {/* CRO / BR% */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-ink-light text-lg leading-snug">
                  Initiatives focused on increasing conversion rate and decreasing ER/BR%
                </h3>
                <div className="flex flex-col gap-3">
                  <CompanyBadge name="Target Australia" color="#f5dcdc" />
                  <BulletList items={[
                    "Led a comprehensive UX/UI uplift of Product Listing and Product Description Pages — improving visual hierarchy, scannability, and purchase confidence through stronger content layout, clearer CTAs, and optimised product imagery presentation. (Web/App)",
                    "Redesigned the site header and navigation to reduce unnecessary clicks and friction in the discovery journey — simplifying information architecture and improving wayfinding to help consumers find and reach products faster. (Web/App)",
                    "Led a full homepage redesign balancing business priorities with consumer needs — surfacing inspiration, promotions, and tools to drive immediate engagement and purchase intent, while establishing repeatable design patterns to increase the design team's delivery efficiency. (Web/App)",
                    "Delivered an end-to-end Search Functionality uplift — improving result relevance, filtering, and zero-results handling to ensure consumers consistently found what they were looking for, following UX best practices throughout. (App)",
                    "Designed and delivered a new Cart and Checkout experience — streamlining the purchase journey to reduce drop-off, improve conversion, and provide a seamless, confidence-building path to purchase across web and app.",
                  ]} />
                  <CompanyBadge name="IKEA" color="#fcebaf" />
                  <BulletList items={[
                    "UX/UI Uplift to Product Description Pages (Web)",
                    "Improved UX/UI Layout and design across site header and navigation with the goal of removing unnecessary clicks within the journey and helping the consumer find products quicker. (Web)",
                    "Homepage Redesign that followed business priorities as well as consumer needs displaying inspiration and tools to shop right away. A secondary focus on efficiencies and delivery for the design team. (Web)",
                  ]} />
                </div>
              </div>

              <Divider />

              {/* CX / brand */}
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-ink-light text-lg leading-snug">
                  Initiatives focused on improving customer experience and brand awareness
                </h3>
                <div className="flex flex-col gap-3">
                  <CompanyBadge name="Target Australia" color="#f5dcdc" />
                  <BulletList items={[
                    "Reviewed and refined the end-to-end post-purchase experience across all customer touchpoints and communications — ensuring messaging was timely, consistent, and reassuring to build confidence and drive repeat purchase behaviour.",
                    "Designed, tested, and implemented a new online returns portal — creating a self-serve channel enabling customers to initiate and manage product returns seamlessly online, reducing friction and relieving pressure on the contact centre.",
                    "Designed and delivered a redesigned My Account Dashboard for the Target app — giving customers a clear, centralised view of their orders, returns, and account details through an accessible and easy-to-navigate interface.",
                    "Improved the Click & Collect experience across app and web — enabling customers to more easily track, manage, and update their online orders, reducing drop-off and improving satisfaction at this critical fulfilment touchpoint.",
                    "Led the creation and implementation of a Design System to establish a consistent visual language, scalable UX patterns, and brand alignment across all digital touchpoints — accelerating design and development velocity across the team.",
                  ]} />
                  <CompanyBadge name="IKEA" color="#fcebaf" />
                  <BulletList items={[
                    "Created a portal for marketing co-workers to manage all in-store events and activities that would be displayed on their local store websites. This purpose of the portal design was to streamline the process of using multiple CMS platforms to make updates and changes to their local store sites, whilst also providing the customers with a great user experience to view offers and book events.",
                  ]} />
                  <CompanyBadge name="Bastion" color="#433f3f" />
                  <BulletList items={[
                    "Created a UI Kit for an online news publication spanning 4 brands, ensuring best-practice UX design principles are in place. The UI Kit streamlines the business's design and development process whilst enhancing user experience across platforms.",
                    "Led end-to-end discovery, design, testing, and handover of a brand new consumer app for a leading enterprise delivery company — creating an intuitive mobile experience enabling users to effortlessly track, manage, and stay informed on their deliveries in real time.",
                    "Conducted extensive research and in-depth customer interviews across a diverse range of ages, backgrounds, and demographics to understand the full vehicle rental journey — from discovery and comparison through to booking, use, and post-hire. Findings were synthesised into a comprehensive end-to-end customer journey map documenting current-state experiences, key touchpoints, pain points, and prioritised opportunities for improvement.",
                    "Supported the full replatform and redesign of a luxury furniture retailer's digital presence — encompassing site architecture, UX/UI design, development handover, SEO strategy, and a CRO plan to grow brand awareness and drive sustainable online sales growth.",
                    "Designed an end-to-end personalisation experience for a digital media company's TV application — guiding users through an intuitive QR code-initiated onboarding flow to curate and prioritise the news and content most relevant to them. The experience balanced rich personalisation with full transparency, using clear progress indicators to ensure the journey felt seamless, engaging, and always in the user's control.",
                  ]} />
                  <CompanyBadge name="ReadyTech" color="#a0e4a0" />
                  <BulletList items={[
                    "0-to-1 design of the Application Assessment Checklist — an intuitive, multi-user-type workflow enabling admissions teams to seamlessly manage and progress applications once all required information has been submitted. Built-in mechanisms allow teams to connect directly with applicants to follow up on outstanding items, assign tasks across departments, and maintain clear visibility over the full assessment pipeline — reducing manual effort and processing time across multiple campuses.",
                  ]} />
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="bg-background rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.05)] px-5 py-6 flex flex-col gap-6">
              <h2 className="font-semibold text-ink text-2xl">Skills.</h2>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-ink-light text-lg">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {["Concept design", "Design strategy", "Design Systems/UI Kits", "Accessible and inclusive design", "Prototyping", "Agentic AI", "Figma", "B2B / Enterprise design"].map(s => (
                    <Pill key={s} label={s} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-ink-light text-lg">Research</h3>
                <div className="flex flex-wrap gap-2">
                  {["Data analysis (Google Analytics)", "A/B Experimental strategy and testing", "Human-centred design", "User testing strategy", "Empathy mapping"].map(s => (
                    <Pill key={s} label={s} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-ink-light text-lg">Collaboration</h3>
                <div className="flex flex-wrap gap-2">
                  {["Facilitate workshops", "Stakeholder management", "Cross-functional alignment"].map(s => (
                    <Pill key={s} label={s} />
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
