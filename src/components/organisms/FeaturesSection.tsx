import React from "react";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { CreditCard, Brain, Server } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Paymonei",
      description:
        "Enterprise API infrastructure for payment processing integration and autonomous system connectivity.",
      icon: CreditCard,
      badge: "Networks",
      url: "https://paymonei.com",
    },
    {
      title: "Hugogen",
      description:
        "Delivering ultra-augmented intelligence across autonomous vehicles, robotics, finance, EV battery optimization, threat detection, and emotion recognition.",
      icon: Brain,
      badge: "Brain AI",
      badgeVariant: "secondary" as const,
      url: "https://hugogen.com",
    },
    {
      title: "ZillionScale",
      description:
        "Sky network infrastructure for machine-to-machine operations and intelligence workloads architecture for autonomous systems.",
      icon: Server,
      badge: "Infrastructure",
      badgeVariant: "outline" as const,
      url: "https://zillionscale.com",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Portfolio
            <span className="text-primary"> Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">
            Building the foundational protocols and infrastructure that will
            power autonomous systems at global scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
