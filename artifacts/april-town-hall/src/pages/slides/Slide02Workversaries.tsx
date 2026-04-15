import jonathanImg from "@assets/Jonathan_1776184061594.png";
import nikhilImg from "@assets/Nikhil_1776184061595.png";
import gurpreetImg from "@assets/Gurpreet_1776184061593.png";
import davinderImg from "@assets/Davinder_1776184061591.png";
import farazImg from "@assets/Faraz_1776184061592.png";
import ciaImg from "@assets/Cia_1776263792476.png";

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

interface MemberCardProps {
  name: string;
  years: number;
  initials: string;
  imageSrc?: string;
}

function MemberCard({ name, years, initials, imageSrc }: MemberCardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14,
        padding: "24px 16px",
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(203,213,225,0.4)",
        boxShadow: "0 2px 16px rgba(10,22,40,0.06)",
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* Avatar — circular photo; falls back to initials if imageSrc is not provided */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          overflow: "hidden",
          border: `3px solid ${COLORS.teal}`,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.teal,
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              fontFamily: FONTS.heading,
              fontWeight: 800,
              fontSize: 30,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {initials}
          </span>
        )}
      </div>

      {/* Year count */}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: 72,
            lineHeight: 1,
            color: COLORS.teal,
            letterSpacing: "-0.04em",
          }}
        >
          {years}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 15,
            fontWeight: 700,
            color: "rgba(30,41,59,0.5)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginTop: 2,
          }}
        >
          {years === 1 ? "year" : "years"}
        </div>
      </div>

      {/* Name */}
      <div
        style={{
          fontFamily: FONTS.heading,
          fontWeight: 700,
          fontSize: 20,
          color: COLORS.charcoal,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        {name}
      </div>
    </div>
  );
}

const MEMBERS: MemberCardProps[] = [
  { name: "Jonathan Knott", years: 5, initials: "JK", imageSrc: jonathanImg },
  { name: "Nikhil Sharma",  years: 4, initials: "NS", imageSrc: nikhilImg   },
  { name: "Cia Prior",      years: 4, initials: "CP", imageSrc: ciaImg      },
  { name: "Gurpreet Kaur",  years: 1, initials: "GK", imageSrc: gurpreetImg },
  { name: "Davinder Gurm",  years: 1, initials: "DG", imageSrc: davinderImg },
  { name: "Faraz Eslami",   years: 1, initials: "FE", imageSrc: farazImg    },
];

export default function Slide02Workversaries() {
  const row1 = MEMBERS.slice(0, 3);
  const row2 = MEMBERS.slice(3);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
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
          background: `radial-gradient(ellipse at 50% 30%, ${COLORS.teal}, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "32px clamp(48px, 6vw, 96px)",
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
            margin: "0 0 12px 0",
          }}
        >
          March &amp; April
        </p>

        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COLORS.charcoal,
            margin: "0 0 28px 0",
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

        {/* Row 1 — 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {row1.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>

        {/* Row 2 — 3 cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {row2.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
}
