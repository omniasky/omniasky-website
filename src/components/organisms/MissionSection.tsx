import React from "react";

export const MissionSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/60 p-8 md:p-12 border border-zinc-200 shadow-sm">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 drop-shadow-sm">
            Thesis
          </h2>
          <div className="py-8 mb-12 border-b border-zinc-200">
            <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 drop-shadow-sm">
              Infrastructure that general intelligence will run on.
            </p>
          </div>
          <div className="space-y-8 text-lg md:text-xl text-zinc-600 font-light leading-relaxed">
            <p>
              OmniaSky is a technology group with one long-term goal: build the
              infrastructure that general intelligence will depend on.
            </p>

            <p>
              General intelligence is not a single model or product. It is a
              full stack of capabilities: compute, data, and the software
              systems that tie them together. Most of that stack still needs to
              be built.
            </p>

            <p>
              We are not only optimizing for the current cycle. The aim is to
              build pieces that remain useful once intelligence becomes
              ordinary, the way electricity and bandwidth eventually did.
            </p>

            <p>
              The companies and the systems are designed to compound over long
              periods, not just to win the next quarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
