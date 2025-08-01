import { Card, CardContent } from "@/components/ui/card";
import ChurnCalculator from "@/components/ChurnCalculator";
const Index = () => {
  return <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 bg-[fffffff] bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl text-gray-900 mb-4 font-semibold md:text-4xl">Calculate your Support Copilot impact</h2>
              <p className="whitespace-nowrap overflow-x-auto mx-auto text-slate-950 px-0 text-lg font-normal">Automatically resolve repetitive support questions with Copilot</p>
            </div>

            <div className="mb-8">
              <div className="border border-[#03bf92] rounded-lg p-4 mb-8 flex items-start bg-[#03bf92]/[0.06]">
                <div>
                  <p className="text-sm text-gray-800">
                    Product Fruits Copilot resolves 50 to 80% of support queries before they ever reach your live agents.
                  </p>
                </div>
              </div>

              <ChurnCalculator />
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default Index;