# gemini.md — ENVI Website Generation Instructions

## Your Role

You are an expert frontend developer and luxury web designer. Your task is to build the official website for **ENVI** — a premium import & distribution company based in Tallinn, Estonia.

You produce complete, production-ready HTML/CSS/JavaScript in a single file unless told otherwise. Your output must be visually extraordinary — the kind of site that wins Awwwards. Every detail matters.

---

## About ENVI

**ENVI** (Enviluxe OÜ) is a premium import and distribution company.  
**Location:** Tallinn, Estonia  
**Tagline:** *Escape Ordinary. Be The ENVI.*  
**Three business categories:**
- **Gourmet Products** — rare ingredients, artisanal coffees, luxury delicacies
- **Fine Wines & Spirits** — rare champagnes, aged single malts, limited-edition cognacs
- **Professional Cosmetics** — science-backed formulations, official distributor of Histomer Professional (Italy)

**Contact:**
- Email: info@envi.ee
- Phone: +372 560 77 441
- Telegram: t.me/enviluxe
- WhatsApp: +372 560 77 441

---

## Design System

### Colors
```css
--color-bg:        #000000;   /* Primary background */
--color-bg-2:      #0A0A0A;   /* Secondary surfaces, cards */
--color-bg-3:      #111111;   /* Tertiary panels */
--color-white:     #FFFFFF;   /* Primary text, logo */
--color-muted:     #E8E8E8;   /* Body text */
--color-ghost:     #555555;   /* Borders, inactive elements */
--color-border:    #1A1A1A;   /* Card borders */
--color-accent:    #84FFF1;   /* ENVI Aqua — THE signature accent */
--color-overlay:   rgba(0,0,0,0.65); /* Hero overlays */
```

### Typography
```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Montserrat:wght@300;400;500;600&display=swap');

--font-display: 'Cormorant Garamond', Georgia, serif;  /* Headlines, hero */
--font-ui:      'Montserrat', sans-serif;               /* Nav, body, buttons */
```

### Type Scale
- Hero display: `clamp(64px, 10vw, 120px)`, font-weight 300, line-height 0.95
- H1: `clamp(40px, 6vw, 72px)`, font-weight 400
- H2: `clamp(28px, 4vw, 48px)`, font-weight 400
- Body: `17px`, font-weight 300, line-height 1.75
- Nav: `13px`, font-weight 500, letter-spacing 0.15em, uppercase
- Button: `12px`, font-weight 600, letter-spacing 0.25em, uppercase

---

## Site Structure

Build a **single-page website** with smooth scroll and these sections in order:

### 1. Navigation (fixed)
- Transparent background, blurs to `rgba(0,0,0,0.8) + backdrop-filter: blur(20px)` on scroll
- Left: ENVI logo (white SVG text or image)
- Center: nav links — `ABOUT US · OUR FOCUS · PARTNERS · CONTACT`
- Right: language switcher `ET | RU | EN`
  - Active language: `#84FFF1`
  - Inactive: `#555555`
  - Hover: `#FFFFFF`
  - Separator `|` in `#333333`
- Mobile: hamburger icon → full-screen overlay menu with large type

### 2. Hero Section (100vh)
- Full viewport height
- Dark background with subtle animated particle field or slow-moving gradient mesh in very dark tones
- Large display text, staggered word-by-word reveal on load:
  - Line 1 (large, Cormorant Garamond, weight 300): **"Escape Ordinary"**
  - Line 2 (small, Montserrat, tracked, #84FFF1): **"PREMIUM IMPORT & DISTRIBUTION"**
  - Line 3 (medium, Cormorant Garamond): **"Be The ENVI"**
- Subtle scroll indicator at bottom (animated down arrow in `#84FFF1`)
- Tallinn, Estonia — small caption bottom right

### 3. About Section
- 2-column layout: oversized decorative text left, content right
- Heading: "About ENVI" in Cormorant Garamond
- Body text from brand copy (see below)
- Small animated counter or stat: "Est. Tallinn, Estonia"
- Fade-up reveal on scroll

### 4. Our Focus Section
- Full-width section with dark background
- Section label: "OUR FOCUS" in `#84FFF1`, tracked, small Montserrat
- Three cards side by side (or stacked on mobile), each for one category:

  **Card 1 — Gourmet Products**
  - Icon or abstract visual element
  - Title in Cormorant Garamond
  - Short description
  - Hover: border glows in `#84FFF1`, subtle scale

  **Card 2 — Fine Wines & Spirits**
  - Same structure

  **Card 3 — Professional Cosmetics**
  - Same structure

### 5. Partners Section
- Heading: "Official Partnership"
- Histomer Professional logo (white version on dark background)
- Short description of Histomer
- Subtle hover effect on logo

### 6. Contact Section
- Full-width dark section
- Large display heading: *"Ready to escape the ordinary?"* in Cormorant Garamond
- Subtext: "We're open to visionary partnerships in premium categories."
- Four contact options as icon + label:
  - Email → info@envi.ee
  - Phone → +372 560 77 441
  - Telegram → t.me/enviluxe
  - WhatsApp → +372 560 77 441
- Each icon outlined, hover: fill `#84FFF1`

### 7. Footer
- Minimal: ENVI logo left, legal right
- Enviluxe OÜ · Reg. nr.: 14476580 · VAT nr.: EE102882977
- © envi.ee, 2026
- Background: `#000000`, top border: `1px solid #1A1A1A`

---

## Multilingual Support

Implement a language switcher for **ET / RU / EN**.

Use a JavaScript object to store all text content in three languages:

```javascript
const translations = {
  EN: {
    nav_about: "ABOUT US",
    nav_focus: "OUR FOCUS",
    nav_partners: "PARTNERS",
    nav_contact: "CONTACT",
    hero_line1: "Escape Ordinary",
    hero_sub: "PREMIUM IMPORT & DISTRIBUTION",
    hero_line2: "Be The ENVI",
    about_title: "About ENVI",
    about_body: "ENVI is a premium import and distribution company located in Tallinn, Estonia. We provide exclusive access to exceptional international brands in gourmet products, fine wine & spirits, and professional cosmetics.",
    focus_title: "Our Focus",
    focus_gourmet_title: "Gourmet Products",
    focus_gourmet_body: "We curate exceptional gourmet products from the world's rarest and finest origins — rare ingredients, exquisite flavors, and timeless indulgence.",
    focus_wine_title: "Fine Wines & Spirits",
    focus_wine_body: "Fine wines and premium spirits that represent the pinnacle of craftsmanship and heritage. Rare champagnes, aged single malts, artisanal gins.",
    focus_cosmetics_title: "Professional Cosmetics",
    focus_cosmetics_body: "Advanced, science-backed formulations that deliver visible transformation. Each product is a masterpiece of efficacy, elegance, and sophistication.",
    partners_title: "Official Partnership",
    contact_headline: "Ready to escape the ordinary?",
    contact_sub: "We're open to visionary partnerships in premium categories.",
  },
  RU: {
    nav_about: "О НАС",
    nav_focus: "НАПРАВЛЕНИЯ",
    nav_partners: "ПАРТНЁРЫ",
    nav_contact: "КОНТАКТ",
    hero_line1: "Выйди за рамки",
    hero_sub: "ПРЕМИУМ ИМПОРТ И ДИСТРИБУЦИЯ",
    hero_line2: "Стань ENVI",
    about_title: "О компании ENVI",
    about_body: "ENVI — это премиальная компания по импорту и дистрибуции, расположенная в Таллине, Эстония. Мы обеспечиваем эксклюзивный доступ к исключительным международным брендам в сфере гастрономии, вин и духов, а также профессиональной косметики.",
    focus_title: "Наши направления",
    focus_gourmet_title: "Гурме продукты",
    focus_gourmet_body: "Мы отбираем исключительные гастрономические продукты из редчайших источников мира — редкие ингредиенты, изысканные вкусы, непревзойдённое удовольствие.",
    focus_wine_title: "Вина и спиртные напитки",
    focus_wine_body: "Изысканные вина и премиальные спиртные напитки, воплощающие вершины мастерства и наследия. Редкие шампанские, выдержанные односолодовые виски, авторские джины.",
    focus_cosmetics_title: "Профессиональная косметика",
    focus_cosmetics_body: "Передовые научно обоснованные формулы, обеспечивающие видимую трансформацию. Каждый продукт — шедевр эффективности, элегантности и утончённости.",
    partners_title: "Официальное партнёрство",
    contact_headline: "Готовы выйти за рамки?",
    contact_sub: "Мы открыты для дальновидных партнёрств в премиальных категориях.",
  },
  ET: {
    nav_about: "MEIST",
    nav_focus: "FOOKUS",
    nav_partners: "PARTNERID",
    nav_contact: "KONTAKT",
    hero_line1: "Välju tavalisest",
    hero_sub: "PREMIUM IMPORT JA TURUSTUS",
    hero_line2: "Ole ENVI",
    about_title: "ENVI-st",
    about_body: "ENVI on premium impordi- ja turustusettevõte, mis asub Tallinnas, Eestis. Pakume eksklusiivseid rahvusvahelisi brände gurmeeproduktiide, peenveinide ja -kangete jookide ning professionaalse kosmeetika valdkonnas.",
    focus_title: "Meie fookus",
    focus_gourmet_title: "Gurmetooted",
    focus_gourmet_body: "Valime erakordse kvaliteediga gurmetooteid maailma haruldaseimate allikatest — haruldased koostisosad, peenmaitsed ja ajatu nauding.",
    focus_wine_title: "Peenveinid ja kangejoogid",
    focus_wine_body: "Peenveinid ja premium kangejoogid, mis esindavad meisterlikkuse ja pärandi tippu. Haruldased šampanjad, laagerdunud single maltid, käsitsi valmistatud džinnid.",
    focus_cosmetics_title: "Professionaalne kosmeetika",
    focus_cosmetics_body: "Arenenud teadusliku alusega formulatsioonid, mis tagavad nähtava muutuse. Iga toode on tõhususe, elegantsi ja keerukuse meistriteos.",
    partners_title: "Ametlik partnerlus",
    contact_headline: "Valmis tavalisest väljuma?",
    contact_sub: "Oleme avatud visionäärsele koostööle premium kategooriates.",
  }
};
```

- Default language: **ET**
- On language switch: update all `data-i18n` elements instantly with a subtle fade transition
- Store selected language in `localStorage`

---

## Required Animations (implement all)

### On Page Load
```
1. Black screen → Logo fades in center (opacity 0→1, scale 0.95→1, duration 0.8s)
2. Logo slides to top-left nav position (duration 0.6s, ease-in-out)
3. Nav items stagger in from top (0.1s delay each)
4. Hero text words stagger reveal (translateY 20px→0, opacity 0→1, 0.08s per word)
```

### On Scroll
```
- Intersection Observer on all sections
- Elements enter: opacity 0→1 + translateY(40px→0), duration 0.8s, ease-out
- Stagger delay for multiple elements in same section: 0.15s between each
- Parallax on hero: background moves at 0.5x scroll speed
```

### Micro-interactions
```
- Custom cursor: 12px circle, white border, tracks mouse with 0.1s lag
  - On hover over links/buttons: expands to 40px, fill rgba(132,255,241,0.2), border #84FFF1
- Nav links: underline draws left-to-right in #84FFF1 on hover (CSS clip-path animation)
- Focus cards: border glows, slight translateY(-4px) on hover
- Contact icons: scale 1→1.1, color → #84FFF1 on hover
- Language switcher: active item gets #84FFF1 color + subtle glow
```

---

## Technical Requirements

- Single HTML file (HTML + CSS + JS inline)
- No external JS frameworks — vanilla JS only (unless GSAP CDN is used for animations)
- GSAP CDN is allowed: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- ScrollTrigger plugin allowed: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`
- Google Fonts via `@import` in CSS
- Fully responsive: desktop (1440px), tablet (768px), mobile (375px)
- CSS custom properties for all design tokens
- Smooth scroll: `scroll-behavior: smooth` + JS for animated scrolling
- `prefers-reduced-motion` media query: disable animations for accessibility

---

## Quality Standards

### Must Have
- [ ] Custom cursor with `#84FFF1` glow on hover
- [ ] Page load animation sequence (logo → nav → hero text)
- [ ] Scroll-triggered fade-up reveals on all sections
- [ ] Language switcher ET | RU | EN fully functional
- [ ] Parallax effect on hero section
- [ ] Hover effects on all interactive elements
- [ ] Fully responsive layout
- [ ] Navigation blur/darken on scroll

### Must NOT Have
- ❌ Purple gradients, colorful backgrounds
- ❌ Rounded corners on cards (use sharp 0px or subtle 2px max)
- ❌ Generic stock photo placeholders with bright colors
- ❌ Inter, Roboto, or Arial as primary fonts
- ❌ Centered layout for everything — vary alignment
- ❌ Bouncy or elastic animations
- ❌ Visible scrollbars (hide with CSS)
- ❌ Box shadows that aren't dark or `#84FFF1` glow

---

## Copy Reference (English)

Use this exact copy unless instructed otherwise:

**Hero:**
> Escape Ordinary  
> PREMIUM IMPORT & DISTRIBUTION  
> Be The ENVI

**About:**
> ENVI is a premium import and distribution company located in Tallinn, Estonia. We provide exclusive access to exceptional international brands in gourmet products, fine wine & spirits, and professional cosmetics. ENVI builds long-term strategic partnerships with visionary producers, offering seamless market entry into the Baltics and Europe. From Tallinn — a dynamic European hub — we guarantee the highest standards of quality, exclusivity, and precision.

**Our Focus intro:**
> Three directions define ENVI: gourmet experiences of unparalleled quality, fine wine & spirits that embody timeless refinement, and cosmetics crafted for transformative results.

**Histomer blurb:**
> Histomer Professional is an Italian dermocosmetic excellence, backed by over 40 years of scientific research. Innovative formulas regenerate, balance, and revitalize skin — delivering visible radiance, firmness, and renewal.

**Contact CTA:**
> Ready to escape the ordinary?  
> We're open to visionary partnerships in premium categories.

---

## Output Format

Deliver a complete, self-contained `index.html` file that can be opened directly in a browser with zero additional setup. All CSS in `<style>` tags, all JS in `<script>` tags, Google Fonts via `@import`.

The result should be **jaw-dropping** on first load. This is a premium brand — the website must reflect that from the first frame.
