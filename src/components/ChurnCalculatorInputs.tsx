import React from "react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { CUSTOMER_STEPS } from "@/utils/customerSteps";
import { HelpCircle } from "lucide-react";
interface ChurnCalculatorInputsProps {
  customerCount: number;
  setCustomerCount: React.Dispatch<React.SetStateAction<number>>;
  averageRevenuePerCustomer: number;
  setAverageRevenuePerCustomer: React.Dispatch<React.SetStateAction<number>>;
  currentChurnRate: number;
  setCurrentChurnRate: React.Dispatch<React.SetStateAction<number>>;
  handlingTime: number;
  setHandlingTime: React.Dispatch<React.SetStateAction<number>>;
  customerSliderIndex: number;
  setSliderByIndex: (index: number) => void;
  handleCustomerCountInputChange: (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => void;
  handleInputChange: (setter: React.Dispatch<React.SetStateAction<number>>, value: string, min: number, max: number) => void;
}
const InfoTooltip = ({
  content
}: {
  content: string;
}) => <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="cursor-help">
        <HelpCircle className="h-4 w-4 text-gray-400" />
      </TooltipTrigger>
      <TooltipContent side="right" align="start" className="max-w-[280px]">
        <p className="text-white text-opacity-95">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>;
const ChurnCalculatorInputs = ({
  customerCount,
  setCustomerCount,
  averageRevenuePerCustomer,
  setAverageRevenuePerCustomer,
  currentChurnRate,
  setCurrentChurnRate,
  handlingTime,
  setHandlingTime,
  customerSliderIndex,
  setSliderByIndex,
  handleCustomerCountInputChange,
  handleInputChange
}: ChurnCalculatorInputsProps) => {
  return <>
      <CardHeader>
        <CardTitle>Enter your data</CardTitle>
        <CardDescription>We'll use this to calculate your support AI Copilot impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="customer-count" className="calculator-label">Number of monthly customer conversations</Label>
            <InfoTooltip content="Total number of active customers in your database" />
          </div>
          <div className="flex items-center gap-4">
            <Slider id="customer-count" min={0} max={CUSTOMER_STEPS.length - 1} step={1} value={[customerSliderIndex]} onValueChange={([index]) => setSliderByIndex(index)} className="flex-1" />
            <Input type="number" value={customerCount} min={CUSTOMER_STEPS[0]} max={CUSTOMER_STEPS[CUSTOMER_STEPS.length - 1]} step="100" onChange={e => handleCustomerCountInputChange(setCustomerCount, e.target.value)} className="w-20" />
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="revenue-per-customer" className="calculator-label">Resolved conversations (resolutions) with Copilot (%)</Label>
            <InfoTooltip content="Percentage of conversations resolved by the AI Copilot without human intervention" />
          </div>
          <div className="flex items-center gap-4">
            <Slider id="revenue-per-customer" min={50} max={80} step={1} value={[averageRevenuePerCustomer]} onValueChange={value => setAverageRevenuePerCustomer(value[0])} className="flex-1" />
            <div className="relative">
              <Input type="number" value={averageRevenuePerCustomer} min={50} max={80} step="1" onChange={e => handleInputChange(setAverageRevenuePerCustomer, e.target.value, 50, 80)} className="w-20 pr-6" />
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground">%</span>
            </div>
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="churn-rate" className="calculator-label">Live agent hourly cost (USD/hour)</Label>
            <InfoTooltip content="Average cost per hour for live agent support" />
          </div>
          <div className="flex items-center gap-4">
            <Slider id="churn-rate" min={10} max={100} step={1} value={[currentChurnRate]} onValueChange={value => setCurrentChurnRate(value[0])} className="flex-1" />
            <Input type="number" value={currentChurnRate} min={10} max={100} step="1" onChange={e => handleInputChange(setCurrentChurnRate, e.target.value, 10, 100)} className="w-20" />
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="handling-time" className="calculator-label">Average handling time per conversation (minutes)</Label>
            <InfoTooltip content="Average time spent handling each customer conversation" />
          </div>
          <div className="flex items-center gap-4">
            <Slider id="handling-time" min={7} max={60} step={1} value={[handlingTime]} onValueChange={value => setHandlingTime(value[0])} className="flex-1" />
            <div className="relative">
              <Input type="number" value={handlingTime} min={7} max={60} step="1" onChange={e => handleInputChange(setHandlingTime, e.target.value, 7, 60)} className="w-20 pr-8" />
              
            </div>
          </div>
        </div>
      </CardContent>
    </>;
};
export default ChurnCalculatorInputs;