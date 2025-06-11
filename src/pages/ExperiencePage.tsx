import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  details: {
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
  };
}

const ExperiencePage = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      title: "Delivery Lead - Azure Machine Learning",
      company: "Equal Experts",
      period: "Nov 2024 - Present",
      description: "Contract role at Axa Insurance, UK, working in a hybrid setting in the London Area.",
      details: {
        responsibilities: [
          "Leading Azure Machine Learning initiatives",
          "Hybrid work environment management",
          "Project delivery and stakeholder management"
        ],
        achievements: [
          "Ongoing project leadership",
          "Implementation of ML solutions"
        ],
        technologies: ["Azure ML", "Cloud Computing", "Project Management"]
      }
    },
    {
      title: "Associate Partner",
      company: "IQbusiness South Africa",
      period: "Nov 2024",
      description: "Full-time role as Associate Partner, contributing to business strategy and growth.",
      details: {
        responsibilities: [
          "Strategic business development",
          "Client relationship management",
          "Team leadership"
        ],
        achievements: [
          "Partnership development",
          "Strategic initiatives"
        ],
        technologies: ["Business Strategy", "Leadership", "Consulting"]
      }
    },
    {
      title: "Senior Delivery Manager / Technical Project Manager",
      company: "Discovery Limited",
      period: "Jun 2021 - Dec 2021",
      description: "Contract role managing delivery for John Hancock and Manulife, North America's largest insurance companies.",
      details: {
        responsibilities: [
          "Delivery management for major insurance clients",
          "Incident management, tracking and escalations",
          "Leadership of engineering and product teams",
          "Building and sizing product roadmaps",
          "Capex and Opex costing for project planning"
        ],
        achievements: [
          "Successfully delivered complex high-profile features in cloud environment",
          "Technical process improvement implementation",
          "Effective dependency and obstacle management"
        ],
        technologies: ["Cloud Technologies", "Project Management", "Agile Methodologies"]
      }
    },
    {
      title: "Senior Manager Strategy and Advisory",
      company: "Accenture",
      period: "Feb 2020 - Dec 2021",
      description: "Part-time role leading digital transformation initiatives for international telecom and financial institutions.",
      details: {
        responsibilities: [
          "Digital transformation program management",
          "Benchmarking and optimization of delivery value chain",
          "Architecture governance and policy formulation",
          "Digital channels state assessment and benchmarking"
        ],
        achievements: [
          "Successfully led digital transformation programs",
          "Developed digital omnichannel architecture",
          "Implemented architecture governance frameworks"
        ],
        technologies: ["Digital Transformation", "Architecture", "Strategy"]
      }
    },
    {
      title: "Technology Strategist",
      company: "Equal Experts",
      period: "Mar 2019 - Feb 2020",
      description: "Full-time role including major project for John Lewis Partners (London) focusing on MVP proposition for Wish List and gift list.",
      details: {
        responsibilities: [
          "UK retail landscape analysis",
          "M&A options assessment for Tech Retailers",
          "PSD2 Regulatory payments implementation",
          "Customer research and behavior analysis",
          "System integration and delivery tracking"
        ],
        achievements: [
          "Successful six-week discovery process",
          "Implementation of regulatory payment systems",
          "Strategic cost reduction initiatives"
        ],
        technologies: ["Strategic Planning", "PSD2", "System Integration"]
      }
    },
    {
      title: "Lead Architect and Strategy",
      company: "Absa Group",
      period: "May 2017 - Apr 2019",
      description: "Led the architecture vision for digital banking across the African Continent.",
      details: {
        responsibilities: [
          "Future-state architecture development",
          "Architecture vision and roadmap creation",
          "Core banking system analysis",
          "Architecture Review Board governance"
        ],
        achievements: [
          "Created comprehensive digital banking strategy",
          "Enhanced business capabilities across Africa",
          "Established Architecture Review Board"
        ],
        technologies: ["Enterprise Architecture", "Digital Banking", "Core Banking Systems"]
      }
    },
    {
      title: "Senior Software Engineer Manager",
      company: "Absa Group",
      period: "Mar 2016 - Apr 2017",
      description: "Led the transformation of DevOps and Agile practices within ABSA.",
      details: {
        responsibilities: [
          "DevOps transformation leadership",
          "Agile implementation",
          "Team management and consultation"
        ],
        achievements: [
          "Successfully transformed organizational DevOps practices",
          "Implemented high-velocity software delivery"
        ],
        technologies: ["DevOps", "AWS", "CI/CD", "Agile"]
      }
    },
    {
      title: "Delivery Manager",
      company: "MultiChoice Group",
      period: "Sep 2014 - Feb 2016",
      description: "Managed web development teams for a 1 billion Rand program, including customer portal and DSTV Self Service.",
      details: {
        responsibilities: [
          "Product team management",
          "Agile practice standardization",
          "Process modernization",
          "Cross-functional team leadership"
        ],
        achievements: [
          "Reduced time to market by 30%",
          "Implemented Test Driven Development",
          "Created hyper-productive teams"
        ],
        technologies: ["Agile Project Management", "TDD", "Continuous Integration"]
      }
    },
    {
      title: "Application Solution Architect",
      company: "First Rand Bank",
      period: "Jun 2010 - Nov 2013",
      description: "Responsible for application strategy, design, and implementation across First Rand applications.",
      details: {
        responsibilities: [
          "Application strategy development",
          "TOGAF portfolio implementation",
          "SLA and licensing policy management",
          "Application lifecycle oversight"
        ],
        achievements: [
          "Successfully implemented TOGAF framework",
          "Streamlined application lifecycle management",
          "Established comprehensive SLA framework"
        ],
        technologies: ["TOGAF", "C#", "Solution Architecture", "Modeling"]
      }
    },

  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold">Professional Experience</h2>
          </div>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 relative overflow-hidden bg-[url('/card-bg.png')] bg-cover bg-center"
              >
                <div className="absolute inset-0 bg-zinc-900/70"></div>
                <div className="relative z-10">
                  <div 
                    className="cursor-pointer"
                    onClick={() => toggleCard(index)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-yellow-400">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-300 mb-4">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-200">{exp.description}</p>
                      </div>
                      <button className="text-yellow-400">
                        {expandedCard === index ? (
                          <ChevronUp className="w-6 h-6" />
                        ) : (
                          <ChevronDown className="w-6 h-6" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {expandedCard === index && (
                    <div className="mt-6 pt-6 border-t border-zinc-700">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-yellow-400">Key Responsibilities</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {exp.details.responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-yellow-400">Key Achievements</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-200">
                            {exp.details.achievements.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-yellow-400">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.details.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-gray-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
