import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/intelligence-networks.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Building the Future of Technology
          </h2>
          <p className="text-2xl md:text-3xl text-gray-200 text-balance">
            Portfolio companies establishing foundational infrastructure across artificial intelligence, transaction networks, and distributed computing.
          </p>
        </div>
      </div>
    </section>
  );
};
