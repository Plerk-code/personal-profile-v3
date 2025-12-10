import React from 'react';
import { Rocket } from 'lucide-react';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Rocket className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Portfolio</h2>
          </div>
          <div className="rounded-xl border border-blue-500/20 bg-blue-900/10 p-8 text-center">
            <p className="text-lg text-gray-300">Portfolio sections have been removed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
