import React from "react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { formatCurrency, formatNumber } from "@/utils/churnCalculator";
interface ChurnCalculatorResultsProps {
  customerCount: number;
  currentChurnRate: number;
  results: {
    monthlySavings: number;
  } | null;
  productFruitsPlanPrice: number;
  averageHandlingTime: number;
  averageRevenuePerCustomer: number;
}
const ChurnCalculatorResults = ({
  customerCount,
  currentChurnRate,
  results,
  productFruitsPlanPrice,
  averageHandlingTime,
  averageRevenuePerCustomer
}: ChurnCalculatorResultsProps) => {
  if (!results) return null;

  const getXPrice = (conversations: number): number => {
    if (conversations <= 2000) return -149;
    if (conversations <= 3000) return -224;
    if (conversations <= 5000) return -262;
    if (conversations <= 10000) return -374;
    if (conversations <= 20000) return -449;
    return -449; // fallback for > 20000
  };

  const conversationsResolvedByCopilot = Math.round((customerCount * averageRevenuePerCustomer) / 100);
  const copilotMonthlyCost = (conversationsResolvedByCopilot * 0.69) + getXPrice(customerCount);

  const handleDownloadPDF = () => {
    // This would trigger the PDF download functionality
    console.log("Download PDF clicked");
  };
  return <>
      <CardHeader>
        <CardTitle>Your Support Cost Savings</CardTitle>
        <CardDescription>Based on your data, here's the business impact of Support Copilot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600 font-normal">Conversations resolved by Copilot</span>
              <span className="font-medium">
                {formatNumber(Math.round((customerCount * averageRevenuePerCustomer) / 100))}
              </span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Human agent hours saved</span>
              <span className="font-normal">{formatNumber((Math.round((customerCount * averageRevenuePerCustomer) / 100) * averageHandlingTime) / 60)}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Copilot monthly cost</span>
              <span className="font-normal text-[#ff4747]">{formatCurrency(copilotMonthlyCost)}</span>
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm text-gray-600">Labor cost savings</span>
              <span className="font-medium">{formatCurrency(((Math.round((customerCount * averageRevenuePerCustomer) / 100) * averageHandlingTime) / 60) * currentChurnRate)}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col justify-center items-center space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-500">Your monthly savings</p>
              <p className="text-[28pt] font-bold text-[#03BF92]">
                {formatCurrency(((Math.round((customerCount * averageRevenuePerCustomer) / 100) * averageHandlingTime) / 60) * currentChurnRate - productFruitsPlanPrice)}
              </p>
            </div>
            <Button onClick={handleDownloadPDF} className="bg-[#FF751D] hover:bg-[#E05A00] text-white flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </>;
};
export default ChurnCalculatorResults;