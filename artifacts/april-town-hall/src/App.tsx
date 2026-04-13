import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Menu,
  X,
} from "lucide-react";
import { slides } from "@/slideLoader";

const COLORS = {
  navy: "#0A1628",
  teal: "#00A88E",
};

const FONTS = {
  heading: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

function NoiseOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        opacity: 0.04,
      }}
    >
      <svg width="100%" height="100%">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}

function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 2,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          background: COLORS.teal,
          transition: "width 0.3s ease-out",
          width: `${((current + 1) / total) * 100}%`,
        }}
      />
    </div>
  );
}

function TableOfContents({
  current,
  onSelect,
  open,
  onClose,
}: {
  current: number;
  onSelect: (i: number) => void;
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        display: "flex",
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,22,40,0.85)",
          backdropFilter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 81,
          width: 420,
          maxWidth: "90vw",
          height: "100vh",
          background: COLORS.navy,
          borderRight: "1px solid rgba(255,255,255,0.1)",
          overflowY: "auto",
          padding: "48px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              fontWeight: 700,
              color: COLORS.teal,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Table of Contents
          </span>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <X size={20} />
          </button>
        </div>
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => {
              onSelect(i);
              onClose();
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              width: "100%",
              padding: "14px 16px",
              borderRadius: 12,
              border: "none",
              background:
                i === current
                  ? "rgba(0,168,142,0.15)"
                  : "transparent",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.2s",
              marginBottom: 4,
            }}
          >
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                fontWeight: 700,
                color:
                  i === current
                    ? COLORS.teal
                    : "rgba(255,255,255,0.3)",
                minWidth: 28,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: i === current ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            >
              {slide.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [tocOpen, setTocOpen] = useState(false);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalSlides = slides.length;

  const goToSlide = useCallback(
    (n: number) => {
      setCurrentSlide(Math.max(0, Math.min(n, totalSlides - 1)));
    },
    [totalSlides],
  );

  const next = useCallback(
    () => goToSlide(currentSlide + 1),
    [currentSlide, goToSlide],
  );
  const prev = useCallback(
    () => goToSlide(currentSlide - 1),
    [currentSlide, goToSlide],
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (tocOpen) {
        if (e.key === "Escape") setTocOpen(false);
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "Enter":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          prev();
          break;
        case "f":
          toggleFullscreen();
          break;
        case "Escape":
          if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullscreen(false);
          }
          break;
        case "Home":
          goToSlide(0);
          break;
        case "End":
          goToSlide(totalSlides - 1);
          break;
        case "t":
          setTocOpen((v) => !v);
          break;
        default:
          if (e.key >= "1" && e.key <= "9")
            goToSlide(parseInt(e.key) - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, toggleFullscreen, goToSlide, totalSlides, tocOpen]);

  useEffect(() => {
    const showControls = () => {
      setControlsVisible(true);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(
        () => setControlsVisible(false),
        3000,
      );
    };
    window.addEventListener("mousemove", showControls);
    hideTimeout.current = setTimeout(() => setControlsVisible(false), 3000);
    return () => {
      window.removeEventListener("mousemove", showControls);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handler = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const CurrentSlideComponent = slides[currentSlide]?.Component;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: COLORS.navy,
        position: "relative",
      }}
    >
      <NoiseOverlay />
      <ProgressBar current={currentSlide} total={totalSlides} />

      {/* TOC open button */}
      <button
        onClick={() => setTocOpen(true)}
        aria-label="Open table of contents"
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 60,
          background: "rgba(10,22,40,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12,
          padding: "10px 14px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
          transition: "all 0.3s",
          opacity: controlsVisible ? 1 : 0,
          pointerEvents: controlsVisible ? "auto" : "none",
        }}
      >
        <Menu size={18} color="rgba(255,255,255,0.6)" />
      </button>

      {/* Slide counter */}
      <div
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          gap: 12,
          transition: "all 0.3s",
          opacity: controlsVisible ? 1 : 0,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            fontWeight: 700,
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
          }}
        >
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(totalSlides).padStart(2, "0")}
        </span>
        <button
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          style={{
            background: "rgba(10,22,40,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "8px 10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isFullscreen ? (
            <Minimize2 size={16} color="rgba(255,255,255,0.6)" />
          ) : (
            <Maximize2 size={16} color="rgba(255,255,255,0.6)" />
          )}
        </button>
      </div>

      {/* Prev / Next navigation buttons */}
      <button
        onClick={prev}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
        style={{
          position: "fixed",
          bottom: 28,
          left: "50%",
          transform: "translateX(calc(-50% - 40px))",
          zIndex: 60,
          background: "rgba(10,22,40,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12,
          padding: "12px 16px",
          cursor: currentSlide === 0 ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: controlsVisible ? (currentSlide === 0 ? 0.3 : 1) : 0,
          transition: "all 0.3s",
          pointerEvents: controlsVisible ? "auto" : "none",
        }}
      >
        <ChevronLeft size={20} color="rgba(255,255,255,0.7)" />
      </button>

      <button
        onClick={next}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
        style={{
          position: "fixed",
          bottom: 28,
          left: "50%",
          transform: "translateX(calc(-50% + 40px))",
          zIndex: 60,
          background: "rgba(10,22,40,0.6)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 12,
          padding: "12px 16px",
          cursor:
            currentSlide === totalSlides - 1 ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity:
            controlsVisible
              ? currentSlide === totalSlides - 1
                ? 0.3
                : 1
              : 0,
          transition: "all 0.3s",
          pointerEvents: controlsVisible ? "auto" : "none",
        }}
      >
        <ChevronRight size={20} color="rgba(255,255,255,0.7)" />
      </button>

      {/* Table of Contents */}
      <TableOfContents
        current={currentSlide}
        onSelect={goToSlide}
        open={tocOpen}
        onClose={() => setTocOpen(false)}
      />

      {/* Current slide */}
      {CurrentSlideComponent && <CurrentSlideComponent />}
    </div>
  );
}
