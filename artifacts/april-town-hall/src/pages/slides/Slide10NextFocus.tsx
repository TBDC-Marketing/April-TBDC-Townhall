import { Rocket, Filter, Share2, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const COLORS = {
  navy: "#0A1628",
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

function LightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "28px 24px",
        border: "1px solid rgba(203,213,225,0.5)",
        borderLeft: `3px solid ${COLORS.teal}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "rgba(0,168,142,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Icon size={22} color={COLORS.teal} />
      </div>
      <h3
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
          color: COLORS.charcoal,
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
          lineHeight: 1.6,
          color: "rgba(30,41,59,0.7)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Slide10NextFocus() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        background: COLORS.warmWhite,
      }}
    >
      {/* Subtle tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          background: `radial-gradient(ellipse at 60% 40%, ${COLORS.teal}, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          margin: "0 auto",
          padding: "56px clamp(24px, 4vw, 64px)",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 13,
            fontWeight: 700,
            color: COLORS.teal,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            margin: "0 0 16px 0",
          }}
        >
          What We're Building Toward
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COLORS.charcoal,
            margin: "0 0 40px 0",
          }}
        >
          Next 60–90 Day{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            Focus
          </span>
        </h1>

        {/* 2×2 grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            textAlign: "left",
          }}
        >
          <LightCard
            icon={Rocket}
            title="Stronger Sprint Week Execution"
            description="Deliver a stronger May Sprint Week with improved execution and internal coordination."
          />
          <LightCard
            icon={Filter}
            title="Pipeline Discipline"
            description="Tighten pipeline processes to enable earlier founder confirmation and better planning."
          />
          <LightCard
            icon={Share2}
            title="Mentor Network"
            description="Build and scale the mentor network aligned to priority verticals."
          />
          <LightCard
            icon={Megaphone}
            title="Ecosystem Storytelling"
            description="Strengthen founder and ecosystem storytelling to support brand and growth."
          />
        </div>
      </div>
    </div>
  );
}
