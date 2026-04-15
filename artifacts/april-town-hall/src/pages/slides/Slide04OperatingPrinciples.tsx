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

export default function Slide04OperatingPrinciples() {
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
              Operating Principles
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
                gap: 18,
              }}
            >
              {[
                "Everything must have one clear owner. No shared accountability.",
                "A specific timeline date must be set (not 'soon' or 'in progress').",
                "A clear, observable definition of what success looks like.",
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
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                color: "rgba(30,41,59,0.7)",
                marginTop: 24,
              }}
            >
              If these 3 things are not defined, the work is not ready to move
              forward.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Not Good", body: '"Website updates in progress" (Vague, shared, no deadline)' },
              { title: "The Standard", body: "Owner: Dan | Timeline: April 30 | Done: New homepage live with updated copy, approved by Dharti." },
            ].map(({ title, body }) => (
              <div
                key={title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "32px 28px",
                  border: "1px solid rgba(203,213,225,0.5)",
                  borderLeft: `3px solid ${COLORS.teal}`,
                }}
              >
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
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
