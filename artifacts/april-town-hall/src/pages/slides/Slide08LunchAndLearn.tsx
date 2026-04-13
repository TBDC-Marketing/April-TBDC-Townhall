import { Lightbulb } from "lucide-react";

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

export default function Slide08LunchAndLearn() {
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
        background: COLORS.navy,
      }}
    >
      {/* Blur circle */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(0,168,142,0.03)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          margin: "0 auto",
          padding: "64px clamp(32px, 5vw, 80px)",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 13,
            fontWeight: 700,
            color: COLORS.teal,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            margin: "0 0 20px 0",
          }}
        >
          Community
        </p>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: "0 0 16px 0",
          }}
        >
          Lunch &amp;{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            Learn Series
          </span>
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          We want to create more shared learning across the team. Our initial
          session will focus on AI and automation tools being used in workflows.
        </p>
        <div style={{ marginTop: 32, textAlign: "left" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderLeft: `3px solid ${COLORS.teal}`,
              borderRadius: 16,
              padding: "28px 24px",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(0,168,142,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}
            >
              <Lightbulb size={22} color={COLORS.teal} />
            </div>
            <h3
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                color: "#fff",
                margin: "0 0 8px 0",
              }}
            >
              Open Call for Participation
            </h3>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.6)",
                margin: 0,
              }}
            >
              We are looking for volunteers to lead sessions, share unique use
              cases, and suggest new topics for the team to cover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
