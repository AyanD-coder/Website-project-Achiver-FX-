"use client";

import { Fragment, useEffect, useMemo } from "react";

interface CosmicParallaxBgProps {
  head: string;
  text: string;
  loop?: boolean;
  className?: string;
}

const createSeedFromString = (input: string): number => {
  let seed = 0;

  for (let index = 0; index < input.length; index += 1) {
    seed = (seed * 31 + input.charCodeAt(index)) >>> 0;
  }

  return seed || 1;
};

const createSeededRandom = (seed: number) => {
  let currentSeed = seed;

  return () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) >>> 0;
    return currentSeed / 4294967296;
  };
};

const generateStarBoxShadow = (count: number, seed: number): string => {
  const shadows: string[] = [];
  const random = createSeededRandom(seed);

  for (let index = 0; index < count; index += 1) {
    const x = Math.floor(random() * 2000);
    const y = Math.floor(random() * 2000);
    shadows.push(`${x}px ${y}px #fff`);
  }

  return shadows.join(", ");
};

function CosmicParallaxBg({
  head,
  text,
  loop = true,
  className = "",
}: CosmicParallaxBgProps) {
  const textParts = text
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  const starSeed = useMemo(
    () => createSeedFromString(`${head}|${text}`),
    [head, text],
  );

  const smallStars = useMemo(
    () => generateStarBoxShadow(700, starSeed + 1),
    [starSeed],
  );

  const mediumStars = useMemo(
    () => generateStarBoxShadow(200, starSeed + 2),
    [starSeed],
  );

  const largeStars = useMemo(
    () => generateStarBoxShadow(100, starSeed + 3),
    [starSeed],
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--cosmic-animation-iteration",
      loop ? "infinite" : "1",
    );

    return () => {
      document.documentElement.style.removeProperty("--cosmic-animation-iteration");
    };
  }, [loop]);

  return (
    <div
      className={`cosmic-bg pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <style jsx>{`
        .cosmic-bg {
          --cosmic-subtitle-spacing: clamp(0.75rem, 2.5vw, 2.5rem);
          background:
            radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.12), transparent 22%),
            radial-gradient(circle at 50% 42%, rgba(96, 165, 250, 0.08), transparent 28%),
            linear-gradient(180deg, #01040b 0%, #020814 45%, #040b18 100%);
          isolation: isolate;
        }

        .cosmic-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top, rgba(255, 255, 255, 0.08), transparent 30%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 25%);
          opacity: 0.8;
        }

        .stars,
        .starsMedium,
        .starsLarge {
          position: absolute;
          top: 0;
          left: 0;
          background: transparent;
          border-radius: 9999px;
          animation-name: animStar;
          animation-timing-function: linear;
          animation-iteration-count: var(--cosmic-animation-iteration, infinite);
        }

        .stars::after,
        .starsMedium::after,
        .starsLarge::after {
          content: "";
          position: absolute;
          top: 2000px;
          left: 0;
          width: inherit;
          height: inherit;
          box-shadow: inherit;
          background: transparent;
          border-radius: inherit;
        }

        .stars {
          width: 1px;
          height: 1px;
          animation-duration: 70s;
        }

        .starsMedium {
          width: 2px;
          height: 2px;
          animation-duration: 110s;
        }

        .starsLarge {
          width: 3px;
          height: 3px;
          animation-duration: 160s;
        }

        .horizon {
          position: absolute;
          left: 50%;
          bottom: 18%;
          z-index: 2;
          width: 150%;
          height: 24rem;
          transform: translateX(-50%);
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.32), transparent 26%),
            radial-gradient(circle at 50% 45%, rgba(14, 165, 233, 0.12), transparent 44%);
          filter: blur(10px);
          opacity: 0.95;
        }

        .glow {
          position: absolute;
          left: 50%;
          top: -1.75rem;
          width: min(65rem, 82vw);
          height: 9rem;
          transform: translateX(-50%);
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 50%, rgba(125, 211, 252, 0.55), transparent 34%),
            radial-gradient(circle at 50% 60%, rgba(255, 255, 255, 0.2), transparent 50%);
          filter: blur(20px);
        }

        .earth {
          position: absolute;
          left: 50%;
          bottom: -62%;
          z-index: 1;
          width: min(1200px, 120vw);
          aspect-ratio: 1 / 1;
          transform: translateX(-50%);
          border-radius: 9999px;
          background:
            radial-gradient(circle at 50% 33%, rgba(96, 165, 250, 0.35), rgba(10, 15, 33, 0.4) 34%, rgba(2, 6, 18, 0.96) 66%, #000 100%);
          box-shadow:
            0 -30px 140px rgba(56, 189, 248, 0.2),
            inset 0 30px 80px rgba(96, 165, 250, 0.16),
            inset 0 -100px 160px rgba(0, 0, 0, 0.95);
        }

        .earth::before {
          content: "";
          position: absolute;
          inset: 9% 8% auto;
          height: 28%;
          border-radius: 9999px;
          background: linear-gradient(180deg, rgba(125, 211, 252, 0.16), transparent);
          filter: blur(18px);
        }

        .title,
        .subtitle {
          position: absolute;
          left: 50%;
          z-index: 3;
          width: min(90vw, 70rem);
          transform: translateX(-50%);
          text-align: center;
          text-shadow: 0 0 30px rgba(56, 189, 248, 0.12);
        }

        .title {
          top: 31%;
          font-family: var(--font-sora), var(--font-display), sans-serif;
          font-size: clamp(3rem, 10vw, 7.5rem);
          font-weight: 300;
          letter-spacing: clamp(0.35rem, 1.4vw, 1.1rem);
          line-height: 0.95;
          color: rgba(248, 250, 252, 0.92);
        }

        .subtitle {
          top: 52%;
          display: flex;
          justify-content: center;
          gap: 0.35rem;
          flex-wrap: wrap;
          font-size: clamp(0.75rem, 2vw, 1.125rem);
          font-weight: 500;
          letter-spacing: 0.22rem;
          color: rgba(186, 230, 253, 0.85);
        }

        .subtitle span {
          opacity: 0;
          white-space: nowrap;
          animation-duration: 8s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: var(--cosmic-animation-iteration, infinite);
        }

        .subtitlePart1 {
          animation-name: animGravity;
        }

        .subtitlePart2 {
          animation-name: animDont;
        }

        .subtitlePart3 {
          animation-name: animLet;
        }

        .subtitlePart4 {
          animation-name: animGo;
        }

        @keyframes animStar {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        @keyframes animGravity {
          0% {
            transform: translateY(-26px);
            opacity: 0;
          }
          30%,
          80% {
            letter-spacing: var(--cosmic-subtitle-spacing);
            padding-left: var(--cosmic-subtitle-spacing);
            transform: translateY(0px);
            opacity: 1;
          }
          92%,
          100% {
            letter-spacing: calc(var(--cosmic-subtitle-spacing) - 0.3125rem);
            padding-left: calc(var(--cosmic-subtitle-spacing) - 0.3125rem);
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animDont {
          0%,
          15% {
            transform: translateY(-26px);
            opacity: 0;
          }
          35%,
          80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%,
          100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animLet {
          0%,
          25% {
            transform: translateY(-26px);
            opacity: 0;
          }
          45%,
          80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%,
          100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @keyframes animGo {
          0%,
          35% {
            transform: translateY(-26px);
            opacity: 0;
          }
          55%,
          80% {
            transform: translateY(0px);
            opacity: 1;
          }
          92%,
          100% {
            transform: translateY(-4px);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .title {
            top: 35%;
            width: min(92vw, 32rem);
            letter-spacing: 0.24rem;
          }

          .subtitle {
            top: 50%;
            width: min(92vw, 30rem);
            gap: 0.25rem;
            letter-spacing: 0.14rem;
          }

          .horizon {
            bottom: 22%;
            width: 180%;
          }

          .earth {
            bottom: -44%;
            width: min(900px, 165vw);
          }
        }
      `}</style>

      <div className="stars" style={{ boxShadow: smallStars }} />
      <div className="starsMedium" style={{ boxShadow: mediumStars }} />
      <div className="starsLarge" style={{ boxShadow: largeStars }} />

      <div className="horizon">
        <div className="glow" />
      </div>
      <div className="earth" />

      <div className="title">{head}</div>
      <div className="subtitle">
        {textParts.map((part, index) => (
          <Fragment key={`${part}-${index}`}>
            <span className={`subtitlePart${index + 1}`}>{part.toUpperCase()}</span>
            {index < textParts.length - 1 ? " " : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export { CosmicParallaxBg };
