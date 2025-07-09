import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="min-h-screen bg-gradient-primary pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
              Wearing too many hats while trying to{" "}
              <span className="text-primary bg-white/10 px-2 py-1 rounded-lg">
                build traction?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-hero-foreground/90 mb-8 leading-relaxed">
              Built for technical SaaS founders and solo marketers—get clear messaging, 
              proof-driven assets, and outbound systems that actually convert. 
              <span className="font-semibold"> No fluff. No guesswork. Just traction.</span>
            </p>

            {/* Bullet Points */}
            <div className="space-y-4 mb-8">
              {[
                "Founder ghostwriting & positioning frameworks",
                "Testimonial & case study systems that build trust", 
                "Cold email campaigns built for ICP resonance",
                "CRM and outbound setup that doesn't break your brain",
                "Strategy that makes marketing finally feel doable"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-hero-foreground/90">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-none" asChild>
                <a href="https://calendly.com/growth-engine/strategy-call" target="_blank" rel="noopener noreferrer">
                  Get My Custom Growth Plan
                </a>
              </Button>
              <Button variant="outline" size="xl" className="flex-1 sm:flex-none" asChild>
                <a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" rel="noopener noreferrer">
                  Watch Explainer Video
                </a>
              </Button>
            </div>

            {/* Email Capture */}
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto lg:mx-0">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-hero-foreground placeholder:text-hero-foreground/60"
                  required
                />
                <Button type="submit" variant="default" size="lg">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-hero-foreground/60 mt-2">
                Get weekly growth insights for technical founders
              </p>
            </form>
          </div>

          {/* Right Column - Social Proof Card */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-hero-foreground mb-2">
                  50+ startups have worked with seasoned veterans
                </h3>
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-semibold">C</span>
                    </div>
                    <div className="w-12 h-12 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-semibold">Z</span>
                    </div>
                    <div className="w-12 h-12 bg-primary rounded-full border-2 border-white flex items-center justify-center">
                      <span className="text-white font-semibold">N</span>
                    </div>
                  </div>
                </div>
                <p className="text-hero-foreground/80 mb-6">Corey, Zach, and Nick</p>
                <p className="text-hero-foreground/70 text-sm mb-4">Companies we've worked with:</p>
                
                {/* Logo placeholders */}
                <div className="flex justify-center items-center gap-6 opacity-60">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-hero-foreground font-semibold">JetBoost</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <span className="text-hero-foreground font-semibold">SaberSim</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;