import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Code, Zap, Shield, Lightbulb } from "lucide-react";

const productivityData = [
  { month: "Jan", baseline: 100, withCopilot: 125 },
  { month: "Feb", baseline: 100, withCopilot: 130 },
  { month: "Mar", baseline: 100, withCopilot: 140 },
  { month: "Apr", baseline: 100, withCopilot: 142 },
  { month: "May", baseline: 100, withCopilot: 145 },
  { month: "Jun", baseline: 100, withCopilot: 148 }
];

const savingsData = [
  { category: "Development Time", value: 45, color: "hsl(213, 94%, 68%)" },
  { category: "Code Review", value: 25, color: "hsl(142, 76%, 36%)" },
  { category: "Bug Fixes", value: 20, color: "hsl(213, 94%, 85%)" },
  { category: "Documentation", value: 10, color: "hsl(210, 20%, 96%)" }
];

const benefitsData = [
  { benefit: "Faster Coding", improvement: "40%" },
  { benefit: "Better Code Quality", improvement: "35%" },
  { benefit: "Reduced Errors", improvement: "30%" },
  { benefit: "Enhanced Learning", improvement: "50%" }
];

export const MetricsOverview = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">AI Copilot Impact Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world data showing how AI Copilot transforms development productivity and business outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Productivity Trend Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Productivity Growth Over Time
              </CardTitle>
              <CardDescription>
                Comparing baseline productivity vs. AI Copilot enhanced performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={productivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="baseline" 
                    stroke="hsl(210, 16%, 50%)" 
                    strokeWidth={2}
                    name="Baseline"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="withCopilot" 
                    stroke="hsl(213, 94%, 68%)" 
                    strokeWidth={3}
                    name="With AI Copilot"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Time Savings Breakdown */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-success" />
                Time Savings Distribution
              </CardTitle>
              <CardDescription>
                Where AI Copilot delivers the most impact
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={savingsData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ category, value }) => `${category}: ${value}%`}
                  >
                    {savingsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit, index) => {
            const icons = [Code, Zap, Shield, Lightbulb];
            const Icon = icons[index];
            
            return (
              <Card key={benefit.benefit} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold text-success">
                      {benefit.improvement}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.benefit}</h3>
                  <p className="text-sm text-muted-foreground">
                    Average improvement reported by development teams using AI Copilot
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ROI Projection Chart */}
        <Card className="shadow-medium mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-success" />
              3-Year ROI Projection
            </CardTitle>
            <CardDescription>
              Expected return on investment over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={[
                { year: "Year 1", investment: 100000, savings: 150000, netROI: 50000 },
                { year: "Year 2", investment: 50000, savings: 180000, netROI: 130000 },
                { year: "Year 3", investment: 50000, savings: 200000, netROI: 150000 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Bar dataKey="investment" fill="hsl(0, 84.2%, 60.2%)" name="Investment" />
                <Bar dataKey="savings" fill="hsl(213, 94%, 68%)" name="Savings" />
                <Bar dataKey="netROI" fill="hsl(142, 76%, 36%)" name="Net ROI" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};