/**
 * Design Token source of truth.
 * – Used by components via Tailwind CSS custom properties.
 * – `figmaTokens` exports the same values in W3C Design Token format,
 *   compatible with Token Studio / Figma Variables import.
 */

export const tokens = {
  color: {
    background: "#f7f6f3",
    surface:    "#ebeae4",
    ink:        "#1c1b1a",
    inkLight:   "#4a4846",
    accent:     "#d95a41",
  },
  font: {
    sans: "'Open Sans', ui-sans-serif, system-ui, sans-serif",
  },
  fontWeight: {
    light:     "300",
    regular:   "400",
    medium:    "500",
    semibold:  "600",
    bold:      "700",
    extrabold: "800",
  },
  fontSize: {
    xs:      "0.75rem",   // 12px
    sm:      "0.875rem",  // 14px
    base:    "1rem",      // 16px
    lg:      "1.125rem",  // 18px
    xl:      "1.25rem",   // 20px
    "2xl":   "1.5rem",    // 24px
    "3xl":   "1.875rem",  // 30px
    "4xl":   "2.25rem",   // 36px
    hero:    "clamp(4rem, 8vw, 10rem)",
    cta:     "clamp(2.5rem, 5vw, 6rem)",
    display: "clamp(1.5rem, 3vw, 3rem)",
  },
  spacing: {
    section: "clamp(4rem, 10vw, 8rem)",
  },
  borderRadius: {
    sm:   "2px",
    md:   "4px",
    full: "9999px",
  },
  lineHeight: {
    tight:  "0.9",
    snug:   "1.2",
    normal: "1.5",
    relaxed: "1.625",
  },
  letterSpacing: {
    tight:   "-0.04em",
    widest:  "0.15em",
  },
} as const;

export type DesignTokens = typeof tokens;

// ─── W3C / Token Studio format for Figma import ──────────────────────────────

export const figmaTokens = {
  color: {
    background: { $value: tokens.color.background, $type: "color", $description: "Page background" },
    surface:    { $value: tokens.color.surface,    $type: "color", $description: "Elevated surface, card backgrounds" },
    ink:        { $value: tokens.color.ink,        $type: "color", $description: "Primary text / foreground" },
    "ink-light":{ $value: tokens.color.inkLight,   $type: "color", $description: "Secondary / muted text" },
    accent:     { $value: tokens.color.accent,     $type: "color", $description: "Calls to action, hover highlights" },
  },
  typography: {
    "font-sans": { $value: tokens.font.sans, $type: "fontFamily" },
    "weight-regular":   { $value: 400, $type: "fontWeight" },
    "weight-semibold":  { $value: 600, $type: "fontWeight" },
    "weight-bold":      { $value: 700, $type: "fontWeight" },
    "weight-extrabold": { $value: 800, $type: "fontWeight" },
    "size-xs":      { $value: "12",  $type: "fontSize" },
    "size-sm":      { $value: "14",  $type: "fontSize" },
    "size-base":    { $value: "16",  $type: "fontSize" },
    "size-lg":      { $value: "18",  $type: "fontSize" },
    "size-xl":      { $value: "20",  $type: "fontSize" },
    "size-2xl":     { $value: "24",  $type: "fontSize" },
    "size-4xl":     { $value: "36",  $type: "fontSize" },
  },
  spacing: {
    "1":  { $value: "4",   $type: "spacing" },
    "2":  { $value: "8",   $type: "spacing" },
    "4":  { $value: "16",  $type: "spacing" },
    "6":  { $value: "24",  $type: "spacing" },
    "8":  { $value: "32",  $type: "spacing" },
    "12": { $value: "48",  $type: "spacing" },
    "16": { $value: "64",  $type: "spacing" },
    "24": { $value: "96",  $type: "spacing" },
  },
  borderRadius: {
    sm:   { $value: "2",    $type: "borderRadius" },
    md:   { $value: "4",    $type: "borderRadius" },
    full: { $value: "9999", $type: "borderRadius" },
  },
};
