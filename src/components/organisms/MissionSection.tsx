"use client";
import React from "react";

export const MissionSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Tron Legacy Theme Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

        {/* Tron grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff15_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff15_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Glowing horizon line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

        {/* Circuit-like vertical lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[20%] w-0.5 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"></div>
          <div className="absolute top-0 left-[40%] w-0.5 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0"></div>
          <div className="absolute top-0 left-[60%] w-0.5 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0"></div>
          <div className="absolute top-0 left-[80%] w-0.5 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

        {/* Digital particles */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
          <div className="absolute top-[25%] left-[30%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
          <div className="absolute top-[35%] left-[70%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
          <div className="absolute top-[45%] left-[50%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
          <div className="absolute top-[65%] left-[20%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
          <div className="absolute top-[75%] left-[80%] w-1 h-1 bg-cyan-400 rounded-sm"></div>
        </div>

        {/* Perspective grid floor effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-950/20 to-transparent"></div>

        {/* Animated light particles - Tron style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Particle 1 - horizontal */}
          <div className="particle-1 absolute top-[25%] left-0">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          </div>

          {/* Particle 2 - reverse horizontal */}
          <div className="particle-2 absolute top-[55%] right-0">
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
          </div>

          {/* Particle 3 - vertical */}
          <div className="particle-3 absolute left-[30%] bottom-0">
            <div className="w-0.5 h-16 bg-gradient-to-t from-transparent via-cyan-400 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          </div>

          {/* Particle 4 - reverse vertical */}
          <div className="particle-4 absolute right-[40%] top-0">
            <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">
            Our Mission
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              We believe the future belongs to those who build infrastructure
              before it&apos;s needed. While others optimize for today, we architect
              systems for tomorrow—creating the foundational layers that enable
              the next generation of autonomous operations.
            </p>

            <p>
              OmniaSky operates at the intersection of intelligence, networks,
              and distributed systems. Our portfolio companies aren&apos;t just
              building products—they&apos;re establishing protocols. Transaction
              rails for intelligence living. Neural architectures for specialized tasks.
              Compute infrastructure that scales beyond human-operated limits.
            </p>

            <p className="text-cyan-400 font-medium border-l-2 border-cyan-400 pl-6">
              Each company operates independently, led by visionaries who
              understand their domains deeply. Grounded in rigorous technology research,
              we provide capital, strategy, and the freedom to pursue ambitious
              technical challenges that traditional structures would reject as impractical.
            </p>

            <p>
              The systems we&apos;re building today will underpin economies we can
              barely imagine. Machine-to-machine commerce at planetary scale.
              Intelligence that augments human capability across every domain.
              Infrastructure so reliable it becomes invisible.
            </p>

            <p>
              This is our commitment: to back the ambitious, fund the
              improbable, and build the fundamental infrastructure that makes
              the future possible. Not incremental improvements to yesterday&apos;s
              solutions, but foundational systems for tomorrow&apos;s challenges.
            </p>

            <div className="pt-8 border-t border-cyan-400/50">
              <p className="text-2xl font-semibold text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                We&apos;re building infrastructure for a world where intelligence,
                transactions, and computation happen at machine speed—because
                that world is already here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tron animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes scan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        @keyframes particle-move-1 {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px));
            opacity: 0;
          }
        }
        @keyframes particle-move-2 {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(-100vw - 100px));
            opacity: 0;
          }
        }
        @keyframes particle-move-3 {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(-100vh - 100px));
            opacity: 0;
          }
        }
        @keyframes particle-move-4 {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px));
            opacity: 0;
          }
        }
        @keyframes particle-move-5 {
          0% {
            transform: translate(-100px, -20px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translate(calc(100vw + 100px), calc(100vw * 0.2));
            opacity: 0;
          }
        }
        .absolute.inset-0.opacity-40 > div {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .absolute.inset-0.opacity-40 > div:nth-child(2n) {
          animation-delay: 0.5s;
        }
        .absolute.inset-0.opacity-40 > div:nth-child(3n) {
          animation-delay: 1s;
        }
        .particle-1 {
          animation: particle-move-1 8s linear infinite;
        }
        .particle-2 {
          animation: particle-move-2 9s linear infinite;
          animation-delay: 2s;
        }
        .particle-3 {
          animation: particle-move-3 10s linear infinite;
          animation-delay: 4s;
        }
        .particle-4 {
          animation: particle-move-4 11s linear infinite;
          animation-delay: 6s;
        }
        .particle-5 {
          animation: particle-move-5 12s linear infinite;
          animation-delay: 8s;
        }
      `}</style>
    </section>
  );
};
