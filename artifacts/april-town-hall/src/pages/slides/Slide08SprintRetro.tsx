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
          fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
          color: COLORS.charcoal,
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)",
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

export default function Slide08SprintRetro() {
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
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: "64px clamp(32px, 5vw, 80px)",
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
          {/* Left column */}
          <div>
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
              March Retro
            </p>
            <h1
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
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
                gap: 16,
              }}
            >
              <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.teal,
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                    lineHeight: 1.6,
                    color: "rgba(30,41,59,0.8)",
                  }}
                >
                  We ran a full ops review of the March Sprint Week.
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.teal,
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                    lineHeight: 1.6,
                    color: "rgba(30,41,59,0.8)",
                  }}
                >
                  Identified key friction areas: App reliability, founder
                  communication, and internal coordination.
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.teal,
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
                    lineHeight: 1.6,
                    color: "rgba(30,41,59,0.8)",
                  }}
                >
                  We are prioritizing 3 to 5 targeted improvements for May.
                </span>
              </li>
            </ul>
            <div
              style={{
                marginTop: 32,
                background: "rgba(0,168,142,0.1)",
                borderRadius: 12,
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Clock size={20} color={COLORS.teal} />
              <span
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  color: COLORS.charcoal,
                  fontWeight: 500,
                }}
              >
                Next Sprint Week: Last week of May.
              </span>
            </div>
          </div>
          {/* Right column */}
          <div style={{ display: "grid", gap: 16 }}>
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
