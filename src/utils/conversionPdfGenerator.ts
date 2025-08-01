import { formatCurrency, formatNumber } from "./roiCalculator";

interface ConversionResults {
  additionalConversions: number;
  originalConversions: number;
  newConversions: number;
  monthlyRevenue: number;
  annualRevenue: number;
}

interface ConversionPDFData {
  monthlyTrials: number;
  currentConversion: number;
  conversionUplift: number;
  monthlyArpu: number;
  results: ConversionResults;
  productFruitsPlanPrice: number;
}

export const generateAndDownloadConversionPDF = (data: ConversionPDFData) => {
  // This is a simplified PDF generation function
  console.log("Conversion PDF would be generated with data:", data);
  
  // Simulate PDF download
  const element = document.createElement('a');
  const file = new Blob([`
    Product Fruits Revenue Uplift Report
    
    Monthly Trials: ${formatNumber(data.monthlyTrials)}
    Current Conversion Rate: ${data.currentConversion}%
    Conversion Uplift: ${data.conversionUplift}%
    Monthly ARPU: ${formatCurrency(data.monthlyArpu)}
    Additional Conversions: ${formatNumber(data.results.additionalConversions)}
    Monthly Revenue Increase: ${formatCurrency(data.results.monthlyRevenue)}
    Annual Revenue Increase: ${formatCurrency(data.results.annualRevenue)}
  `], {type: 'text/plain'});
  
  element.href = URL.createObjectURL(file);
  element.download = 'product-fruits-conversion-report.txt';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};