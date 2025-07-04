import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">G</span>
          </div>
          <span className="text-hero-foreground font-semibold text-xl">Growth Engine</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#process" 
            className="text-hero-foreground/80 hover:text-hero-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Process
          </a>
          <a 
            href="#results" 
            className="text-hero-foreground/80 hover:text-hero-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Results
          </a>
          <a 
            href="#pricing" 
            className="text-hero-foreground/80 hover:text-hero-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Pricing
          </a>
        </nav>

        <Button variant="cta" size="lg" className="hidden md:inline-flex">
          Get Growth Plan
        </Button>
        
        <Button variant="cta" size="default" className="md:hidden">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;