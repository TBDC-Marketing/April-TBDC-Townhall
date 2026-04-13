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

export default function Slide01ContextPurpose() {
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
      {/* Blur circle accent */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(0,168,142,0.03)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          background: `linear-gradient(180deg, transparent 40%, rgba(0,168,142,0.13) 100%)`,
        }}
      />
      {/* Content */}
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
            marginBottom: 20,
            margin: "0 0 20px 0",
          }}
        >
          April Town Hall
        </p>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: "0 0 16px 0",
          }}
        >
          How we{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            operate &amp; execute
          </span>
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Sharing key updates across the organization, reinforcing how we work
          as a team, and highlighting where we are improving systems and
          processes.
        </p>
      </div>
    </div>
  );
}
