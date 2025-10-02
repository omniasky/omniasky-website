import React from "react";
import { Logo } from "@/components/atoms/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00d4ff15_1px,transparent_1px),linear-gradient(to_bottom,#00d4ff15_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Centered logo and copyright */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <Logo variant="white" className="opacity-90 hover:opacity-100 transition-opacity" />

          {/* Copyright with futuristic styling */}
          <div className="flex flex-col items-center space-y-2">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <p className="text-sm text-gray-400 tracking-wider">
              © {new Date().getFullYear()} <span className="text-white">Omniasky Technology Pte Ltd</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
