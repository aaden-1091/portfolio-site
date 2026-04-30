export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-ink text-background px-6 md:px-12 py-24 md:py-32 flex flex-col min-h-[50vh]"
      aria-labelledby="footer-heading"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col flex-grow">

        {/* Identity mark */}
        <div className="mb-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">
            UX UI Design Lead
          </p>
          <h2
            id="footer-heading"
            className="font-extrabold leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }}
          >
            Aaron de Netto
          </h2>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pt-12 border-t border-background/20">

          {/* About */}
          <div className="md:col-span-1">
            <h3 className="uppercase tracking-widest text-xs font-bold text-background/40 mb-6">
              About
            </h3>
            <p className="text-background/60 text-base leading-relaxed font-light">
              Experience across enterprise, e-commerce, SaaS, and design systems —
              documented here.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-background/40 mb-6">
              Connect
            </h3>
            <ul className="space-y-4 font-medium">
              {[
                { label: "LinkedIn",                 href: "https://www.linkedin.com/in/aaron-denetto/" },
                { label: "Read.cv",                  href: "/cv" },
                { label: "aaden.designs@gmail.com",  href: "mailto:aaden.designs@gmail.com" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex justify-between items-center group hover:text-accent transition-colors"
                  >
                    <span>{label}</span>
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
              Designed &amp; built locally.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
