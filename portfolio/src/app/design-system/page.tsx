import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import { tokens, figmaTokens } from "@/lib/tokens";

/* ─── Section wrapper ─────────────────────────────────────────────────────── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 border-t border-ink/10">
      <h2 className="text-xs font-bold uppercase tracking-widest text-ink-light mb-8">{title}</h2>
      {children}
    </section>
  );
}

/* ─── Color swatch ────────────────────────────────────────────────────────── */
function Swatch({ name, hex, light = false }: { name: string; hex: string; light?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="w-full h-16 rounded-md border border-ink/10"
        style={{ backgroundColor: hex }}
        aria-label={`${name} swatch`}
      />
      <p className="text-xs font-bold text-ink">{name}</p>
      <p className="text-xs text-ink-light font-mono">{hex}</p>
    </div>
  );
}

/* ─── Type specimen ───────────────────────────────────────────────────────── */
function TypeSpec({ label, className, style }: { label: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className="flex items-baseline gap-6 py-4 border-b border-ink/10 last:border-0">
      <span className="text-xs text-ink-light font-mono w-32 flex-shrink-0">{label}</span>
      <span className={className} style={style}>The quick brown fox</span>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 md:px-12 pt-24 pb-12 border-b border-ink/10">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-light mb-4">Pattern Library</p>
        <h1 className="font-extrabold tracking-tight text-ink" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
          Design System
        </h1>
        <p className="text-ink-light mt-3 max-w-xl">
          Open Sans · Tailwind v4 · Next.js 16 — tokens defined in{" "}
          <code className="text-xs bg-surface px-1.5 py-0.5 rounded">src/lib/tokens.ts</code>
        </p>
        <p className="text-xs text-ink-light mt-3">
          Export <code className="bg-surface px-1.5 py-0.5 rounded">figmaTokens</code> from{" "}
          <code className="bg-surface px-1.5 py-0.5 rounded">tokens.ts</code> into Figma via Token Studio (W3C format).
        </p>
      </header>

      <main className="px-6 md:px-12 pb-32">

        {/* ── Colors ──────────────────────────────────────────────────────── */}
        <Section title="Colors">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <Swatch name="Background" hex={tokens.color.background} />
            <Swatch name="Surface"    hex={tokens.color.surface}    />
            <Swatch name="Ink"        hex={tokens.color.ink}        />
            <Swatch name="Ink Light"  hex={tokens.color.inkLight}   />
            <Swatch name="Accent"     hex={tokens.color.accent}     />
          </div>
        </Section>

        {/* ── Typography ──────────────────────────────────────────────────── */}
        <Section title="Typography — Open Sans">
          <TypeSpec label="hero / 800"     style={{ fontSize: "clamp(4rem, 8vw, 10rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em" }} />
          <TypeSpec label="cta / 800"      style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)", fontWeight: 800, lineHeight: 0.9, letterSpacing: "-0.04em" }} />
          <TypeSpec label="display / 700"  style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }} />
          <TypeSpec label="4xl / 700"      className="text-4xl font-bold" />
          <TypeSpec label="2xl / 600"      className="text-2xl font-semibold" />
          <TypeSpec label="xl / 500"       className="text-xl font-medium" />
          <TypeSpec label="base / 400"     className="text-base" />
          <TypeSpec label="sm / 400"       className="text-sm" />
          <TypeSpec label="xs / 700 caps"  className="text-xs font-bold uppercase tracking-widest" />
        </Section>

        {/* ── Buttons ─────────────────────────────────────────────────────── */}
        <Section title="Buttons">
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="primary"   arrow>Primary + Arrow</Button>
            <Button variant="secondary" arrow>Secondary + Arrow</Button>
            <Button variant="ghost"     arrow>Ghost + Arrow</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </Section>

        {/* ── Badges ──────────────────────────────────────────────────────── */}
        <Section title="Badges">
          <div className="flex flex-col gap-4">
            <Badge status="available" />
            <Badge status="busy" />
            <Badge status="away" />
            <Badge status="available" label="Custom label override" />
          </div>
        </Section>

        {/* ── Tags ────────────────────────────────────────────────────────── */}
        <Section title="Tags">
          <div className="flex flex-wrap gap-3">
            <Tag label="Surface"   variant="surface" />
            <Tag label="Accent"    variant="accent"  />
            <Tag label="Ink"       variant="ink"     />
            <Tag label="Fintech"   />
            <Tag label="Healthcare" />
            <Tag label="E-Commerce" />
            <Tag label="Case Study" variant="ink" />
            <Tag label="AR / VR"  />
          </div>
        </Section>

        {/* ── Figma Token Export ──────────────────────────────────────────── */}
        <Section title="Figma Token Export (W3C format)">
          <p className="text-sm text-ink-light mb-4">
            Copy the JSON below and import into Figma via the{" "}
            <strong>Token Studio</strong> plugin (Sync → Import JSON).
          </p>
          <pre className="bg-surface rounded-md p-6 text-xs overflow-x-auto leading-relaxed text-ink font-mono">
            {JSON.stringify(figmaTokens, null, 2)}
          </pre>
        </Section>

      </main>
    </div>
  );
}
