# Replit Agent Instructions: April Town Hall Slide Deck — Update Round 2

## Context

This document assumes the changes from **Update Round 1** have already been applied. The deck currently has **12 slides** in this order:

1. Context & Purpose
2. Workversaries
3. Operating Principles
4. How We Show Up as a Team
5. Raising the Bar
6. Open Office Hours with Ange
7. Space Audit
8. Sprint Week Retro
9. Scout Reports
10. Next 60–90 Day Focus
11. Lunch & Learn
12. Closing Q&A

After this update, the deck will have **16 slides**.

---

## Summary of All Changes

| # | Action | Detail |
|---|--------|--------|
| 1 | **GLOBAL** | Increase content size across all slides for widescreen TV legibility |
| 2 | **UPDATE** | `Slide02Workversaries.tsx` — add Cia Prior (4 years) as a sixth team member |
| 3 | **ADD** | New slide between positions 2 and 3: "Where We Are Headed" |
| 4 | **ADD** | New slide between positions 9 and 10: "Building a Trusted Data Foundation" |
| 5 | **ADD** | New slide between position 11 (Lunch & Learn) and position 12 (Closing Q&A): Brand Teaser placeholder |
| 6 | **RENUMBER** | All slides and manifest updated to reflect new 16-slide order |

---

## Final Slide Order (16 slides)

1. Context & Purpose
2. Workversaries *(updated — 6 people)*
3. Where We Are Headed *(new)*
4. Operating Principles *(renumbered)*
5. How We Show Up as a Team *(renumbered)*
6. Raising the Bar *(renumbered)*
7. Open Office Hours with Ange *(renumbered)*
8. Space Audit *(renumbered)*
9. Sprint Week Retro *(renumbered)*
10. Scout Reports *(renumbered)*
11. Building a Trusted Data Foundation *(new)*
12. Next 60–90 Day Focus *(renumbered)*
13. Lunch & Learn *(renumbered)*
14. Brand Teaser *(new)*
15. Closing Q&A *(renumbered)*

> **Note:** That is 15 unique slides. The manifest must have positions 1–15 contiguously. Double-check the count after all steps.

---

## Step 1 — Global: Increase content size across all slides

The current slides render content that is too small for a large widescreen TV presentation. Apply the following changes **to every existing slide file**:

### 1a — Increase padding and max-width

In every slide that has a `SlideContent` wrapper div (the inner container with `padding` and `maxWidth`), make these changes:

- Change `maxWidth` from `900` → `1280` on centred single-column slides
- Change `maxWidth` from `1100` → `1400` on two-column and card-grid slides
- Change `padding` from `"64px clamp(32px, 5vw, 80px)"` → `"48px clamp(48px, 6vw, 96px)"`

### 1b — Increase slide title font size

Every slide has an `<h1>` with:
```js
fontSize: "clamp(2rem, 5vw, 3.75rem)"
```

Change this to:
```js
fontSize: "clamp(2.8rem, 5.5vw, 5rem)"
```

### 1c — Increase body text font size

Every slide has body `<p>` elements with:
```js
fontSize: "clamp(1rem, 1.5vw, 1.25rem)"
```

Change this to:
```js
fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)"
```

### 1d — Increase eyebrow font size

Every slide has an eyebrow `<p>` with `fontSize: 13`. Change to `fontSize: 16`.

### 1e — Increase card body text

In `DarkCard` and `LightCard` components within each slide file, the description `<p>` uses:
```js
fontSize: "clamp(0.85rem, 1.1vw, 1rem)"
```
Change to:
```js
fontSize: "clamp(1rem, 1.3vw, 1.25rem)"
```

And card titles currently use:
```js
fontSize: "clamp(1rem, 1.5vw, 1.25rem)"
```
Change to:
```js
fontSize: "clamp(1.15rem, 1.6vw, 1.5rem)"
```

### 1f — Increase card icon size

In `DarkCard` and `LightCard` components within each slide, the icon container div is `width: 44, height: 44`. Change to `width: 56, height: 56`. The `<Icon size={22}>` call should become `<Icon size={28}>`.

### 1g — Increase bullet list text size

In `Slide03OperatingPrinciples` and any other slide using inline bullet `<li>` elements, the bullet text `<span>` uses:
```js
fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)"
```
Change to:
```js
fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)"
```

### 1h — Increase Workversaries card content

In `Slide02Workversaries.tsx`, increase the year number display from `fontSize: 48` (or equivalent large px) to `fontSize: 72`. Increase the name label from ~`fontSize: 16` to `fontSize: 20`. Increase the "YEARS" / "YEAR" label from `fontSize: 12` to `fontSize: 15`.

### 1i — Increase Slide07ScoutReports stat blocks

The three stat/icon blocks in `Slide09ScoutReports.tsx` (Defined Windows, Clear Ownership, Streamlined Flow) have their label at `fontSize: 18`. Change to `fontSize: 22`. The sub-label at `fontSize: 14` should become `fontSize: 17`.

---

## Step 2 — Update `Slide02Workversaries.tsx`: Add Cia Prior

Add a sixth team member card to the existing five:

| Name | Years | Initials |
|------|-------|----------|
| Cia Prior | 4 years | CP |

**Photo:** The file `cia-prior.jpg` (or similar) will be added to the project's `public/` or `attached_assets/` folder. Structure the card the same way as the existing five — using the `imageSrc` optional prop if it was implemented in Round 1, or an `<img>` tag that references `/cia-prior.jpg`. Add a comment:
```tsx
{/* Photo: /cia-prior.jpg — will be provided and placed in public/ */}
```

**Layout update:** With 6 people, change the layout from "3 top + 2 bottom centred" to a **3×2 grid** (3 columns, 2 rows), evenly distributed. This is cleaner and fills the slide better at the new larger sizes.

---

## Step 3 — Rename existing slides (positions 3–12) to make room for new slides

Before creating new slides, rename the following files to their new numbers. Do not change any content inside them — rename only.

| Current filename | New filename |
|---|---|
| `Slide03OperatingPrinciples.tsx` | `Slide04OperatingPrinciples.tsx` |
| `Slide04HowWeShowUp.tsx` | `Slide05HowWeShowUp.tsx` |
| `Slide05WhatsComingRaisingTheBar.tsx` | `Slide06WhatsComingRaisingTheBar.tsx` |
| `Slide06OpenOfficeHours.tsx` | `Slide07OpenOfficeHours.tsx` |
| `Slide07SpaceAudit.tsx` | `Slide08SpaceAudit.tsx` |
| `Slide08SprintRetro.tsx` | `Slide09SprintRetro.tsx` |
| `Slide09ScoutReports.tsx` | `Slide10ScoutReports.tsx` |
| `Slide10NextFocus.tsx` | `Slide12NextFocus.tsx` |
| `Slide11LunchAndLearn.tsx` | `Slide13LunchAndLearn.tsx` |
| `Slide12ClosingQA.tsx` | `Slide15ClosingQA.tsx` |

---

## Step 4 — Create `Slide03WhereWeAreHeaded.tsx`

**Position:** 3 (between Workversaries and Operating Principles)  
**Background:** Sand (`#F0ECE3`)  
**Layout:** Centered, single column, max-width 1000px

**Eyebrow:** `Our Direction`  
**Title:** `Where We Are` *(with "Headed" in italic teal Instrument Serif)*

Below the title, display the five focus areas as **large bold statement cards** arranged in a single column or a generous 2–3 column grid. Each item should feel like a declaration, not a bullet point — large text, teal accent, minimal decoration.

Use a grid of **5 cards** (or a column of 5 stacked items) where each card has:
- A teal left border (3px solid)
- White background
- Large bold label text (~`clamp(1.3rem, 2vw, 1.8rem)`, `Plus Jakarta Sans`, weight 700)
- A teal dot or short teal horizontal rule as a visual accent

**The five items:**
1. Stronger execution
2. Clearer ownership
3. Better systems
4. Higher standards
5. More collaboration

**Layout recommendation:** Two columns — column 1 has items 1, 2, 3; column 2 has items 4, 5 centred vertically. Or a single 5-item vertical stack with generous spacing — whichever fills the slide better at the new larger sizes. Avoid making this feel like a plain bullet list; give each item visual weight.

---

## Step 5 — Create `Slide11DataFoundation.tsx`

**Position:** 11 (between Scout Reports and Next 60–90 Day Focus)  
**Background:** Navy (`#0A1628`)  
**Layout:** Two-column — left column has title and intro context, right column has a vertical list of progress items with status indicators.

**Eyebrow:** `Data & Systems`  
**Title:** `Building a Trusted` *(with "Data Foundation" in italic teal Instrument Serif)*

**Left column intro text:**
> We are establishing the governance and infrastructure to make our data reliable, owned, and actionable across the organization.

**Right column — 5 vertical progress items** (use a styled list, not DarkCard components — these are progress/status items, not category cards). Each item has:
- A teal checkmark icon (`CheckCircle2` from lucide-react) or a teal filled circle bullet
- Bold item label in white
- Supporting detail text in `rgba(255,255,255,0.65)` beneath the label

**The five items:**

Item 1  
**Label:** Data Authority Charter  
**Detail:** Drafted to define ownership, accountability, and decision rights across the org.

Item 2  
**Label:** Zoho as Single Source of Truth  
**Detail:** Confirmed as the core system of record for organizational data.

Item 3  
**Label:** Sync Exceptions & Field Ownership  
**Detail:** Finalizing limited 2-way sync exceptions and field-level ownership over the next few weeks.

Item 4  
**Label:** Field Mapping & Integration Planning  
**Detail:** Next step — begins once governance decisions are complete.

Item 5  
**Label:** The Goal  
**Detail:** Cleaner reporting, stronger workflows, and greater confidence in our data.

**Visual treatment for Item 5:** Give it a slightly different styling — perhaps a teal-tinted background strip or a horizontal rule above it — to signal it as the outcome/goal rather than a progress step.

---

## Step 6 — Create `Slide14BrandTeaser.tsx`

**Position:** 14 (between Lunch & Learn and Closing Q&A)  
**Background:** Navy (`#0A1628`)  
**Layout:** Full-bleed image with a small uniform margin

**Purpose:** Placeholder slide to tease new TBDC branding. An image file will be provided and placed in the project's `public/` folder.

**Implementation:**

```tsx
export default function Slide14BrandTeaser() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A1628",
        overflow: "hidden",
      }}
    >
      {/* 
        Brand teaser image — full slide with small margin.
        Place the image file at public/brand-teaser.jpg (or .png)
        and update the src below once provided.
      */}
      <img
        src="/brand-teaser.jpg"
        alt="Coming soon — new TBDC brand"
        style={{
          width: "calc(100% - 48px)",
          height: "calc(100% - 48px)",
          objectFit: "contain",
          borderRadius: 8,
        }}
      />
    </div>
  );
}
```

If `brand-teaser.jpg` does not yet exist in `public/`, render a placeholder div instead so the slide doesn't break:

```tsx
// Fallback placeholder — replace with <img> once brand-teaser.jpg is in public/
<div
  style={{
    width: "calc(100% - 48px)",
    height: "calc(100% - 48px)",
    borderRadius: 8,
    border: "2px dashed rgba(0,168,142,0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  }}
>
  <p style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 14,
    color: "rgba(0,168,142,0.7)",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  }}>
    Coming Soon
  </p>
  <p style={{
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(2rem, 4vw, 3.5rem)",
    color: "rgba(255,255,255,0.15)",
    textAlign: "center",
  }}>
    New Brand
  </p>
</div>
```

Use a conditional: if the image loads successfully, show it; otherwise show the placeholder. The simplest approach is to use `onError` on the `<img>` tag to toggle a state variable.

---

## Step 7 — Replace `slides-manifest.json` entirely

Replace the full contents of `artifacts/april-town-hall/src/data/slides-manifest.json` with:

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
    "description": "Celebrating March & April team member anniversaries — six team members with photos and tenure.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0003-0000-0000-000000000003",
    "position": 3,
    "filepath": "src/pages/slides/Slide03WhereWeAreHeaded.tsx",
    "title": "Where We Are Headed",
    "description": "Five strategic focus areas: stronger execution, clearer ownership, better systems, higher standards, more collaboration.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0004-0000-0000-000000000004",
    "position": 4,
    "filepath": "src/pages/slides/Slide04OperatingPrinciples.tsx",
    "title": "Operating Principles",
    "description": "Ownership and Done — the standard for all work with clear owner, timeline, and success definition.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0005-0000-0000-000000000005",
    "position": 5,
    "filepath": "src/pages/slides/Slide05HowWeShowUp.tsx",
    "title": "How We Show Up as a Team",
    "description": "Expectations for how every team member thinks, acts, and contributes beyond their immediate tasks.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0006-0000-0000-000000000006",
    "position": 6,
    "filepath": "src/pages/slides/Slide06WhatsComingRaisingTheBar.tsx",
    "title": "Raising the Bar",
    "description": "Major initiatives underway and what higher expectations mean for cross-team execution.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0007-0000-0000-000000000007",
    "position": 7,
    "filepath": "src/pages/slides/Slide07OpenOfficeHours.tsx",
    "title": "Open Office Hours with Ange",
    "description": "Wednesday open office hours with Angela — share ideas, raise blockers, get input.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0008-0000-0000-000000000008",
    "position": 8,
    "filepath": "src/pages/slides/Slide08SpaceAudit.tsx",
    "title": "Space Audit",
    "description": "Facilities update: space audit and optimization including tenant transitions and new additions.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0009-0000-0000-000000000009",
    "position": 9,
    "filepath": "src/pages/slides/Slide09SprintRetro.tsx",
    "title": "Sprint Week Retro",
    "description": "March Sprint Week retrospective with focused action plan and accountability improvements.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0010-0000-0000-000000000010",
    "position": 10,
    "filepath": "src/pages/slides/Slide10ScoutReports.tsx",
    "title": "Scout Reports",
    "description": "Scout Report process updates: defined windows, clear ownership, and streamlined flow.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0011-0000-0000-000000000011",
    "position": 11,
    "filepath": "src/pages/slides/Slide11DataFoundation.tsx",
    "title": "Building a Trusted Data Foundation",
    "description": "Data governance progress: Data Authority Charter, Zoho as single source of truth, field mapping, and integration planning.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0012-0000-0000-000000000012",
    "position": 12,
    "filepath": "src/pages/slides/Slide12NextFocus.tsx",
    "title": "Next 60–90 Day Focus",
    "description": "Four priority focus areas for the next 60 to 90 days across Sprint Week, pipeline, mentors, and storytelling.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0013-0000-0000-000000000013",
    "position": 13,
    "filepath": "src/pages/slides/Slide13LunchAndLearn.tsx",
    "title": "Lunch & Learn",
    "description": "Community Lunch & Learn Series with open call for participation.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0014-0000-0000-000000000014",
    "position": 14,
    "filepath": "src/pages/slides/Slide14BrandTeaser.tsx",
    "title": "Brand Teaser",
    "description": "Full-slide image placeholder teasing the new TBDC brand identity.",
    "speakerNotes": ""
  },
  {
    "id": "a1b2c3d4-0015-0000-0000-000000000015",
    "position": 15,
    "filepath": "src/pages/slides/Slide15ClosingQA.tsx",
    "title": "Closing Q&A",
    "description": "Closing slide: Clarity. Ownership. Execution. Q&A open floor.",
    "speakerNotes": ""
  }
]
```

---

## Step 8 — Update `replit.md`

Change `12 slides` to `15 slides` and update the slide inventory list to match the final order above.

---

## Background Colour Sequence (15 slides)

No two consecutive slides should share the same background. Apply this sequence:

| Position | Slide | Background |
|---|---|---|
| 1 | Context & Purpose | Navy |
| 2 | Workversaries | Warm White |
| 3 | Where We Are Headed | Sand |
| 4 | Operating Principles | Warm White |
| 5 | How We Show Up as a Team | Navy |
| 6 | Raising the Bar | Sand |
| 7 | Open Office Hours with Ange | Navy |
| 8 | Space Audit | Warm White |
| 9 | Sprint Week Retro | Sand |
| 10 | Scout Reports | Navy |
| 11 | Building a Trusted Data Foundation | Sand |
| 12 | Next 60–90 Day Focus | Warm White |
| 13 | Lunch & Learn | Navy |
| 14 | Brand Teaser | Navy* |
| 15 | Closing Q&A | Warm White |

*The Brand Teaser slide is always navy regardless of sequence — the image is displayed over it.

If any existing slide currently uses a background that conflicts with this sequence (i.e. the same colour as the slide immediately before or after it), update that slide's background `style` to match the colour specified in this table.

---

## Design Constraints (Unchanged from Round 1)

- All COLORS and FONTS constants must remain the same in every file.
- `lucide-react` icons are imported directly — no new icon libraries.
- All slides are `100vw × 100vh`, `overflow: hidden`.
- New slides follow the same structural patterns as existing slides (eyebrow → title → content).
- The `clamp()` sizing pattern must be used on all font sizes so the deck still works if opened in a browser window rather than fullscreen.

---

## Validation

After all changes, run:

```bash
pnpm --filter @workspace/april-town-hall run validate-slides
```

Expected output: `✓ Slide manifest is valid (15 slides)`

Confirm there are no orphaned `.tsx` files in `src/pages/slides/` that are not listed in the manifest, and no manifest entries pointing to files that do not exist.
