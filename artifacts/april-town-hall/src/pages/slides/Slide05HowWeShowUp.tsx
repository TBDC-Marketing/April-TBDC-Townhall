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

const BULLETS = [
  "Take Ownership",
  "Bring solutions, not just problems",
  "Think ahead, not just what's in front of you",
  "Be proactive, not reactive",
  "Focus on what matters most",
  "Look for ways to improve how we operate",
];

export default function Slide05HowWeShowUp() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        background: COLORS.navy,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(0,168,142,0.04)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px clamp(48px, 6vw, 96px) 0",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            width: "100%",
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
              Expectations
            </p>
            <h1
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 24px 0",
              }}
            >
              How We Show Up{" "}
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontStyle: "italic",
                  color: COLORS.teal,
                }}
              >
                as a Team
              </span>
            </h1>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}
            >
              We are not just executing tasks — we are thinking, improving, and
              building.
            </p>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {BULLETS.map((text) => (
              <li
                key={text}
                style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
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
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          background: "rgba(0,168,142,0.12)",
          borderTop: "1px solid rgba(0,168,142,0.25)",
          padding: "20px clamp(48px, 6vw, 96px)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            margin: "0 auto",
            maxWidth: 1000,
          }}
        >
          <span style={{ color: COLORS.teal, fontWeight: 600 }}>
            Rigor in execution. Strength in thinking.
          </span>{" "}
          If something is unclear — clarify it. If something is broken — raise
          it. If you see an opportunity — act on it.
        </p>
      </div>
    </div>
  );
}
