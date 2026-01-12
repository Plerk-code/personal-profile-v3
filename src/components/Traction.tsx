import React from 'react';
import { CheckCircle2, Award, Rocket, TrendingUp, Users, Code } from 'lucide-react';

const Traction = () => {
  const timeline = [
    {
      year: '2019-2021',
      title: 'Foundation & Expertise Building',
      achievements: [
        'Led digital transformation at Equal Experts (John Lewis, London)',
        'Senior Manager Strategy at Accenture (Telecom & Financial Services)',
        'Delivered R500M+ in enterprise architecture programs',
      ],
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      year: '2022-2023',
      title: 'AI Specialization',
      achievements: [
        'Delivery Lead for Azure Machine Learning implementation at AXA',
        'Completed MBA in Digital Transformation',
        'Earned TOGAF, ITIL, and Business Leadership certifications',
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: '2024',
      title: 'AI Innovation & Validation',
      achievements: [
        'Founded Revision AI - focused on AI prototype development',
        'Delivered 50+ AI-powered applications, websites, and automations',
        'Associate Partner at IQbusiness South Africa',
        'Validated product-market fit across multiple industries',
      ],
      icon: <Award className="w-6 h-6" />,
    },
    {
      year: '2025+',
      title: 'Scale & Growth Phase',
      achievements: [
        'Securing seed funding for market expansion',
        'Building enterprise sales pipeline',
        'Expanding team with senior technical talent',
        'Targeting 10x revenue growth',
      ],
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  const metrics = [
    {
      icon: <Code className="w-8 h-8" />,
      value: '50+',
      label: 'AI Solutions Delivered',
      description: 'Prototypes, MVPs, and production systems',
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 'R1B+',
      label: 'Programs Led',
      description: 'Enterprise transformation initiatives',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '100%',
      label: 'Success Rate',
      description: 'All projects delivered on time',
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '16+',
      label: 'Years Experience',
      description: 'Enterprise technology leadership',
    },
  ];

  return (
    <section id="traction" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Traction & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering value at scale
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-900 mb-2">{metric.label}</div>
              <div className="text-xs text-gray-600">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Journey & Milestones</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="text-sm font-semibold text-blue-600 mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-gray-700 ${
                              index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                            }`}
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full items-center justify-center text-white shadow-lg z-10">
                    {item.icon}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media & Recognition */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Recognition & Credentials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h4 className="font-bold text-lg mb-2">Enterprise Experience</h4>
              <p className="text-sm text-gray-300">First Rand, AXA, Accenture, John Lewis Partners</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h4 className="font-bold text-lg mb-2">Certifications</h4>
              <p className="text-sm text-gray-300">TOGAF, ITIL, COBIT, Agile Scrum Master</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h4 className="font-bold text-lg mb-2">Academic Excellence</h4>
              <p className="text-sm text-gray-300">MBA Digital Transformation, BCOM Hons IT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;
