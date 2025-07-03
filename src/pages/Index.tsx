import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import OutcomeSection from "@/components/OutcomeSection";
import ProductSection from "@/components/ProductSection";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSection />
      <OutcomeSection />
      <ProductSection />
      <StickyNav />
    </div>
  );
};

export default Index;
