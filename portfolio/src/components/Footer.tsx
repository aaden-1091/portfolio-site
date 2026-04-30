const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Read.cv",  href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-ink text-background px-6 md:px-12 py-24 md:py-32 flex flex-col min-h-[60vh]"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow">
        {/* CTA headline */}
        <h2
          id="footer-heading"
          className="font-extrabold leading-[0.9] tracking-[-0.04em] mb-12"
          style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }}
        >
          Have a project?{" "}
          <br />
          <a
            href="mailto:hello@example.com"
            className="text-accent hover:text-white transition-colors underline decoration-4 underline-offset-8"
          >
            Let&apos;s talk.
          </a>
        </h2>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-auto pt-12 border-t border-background/20">
          {/* Blurb */}
          <div className="md:col-span-2">
            <p className="text-background/60 text-lg leading-relaxed max-w-sm font-light">
              Currently accepting new freelance projects. Building something
              interesting? Let&apos;s talk — over coffee or a trail walk.
            </p>
          </div>

          {/* Socials */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-background/40 mb-6">
              Socials
            </h3>
            <ul className="space-y-4 font-medium">
              {socials.map(({ label, href, note }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex justify-between items-center group hover:text-accent transition-colors"
                  >
                    <span>
                      {label}{" "}
                      {note && (
                        <span className="text-xs text-background/40 group-hover:text-accent transition-colors">
                          {note}
                        </span>
                      )}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-background/40 mb-6">
              Location
            </h3>
            <p className="font-medium">
              Australia
              <br />
              AEST (UTC +10)
            </p>
            <p className="text-sm text-background/40 mt-8">
              © 2026 Aaron de Netto.
              <br />
              Designed &amp; Built locally.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
