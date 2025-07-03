import { Button } from "@/components/ui/button";

const PainSection = () => {
  const painPoints = [
    {
      title: "You're the technical founder...",
      description: "but now you're writing landing pages, cold emails, and trying to decode GA4 at 2am.",
      quote: "Early-stage growth can feel like you're spinning plates while trying to build the table."
    },
    {
      title: "You've duct-taped 12 tools together...",
      description: "yet you're still not sure if anything is actually working.",
      quote: "Trying to set up tracking and analytics (GA/GTM, anyone?)… I'm constantly worried I'm missing something."
    },
    {
      title: "You're spending on Google or Reddit ads...",
      description: "but you're not seeing results, and it's killing your momentum.",
      quote: "Google and Reddit Ads didn't work for me at all… spent around $2K–$3K, didn't generate meaningful results."
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-6">
            Feel like you're spinning plates while trying to build the table?
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <div key={index} className="bg-hero/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold text-hero-foreground mb-4">
                {pain.title}
              </h3>
              <p className="text-hero-foreground/80 mb-6 leading-relaxed">
                {pain.description}
              </p>
              <blockquote className="border-l-4 border-primary pl-4 text-hero-foreground/70 italic">
                "{pain.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Belief Deconstruction */}
        <div className="bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-6">
            The problem isn't your effort.
          </h3>
          <p className="text-xl text-hero-foreground/90 leading-relaxed max-w-4xl mx-auto mb-8">
            It's trying to solve complex growth problems with generic tactics, scattered tools, 
            and no strategy tailored to technical founders like you. You don't need more tools—you 
            need <span className="font-semibold text-primary">focus, clarity, and proof.</span>
          </p>
          
          <Button variant="cta" size="xl">
            Let's Fix This Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainSection;