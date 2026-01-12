import React from 'react';
import { Brain, Rocket, Lightbulb, TrendingUp, Cpu, Zap, Shield, Target } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Digital Strategy',
      description: 'Comprehensive transformation strategies aligned with business objectives and market opportunities',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Agile Delivery',
      description: 'Proven delivery frameworks that accelerate time-to-value and reduce implementation risk',
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Enterprise Architecture',
      description: 'TOGAF-certified approach ensuring seamless integration with existing systems and workflows',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Risk Management',
      description: 'Proactive identification and mitigation of program risks throughout delivery lifecycle',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Enterprise-grade architectures designed to grow with your business needs',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Measurable Outcomes',
      description: 'Business-focused approach with clear KPIs, ROI tracking, and success metrics',
    },
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Approach</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  African enterprises face a critical gap in digital transformation execution. While strategic ambition is high, most organizations lack the experienced delivery leadership, proven methodologies, and cross-functional expertise needed to successfully navigate complex enterprise programs. Traditional consulting offers strategy without hands-on execution, while vendors provide technology without business context.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The result? Stalled initiatives, budget overruns, missed deadlines, and growing competitive disadvantage as digital-first competitors accelerate ahead.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  PLERK delivers end-to-end program delivery that bridges strategy and execution. We combine 16+ years of enterprise experience, TOGAF-certified architecture expertise, and proven agile methodologies to deliver complex transformation programs that create measurable business value.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Unlike traditional consultancies, we don't just advise—we lead delivery, manage stakeholders, navigate complexity, and transfer knowledge. Our track record includes R1B+ in successfully delivered programs across finance, retail, and technology sectors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Why We're Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">Strategy</div>
              <p className="text-lg">Enterprise architecture and transformation roadmaps</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white transform scale-105 shadow-2xl">
              <div className="text-5xl font-bold mb-2">+ Execution</div>
              <p className="text-lg">Hands-on delivery leadership from concept to release</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 text-white">
              <div className="text-5xl font-bold mb-2">+ Transfer</div>
              <p className="text-lg">Knowledge transfer for sustained internal capability</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Differentiators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Representation */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Proven Delivery Framework</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold mb-2">Discovery & Planning</h4>
                <p className="text-sm text-gray-300">Stakeholder alignment, requirements, and delivery roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold mb-2">Agile Execution</h4>
                <p className="text-sm text-gray-300">Iterative delivery with continuous stakeholder engagement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold mb-2">Integration & Release</h4>
                <p className="text-sm text-gray-300">Enterprise integration and production deployment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-bold mb-2">Support & Optimize</h4>
                <p className="text-sm text-gray-300">Continuous improvement and capability transfer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
