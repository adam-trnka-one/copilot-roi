import { formatCurrency, formatNumber } from "./churnCalculator";

interface PDFData {
  customerCount: number;
  averageRevenuePerCustomer: number;
  currentChurnRate: number;
  results: {
    monthlySavings: number;
  };
  productFruitsPlanPrice: number;
}

export const generateAndDownloadPDF = (data: PDFData) => {
  // This is a simplified PDF generation function
  // In a real implementation, you would use a PDF library like jsPDF
  console.log("PDF would be generated with data:", data);
  
  // Simulate PDF download
  const element = document.createElement('a');
  const file = new Blob([`
    Product Fruits Business Impact Report
    
    Customer Count: ${formatNumber(data.customerCount)}
    Average Revenue Per Customer: ${formatCurrency(data.averageRevenuePerCustomer)}
    Current Churn Rate: ${data.currentChurnRate}%
    Monthly Savings: ${formatCurrency(data.results.monthlySavings)}
    Product Fruits Plan Price: ${formatCurrency(data.productFruitsPlanPrice)}
  `], {type: 'text/plain'});
  
  element.href = URL.createObjectURL(file);
  element.download = 'product-fruits-churn-report.txt';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};