# Replit Agent Instructions: April Town Hall Slide Deck — Content Update

## Overview

Update the `artifacts/april-town-hall` slide deck to reflect a revised presentation outline. The changes involve removing one slide, updating one slide with named individuals, adding four new slides, and renumbering everything accordingly. All work is within `artifacts/april-town-hall/src/`.

---

## Summary of Changes

| # | Action | Slide |
|---|--------|-------|
| 1 | **DELETE** | `Slide03BudgetingProcess.tsx` |
| 2 | **UPDATE** | `Slide02Workversaries.tsx` — add 5 named individuals with years and placeholder avatars |
| 3 | **ADD** | New slide: "How We Show Up as a Team" |
| 4 | **ADD** | New slide: "What's Coming (Raising the Bar)" |
| 5 | **ADD** | New slide: "Open Office Hours with Ange" |
| 6 | **ADD** | New slide: "Next 60–90 Day Focus" (positioned between Scout Reports and Lunch & Learn) |
| 7 | **RENUMBER** | All existing slides and manifest updated to reflect new order |

---

## Final Slide Order

After all changes, the deck should have **12 slides** in this order:

1. Context & Purpose
2. Workversaries *(updated)*
3. Operating Principles *(renumbered, was #4)*
4. How We Show Up as a Team *(new)*
5. What's Coming — Raising the Bar *(new)*
6. Open Office Hours with Ange *(new)*
7. Space Audit *(renumbered, was #5)*
8. Sprint Week Retro *(renumbered, was #6)*
9. Scout Reports *(renumbered, was #7)*
10. Next 60–90 Day Focus *(new)*
11. Lunch & Learn *(renumbered, was #8)*
12. Closing Q&A *(renumbered, was #9)*

---

## Step-by-Step Instructions

### Step 1 — Delete the Budgeting slide file

Delete the file:
```
artifacts/april-town-hall/src/pages/slides/Slide03BudgetingProcess.tsx
```

---

### Step 2 — Update `Slide02Workversaries.tsx`

Replace the body content of `Slide02Workversaries.tsx` to display five team members in a visually engaging grid. Each person should have:
- A circular avatar placeholder (initials-based, styled with a teal background)
- Their full name
- Their tenure displayed as a large prominent number + "year(s)" label

**Team members and data:**
| Name | Years |
|------|-------|
| Jonathan Knott | 5 years |
| Nikhil Sharma | 4 years |
| Gurpreet Kaur | 1 year |
| Davinder Gurm | 1 year |
| Faraz Eslami | 1 year |

**Layout:** Warm white background (`#FAF8F5`). Use a flex/grid layout to display the five cards. Three on top row, two centred on bottom row (or a single row of 5 — whichever fits cleanly). Each card should feel celebratory, not clinical.

**Avatar initials logic:** First letter of first name + first letter of last name (e.g., "JK", "NS", "GK", "DG", "FE").

**Note on profile photos:** The brief asks for profile pictures, but since no images are available in the repo, implement avatar placeholders using initials in styled circles. Add a comment in the component: `{/* TODO: Replace initials avatar with <img> once headshots are provided */}`. The component should accept an optional `imageSrc` prop on the card sub-component so photos can be dropped in later without restructuring.

---

### Step 3 — Rename existing slides to new numbers

Rename the following files (do NOT edit their content — just rename):

| Old filename | New filename |
|---|---|
| `Slide04OperatingPrinciples.tsx` | `Slide03OperatingPrinciples.tsx` |
| `Slide05SpaceAudit.tsx` | `Slide07SpaceAudit.tsx` |
| `Slide06SprintRetro.tsx` | `Slide08SprintRetro.tsx` |
| `Slide07ScoutReports.tsx` | `Slide09ScoutReports.tsx` |
| `Slide08LunchAndLearn.tsx` | `Slide11LunchAndLearn.tsx` |
| `Slide09ClosingQA.tsx` | `Slide12ClosingQA.tsx` |

---

### Step 4 — Create `Slide04HowWeShowUp.tsx`

**Background:** Navy (`#0A1628`)  
**Layout:** Two-column — left column has title/intro, right column has a styled list of expectations.

**Eyebrow:** `Expectations`  
**Title:** `How We Show Up` *(with "as a Team" in italic teal Instrument Serif)*

**Left column body text:**
> We are not just executing tasks — we are thinking, improving, and building.

**Right column — styled bullet list (teal dots, dark text on white card panels or inline):**
- Take ownership beyond your lane
- Bring solutions, not just problems
- Think ahead, not just what's in front of you
- Be proactive, not reactive
- Focus on what matters most
- Look for ways to improve how we operate

**Bottom callout strip (teal-tinted background, full width):**
> Rigor in execution. Strength in thinking. If something is unclear — clarify it. If something is broken — raise it. If you see an opportunity — act on it.

Use the same COLORS, FONTS, and component patterns already established in the codebase (navy bg, teal accents, Plus Jakarta Sans headings, Instrument Serif italic accent, Inter body, JetBrains Mono eyebrow).

---

### Step 5 — Create `Slide05WhatsComingRaisingTheBar.tsx`

**Background:** Sand (`#F0ECE3`)  
**Layout:** Two-column grid (same pattern as `Slide03OperatingPrinciples`).

**Eyebrow:** `Looking Ahead`  
**Title:** `Raising` *(with "the Bar" in italic teal)*

**Left column — What's underway:**
Sub-heading: "Major initiatives in planning or underway"
- AI program
- Surge expansion and more
- Increased complexity and coordination across teams

**Right column — three `LightCard` components (white cards, teal left border):**

Card 1 — icon: `Target` from lucide-react  
**Title:** Higher Execution Standards  
**Body:** More cross-team dependency means less room for ambiguity on ownership and delivery.

Card 2 — icon: `Users` from lucide-react  
**Title:** Cross-Team Coordination  
**Body:** Move faster with better coordination. Know your dependencies before they become blockers.

Card 3 — icon: `Zap` from lucide-react  
**Title:** Focus on High-Impact Work  
**Body:** Be clear on what moves the needle and protect your time accordingly.

---

### Step 6 — Create `Slide06OpenOfficeHours.tsx`

**Background:** Navy (`#0A1628`)  
**Layout:** Centered, single column, max-width 800px.

**Eyebrow:** `Community`  
**Title:** `Open Office Hours` *(with "with Ange" in italic teal)*

**Subtext:**
> Wednesdays, 11:00 – 12:15 · Open to everyone

**Four icon cards in a 2×2 grid (DarkCard style — glass effect, teal left border):**

Card 1 — icon: `Lightbulb`  
**Title:** Share Ideas  
**Body:** Bring improvements, experiments, or things you've been thinking about.

Card 2 — icon: `MessageSquare` (or `MessagesSquare`)  
**Title:** Get Input  
**Body:** Talk through your work, get a second perspective, pressure-test your thinking.

Card 3 — icon: `AlertCircle`  
**Title:** Raise Blockers  
**Body:** Surface challenges before they compound. Don't wait for a formal meeting.

Card 4 — icon: `TrendingUp`  
**Title:** Talk Through Opportunities  
**Body:** Spot something worth building or improving? Bring it here.

**Bottom note (mono font, teal):**
> Goal: Create space for better thinking, feedback, and collaboration.

---

### Step 7 — Create `Slide10NextFocus.tsx`

**Background:** Warm White (`#FAF8F5`)  
**Layout:** Centered, max-width 1000px.

**Eyebrow:** `What We're Building Toward`  
**Title:** `Next 60–90 Day` *(with "Focus" in italic teal)*

**Four focus items displayed as horizontal cards (LightCard style) in a 2×2 grid:**

Card 1 — icon: `Rocket` from lucide-react  
**Title:** Stronger Sprint Week Execution  
**Body:** Deliver a stronger May Sprint Week with improved execution and internal coordination.

Card 2 — icon: `Filter`  
**Title:** Pipeline Discipline  
**Body:** Tighten pipeline processes to enable earlier founder confirmation and better planning.

Card 3 — icon: `Network` (or `Share2`)  
**Title:** Mentor Network  
**Body:** Build and scale the mentor network aligned to priority verticals.

Card 4 — icon: `Megaphone` (or `Mic2`)  
**Title:** Ecosystem Storytelling  
**Body:** Strengthen founder and ecosystem storytelling to support brand and growth.

---

### Step 8 — Update `slides-manifest.json`

Replace the contents of `artifacts/april-town-hall/src/data/slides-manifest.json` entirely with the following:

```json
[
  {
    "id": "a1b2c3d4-0001-0000-0000-000000000001",
    "position": 1,
    "filepath": "src/pages/slides/Slide01ContextPurpose.tsx",
    "title": "Context & Purpose",
    "description": "April Town Hall opening slide covering how TBDC operates and executes.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0002-0000-0000-000000000002",
    "position": 2,
    "filepath": "src/pages/slides/Slide02Workversaries.tsx",
    "title": "Workversaries",
    "description": "Celebrating March & April team member anniversaries with names, years, and avatars.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0003-0000-0000-000000000003",
    "position": 3,
    "filepath": "src/pages/slides/Slide03OperatingPrinciples.tsx",
    "title": "Operating Principles",
    "description": "Ownership and Done — the standard for all work with clear owner, timeline, and success definition.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0004-0000-0000-000000000004",
    "position": 4,
    "filepath": "src/pages/slides/Slide04HowWeShowUp.tsx",
    "title": "How We Show Up as a Team",
    "description": "Expectations for how every team member thinks, acts, and contributes beyond their immediate tasks.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0005-0000-0000-000000000005",
    "position": 5,
    "filepath": "src/pages/slides/Slide05WhatsComingRaisingTheBar.tsx",
    "title": "Raising the Bar",
    "description": "Major initiatives underway and what higher expectations mean for cross-team execution.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0006-0000-0000-000000000006",
    "position": 6,
    "filepath": "src/pages/slides/Slide06OpenOfficeHours.tsx",
    "title": "Open Office Hours with Ange",
    "description": "Wednesday open office hours with Angela — share ideas, raise blockers, get input.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0007-0000-0000-000000000007",
    "position": 7,
    "filepath": "src/pages/slides/Slide07SpaceAudit.tsx",
    "title": "Space Audit",
    "description": "Facilities update: space audit and optimization including tenant transitions and new additions.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0008-0000-0000-000000000008",
    "position": 8,
    "filepath": "src/pages/slides/Slide08SprintRetro.tsx",
    "title": "Sprint Week Retro",
    "description": "March Sprint Week retrospective with focused action plan and accountability improvements.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0009-0000-0000-000000000009",
    "position": 9,
    "filepath": "src/pages/slides/Slide09ScoutReports.tsx",
    "title": "Scout Reports",
    "description": "Scout Report process updates: defined windows, clear ownership, and streamlined flow.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0010-0000-0000-000000000010",
    "position": 10,
    "filepath": "src/pages/slides/Slide10NextFocus.tsx",
    "title": "Next 60–90 Day Focus",
    "description": "Four priority focus areas for the next 60 to 90 days across Sprint Week, pipeline, mentors, and storytelling.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0011-0000-0000-000000000011",
    "position": 11,
    "filepath": "src/pages/slides/Slide11LunchAndLearn.tsx",
    "title": "Lunch & Learn",
    "description": "Community Lunch & Learn Series with open call for participation.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0012-0000-0000-000000000012",
    "position": 12,
    "filepath": "src/pages/slides/Slide12ClosingQA.tsx",
    "title": "Closing Q&A",
    "description": "Closing slide: Clarity. Ownership. Execution. Q&A open floor.",
    "speakerNotes": ""
  }
]
```

---

### Step 9 — Update `replit.md`

In `replit.md`, update the Slides section to reflect the new slide count and list. Change `9 slides` to `12 slides` and update the slide inventory list to match the final order above.

---

## Design Constraints (Do Not Break These)

- All new slides must use the existing design tokens: `COLORS` and `FONTS` objects already defined in every slide file.
- Navy (`#0A1628`), Teal (`#00A88E`), Warm White (`#FAF8F5`), Sand (`#F0ECE3`) are the only background colors.
- Backgrounds must **alternate** — no two consecutive slides with the same background. The sequence for the 12 slides should be: navy, warm-white, sand, navy, sand, navy, navy, warm-white, sand, warm-white, navy, warm-white. Adjust any new slide's background if needed to prevent back-to-back matches.
- Eyebrow labels use `JetBrains Mono`, uppercase, teal, 13px.
- Slide titles use `Plus Jakarta Sans` 800 weight; italic accent words use `Instrument Serif`.
- Body copy uses `Inter`.
- All slides must be `100vw × 100vh`, `overflow: hidden`.
- `lucide-react` is already installed — import icons from it directly.

---

## Validation

After all changes, run:

```bash
pnpm --filter @workspace/april-town-hall run validate-slides
```

Expected output: `✓ Slide manifest is valid (12 slides)`

If the validator reports orphaned files or missing files, check that all renames and new file creations match exactly what is listed in the manifest `filepath` fields.
