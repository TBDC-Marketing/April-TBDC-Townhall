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
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
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
              margin: "0 0 24px 0",
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
              margin: "32px 0 0 0",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {[
              "Everything must have one clear owner. No shared accountability.",
              "A specific timeline date must be set (not 'soon' or 'in progress').",
              "A clear, observable definition of what success looks like.",
            ].map((text) => (
              <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: COLORS.teal,
                    marginTop: 10,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
                    lineHeight: 1.7,
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
              fontSize: "clamp(1.1rem, 1.5vw, 1.35rem)",
              color: "rgba(30,41,59,0.7)",
              marginTop: 32,
              lineHeight: 1.7,
            }}
          >
            If these 3 things are not defined, the work is not ready to move
            forward.
          </p>
        </div>
      </div>
    </div>
  );
}
