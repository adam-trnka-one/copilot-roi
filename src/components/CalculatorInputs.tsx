import React from "react";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { TICKET_STEPS } from "@/utils/ticketSteps";
import { HelpCircle } from "lucide-react";

interface CalculatorInputsProps {
  ticketsPerMonth: number;
  setTicketsPerMonth: React.Dispatch<React.SetStateAction<number>>;
  timePerTicket: number;
  setTimePerTicket: React.Dispatch<React.SetStateAction<number>>;
  hourlyRate: number;
  setHourlyRate: React.Dispatch<React.SetStateAction<number>>;
  ticketReduction: number;
  onInputChange: (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => void;
}

const InfoTooltip = ({ content }: { content: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="cursor-help">
        <HelpCircle className="h-4 w-4 text-gray-400" />
      </TooltipTrigger>
      <TooltipContent side="right" align="start" className="max-w-[280px]">
        <p className="text-white text-opacity-95">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const CalculatorInputs = ({
  ticketsPerMonth,
  setTicketsPerMonth,
  timePerTicket,
  setTimePerTicket,
  hourlyRate,
  setHourlyRate,
  ticketReduction,
  onInputChange
}: CalculatorInputsProps) => {
  const ticketSliderIndex = TICKET_STEPS.findIndex(v => v === ticketsPerMonth);

  return (
    <>
      <CardHeader>
        <CardTitle>Enter your data</CardTitle>
        <CardDescription>We'll use this to calculate your business impact</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="tickets-per-month" className="calculator-label">
              Support tickets per month
            </Label>
            <InfoTooltip content="Average number of support tickets your team handles monthly" />
          </div>
          <div className="flex items-center gap-4">
            <Slider
              id="tickets-per-month"
              min={0}
              max={TICKET_STEPS.length - 1}
              step={1}
              value={[ticketSliderIndex]}
              onValueChange={([index]) => setTicketsPerMonth(TICKET_STEPS[index])}
              className="flex-1"
            />
            <Input
              type="number"
              value={ticketsPerMonth}
              min={TICKET_STEPS[0]}
              max={TICKET_STEPS[TICKET_STEPS.length - 1]}
              onChange={(e) => onInputChange(setTicketsPerMonth, e.target.value)}
              className="w-24"
            />
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="time-per-ticket" className="calculator-label">
              Average time per ticket (minutes)
            </Label>
            <InfoTooltip content="Average time your support team spends on each ticket" />
          </div>
          <div className="flex items-center gap-4">
            <Slider
              id="time-per-ticket"
              min={5}
              max={120}
              step={5}
              value={[timePerTicket]}
              onValueChange={(value) => setTimePerTicket(value[0])}
              className="flex-1"
            />
            <Input
              type="number"
              value={timePerTicket}
              min={5}
              max={120}
              step="5"
              onChange={(e) => {
                const value = parseInt(e.target.value) || 5;
                setTimePerTicket(Math.min(Math.max(value, 5), 120));
              }}
              className="w-24"
            />
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="hourly-rate" className="calculator-label">
              Support team hourly rate (USD)
            </Label>
            <InfoTooltip content="Average hourly cost of your support team members" />
          </div>
          <div className="flex items-center gap-4">
            <Slider
              id="hourly-rate"
              min={15}
              max={100}
              step={5}
              value={[hourlyRate]}
              onValueChange={(value) => setHourlyRate(value[0])}
              className="flex-1"
            />
            <Input
              type="number"
              value={hourlyRate}
              min={15}
              max={100}
              step="5"
              onChange={(e) => {
                const value = parseInt(e.target.value) || 15;
                setHourlyRate(Math.min(Math.max(value, 15), 100));
              }}
              className="w-24"
            />
          </div>
        </div>

        <div className="calculator-input">
          <div className="flex items-center justify-between">
            <Label htmlFor="ticket-reduction" className="calculator-label">
              Expected ticket reduction (%)
            </Label>
            <InfoTooltip content="Based on our customers' average improvements in support ticket volumes" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500">{ticketReduction}%</span>
          </div>
        </div>
      </CardContent>
    </>
  );
};

export default CalculatorInputs;