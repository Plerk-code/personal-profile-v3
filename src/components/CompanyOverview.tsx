import React from 'react';
import { Target, Eye, Heart, Zap, Shield, Users } from 'lucide-react';

const CompanyOverview = () => {
  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Delivery Excellence',
      description: 'Proven track record of delivering complex enterprise programs on time, within budget, and to specification',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, honest communication, and unwavering commitment to success',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Leadership',
      description: 'Empowering teams and partners to achieve shared success through effective collaboration and knowledge transfer',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Business Impact',
      description: 'Focused on delivering measurable business value that transforms operations and drives sustainable growth',
    },
  ];

  return (
    <section id="overview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">PLERK</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
        </div>

        {/* Company Story */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in <span className="font-semibold text-blue-600">2024</span> in <span className="font-semibold text-blue-600">Johannesburg, South Africa</span>, PLERK emerged from a vision to bridge the gap between strategic ambition and successful enterprise delivery across Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 16 years of experience leading complex digital transformation programs across finance, retail, and technology, we've built a track record of guiding multi-disciplinary teams from concept to successful delivery. Our unique blend of delivery leadership, enterprise architecture expertise, and technical execution enables us to navigate the complexities of large-scale transformation and deliver tangible business value.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-10 text-white hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-50 leading-relaxed text-lg">
                To empower African enterprises through expert delivery of digital transformation programs that drive sustainable growth, operational excellence, and competitive advantage in the global digital economy.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 p-8 md:p-10 text-white hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-purple-50 leading-relaxed text-lg">
                To become Africa's leading digital transformation partner, recognized for delivering complex enterprise programs that create lasting value for businesses, communities, and the continent's digital future.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
