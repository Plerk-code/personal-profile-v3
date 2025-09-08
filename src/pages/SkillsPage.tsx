import React, { useState } from 'react';
import { Code, Star, Award, BookOpen, Users, Settings } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  experience: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  projects: string[];
  description: string;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  description: string;
  skills: Skill[];
}

const SkillsPage = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      category: "Project Methodology",
      icon: <Users className="w-6 h-6" />,
      description: "Agile and lean methodologies for effective project delivery",
      skills: [
        {
          name: "SCRUM",
          level: 95,
          experience: "8+ years",
          proficiency: "Expert",
          projects: ["Sprint Planning", "Retrospectives", "Team Facilitation"],
          description: "Certified Scrum Master with extensive experience in sprint management and team coaching"
        },
        {
          name: "KANBAN",
          level: 90,
          experience: "6+ years",
          proficiency: "Expert",
          projects: ["Workflow Optimization", "Visual Management", "Continuous Flow"],
          description: "Kanban implementation for continuous delivery and workflow optimization"
        },
        {
          name: "LEAN",
          level: 85,
          experience: "5+ years",
          proficiency: "Advanced",
          projects: ["Process Improvement", "Waste Elimination", "Value Stream Mapping"],
          description: "Lean principles applied to software development and business processes"
        },
        {
          name: "DEVOPS",
          level: 88,
          experience: "7+ years",
          proficiency: "Expert",
          projects: ["CI/CD Pipelines", "Infrastructure as Code", "Automation"],
          description: "DevOps culture and practices for rapid, reliable software delivery"
        }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      description: "Essential tools and platforms for modern project management",
      skills: [
        {
          name: "JIRA",
          level: 95,
          experience: "8+ years",
          proficiency: "Expert",
          projects: ["Project Tracking", "Agile Boards", "Reporting"],
          description: "Advanced JIRA configuration, workflow design, and project management"
        },
        {
          name: "MIRO",
          level: 90,
          experience: "5+ years",
          proficiency: "Expert",
          projects: ["Remote Collaboration", "Workshop Facilitation", "Visual Planning"],
          description: "Digital whiteboarding and collaborative workshop facilitation"
        },
        {
          name: "FLOW METRICS",
          level: 85,
          experience: "4+ years",
          proficiency: "Advanced",
          projects: ["Performance Analytics", "Cycle Time Optimization", "Throughput Analysis"],
          description: "Flow metrics and analytics for process improvement and delivery optimization"
        },
        {
          name: "SLACK",
          level: 92,
          experience: "6+ years",
          proficiency: "Expert",
          projects: ["Team Communication", "Integration Management", "Workflow Automation"],
          description: "Team collaboration, communication, and workflow automation"
        }
      ]
    },
    {
      category: "Additional Tools",
      icon: <Award className="w-6 h-6" />,
      description: "Supporting tools and platforms for comprehensive project delivery",
      skills: [
        {
          name: "CONFLUENCE",
          level: 88,
          experience: "6+ years",
          proficiency: "Advanced",
          projects: ["Documentation", "Knowledge Management", "Team Wikis"],
          description: "Knowledge management and collaborative documentation"
        },
        {
          name: "AZURE DEVOPS",
          level: 85,
          experience: "4+ years",
          proficiency: "Advanced",
          projects: ["Project Management", "CI/CD", "Code Repository"],
          description: "Microsoft's comprehensive DevOps platform for project management"
        },
        {
          name: "FIGMA",
          level: 80,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Design Collaboration", "Prototyping", "Design Systems"],
          description: "Design collaboration and prototyping for product development"
        },
        {
          name: "NOTION",
          level: 85,
          experience: "4+ years",
          proficiency: "Advanced",
          projects: ["Project Documentation", "Team Wikis", "Process Templates"],
          description: "All-in-one workspace for documentation and project management"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'text-blue-400';
      case 'Advanced': return 'text-blue-300';
      case 'Intermediate': return 'text-blue-200';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Star className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-6 bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <p className="text-gray-400 mb-6">{category.description}</p>
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="relative"
                      onMouseEnter={() => setActiveSkill(skill.name)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className="flex justify-between mb-2">
                        <div className="space-y-1">
                          <span className="font-medium">{skill.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">{skill.experience}</span>
                            <span className={`text-sm ${getProficiencyColor(skill.proficiency)}`}>
                              {skill.proficiency}
                            </span>
                          </div>
                        </div>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      {activeSkill === skill.name && (
                        <div className="absolute z-10 mt-2 p-4 bg-black/90 backdrop-blur-sm rounded-lg shadow-xl w-full border border-blue-500/30">
                          <p className="text-sm text-gray-300 mb-2">{skill.description}</p>
                          <div className="mt-2">
                            <span className="text-xs text-blue-400">Related Projects:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {skill.projects.map((project, i) => (
                                <span 
                                  key={i}
                                  className="text-xs bg-blue-900/30 border border-blue-500/30 px-2 py-1 rounded text-blue-200"
                                >
                                  {project}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
