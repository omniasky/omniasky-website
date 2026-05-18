import React from "react";
import { Logo } from "@/components/atoms/Logo";

const portfolio = [
  { name: "Hugogen", href: "https://hugogen.com" },
  { name: "Paymonei", href: "https://paymonei.com" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          <Logo
            variant="default"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />

          <nav aria-label="Portfolio" className="flex flex-col gap-4">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
              Portfolio
            </span>
            <ul className="flex flex-col gap-3 text-sm font-light text-zinc-600">
              {portfolio.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-zinc-900 transition-colors"
                  >
                    {name}
                    <span aria-hidden className="text-zinc-400">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs font-light text-zinc-500">
          <p>© {new Date().getFullYear()} OmniaSky Technology Pte Ltd</p>
          <p>Singapore</p>
        </div>
      </div>
    </footer>
  );
};
