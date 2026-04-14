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

export default function Slide12ClosingQA() {
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
      {/* Radial gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          background: `radial-gradient(ellipse at 50% 50%, rgba(0,168,142,0.27), transparent 70%)`,
        }}
      />
      <div
        style={{
          maxWidth: 800,
          width: "100%",
          margin: "0 auto",
          padding: "64px clamp(32px, 5vw, 80px)",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
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
          Moving Forward
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
          Clarity. Ownership.{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            Execution.
          </span>
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: 1.7,
            color: "rgba(30,41,59,0.8)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          We are building more structured, predictable ways of working together
          through continuous improvement across our systems.
        </p>
        <div style={{ marginTop: 48 }}>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              fontSize: 28,
              color: COLORS.teal,
              marginTop: 32,
            }}
          >
            Q&amp;A Open Floor
          </p>
        </div>
      </div>
    </div>
  );
}
