import { MapPin, Users } from "lucide-react";
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

function LightCard({
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
        background: "#fff",
        borderRadius: 16,
        padding: "32px 28px",
        border: "1px solid rgba(203,213,225,0.5)",
        borderLeft: `3px solid ${COLORS.teal}`,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 12,
          background: "rgba(0,168,142,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <Icon size={28} color={COLORS.teal} />
      </div>
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
        {description}
      </p>
    </div>
  );
}

export default function Slide08SpaceAudit() {
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
          opacity: 0.04,
          background: `radial-gradient(ellipse at 60% 40%, ${COLORS.teal}, transparent 70%)`,
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
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 56 }}>
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
            Facilities Update
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
            Space Audit &amp;{" "}
            <span
              style={{
                fontFamily: FONTS.serif,
                fontStyle: "italic",
                color: COLORS.teal,
              }}
            >
              Optimization
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
            We conducted a full review of space usage to ensure it is being used
            actively and intentionally to maintain a strong, engaged founder
            community.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            maxWidth: 960,
            margin: "0 auto",
          }}
        >
          <LightCard
            icon={MapPin}
            title="Tenant Transitions"
            description="Some tenants may be thoughtfully transitioned out if they are not actively utilizing the space."
          />
          <LightCard
            icon={Users}
            title="New Additions"
            description="New companies will be brought into the physical space where there is community demand."
          />
        </div>
      </div>
    </div>
  );
}
