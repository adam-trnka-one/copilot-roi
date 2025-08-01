import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, Users, DollarSign, Clock, TrendingUp } from "lucide-react";

export const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    developers: 10,
    avgSalary: 120000,
    hoursPerWeek: 40,
    productivityGain: 25,
    copilotCost: 19,
    implementationCost: 50000
  });

  const [results, setResults] = useState({
    annualSavings: 0,
    monthlyROI: 0,
    paybackMonths: 0,
    productivityHours: 0
  });

  const calculateROI = () => {
    const hourlyRate = inputs.avgSalary / (52 * inputs.hoursPerWeek);
    const productivityHoursPerWeek = (inputs.hoursPerWeek * inputs.productivityGain) / 100;
    const productivityHoursPerYear = productivityHoursPerWeek * 52 * inputs.developers;
    const annualSavings = productivityHoursPerYear * hourlyRate;
    
    const annualCopilotCost = inputs.copilotCost * 12 * inputs.developers;
    const totalFirstYearCost = annualCopilotCost + inputs.implementationCost;
    
    const netAnnualSavings = annualSavings - totalFirstYearCost;
    const monthlyROI = (netAnnualSavings / totalFirstYearCost) * 100 / 12;
    const paybackMonths = totalFirstYearCost / (annualSavings / 12);

    setResults({
      annualSavings: Math.round(annualSavings),
      monthlyROI: Math.round(monthlyROI * 100) / 100,
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      productivityHours: Math.round(productivityHoursPerYear)
    });
  };

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [key]: parseFloat(value) || 0
    }));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Calculate Your ROI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your organization's details to get a personalized ROI analysis for AI Copilot implementation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Organization Details
              </CardTitle>
              <CardDescription>
                Provide your current team and cost information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="developers">Number of Developers</Label>
                  <Input
                    id="developers"
                    type="number"
                    value={inputs.developers}
                    onChange={(e) => handleInputChange('developers', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="salary">Average Annual Salary ($)</Label>
                  <Input
                    id="salary"
                    type="number"
                    value={inputs.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="hours">Hours per Week</Label>
                  <Input
                    id="hours"
                    type="number"
                    value={inputs.hoursPerWeek}
                    onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="productivity">Productivity Gain (%)</Label>
                  <Input
                    id="productivity"
                    type="number"
                    value={inputs.productivityGain}
                    onChange={(e) => handleInputChange('productivityGain', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="copilot">Copilot Cost ($/month/user)</Label>
                  <Input
                    id="copilot"
                    type="number"
                    value={inputs.copilotCost}
                    onChange={(e) => handleInputChange('copilotCost', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="implementation">Implementation Cost ($)</Label>
                  <Input
                    id="implementation"
                    type="number"
                    value={inputs.implementationCost}
                    onChange={(e) => handleInputChange('implementationCost', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button onClick={calculateROI} className="w-full bg-gradient-primary hover:opacity-90">
                Calculate ROI
              </Button>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                ROI Analysis Results
              </CardTitle>
              <CardDescription>
                Your personalized AI Copilot business impact
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-success/10 p-4 rounded-lg border border-success/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-success" />
                    <span className="font-medium text-success">Annual Savings</span>
                  </div>
                  <div className="text-2xl font-bold">
                    ${results.annualSavings.toLocaleString()}
                  </div>
                </div>

                <div className="bg-gradient-primary/10 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="font-medium text-primary">Monthly ROI</span>
                  </div>
                  <div className="text-2xl font-bold">
                    {results.monthlyROI}%
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Payback Period</span>
                  </div>
                  <div className="text-2xl font-bold">
                    {results.paybackMonths} months
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">Hours Saved/Year</span>
                  </div>
                  <div className="text-2xl font-bold">
                    {results.productivityHours.toLocaleString()}
                  </div>
                </div>
              </div>

              {results.annualSavings > 0 && (
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <h4 className="font-semibold text-success mb-2">Key Insights</h4>
                  <ul className="text-sm space-y-1 text-success/80">
                    <li>• ROI positive in {results.paybackMonths} months</li>
                    <li>• {results.productivityHours} additional productive hours annually</li>
                    <li>• {Math.round(results.productivityHours / inputs.developers)} hours saved per developer</li>
                    <li>• ${Math.round(results.annualSavings / inputs.developers).toLocaleString()} savings per developer</li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};