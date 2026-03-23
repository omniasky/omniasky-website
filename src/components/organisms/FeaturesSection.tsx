import React from "react";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { CreditCard, Brain, Server } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Paymonei",
      description:
        "Enterprise API infrastructure specializing in automated invoicing, bill payments, and seamless financial connectivity for autonomous systems.",
      icon: CreditCard,
      badge: "Infrastructure",
      url: "https://paymonei.com",
    },
    {
      title: "Hugogen",
      description:
        "Technology company developing foundational intelligence ecosystems across agent-driven commerce, design, productivity, and chat LLMs.",
      icon: Brain,
      badge: "Intelligence",
      url: "https://hugogen.com",
    },
    {
      title: "ZillionScale",
      description:
        "Sky network infrastructure for machine-to-machine operations and intelligence workloads architecture for autonomous systems.",
      icon: Server,
      badge: "Networks",
      url: "https://zillionscale.com",
    },
  ];

  return (
    <section id="features" className="py-32 md:py-48 relative overflow-hidden bg-zinc-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="max-w-4xl mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight text-zinc-900">
            Portfolio Companies
          </h2>
          <p className="text-xl md:text-2xl text-zinc-500 font-light leading-relaxed">
            Independent entities operating at the forefront of their respective domains, united by deep technical research and long-term vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
