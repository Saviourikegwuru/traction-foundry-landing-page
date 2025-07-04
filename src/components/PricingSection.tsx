import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PricingSection = () => {
  const pricingData = [
    {
      package: "Starter",
      description: "2 content assets + 1 outreach campaign",
      priceRange: "$2,000–$3,500/month"
    },
    {
      package: "Growth", 
      description: "Full content stack + multichannel outbound",
      priceRange: "$5,000–$8,000/month"
    },
    {
      package: "Scale",
      description: "Done-for-you content + SDR + CRM systems", 
      priceRange: "$10,000–$15,000/month"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-hero-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-hero-foreground/80 max-w-2xl mx-auto">
            Choose the package that fits your stage and growth goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Table className="bg-hero/50 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
            <TableHeader>
              <TableRow className="border-b border-white/20 hover:bg-transparent">
                <TableHead className="text-hero-foreground font-semibold text-lg py-6 px-8">
                  Package
                </TableHead>
                <TableHead className="text-hero-foreground font-semibold text-lg py-6 px-8">
                  Description
                </TableHead>
                <TableHead className="text-hero-foreground font-semibold text-lg py-6 px-8 text-right">
                  Price Range
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((tier, index) => (
                <TableRow 
                  key={tier.package} 
                  className="border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors"
                >
                  <TableCell className="py-6 px-8">
                    <span className="font-bold text-hero-foreground text-lg">
                      {tier.package}
                    </span>
                  </TableCell>
                  <TableCell className="py-6 px-8 text-hero-foreground/90">
                    {tier.description}
                  </TableCell>
                  <TableCell className="py-6 px-8 text-right">
                    <span className="font-semibold text-primary text-lg">
                      {tier.priceRange}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="text-center mt-12">
          <p className="text-hero-foreground/80 mb-6">
            Ready to discuss which package fits your needs?
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-lg transform hover:scale-105 font-semibold text-base h-11 rounded-md px-8 transition-all duration-300">
            Schedule Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;