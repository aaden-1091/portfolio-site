import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl">
        <div className="flex items-center gap-4">
          <Badge status="available" label="Aaron de Netto" />
          <span className="text-xs font-semibold uppercase tracking-widest text-ink-light">Senior Product Designer</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illustrations/aaron-illustration.png"
            alt=""
            aria-hidden="true"
            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
          />
        </div>

        <h1
          id="hero-heading"
          className="font-extrabold lowercase text-ink mt-4"
          style={{ fontSize: "clamp(4rem, 8vw, 10rem)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
        >
          experience-led <br />
          <span className="text-accent-fill">design</span> <br />
          that moves people.
        </h1>

        <div className="mt-8 md:mt-16">
          <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed text-ink-light">
            10+ years leading design from discovery to delivery — across
            consumer eCommerce, enterprise SaaS, and B2B platforms. A track
            record in CRO, accessibility, and design systems translates complex,
            high-stakes problems into experiences that hold up at scale. Known
            for navigating ambiguity with rigour. The craft is in making it look
            effortless.
          </p>
        </div>

      </div>

    </section>
  );
}
