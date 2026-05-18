import React from "react";

const STAR_COUNT = 320;
const STARS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  delay: `${((i * 0.379) % 6).toFixed(2)}s`,
  duration: `${(3 + ((i * 0.713) % 4)).toFixed(2)}s`,
}));

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50">
      <div
        aria-hidden
        className="absolute inset-0 z-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 96px)",
          gridAutoRows: "96px",
        }}
      >
        {STARS.map((s, i) => (
          <span
            key={i}
            className="flex items-center justify-center"
            style={{
              animation: `twinkle ${s.duration} ease-in-out ${s.delay} infinite`,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M7 3 L7 11 M3 7 L11 7"
                stroke="#18181b"
                strokeWidth="1"
              />
            </svg>
          </span>
        ))}
      </div>

      <div
        aria-hidden
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent z-0 pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-zinc-50 z-0 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 border border-zinc-200 text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-12 animate-fade-in">
            <span>OmniaSky Group</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-zinc-900 tracking-tighter leading-[1.1]">
            Intelligence <br />
            Infrastructure.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl mx-auto font-light tracking-wide animate-slide-up text-balance leading-relaxed">
            Building the systems that general intelligence will depend on.
          </p>
        </div>
      </div>
    </section>
  );
};
