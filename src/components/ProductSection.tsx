import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ProductSection = () => {
  const [email, setEmail] = useState("");

  const processSteps = [
    {
      number: "01",
      title: "Strategy Sprint",
      subtitle: "Foundation",
      description: "Clarify your ICP, messaging, and proof gaps.",
      details: [
        "Full product marketing review with a diagnostic score and roadmap",
        "Customer interviews, competitor analysis",
        "Positioning workshops, strategy call, and a source-of-truth document"
      ]
    },
    {
      number: "02", 
      title: "Content & Outbound Build",
      subtitle: "Execution",
      description: "Case studies, cold emails, CRM workflows—done for you.",
      details: [
        "Foundation workshops with analytics setup & reporting",
        "Project management with easy credit card payments",
        "No contracts, quotes, or billable hours"
      ]
    },
    {
      number: "03",
      title: "Launch & Iterate", 
      subtitle: "Optimization",
      description: "We run experiments, track wins, and help you double down.",
      details: [
        "CRO & A/B Testing with data-driven optimization",
        "GTM launches, seasonal pages, PH launches",
        "SEO content with MoFu and BoFu strategy"
      ]
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Strategy call email:", email);
  };

  return (
    <section className="py-20 bg-section" id="process">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Product Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">📦</span>
            <span className="text-hero-foreground font-semibold">The Cold Start Growth System</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-6">
            A done-with-you growth and content engine
          </h2>
          <p className="text-xl text-hero-foreground/80 max-w-3xl mx-auto">
            for early-stage SaaS startups who need traction—without the overwhelm.
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Step Number */}
              <div className="text-center lg:text-left">
                <div className="text-8xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>
                <div className="text-sm text-primary uppercase tracking-wider mb-2">
                  Phase {step.number}: {step.subtitle}
                </div>
              </div>

              {/* Step Content */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-hero-foreground/80 mb-6">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-hero-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Message */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 mb-16 border border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-2xl">CF</span>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-hero-foreground/90 italic mb-6 leading-relaxed">
              "I built this agency because I <em>was</em> the technical founder trying to do it all—and failing. 
              You don't need another PDF or playbook. You need traction, momentum, and someone who gets your product like you do."
            </blockquote>
            
            <cite className="text-hero-foreground/70 not-italic">
              — Corey Haines, Founder
            </cite>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-hero/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
            Let's Talk Growth
          </h3>
          
          <p className="text-xl text-hero-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your free strategy call—let's see if we're the right fit to simplify and scale your GTM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="cta" size="xl">
              Schedule Strategy Call
            </Button>
            <Button variant="outline" size="xl">
              Download Growth Framework
            </Button>
          </div>

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email for instant access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-foreground/60"
                required
              />
              <Button type="submit" variant="default">
                Get Access
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;