import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-48 pb-72 md:pb-96 overflow-hidden bg-zinc-50">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-64 md:h-80 z-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
        >
          <path
            d="M0 180 C 200 140, 400 170, 600 155 S 1000 145, 1200 170 S 1380 160, 1440 175 L 1440 320 L 0 320 Z"
            fill="#e4e4e7"
            opacity="0.55"
          />
          <path
            d="M0 230 C 200 200, 400 220, 600 215 S 1000 225, 1200 205 S 1380 220, 1440 215 L 1440 320 L 0 320 Z"
            fill="#d4d4d8"
            opacity="0.75"
          />
          <path
            d="M0 275 C 250 250, 500 270, 750 265 S 1100 260, 1300 275 L 1440 270 L 1440 320 L 0 320 Z"
            fill="#a1a1aa"
            opacity="0.45"
          />
          <g fill="#52525b" opacity="0.55">
            <polygon points="180,247 173,267 187,267" />
            <rect x="178" y="267" width="4" height="6" />
            <polygon points="430,254 422,277 438,277" />
            <rect x="428" y="277" width="4" height="7" />
            <polygon points="720,248 712,270 728,270" />
            <rect x="718" y="270" width="4" height="6" />
            <polygon points="980,250 973,270 987,270" />
            <rect x="978" y="270" width="4" height="6" />
            <polygon points="1220,255 1212,277 1228,277" />
            <rect x="1218" y="277" width="4" height="6" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-zinc-900 tracking-tighter leading-[1.1]">
            The long view.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl mx-auto leading-relaxed">
            The systems worth building are the ones that still matter long after the cycle that produced them.
          </p>
        </div>
      </div>
    </section>
  );
};
