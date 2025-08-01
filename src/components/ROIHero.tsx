import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, TrendingUp } from "lucide-react";

export const ROIHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white py-24">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Bot className="h-12 w-12 text-primary-glow" />
            <h1 className="text-5xl font-bold tracking-tight">
              AI Copilot ROI Calculator
            </h1>
          </div>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Measure the business impact of AI Copilot implementation. 
            Calculate productivity gains, cost savings, and revenue uplift with our comprehensive ROI analysis tool.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-foreground hover:bg-white/90">
              <TrendingUp className="mr-2 h-5 w-5" />
              Calculate ROI
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              View Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">40%</div>
              <div className="text-white/80">Average Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">60%</div>
              <div className="text-white/80">Faster Development Cycles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-glow mb-2">25%</div>
              <div className="text-white/80">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};