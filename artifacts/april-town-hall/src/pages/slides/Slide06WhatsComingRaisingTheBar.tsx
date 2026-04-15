import { Target, Users, Zap } from "lucide-react";
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
          marginBottom: 14,
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
          margin: "0 0 8px 0",
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

const LEFT_BULLETS = [
  "AI program",
  "Surge expansion and more",
  "Increased complexity and coordination across teams",
];

export default function Slide06WhatsComingRaisingTheBar() {
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
            gap: "clamp(40px, 5vw, 72px)",
            alignItems: "start",
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
              Looking Ahead
            </p>
            <h1
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: COLORS.charcoal,
                margin: "0 0 28px 0",
              }}
            >
              Raising{" "}
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontStyle: "italic",
                  color: COLORS.teal,
                }}
              >
                the Bar
              </span>
            </h1>

            <p
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                color: COLORS.charcoal,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                margin: "0 0 16px 0",
              }}
            >
              Major initiatives in planning or underway
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {LEFT_BULLETS.map((text) => (
                <li
                  key={text}
                  style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
                >
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
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <LightCard
              icon={Target}
              title="Higher Execution Standards"
              description="More cross-team dependency means less room for ambiguity on ownership and delivery."
            />
            <LightCard
              icon={Users}
              title="Cross-Team Coordination"
              description="Move faster with better coordination. Know your dependencies before they become blockers."
            />
            <LightCard
              icon={Zap}
              title="Focus on High-Impact Work"
              description="Be clear on what moves the needle and protect your time accordingly."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
