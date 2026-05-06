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

        <div className="mt-8 md:mt-16">
          <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed text-ink-light">
            Leading design from discovery to delivery — across retail,
            government, enterprise, and media. A track record in CRO,
            accessibility, and design systems translates complex, high-stakes
            problems into experiences that hold up at scale. The craft is in
            making it look effortless.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/illustrations/aaron-illustration.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-14 right-12 w-40 h-40 rounded-2xl object-cover opacity-85 shadow-2xl"
        />
      </div>

    </section>
  );
}
