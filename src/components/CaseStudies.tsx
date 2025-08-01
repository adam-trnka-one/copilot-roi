import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, TrendingUp, Clock } from "lucide-react";

const caseStudies = [
  {
    company: "TechCorp Solutions",
    industry: "Software Development",
    size: "500+ developers",
    results: {
      productivityGain: "45%",
      timeToMarket: "6 months faster",
      costSavings: "$2.1M annually",
      roi: "340%"
    },
    challenges: [
      "Slow development cycles",
      "High developer onboarding time",
      "Inconsistent code quality"
    ],
    outcomes: [
      "Reduced time-to-market by 6 months",
      "Improved code quality scores by 35%",
      "New developer productivity up 60% faster"
    ]
  },
  {
    company: "FinanceFlow Inc",
    industry: "Financial Services",
    size: "150 developers",
    results: {
      productivityGain: "38%",
      timeToMarket: "4 months faster",
      costSavings: "$850K annually",
      roi: "280%"
    },
    challenges: [
      "Complex regulatory compliance",
      "Legacy system integration",
      "High development costs"
    ],
    outcomes: [
      "Automated 70% of compliance checks",
      "Reduced integration time by 50%",
      "Lower development costs by 25%"
    ]
  },
  {
    company: "StartupScale",
    industry: "E-commerce",
    size: "25 developers",
    results: {
      productivityGain: "52%",
      timeToMarket: "3 months faster",
      costSavings: "$120K annually",
      roi: "420%"
    },
    challenges: [
      "Limited development resources",
      "Rapid feature development needs",
      "Budget constraints"
    ],
    outcomes: [
      "Doubled feature delivery rate",
      "Improved MVP quality",
      "Extended runway by 8 months"
    ]
  }
];

export const CaseStudies = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations across different industries have transformed their development processes with AI Copilot.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <Badge variant="outline">{study.industry}</Badge>
                </div>
                <CardTitle className="text-xl">{study.company}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {study.size}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-primary/10 p-3 rounded-lg border border-primary/20">
                    <div className="text-sm text-primary font-medium">Productivity</div>
                    <div className="text-xl font-bold">{study.results.productivityGain}</div>
                  </div>
                  <div className="bg-gradient-success/10 p-3 rounded-lg border border-success/20">
                    <div className="text-sm text-success font-medium">ROI</div>
                    <div className="text-xl font-bold">{study.results.roi}</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-sm font-medium flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Time Saved
                    </div>
                    <div className="text-lg font-bold">{study.results.timeToMarket}</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-sm font-medium flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Savings
                    </div>
                    <div className="text-lg font-bold">{study.results.costSavings}</div>
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold mb-3 text-destructive">Challenges</h4>
                  <ul className="space-y-2">
                    {study.challenges.map((challenge, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="font-semibold mb-3 text-success">Outcomes</h4>
                  <ul className="space-y-2">
                    {study.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-success mt-1">•</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-8">Aggregate Impact Across All Case Studies</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">42%</div>
              <div className="text-muted-foreground">Average Productivity Gain</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">$3M+</div>
              <div className="text-muted-foreground">Total Annual Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">13 months</div>
              <div className="text-muted-foreground">Faster Time-to-Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">347%</div>
              <div className="text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};