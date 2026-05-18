import React from 'react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-32 text-zinc-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-8 border-b border-zinc-200 pb-4">Our Vision</h2>
            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-zinc-700">
              A world where general intelligence is as ordinary and reliable as electricity.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-8 border-b border-zinc-200 pb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-zinc-700">
              To build the compute, data, and software that general intelligence will run on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
