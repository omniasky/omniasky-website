import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        >
          <source
            src="https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/sky-intelligence.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-white/30 to-zinc-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-100 border border-zinc-200 text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-12 animate-fade-in">
            <span>OmniaSky Group</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-zinc-900 tracking-tighter leading-[1.1]">
            Intelligence <br />
            Infrastructure.
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl font-light tracking-wide animate-slide-up text-balance leading-relaxed">
            Building the systems that general intelligence will depend on.
          </p>
        </div>
      </div>
    </section>
  );
};
