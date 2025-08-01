import { ROIHero } from "@/components/ROIHero";
import { ROICalculator } from "@/components/ROICalculator";
import { MetricsOverview } from "@/components/MetricsOverview";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ROIHero />
      <ROICalculator />
      <MetricsOverview />
      <CaseStudies />
      <Footer />
    </div>
  );
};

export default Index;
