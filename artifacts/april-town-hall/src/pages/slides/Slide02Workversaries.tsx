import jonathanImg from "@assets/Jonathan_1776184061594.png";
import nikhilImg from "@assets/Nikhil_1776184061595.png";
import gurpreetImg from "@assets/Gurpreet_1776184061593.png";
import davinderImg from "@assets/Davinder_1776184061591.png";
import farazImg from "@assets/Faraz_1776184061592.png";

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
        gap: 16,
        padding: "24px 20px",
        background: "#fff",
        borderRadius: 20,
        border: "1px solid rgba(203,213,225,0.4)",
        boxShadow: "0 2px 16px rgba(10,22,40,0.06)",
        minWidth: 160,
        flex: 1,
      }}
    >
      {/* Avatar */}
      {/* TODO: Replace initials avatar with <img> once headshots are provided */}
      <div
        style={{
          width: 96,
          height: 96,
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
              fontSize: 28,
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
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1,
            color: COLORS.teal,
            letterSpacing: "-0.03em",
          }}
        >
          {years}
        </div>
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
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
          fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
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
  { name: "Gurpreet Kaur",  years: 1, initials: "GK", imageSrc: gurpreetImg },
  { name: "Davinder Gurm",  years: 1, initials: "DG", imageSrc: davinderImg },
  { name: "Faraz Eslami",   years: 1, initials: "FE", imageSrc: farazImg    },
];

export default function Slide02Workversaries() {
  const topRow = MEMBERS.slice(0, 3);
  const bottomRow = MEMBERS.slice(3);

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
      {/* Subtle radial tint */}
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
          maxWidth: 1000,
          width: "100%",
          margin: "0 auto",
          padding: "40px clamp(24px, 4vw, 64px)",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: FONTS.mono,
            fontSize: 13,
            fontWeight: 700,
            color: COLORS.teal,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            margin: "0 0 16px 0",
          }}
        >
          March &amp; April
        </p>

        {/* Title */}
        <h1
          style={{
            fontFamily: FONTS.heading,
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COLORS.charcoal,
            margin: "0 0 36px 0",
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

        {/* Top row — 3 cards */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {topRow.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>

        {/* Bottom row — 2 cards centred */}
        <div
          style={{
            display: "flex",
            gap: 20,
            justifyContent: "center",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          {bottomRow.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
}
