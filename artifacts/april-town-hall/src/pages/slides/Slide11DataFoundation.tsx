import { Database, Shield, GitMerge, Link } from "lucide-react";
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
        padding: "24px 22px",
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
          color: COLORS.charcoal,
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
          color: "rgba(30,41,59,0.7)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function Slide11DataFoundation() {
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
        background: COLORS.sand,
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
            alignItems: "start",
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
              Data &amp; Systems
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
              Building a Trusted{" "}
              <span
                style={{
                  fontFamily: FONTS.serif,
                  fontStyle: "italic",
                  color: COLORS.teal,
                }}
              >
                Data Foundation
              </span>
            </h1>
            <p
              style={{
                fontFamily: FONTS.body,
                fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)",
                lineHeight: 1.7,
                color: "rgba(30,41,59,0.8)",
                margin: 0,
              }}
            >
              Establishing clear ownership and governance over our data so every
              team decision is grounded in a single, reliable source of truth.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 18,
            }}
          >
            <LightCard
              icon={Shield}
              title="Data Authority Charter"
              description="Formalizing who owns, maintains, and has authority over each data domain."
            />
            <LightCard
              icon={Database}
              title="Zoho as Single Source"
              description="Zoho is established as the central system of record across all founder and pipeline data."
            />
            <LightCard
              icon={GitMerge}
              title="Field Mapping"
              description="Standardizing field definitions and naming conventions to ensure consistent reporting."
            />
            <LightCard
              icon={Link}
              title="Integration Planning"
              description="Connecting key tools to Zoho to reduce manual entry and maintain data accuracy."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
