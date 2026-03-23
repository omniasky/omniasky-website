import React from "react";
import { Logo } from "@/components/atoms/Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-50 border-t border-zinc-200 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2 space-y-6">
            <Logo variant="default" className="opacity-90 hover:opacity-100 transition-opacity" />
            <p className="text-sm font-light text-zinc-500 max-w-xs leading-relaxed">
              Foundational infrastructure for global autonomous systems, intelligence models, and transaction networks.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase">Portfolio</h3>
            <ul className="space-y-4 text-sm font-light text-zinc-500">
              <li><a href="https://paymonei.com" className="hover:text-zinc-900 transition-colors">Paymonei</a></li>
              <li><a href="https://hugogen.com" className="hover:text-zinc-900 transition-colors">Hugogen</a></li>
              <li><a href="https://zillionscale.com" className="hover:text-zinc-900 transition-colors">ZillionScale</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-widest text-zinc-900 uppercase">Operations</h3>
            <ul className="space-y-4 text-sm font-light text-zinc-500">
              <li><span className="cursor-not-allowed">Global Infrastructure</span></li>
              <li><span className="cursor-not-allowed">Artificial Intelligence</span></li>
              <li><span className="cursor-not-allowed">Networks</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          <p>© {new Date().getFullYear()} OmniaSky Technology Pte Ltd</p>
        </div>
      </div>
    </footer>
  );
};
