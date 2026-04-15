import { Clock, Target, CheckCircle2 } from "lucide-react";
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
        padding: "32px 28px",
        border: "1px solid rgba(203,213,225,0.5)",
        borderLeft: `3px solid ${COLORS.teal}`,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: "rgba(0,168,142,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Icon size={28} color={COLORS.teal} />
      </div>
      <h3
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: "clamp(1.15rem, 1.6vw, 1.5rem)",
          color: COLORS.charcoal,
          margin: "0 0 10px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
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

export default function Slide09SprintRetro() {
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
        background: COLORS.sand,
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          padding: "48px clamp(48px, 6vw, 96px)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 5vw, 80px)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: FONTS.mono,
                fontSize: 16,
                fontWeight: 700,
                color: COLORS.teal,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                margin: "0 0 20px 0",
              }}
            >
              March Retro
            </p>
            <h1
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: COLORS.charcoal,
                margin: "0 0 16px 0",
              }}
            >
              Sprint Week{" "}
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontStyle: "italic",
                  color: COLORS.teal,
                }}
              >
                Improvements
              </span>
            </h1>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {[
                "We ran a full ops review of the March Sprint Week.",
                "Identified key friction areas: App reliability, founder communication, and internal coordination.",
                "We are prioritizing 3 to 5 targeted improvements for May.",
              ].map((text) => (
                <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: COLORS.teal,
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: FONTS.body,
                      fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                      lineHeight: 1.6,
                      color: "rgba(30,41,59,0.8)",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: 32,
                background: "rgba(0,168,142,0.1)",
                borderRadius: 12,
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <Clock size={24} color={COLORS.teal} />
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                  color: COLORS.charcoal,
                  fontWeight: 500,
                }}
              >
                Next Sprint Week: Last week of May.
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            <LightCard
              icon={Target}
              title="Focused Action Plan"
              description="App and scheduling improvements, founder communication clarity and sequencing, and tight internal execution planning."
            />
            <LightCard
              icon={CheckCircle2}
              title="Accountability"
              description="Every single improvement has a clear owner, a timeline, and a success condition."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
