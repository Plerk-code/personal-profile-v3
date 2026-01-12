import React, { useEffect, useState } from 'react';
import { TrendingUp, Users, DollarSign, Globe2, Building2, Sparkles } from 'lucide-react';

const MarketOpportunity = () => {
  const [counts, setCounts] = useState({
    marketSize: 0,
    growth: 0,
    enterprises: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      marketSize: 1.3,
      growth: 45,
      enterprises: 5000,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        marketSize: Number((targets.marketSize * progress).toFixed(2)),
        growth: Math.floor(targets.growth * progress),
        enterprises: Math.floor(targets.enterprises * progress),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const segments = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise',
      description: 'Large corporations seeking competitive advantage through AI transformation',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mid-Market',
      description: 'Growing companies ready to scale with AI-powered automation',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Startups',
      description: 'Tech-forward ventures building AI-native products and services',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const advantages = [
    {
      title: 'First-Mover Advantage',
      description: 'Limited enterprise-focused AI implementation partners in African markets',
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: 'Proven Methodology',
      description: '50+ successful AI implementations with measurable business outcomes',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Local Expertise',
      description: 'Deep understanding of African business context, regulatory environment, and market dynamics',
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      title: 'Scalable Model',
      description: 'Repeatable frameworks and IP that enable rapid expansion across sectors and geographies',
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  return (
    <section id="market" className="py-24 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Opportunity</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Positioned at the intersection of Africa's digital transformation and the global AI revolution
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Market Size Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <DollarSign className="w-12 h-12 text-cyan-400 mb-4" />
            <div className="text-5xl font-bold mb-2">${counts.marketSize}B</div>
            <div className="text-gray-300 text-lg">African AI Market (2025)</div>
            <div className="text-sm text-cyan-400 mt-2">Growing to $7.2B by 2030</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
            <div className="text-5xl font-bold mb-2">{counts.growth}%</div>
            <div className="text-gray-300 text-lg">Annual Growth Rate</div>
            <div className="text-sm text-green-400 mt-2">Fastest growing tech sector</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <div className="text-5xl font-bold mb-2">{counts.enterprises.toLocaleString()}+</div>
            <div className="text-gray-300 text-lg">Target Enterprises</div>
            <div className="text-sm text-purple-400 mt-2">Across South Africa & Nigeria</div>
          </div>
        </div>

        {/* Market Context */}
        <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-3xl p-8 md:p-12 mb-16 border border-white/10">
          <h3 className="text-3xl font-bold mb-6">The Opportunity</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Market Drivers</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Rapid digital transformation across African enterprises</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Growing awareness of AI competitive advantage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Limited supply of experienced AI implementation partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Increasing cloud infrastructure availability and affordability</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Growth Projections</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Enterprise AI adoption expected to reach 75% by 2027</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">AI investment in Africa projected to exceed $10B by 2030</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Financial services and retail leading AI adoption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">Multinational expansion creating additional opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Segments */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Target Customer Segments</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${segment.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {segment.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{segment.title}</h4>
                <p className="text-gray-300 leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Competitive Advantages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{advantage.title}</h4>
                    <p className="text-gray-300">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
