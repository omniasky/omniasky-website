import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-40 md:py-56 overflow-hidden bg-zinc-50">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        >
          <source
            src="https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/intelligence-networks.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay for ultra-crisp text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-white/20 to-zinc-50"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-zinc-900 tracking-tighter leading-[1.1]">
            Building the Future<br />of Technology.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 font-light max-w-2xl leading-relaxed mb-6">
            Establishing foundational infrastructure across artificial intelligence, transaction networks, and global distributed computing.
          </p>
        </div>
      </div>
    </section>
  );
};
