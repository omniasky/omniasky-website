import React from 'react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50 text-zinc-900 border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-8 border-b border-zinc-200 pb-4">Our Vision</h2>
            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-zinc-700">
              A world where intelligent systems handle the complexity, freeing our customers to focus entirely on creativity and growth.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-8 border-b border-zinc-200 pb-4">Our Mission</h2>
            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-zinc-700">
              To build the core intelligence, networks, and infrastructure that drive our customers' success. We make autonomous operations reliable, secure, and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
