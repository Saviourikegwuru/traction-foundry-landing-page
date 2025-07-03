import { Button } from "@/components/ui/button";

const OutcomeSection = () => {
  const outcomes = [
    {
      icon: "✨",
      title: "Your calendar fills with qualified demos",
      description: "because your cold email system speaks your ICP's language."
    },
    {
      icon: "📈", 
      title: "Your site converts",
      description: "because real customer stories do the heavy lifting in your sales funnel."
    },
    {
      icon: "🧠",
      title: "You stop second-guessing every marketing decision",
      description: "because you've got strategy, messaging, and a team that gets it."
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-6">
            What if growth felt focused, strategic—and even kind of fun?
          </h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 text-center">
              <div className="text-6xl mb-6">{outcome.icon}</div>
              <h3 className="text-xl font-semibold text-hero-foreground mb-4">
                {outcome.title}
              </h3>
              <p className="text-hero-foreground/80 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* New Paradigm */}
        <div className="bg-hero/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-6">
            You don't need to become a full-time marketer to grow your startup.
          </h3>
          <p className="text-xl text-hero-foreground/90 leading-relaxed max-w-4xl mx-auto mb-8">
            You just need a partner who understands early-stage SaaS, founder overload, 
            and how to turn <span className="font-semibold text-primary">proof into pipeline.</span>
          </p>
          
          <Button variant="cta" size="xl">
            Start Building Pipeline
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;