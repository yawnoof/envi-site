# ENVI Brand Guidelines

## Brand Identity

**Company:** ENVI (Enviluxe OÜ)  
**Tagline:** *Escape Ordinary. Be The ENVI.*  
**Position:** Premium import & distribution company. Tallinn, Estonia.  
**Categories:** Gourmet Products · Fine Wines & Spirits · Professional Cosmetics  
**Tone:** Exclusive. Refined. Confident. Never loud — always deliberate.

---

## Logo

### Primary Logo
- Wordmark: **ENVI** in geometric sans with distinctive inner cuts on letters
- Always display on dark background (black or near-black)
- White (#FFFFFF) on black (#000000) is the canonical version
- Minimum size: 80px width on screen, never smaller
- Clear space: at least 1× the height of the "E" on all sides

### Logo Usage Rules
- ✅ White logo on black background
- ✅ Black logo on white background (for print/light contexts)
- ✅ Accent color (#84FFF1) logo only for special digital moments (loading screen, hover state)
- ❌ Never stretch, rotate, or add drop shadows
- ❌ Never place on busy photographic backgrounds without an overlay
- ❌ Never use low-resolution versions — always use vector or 2× PNG

---

## Color Palette

### Primary Colors

| Name       | Hex       | Usage                                      |
|------------|-----------|--------------------------------------------|
| Void Black | `#000000` | Primary background, dominant surface       |
| Pure White | `#FFFFFF` | Primary text, logo, UI elements on dark    |
| Off Black  | `#0A0A0A` | Secondary backgrounds, cards, sections     |
| Deep Gray  | `#111111` | Subtle section dividers, secondary panels  |

### Accent Color

| Name         | Hex       | Usage                                                      |
|--------------|-----------|------------------------------------------------------------|
| ENVI Aqua    | `#84FFF1` | CTAs, hover states, active nav items, highlights, cursor glow |

### Supporting Tones

| Name         | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| Muted White  | `#E8E8E8` | Body text, secondary copy          |
| Ghost Gray   | `#555555` | Borders, dividers, subtle elements |
| Dark Overlay | `rgba(0,0,0,0.65)` | Overlays on hero images   |

### Color Rules
- Background is **always dark** — never use white as a page background
- `#84FFF1` is used **sparingly** — as a signal, not wallpaper. Max 10–15% of any screen.
- Never combine `#84FFF1` with red, orange, or purple
- Text on `#84FFF1` background: use `#000000` only

---

## Typography

### Type Scale

| Role           | Font               | Weight   | Size (desktop) |
|----------------|--------------------|----------|----------------|
| Display / Hero | Cormorant Garamond | 300–400  | 80–120px       |
| Heading H1     | Cormorant Garamond | 400      | 56–72px        |
| Heading H2     | Cormorant Garamond | 400      | 36–48px        |
| Navigation     | Montserrat         | 500      | 13–14px        |
| Body           | Montserrat         | 300–400  | 16–18px        |
| Caption / Label| Montserrat         | 500      | 11–12px, tracked +0.15em |
| CTA Button     | Montserrat         | 600      | 13px, tracked +0.2em, UPPERCASE |

### Typography Rules
- Display text: always in Cormorant Garamond — elegant, editorial contrast with the dark background
- UI/Nav/Body: always in Montserrat — clean, modern, confident
- Letter-spacing on labels and buttons: always tracked out (+0.15–0.25em)
- Headlines: sentence case or ALL CAPS only — never Title Case for decorative text
- Line height for body: 1.7–1.8
- Line height for display: 0.95–1.1 (tight, impactful)

---

## Spacing & Layout

### Grid
- Desktop: 12-column grid, 120px gutters on sides
- Tablet: 8-column, 40px gutters
- Mobile: 4-column, 20px gutters

### Spacing Scale (base 8px)
`8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192px`

### Layout Principles
- Sections are **full viewport height** or deliberately oversized — never cramped
- Use **generous negative space** — emptiness communicates luxury
- Hero section: always 100vh minimum
- Cards and panels: dark backgrounds (`#0A0A0A` or `#111111`) with subtle `1px` border in `#222222`
- Never center everything — alternate between left-aligned and centered compositions
- Photography: always full-bleed with dark overlay; never use small inset images

---

## Animation & Motion

### Principles
- Motion is **slow and deliberate** — nothing snaps or jumps
- Easing: always ease-in-out or custom cubic-bezier — never linear
- Duration: 0.6s–1.2s for major transitions, 0.2s–0.4s for micro-interactions

### Required Animations
1. **Page load:** Logo fades in from center, then nav slides down — total 1.2s
2. **Hero text:** Characters or words stagger-reveal on load (0.05s per word)
3. **Scroll reveals:** Elements fade up with `translateY(40px → 0)` as they enter viewport
4. **Parallax:** Hero background image moves at 0.4× scroll speed
5. **Cursor:** Custom cursor — small white dot with `#84FFF1` glow that expands on hover over interactive elements
6. **Nav hover:** Underline draws left-to-right in `#84FFF1`
7. **Section transitions:** Smooth opacity + slight Y-axis shift (never hard cuts)
8. **Partner logo hover:** Desaturate → saturate on hover, subtle scale 1.0 → 1.04

### Animation Rules
- ❌ No bouncing, elastic, or playful easing
- ❌ No sudden full-screen transitions between sections
- ✅ Prefer CSS transitions + Intersection Observer for scroll-based effects
- ✅ GSAP or Framer Motion for complex sequences

---

## UI Components

### Navigation
- Fixed top bar, transparent → blurs/darkens on scroll
- Logo left, menu items right, language switcher far right
- Language switcher: `ET | RU | EN` — active language in `#84FFF1`, others in `#555555`
- On mobile: hamburger → full-screen overlay menu

### Language Switcher
- Always visible in nav
- Three states: active (`#84FFF1`, no underline), inactive (`#555555`), hover (`#FFFFFF`)
- Languages: **ET** (Estonian) · **RU** (Russian) · **EN** (English)
- Separator: thin `|` in `#333333`

### Buttons / CTAs
- Primary: transparent background, `1px solid #84FFF1`, text in `#84FFF1`
  - Hover: fill `#84FFF1`, text becomes `#000000`
  - Transition: 0.3s ease
- Secondary: transparent, `1px solid #FFFFFF`, text `#FFFFFF`
  - Hover: fill `#FFFFFF`, text `#000000`
- All buttons: `13px Montserrat 600 uppercase tracked +0.2em`, padding `14px 32px`

### Cards (Focus Categories)
- Dark surface `#0A0A0A`, border `1px solid #1A1A1A`
- On hover: border color transitions to `#84FFF1`, subtle glow `box-shadow: 0 0 20px rgba(132,255,241,0.15)`
- Category label: `#84FFF1`, uppercase, tracked
- Title: Cormorant Garamond
- Body: Montserrat 300

### Section Dividers
- Never use horizontal rules — use **whitespace** and **oversized typography** as dividers
- Optional: single pixel line in `#1A1A1A`

---

## Photography & Visual Style

- **Always dark, moody, high-contrast** — no bright lifestyle photography
- Gourmet: close-up macro, dramatic studio lighting, dark surfaces
- Wine & Spirits: liquid in glass, deep color, bokeh backgrounds
- Cosmetics: clinical precision, clean product shots on black/dark gray
- All images: desaturated 10–20% to maintain B&W premium feel
- Avoid: stock-feeling photos, bright backgrounds, smiling people

---

## Voice & Tone

### Brand Voice
- **Confident** — never apologetic or overly descriptive
- **Elevated** — use precise, curated language
- **Concise** — short sentences. No filler words.
- **European** — subtle formality, cosmopolitan perspective

### Copy Examples

| ❌ Don't | ✅ Do |
|----------|-------|
| "We offer a wide range of high-quality products" | "We curate the exceptional." |
| "Contact us for more information" | "Ready to escape the ordinary?" |
| "Our company is located in Tallinn" | "From Tallinn — a dynamic European hub." |

---

## What ENVI Is Not
- ❌ Not mass-market or accessible to all — deliberately exclusive
- ❌ Not playful, colorful, or youthful
- ❌ Not corporate in a grey-suit way — luxury in a black-turtleneck way
- ❌ Not verbose — every word earns its place

---

## File Formats & Assets
- Logo: SVG (primary), PNG @2× on transparent (dark use), PNG @2× on white (light use)
- Colors: always in HEX for digital, Pantone for print
- Fonts: self-hosted via Google Fonts (Cormorant Garamond, Montserrat)
