import React from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon } from "@/components/atoms/AnimatedIcon";
import { Bot, Zap } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
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
            src="https://s3.ap-southeast-3.amazonaws.com/assets.omniasky.com/web/sky-intelligence.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            <Zap className="w-3 h-3 mr-1" />
            Technology Holding Company
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
            AI, Networks,
            <span className="text-cyan-400"> Systems</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up text-balance">
            Holding company with operations in artificial intelligence, transaction infrastructure, and distributed computing.
          </p>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-300 mb-4">
              Managing globally across AI, networks, and infrastructure
            </p>
          </div>

          <div className="mt-16 text-center">
            <AnimatedIcon animation="bounce">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
            </AnimatedIcon>
            <p className="text-sm text-gray-300 mt-2">
              Innovating Across Multiple Verticals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
