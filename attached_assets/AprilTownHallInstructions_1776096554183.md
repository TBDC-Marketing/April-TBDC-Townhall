# April Tow# April Town Hall — Lovable Build Brief

## Overview

Build a **React single-page application** that serves as an interactive slide deck presentation for TBDC's April Town Hall. The full component code is provided in `App.jsx` — this document covers project setup, design system, and implementation notes.

---

## Project Setup

### Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | React 19+ (via Vite) | Single-page app, no routing needed |
| CSS | Inline styles + Tailwind CSS v4 for utilities | Design tokens are defined as JS constants in the component |
| Icons | Lucide React | `npm install lucide-react` |
| Fonts | Google Fonts (4 families) | Loaded via `<link>` in `index.html` |
| Animation | CSS keyframes (built into component) | No external animation library needed |

### Font Loading

Add these to `index.html` `<head>`:

```html
<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
<link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
<link href="[https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Instrument+Serif:ital@1&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;700&display=swap](https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Instrument+Serif:ital@1&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;700&display=swap)" rel="stylesheet">
Global StylesAdd to index.css or App.css:CSS@import "tailwindcss";

@theme {
  --color-navy: #0A1628;
  --color-teal: #00A88E;
  --color-warm-white: #FAF8F5;
  --color-sand: #F0ECE3;
  --color-charcoal: #1E293B;
}

html, body, #root {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0A1628;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar { display: none; }
body { -ms-overflow-style: none; scrollbar-width: none; }
Design SystemBackground Alternation RuleThe slides must alternate backgrounds to create visual rhythm:Navy (#0A1628) — Title slides, section dividers, dark emphasisWarm White (#FAF8F5) — Standard content, card gridsSand (#F0ECE3) — Alternate content slides, lighter emphasisNever place two slides with the same background color back to back.Typography HierarchyElementFontSize (clamp)WeightColor on DarkColor on LightSlide TitlePlus Jakarta Sansclamp(2rem, 5vw, 3.75rem)800whitecharcoalAccent TextInstrument SerifSame as titleitalictealtealEyebrowJetBrains Mono13px700, uppercasetealtealBody TextInterclamp(1rem, 1.5vw, 1.25rem)400white/70charcoal/80Implementation NotesThe JSX file is complete and self-contained. Drop App.jsx into your src/ directory and render it as the root component.Auto-hide behavior on the ControlBar: Shows on mouse movement, hides after 3 seconds of inactivity.Keyboard Controls:→ / Space / Enter = Next slide← / Backspace = Previous slideF = Toggle fullscreenEscape = Exit fullscreen / close TOCT = Toggle Table of ContentsResponsive typography: The component uses clamp() to scale smoothly between mobile and projector resolutions.