import { Bot, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-8 w-8 text-primary-glow" />
              <span className="text-2xl font-bold">AI Copilot ROI</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Professional ROI analysis tool for AI Copilot implementation. 
              Make data-driven decisions with comprehensive business impact metrics.
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@aicopilotroi.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary-glow transition-colors">ROI Calculator</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Implementation Guide</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary-glow transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 AI Copilot ROI Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};