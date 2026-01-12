import React from 'react';
import { Target, DollarSign, TrendingUp, Shield, Rocket, Users, Globe2, Zap } from 'lucide-react';

const WhyInvest = () => {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Validated Product-Market Fit',
      description: '50+ AI solutions delivered across multiple industries with proven business impact and client satisfaction',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'High-Growth Market',
      description: 'African AI market growing at 45% CAGR, with limited competition and massive untapped enterprise demand',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Experienced Leadership',
      description: '16+ years of enterprise transformation experience with proven track record at top-tier organizations',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Scalable Business Model',
      description: 'Repeatable frameworks and IP enable rapid expansion with high margins and predictable revenue',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const useOfFunds = [
    { category: 'Team Expansion', percentage: 40, description: 'Senior AI engineers, sales, and delivery leads' },
    { category: 'Sales & Marketing', percentage: 30, description: 'Enterprise pipeline development and brand building' },
    { category: 'Product Development', percentage: 20, description: 'Platform tools and accelerators for faster delivery' },
    { category: 'Operations', percentage: 10, description: 'Infrastructure, legal, and working capital' },
  ];

  const projections = [
    { year: 'Year 1', revenue: 'R5M', clients: '10-15', margin: '40%' },
    { year: 'Year 2', revenue: 'R15M', clients: '30-40', margin: '45%' },
    { year: 'Year 3', revenue: 'R35M', clients: '60-80', margin: '50%' },
  ];

  return (
    <section id="invest" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Invest Now</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A compelling opportunity to capture Africa's AI transformation wave
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Investment Thesis */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Use of Funds */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Use of Funds</h3>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Chart Visualization */}
              <div className="space-y-4">
                {useOfFunds.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{item.category}</span>
                      <span className="text-2xl font-bold text-blue-600">{item.percentage}%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 group-hover:opacity-80"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Fundraising Details */}
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  <h4 className="text-2xl font-bold text-gray-900">Seed Round</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Target Raise</div>
                    <div className="text-3xl font-bold text-blue-600">R5-8M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Valuation</div>
                    <div className="text-2xl font-bold text-gray-900">R25-35M</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Equity Offered</div>
                    <div className="text-2xl font-bold text-gray-900">15-25%</div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-2">Minimum Investment</div>
                    <div className="text-xl font-bold text-gray-900">R500K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Projections */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">3-Year Growth Trajectory</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projections.map((projection, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 text-white ${
                  index === 1
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 transform scale-105 shadow-2xl'
                    : 'bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg'
                }`}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold mb-2 opacity-90">{projection.year}</div>
                  <div className="text-4xl font-bold mb-6">{projection.revenue}</div>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs opacity-80 mb-1">Enterprise Clients</div>
                      <div className="text-xl font-bold">{projection.clients}</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <div className="text-xs opacity-80 mb-1">Gross Margin</div>
                      <div className="text-xl font-bold">{projection.margin}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exit Strategy & Risk Mitigation */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Exit Strategy */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-green-600" />
              <h4 className="text-2xl font-bold text-gray-900">Exit Strategy</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Strategic Acquisition</div>
                  <p className="text-sm text-gray-700">Target by global AI platforms or enterprise software companies (5-7 years)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Series A+ Growth</div>
                  <p className="text-sm text-gray-700">Scale to larger funding rounds with institutional investors</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Secondary Market</div>
                  <p className="text-sm text-gray-700">Liquidity opportunities through share buybacks or secondary sales</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Risk Mitigation */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <h4 className="text-2xl font-bold text-gray-900">Risk Mitigation</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Proven Delivery Model</div>
                  <p className="text-sm text-gray-700">50+ successful implementations demonstrate repeatable execution</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Diversified Client Base</div>
                  <p className="text-sm text-gray-700">Multiple industries and sectors reduce concentration risk</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Experienced Leadership</div>
                  <p className="text-sm text-gray-700">Deep enterprise relationships and proven delivery track record</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
