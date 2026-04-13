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

export default function Slide02Workversaries() {
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
          maxWidth: 900,
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
          March &amp; April
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
          Happy{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            Workversaries!
          </span>
        </h1>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              lineHeight: 1.7,
              color: "rgba(30,41,59,0.8)",
              maxWidth: 640,
              margin: 0,
            }}
          >
            We want to take a moment to celebrate the incredible contributions
            and tenure of our team members with anniversaries over the last two
            months. Thank you for building with us.
          </p>
        </div>
      </div>
    </div>
  );
}
