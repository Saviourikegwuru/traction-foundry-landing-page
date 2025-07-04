import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import OutcomeSection from "@/components/OutcomeSection";
import ProductSection from "@/components/ProductSection";
import PricingSection from "@/components/PricingSection";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSection />
      <OutcomeSection />
      <ProductSection />
      <PricingSection />
      <StickyNav />
    </div>
  );
};

export default Index;
