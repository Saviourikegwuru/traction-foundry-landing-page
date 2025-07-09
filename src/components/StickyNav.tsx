import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show sticky nav after hero section
      setIsVisible(scrolled > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4">
      <div className="bg-hero/95 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 shadow-elegant">
        <div className="flex items-center gap-4">
          <span className="text-hero-foreground font-medium hidden sm:block">
            Ready to grow?
          </span>
          <Button variant="cta" size="default" className="rounded-full" asChild>
            <a href="https://calendly.com/growth-engine/strategy-call" target="_blank" rel="noopener noreferrer">
              Get Growth Plan
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyNav;