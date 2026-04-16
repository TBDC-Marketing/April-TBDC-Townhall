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

export default function Slide14BrandTeaser() {
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
        background: COLORS.navy,
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "rgba(0,168,142,0.05)",
          filter: "blur(120px)",
          pointerEvents: "none",
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
            margin: "0 0 32px 0",
          }}
        >
          Coming Soon
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
          A New{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            TBDC Brand
          </span>
        </h1>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 760,
            margin: "0 auto 64px",
          }}
        >
          We are refreshing how TBDC shows up in the world. A new identity that
          reflects who we are and where we are headed.
        </p>

        <div
          style={{
            display: "inline-block",
            position: "relative",
            padding: "48px 100px",
          }}
        >
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
          >
            <path
              d="M 30,0 L 470,0 C 500,0 500,10 498,60 C 496,110 495,120 465,120 L 0,120 Z"
              fill="rgba(0,168,142,0.04)"
              stroke="rgba(0,168,142,0.4)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <p
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
              letterSpacing: "0.02em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Brand Reveal Coming Soon!
          </p>
        </div>
      </div>
    </div>
  );
}
