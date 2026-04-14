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

export default function Slide03OperatingPrinciples() {
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
              Operating Principles
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
              Ownership &amp;{" "}
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontStyle: "italic",
                  color: COLORS.teal,
                }}
              >
                Done
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
                  Everything must have one clear owner. No shared accountability.
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
                  A specific timeline date must be set (not 'soon' or 'in
                  progress').
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
                  A clear, observable definition of what success looks like.
                </span>
              </li>
            </ul>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: "rgba(30,41,59,0.7)",
                marginTop: 24,
              }}
            >
              If these 3 things are not defined, the work is not ready to move
              forward.
            </p>
          </div>
          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
              <h3
                style={{
                  fontFamily: FONTS.heading,
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  color: COLORS.charcoal,
                  margin: "0 0 8px 0",
                }}
              >
                Not Good
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
                "Website updates in progress" (Vague, shared, no deadline)
              </p>
            </div>
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
              <h3
                style={{
                  fontFamily: FONTS.heading,
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  color: COLORS.charcoal,
                  margin: "0 0 8px 0",
                }}
              >
                The Standard
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
                Owner: Dan | Timeline: April 30 | Done: New homepage live with
                updated copy, approved by Dharti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
