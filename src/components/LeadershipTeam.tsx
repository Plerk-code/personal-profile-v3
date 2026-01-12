import React from 'react';
import { Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';

const LeadershipTeam = () => {
  const leader = {
    name: 'Benjamin Hinson',
    title: 'Founder & CEO',
    image: '/image001.jpg', // Professional headshot
    bio: 'Benjamin brings over 16 years of experience spanning marketing, entrepreneurship, and technology leadership. His unique journey from traditional business roles to technology-focused innovation positions him at the forefront of AI implementation in emerging markets. With formal education in IT and Business Leadership, complemented by hands-on delivery of enterprise-scale solutions at First Rand, Equal Experts, and Accenture, Benjamin bridges the critical gap between business strategy and technological innovation.',
    credentials: [
      'MBA Digital Transformation (UJ)',
      'BCOM Hons IT (UJ)',
      'TOGAF & ITIL Certified',
      'Business Leadership (Stellenbosch)',
    ],
    achievements: [
      'Led R1B+ digital transformation programs',
      'Delivered Azure ML implementation at AXA',
      '50+ AI prototypes and MVPs developed',
      'Pan-African enterprise consulting experience',
    ],
    linkedin: 'https://linkedin.com/in/[PROFILE]',
  };

  return (
    <section id="leadership" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced leadership with proven track record in enterprise transformation and AI implementation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Featured Leader */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Image Section */}
              <div className="md:col-span-2 relative">
                <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{leader.title}</p>
                  </div>
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white transition-colors duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8">
                  {leader.bio}
                </p>

                {/* Credentials */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Education & Certifications</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {leader.credentials.map((credential, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {credential}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Key Achievements</h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {leader.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Team Members Placeholder */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Advisory Board & Key Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 opacity-50"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">[Advisor Name]</h4>
                <p className="text-blue-600 font-semibold mb-3">[Title/Role]</p>
                <p className="text-sm text-gray-600">
                  [Brief bio highlighting relevant experience and expertise]
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-8 italic">Building a world-class advisory board - positions available</p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
