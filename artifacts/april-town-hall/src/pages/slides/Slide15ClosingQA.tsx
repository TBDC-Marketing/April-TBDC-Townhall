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

export default function Slide15ClosingQA() {
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
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          background: `radial-gradient(ellipse at 50% 50%, rgba(0,168,142,0.27), transparent 70%)`,
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "48px clamp(48px, 6vw, 96px)",
          textAlign: "center",
          position: "relative",
          zIndex: 10,
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
          Moving Forward
        </p>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COLORS.charcoal,
            margin: "0 0 20px 0",
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
            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
            lineHeight: 1.7,
            color: "rgba(30,41,59,0.8)",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          We are building more structured, predictable ways of working together
          through continuous improvement across our systems.
        </p>
        <div style={{ marginTop: 56 }}>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: COLORS.teal,
              margin: 0,
            }}
          >
            Q&amp;A Open Floor
          </p>
        </div>
      </div>
    </div>
  );
}
