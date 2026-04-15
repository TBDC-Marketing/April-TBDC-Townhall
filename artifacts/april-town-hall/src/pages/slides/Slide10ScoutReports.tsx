import { Clock, Target, FileText } from "lucide-react";

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

export default function Slide10ScoutReports() {
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
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "rgba(0,168,142,0.04)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          padding: "48px clamp(48px, 6vw, 96px)",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
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
          Operations
        </p>
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: "0 0 20px 0",
          }}
        >
          Scout Report{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            Process Updates
          </span>
        </h1>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          We reviewed how Scout reports are created and delivered to founders.
          The focus is on faster turnarounds, clear review stages, and more
          actionable outputs.
        </p>
        <div
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            marginTop: 56,
            flexWrap: "wrap",
          }}
        >
          {[
            { Icon: Clock, label: "Defined Windows", sub: "Clear review stages" },
            { Icon: Target, label: "Clear Ownership", sub: "Status updates tracked" },
            { Icon: FileText, label: "Streamlined Flow", sub: "From draft to delivery" },
          ].map(({ Icon, label, sub }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16,
                padding: "28px 40px",
                textAlign: "center",
                minWidth: 200,
              }}
            >
              <Icon size={32} color={COLORS.teal} style={{ marginBottom: 14 }} />
              <div
                style={{
                  fontFamily: FONTS.heading,
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#fff",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 17,
                  color: "rgba(255,255,255,0.55)",
                  marginTop: 6,
                }}
              >
                {sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
