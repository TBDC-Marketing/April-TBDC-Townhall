import { Clock, Target, FileText } from "lucide-react";
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

export default function Slide09ScoutReports() {
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
          maxWidth: 1100,
          width: "100%",
          margin: "0 auto",
          padding: "64px clamp(32px, 5vw, 80px)",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
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
          Operations
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
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: 1.7,
            color: "rgba(30,41,59,0.8)",
            maxWidth: 640,
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
            gap: 24,
            justifyContent: "center",
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "rgba(30,41,59,0.08)",
              border: "1px solid rgba(30,41,59,0.15)",
              borderRadius: 16,
              padding: "24px 32px",
              textAlign: "center",
              minWidth: 180,
            }}
          >
            <Clock size={28} color={COLORS.teal} style={{ marginBottom: 12 }} />
            <div
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: 18,
                color: COLORS.charcoal,
              }}
            >
              Defined Windows
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: "rgba(30,41,59,0.55)",
                marginTop: 4,
              }}
            >
              Clear review stages
            </div>
          </div>
          <div
            style={{
              background: "rgba(30,41,59,0.08)",
              border: "1px solid rgba(30,41,59,0.15)",
              borderRadius: 16,
              padding: "24px 32px",
              textAlign: "center",
              minWidth: 180,
            }}
          >
            <Target size={28} color={COLORS.teal} style={{ marginBottom: 12 }} />
            <div
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: 18,
                color: COLORS.charcoal,
              }}
            >
              Clear Ownership
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: "rgba(30,41,59,0.55)",
                marginTop: 4,
              }}
            >
              Status updates tracked
            </div>
          </div>
          <div
            style={{
              background: "rgba(30,41,59,0.08)",
              border: "1px solid rgba(30,41,59,0.15)",
              borderRadius: 16,
              padding: "24px 32px",
              textAlign: "center",
              minWidth: 180,
            }}
          >
            <FileText size={28} color={COLORS.teal} style={{ marginBottom: 12 }} />
            <div
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 700,
                fontSize: 18,
                color: COLORS.charcoal,
              }}
            >
              Streamlined Flow
            </div>
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: "rgba(30,41,59,0.55)",
                marginTop: 4,
              }}
            >
              From draft to delivery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
