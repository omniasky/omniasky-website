import React from "react";

const TRAILS = [
  {
    id: "trail-0",
    d: "M 200 -50 V 600 a 25 25 0 0 0 25 25 H 500 a 25 25 0 0 1 25 25 V 2450",
    duration: "12s",
    delay: "0s",
  },
  {
    id: "trail-1",
    d: "M 1200 -50 V 800 a 25 25 0 0 1 -25 25 H 850 a 25 25 0 0 0 -25 25 V 2450",
    duration: "13s",
    delay: "3s",
  },
  {
    id: "trail-2",
    d: "M -50 1400 H 300 a 25 25 0 0 1 25 25 V 1800 a 25 25 0 0 1 -25 25 H -50",
    duration: "14s",
    delay: "6s",
  },
  {
    id: "trail-3",
    d: "M 1490 1500 H 1100 a 25 25 0 0 0 -25 25 V 2450",
    duration: "11s",
    delay: "9s",
  },
];

export const TronBackground: React.FC = () => {
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-white"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(24,24,27,0.07) 0 1px, transparent 1px 96px), repeating-linear-gradient(0deg, rgba(24,24,27,0.07) 0 1px, transparent 1px 96px)",
        }}
      />
      <svg
        viewBox="0 0 1440 2400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{
          filter:
            "drop-shadow(0 0 3px rgba(255,22,22,0.7)) drop-shadow(0 0 6px rgba(255,22,22,0.35))",
        }}
      >
        <g
          stroke="#ff1616"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {TRAILS.map((t) => (
            <g key={t.id}>
              <path
                id={t.id}
                d={t.d}
                pathLength={1}
                strokeDasharray="0.15 1"
                strokeDashoffset={-0.15}
                style={{
                  animation: `draw-trail ${t.duration} linear ${t.delay} infinite`,
                }}
              />
              <g
                style={{
                  animation: `draw-trail ${t.duration} linear ${t.delay} infinite`,
                }}
              >
                <g stroke="none">
                  <polygon
                    points="-30,-4 -8,-4 0,0 -8,4 -30,4"
                    fill="#ff1616"
                  />
                  <rect x="-28" y="-5" width="3" height="10" fill="#7a0000" />
                  <rect x="-14" y="-5" width="3" height="10" fill="#7a0000" />
                  <circle cx="0" cy="0" r="2.5" fill="#fff5f5" />
                </g>
                <animateMotion
                  dur={t.duration}
                  begin={t.delay}
                  repeatCount="indefinite"
                  rotate="auto"
                  keyTimes="0;0.45;1"
                  keyPoints="0;1;1"
                  calcMode="linear"
                >
                  <mpath xlinkHref={`#${t.id}`} />
                </animateMotion>
              </g>
            </g>
          ))}
        </g>
      </svg>
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none" />
    </div>
  );
};
