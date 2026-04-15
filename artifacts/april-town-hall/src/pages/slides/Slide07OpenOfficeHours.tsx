import { Lightbulb, MessageSquare, AlertCircle, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

function DarkCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderLeft: `3px solid ${COLORS.teal}`,
        borderRadius: 16,
        padding: "24px 20px",
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: "rgba(0,168,142,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        <Icon size={28} color={COLORS.teal} />
      </div>
      <h3
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: "clamp(1.15rem, 1.6vw, 1.5rem)",
          color: "#fff",
          margin: "0 0 8px 0",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.6)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Slide07OpenOfficeHours() {
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
          top: "30%",
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
          maxWidth: 1100,
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
            margin: "0 0 16px 0",
          }}
        >
          Community
        </p>

        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#fff",
            margin: "0 0 12px 0",
          }}
        >
          Open Office Hours{" "}
          <span
            style={{
              fontFamily: FONTS.serif,
              fontStyle: "italic",
              color: COLORS.teal,
            }}
          >
            with Ange
          </span>
        </h1>

        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
            color: "rgba(255,255,255,0.55)",
            margin: "0 0 36px 0",
            letterSpacing: "0.01em",
          }}
        >
          Wednesdays, 11:00 – 12:15 · Open to everyone
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            textAlign: "left",
            marginBottom: 28,
          }}
        >
          <DarkCard
            icon={Lightbulb}
            title="Share Ideas"
            description="Bring improvements, experiments, or things you've been thinking about."
          />
          <DarkCard
            icon={MessageSquare}
            title="Get Input"
            description="Talk through your work, get a second perspective, pressure-test your thinking."
          />
          <DarkCard
            icon={AlertCircle}
            title="Raise Blockers"
            description="Surface challenges before they compound. Don't wait for a formal meeting."
          />
          <DarkCard
            icon={TrendingUp}
            title="Talk Through Opportunities"
            description="Spot something worth building or improving? Bring it here."
          />
        </div>

        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 14,
            fontWeight: 700,
            color: COLORS.teal,
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          Goal: Create space for better thinking, feedback, and collaboration.
        </p>
      </div>
    </div>
  );
}
