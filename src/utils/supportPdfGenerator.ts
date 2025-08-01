import { formatCurrency, formatNumber } from "./roiCalculator";
import { ROIResults } from "./roiCalculator";

interface SupportPDFData {
  ticketsPerMonth: number;
  timePerTicket: number;
  hourlyRate: number;
  ticketReduction: number;
  userCount: number;
  results: ROIResults;
  monthlyPaymentTier: number;
}

export const generateAndDownloadSupportPDF = (data: SupportPDFData) => {
  // This is a simplified PDF generation function
  console.log("Support PDF would be generated with data:", data);
  
  // Simulate PDF download
  const element = document.createElement('a');
  const file = new Blob([`
    Product Fruits Support Cost Reduction Report
    
    Tickets Per Month: ${formatNumber(data.ticketsPerMonth)}
    Time Per Ticket: ${data.timePerTicket} minutes
    Hourly Rate: ${formatCurrency(data.hourlyRate)}
    Ticket Reduction: ${data.ticketReduction}%
    Monthly Savings: ${formatCurrency(data.results.estimatedSavings.monthly)}
    Annual Savings: ${formatCurrency(data.results.estimatedSavings.annual)}
  `], {type: 'text/plain'});
  
  element.href = URL.createObjectURL(file);
  element.download = 'product-fruits-support-report.txt';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};