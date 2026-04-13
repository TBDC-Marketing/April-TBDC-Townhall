```jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Menu,
  X,
  Target,
  Users,
  CheckCircle2,
  ListTodo,
  Star,
  Clock,
  BookOpen,
  DollarSign,
  MapPin,
  Layers,
  Lightbulb,
  FileText
} from "lucide-react";

// ─────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────
const COLORS = {
  navy: "#0A1628",
  navyLight: "#0f1f38",
  teal: "#00A88E",
  warmWhite: "#FAF8F5",
  sand: "#F0ECE3",
  charcoal: "#1E293B",
};

const FONTS = {
  heading: "'Plus Jakarta Sans', sans-serif",
  serif: "'Instrument Serif', serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

// ─────────────────────────────────────────────
// NOISE OVERLAY
// ─────────────────────────────────────────────
function NoiseOverlay() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none", opacity: 0.04 }}>
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROGRESS BAR
// ─────────────────────────────────────────────
function ProgressBar({ current, total }) {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: 2, zIndex: 100 }}>
      <div style={{ height: "100%", background: COLORS.teal, transition: "width 0.3s ease-out", width: `${((current + 1) / total) * 100}%` }} />
    </div>
  );
}

// ─────────────────────────────────────────────
// TABLE OF CONTENTS OVERLAY
// ─────────────────────────────────────────────
function TableOfContents({ slides, current, onSelect, open, onClose }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 80, display: "flex" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(10,22,40,0.85)", backdropFilter: "blur(8px)" }} />
      <div style={{ position: "relative", zIndex: 81, width: 420, maxWidth: "90vw", height: "100vh", background: COLORS.navy, borderRight: "1px solid rgba(255,255,255,0.1)", overflowY: "auto", padding: "48px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: 12, fontWeight: 700, color: COLORS.teal, textTransform: "uppercase", letterSpacing: "0.1em" }}>Table of Contents</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}><X size={20} /></button>
        </div>
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => { onSelect(i); onClose(); }}
            style={{
              display: "flex", alignItems: "center", gap: 16, width: "100%", padding: "14px 16px", borderRadius: 12, border: "none",
              background: i === current ? "rgba(0,168,142,0.15)" : "transparent", cursor: "pointer", textAlign: "left", transition: "background 0.2s", marginBottom: 4
            }}
          >
            <span style={{ fontFamily: FONTS.mono, fontSize: 12, fontWeight: 700, color: i === current ? COLORS.teal : "rgba(255,255,255,0.3)", minWidth: 28 }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: FONTS.body, fontSize: 14, fontWeight: 500, color: i === current ? "#fff" : "rgba(255,255,255,0.6)" }}>
              {slide.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────
function Eyebrow({ children }) {
  return (
    <p style={{ fontFamily: FONTS.mono, fontSize: 13, fontWeight: 700, color: COLORS.teal, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 20 }}>
      {children}
    </p>
  );
}

function SlideTitle({ children, dark = true }) {
  return (
    <h1 style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: dark ? "#fff" : COLORS.charcoal, margin: 0, marginBottom: 16 }}>
      {children}
    </h1>
  );
}

function AccentText({ children }) {
  return <span style={{ fontFamily: FONTS.serif, fontStyle: "italic", color: COLORS.teal }}>{children}</span>;
}

function BodyText({ children, dark = true }) {
  return (
    <p style={{ fontFamily: FONTS.body, fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.7, color: dark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.8)", maxWidth: 640, margin: 0 }}>
      {children}
    </p>
  );
}

function TealBullet({ items, dark = true }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: COLORS.teal, marginTop: 8, flexShrink: 0 }} />
          <span style={{ fontFamily: FONTS.body, fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", lineHeight: 1.6, color: dark ? "rgba(255,255,255,0.7)" : "rgba(30,41,59,0.8)" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DarkCard({ icon: Icon, title, description, accent = false }) {
  return (
    <div style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderLeft: accent ? `3px solid ${COLORS.teal}` : "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 24px" }}>
      {Icon && (
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,168,142,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <Icon size={22} color={COLORS.teal} />
        </div>
      )}
      <h3 style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.25rem)", color: "#fff", margin: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontFamily: FONTS.body, fontSize: "clamp(0.85rem, 1.1vw, 1rem)", lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0 }}>{description}</p>
    </div>
  );
}

function LightCard({ icon: Icon, title, description }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", border: "1px solid rgba(203,213,225,0.5)", borderLeft: `3px solid ${COLORS.teal}`, position: "relative", overflow: "hidden" }}>
      {Icon && (
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,168,142,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <Icon size={22} color={COLORS.teal} />
        </div>
      )}
      <h3 style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: COLORS.charcoal, margin: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ fontFamily: FONTS.body, fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", lineHeight: 1.6, color: "rgba(30,41,59,0.7)", margin: 0 }}>{description}</p>
    </div>
  );
}

function Slide({ bg = COLORS.navy, children }) {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", position: "relative", background: bg }}>
      {children}
    </div>
  );
}

function SlideContent({ children, center = false, maxWidth = 1152 }) {
  return (
    <div style={{ maxWidth, width: "100%", margin: "0 auto", padding: "64px clamp(32px, 5vw, 80px)", textAlign: center ? "center" : "left", position: "relative", zIndex: 10 }}>
      {children}
    </div>
  );
}

function BlurCircle({ top = "50%", left = "50%", size = 600, opacity = 0.03 }) {
  return (
    <div style={{ position: "absolute", top, left, transform: "translate(-50%, -50%)", width: size, height: size, borderRadius: "50%", background: `rgba(0,168,142,${opacity})`, filter: "blur(80px)", pointerEvents: "none" }} />
  );
}

// ─────────────────────────────────────────────
// INDIVIDUAL SLIDES
// ─────────────────────────────────────────────

function Slide01() {
  return (
    <Slide bg={COLORS.navy}>
      <BlurCircle top="40%" left="60%" />
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, background: `linear-gradient(180deg, transparent 40%, ${COLORS.teal}22 100%)` }} />
      <SlideContent center maxWidth={900}>
        <Eyebrow>April Town Hall</Eyebrow>
        <SlideTitle>How we <AccentText>operate & execute</AccentText></SlideTitle>
        <BodyText>Sharing key updates across the organization, reinforcing how we work as a team, and highlighting where we are improving systems and processes.</BodyText>
      </SlideContent>
    </Slide>
  );
}

function Slide02() {
  return (
    <Slide bg={COLORS.warmWhite}>
      <SlideContent center maxWidth={900}>
        <Eyebrow>March & April</Eyebrow>
        <SlideTitle dark={false}>Happy <AccentText>Workversaries!</AccentText></SlideTitle>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
          <BodyText dark={false}>We want to take a moment to celebrate the incredible contributions and tenure of our team members with anniversaries over the last two months. Thank you for building with us.</BodyText>
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide03() {
  return (
    <Slide bg={COLORS.navy}>
      <BlurCircle top="50%" left="50%" size={500} />
      <SlideContent maxWidth={1100}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow>Led by Olayinka</Eyebrow>
          <SlideTitle>Budgeting <AccentText>Best Practices</AccentText></SlideTitle>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          <DarkCard icon={DollarSign} title="Why This Matters" description="Enables better planning, faster decisions, and team accountability. Good looks like clear ownership and visibility into spend vs plan." accent />
          <DarkCard icon={Layers} title="The Process" description="Standardizing how budgets are created, the required approval flow, and setting up a clear tracking and reporting cadence." accent />
          <DarkCard icon={Clock} title="Timelines" description="Adhering to strict timelines for when budgets need to be submitted, alongside monthly and quarterly checkpoints." accent />
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide04() {
  return (
    <Slide bg={COLORS.sand}>
      <SlideContent maxWidth={1100}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
          <div>
            <Eyebrow>Operating Principles</Eyebrow>
            <SlideTitle dark={false}>Ownership & <AccentText>Done</AccentText></SlideTitle>
            <div style={{ marginTop: 24 }}>
              <TealBullet
                dark={false}
                items={[
                  "Everything must have one clear owner. No shared accountability.",
                  "A specific timeline date must be set (not 'soon' or 'in progress').",
                  "A clear, observable definition of what success looks like."
                ]}
              />
            </div>
            <p style={{ fontFamily: FONTS.body, fontSize: 14, color: "rgba(30,41,59,0.7)", marginTop: 24 }}>
              If these 3 things are not defined, the work is not ready to move forward.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <LightCard title="❌ Not Good" description="“Website updates in progress” (Vague, shared, no deadline)" />
            <LightCard title="✅ The Standard" description="Owner: Dan | Timeline: April 30 | Done: New homepage live with updated copy, approved by Dharti." />
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide05() {
  return (
    <Slide bg={COLORS.navy}>
      <BlurCircle top="60%" left="30%" />
      <SlideContent maxWidth={1100}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow>Facilities Update</Eyebrow>
          <SlideTitle>Space Audit & <AccentText>Optimization</AccentText></SlideTitle>
          <BodyText>We conducted a full review of space usage to ensure it is being used actively and intentionally to maintain a strong, engaged founder community.</BodyText>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 800, margin: "0 auto" }}>
          <DarkCard icon={MapPin} title="Tenant Transitions" description="Some tenants may be thoughtfully transitioned out if they are not actively utilizing the space." accent />
          <DarkCard icon={Users} title="New Additions" description="New companies will be brought into the physical space where there is community demand." accent />
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide06() {
  return (
    <Slide bg={COLORS.warmWhite}>
      <SlideContent maxWidth={1100}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 5vw, 80px)", alignItems: "center" }}>
          <div>
            <Eyebrow>March Retro</Eyebrow>
            <SlideTitle dark={false}>Sprint Week <AccentText>Improvements</AccentText></SlideTitle>
            <div style={{ marginTop: 24 }}>
              <TealBullet
                dark={false}
                items={[
                  "We ran a full ops review of the March Sprint Week.",
                  "Identified key friction areas: App reliability, founder communication, and internal coordination.",
                  "We are prioritizing 3 to 5 targeted improvements for May.",
                ]}
              />
            </div>
            <div style={{ marginTop: 32, background: "rgba(0,168,142,0.1)", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
              <Clock size={20} color={COLORS.teal} />
              <span style={{ fontFamily: FONTS.body, fontSize: 14, color: COLORS.charcoal, fontWeight: 500 }}>Next Sprint Week: Last week of May.</span>
            </div>
          </div>
          <div style={{ display: "grid", gap: 16 }}>
            <LightCard icon={Target} title="Focused Action Plan" description="App and scheduling improvements, founder communication clarity and sequencing, and tight internal execution planning." />
            <LightCard icon={CheckCircle2} title="Accountability" description="Every single improvement has a clear owner, a timeline, and a success condition." />
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide07() {
  return (
    <Slide bg={COLORS.navy}>
      <BlurCircle top="30%" left="70%" />
      <SlideContent center maxWidth={900}>
        <Eyebrow>Operations</Eyebrow>
        <SlideTitle>Scout Report <AccentText>Process Updates</AccentText></SlideTitle>
        <BodyText>We reviewed how Scout reports are created and delivered to founders. The focus is on faster turnarounds, clear review stages, and more actionable outputs.</BodyText>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 48, flexWrap: "wrap" }}>
          {[
            { icon: Clock, label: "Defined Windows", sub: "Clear review stages" },
            { icon: Target, label: "Clear Ownership", sub: "Status updates tracked" },
            { icon: FileText, label: "Streamlined Flow", sub: "From draft to delivery" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px 32px", textAlign: "center", minWidth: 180 }}>
              <Icon size={28} color={COLORS.teal} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: 18, color: "#fff" }}>{label}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{sub}</div>
            </div>
          ))}
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide08() {
  return (
    <Slide bg={COLORS.sand}>
      <SlideContent center maxWidth={800}>
        <Eyebrow>Community</Eyebrow>
        <SlideTitle dark={false}>Lunch & <AccentText>Learn Series</AccentText></SlideTitle>
        <p style={{ fontFamily: FONTS.body, fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "rgba(30,41,59,0.7)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
          We want to create more shared learning across the team. Our initial session will focus on AI and automation tools being used in workflows.
        </p>
        <div style={{ marginTop: 32, textAlign: "left" }}>
             <LightCard icon={Lightbulb} title="Open Call for Participation" description="We are looking for volunteers to lead sessions, share unique use cases, and suggest new topics for the team to cover." />
        </div>
      </SlideContent>
    </Slide>
  );
}

function Slide09() {
  return (
    <Slide bg={COLORS.navy}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, background: `radial-gradient(ellipse at 50% 50%, ${COLORS.teal}44, transparent 70%)` }} />
      <SlideContent center maxWidth={800}>
        <Eyebrow>Moving Forward</Eyebrow>
        <SlideTitle>Clarity. Ownership. <AccentText>Execution.</AccentText></SlideTitle>
        <BodyText>We are building more structured, predictable ways of working together through continuous improvement across our systems.</BodyText>
        <div style={{ marginTop: 48 }}>
          <p style={{ fontFamily: FONTS.serif, fontStyle: "italic", fontSize: 28, color: COLORS.teal, marginTop: 32 }}>
            Q&A Open Floor
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}

// ─────────────────────────────────────────────
// SLIDE REGISTRY & APP WRAPPER
// ─────────────────────────────────────────────
const SLIDES = [
  { component: Slide01, title: "Context & Purpose" },
  { component: Slide02, title: "Workversaries" },
  { component: Slide03, title: "Budgeting Process" },
  { component: Slide04, title: "Operating Principles" },
  { component: Slide05, title: "Space Audit" },
  { component: Slide06, title: "Sprint Week Retro" },
  { component: Slide07, title: "Scout Reports" },
  { component: Slide08, title: "Lunch & Learn" },
  { component: Slide09, title: "Closing Q&A" },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [tocOpen, setTocOpen] = useState(false);
  const hideTimeout = useRef(null);

  const totalSlides = SLIDES.length;

  const goToSlide = useCallback((n) => {
    setCurrentSlide(Math.max(0, Math.min(n, totalSlides - 1)));
  }, [totalSlides]);

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (tocOpen) {
        if (e.key === "Escape") setTocOpen(false);
        return;
      }
      switch (e.key) {
        case "ArrowRight": case " ": case "Enter": e.preventDefault(); next(); break;
        case "ArrowLeft": case "Backspace": e.preventDefault(); prev(); break;
        case "f": toggleFullscreen(); break;
        case "Escape": if (document.fullscreenElement) { document.exitFullscreen(); setIsFullscreen(false); } break;
        case "Home": goToSlide(0); break;
        case "End": goToSlide(totalSlides - 1); break;
        case "t": setTocOpen((v) => !v); break;
        default: if (e.key >= "1" && e.key <= "9") goToSlide(parseInt(e.key) - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, toggleFullscreen, goToSlide, totalSlides, tocOpen]);

  useEffect(() => {
    const showControls = () => {
      setControlsVisible(true);
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
    };
    window.addEventListener("mousemove", showControls);
    hideTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
    return () => {
      window.removeEventListener("mousemove", showControls);
      clearTimeout(hideTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const CurrentSlideComponent = SLIDES[currentSlide].component;

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: COLORS.navy, position: "relative" }}>
      <NoiseOverlay />
      <ProgressBar current={currentSlide} total={totalSlides} />

      <button
        onClick={() => setTocOpen(true)}
        aria-label="Open table of contents"
        style={{ position: "fixed", top: 16, left: 16, zIndex: 60, background: "rgba(10,22,40,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "10px 14px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s", opacity: controlsVisible ? 1 : 0 }}
      >
        <Menu size={18} color="rgba(255,255,255,0.6)" />
        <span style={{ fontFamily: FONTS.mono, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Slides</span>
      </button>

      <TableOfContents slides={SLIDES} current={currentSlide} onSelect={goToSlide} open={tocOpen} onClose={() => setTocOpen(false)} />

      <div key={currentSlide} style={{ animation: "slideIn 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)", height: "100%" }}>
        <CurrentSlideComponent />
      </div>

      <div
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "rgba(10,22,40,0.9)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)", opacity: controlsVisible ? 1 : 0, transform: controlsVisible ? "translateY(0)" : "translateY(100%)"
        }}
      >
        <span style={{ fontFamily: FONTS.mono, fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
          {String(currentSlide + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button onClick={prev} style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 8 }}><ChevronLeft size={24} /></button>
          <button onClick={next} style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 8 }}><ChevronRight size={24} /></button>
        </div>
        <button onClick={toggleFullscreen} style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
        </button>
      </div>

      <style>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus-visible { outline: 2px solid ${COLORS.teal}; outline-offset: 2px; }
      `}</style>
    </div>
  );
}