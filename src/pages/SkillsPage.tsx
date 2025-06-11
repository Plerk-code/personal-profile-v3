import React, { useState } from 'react';
import { Code, Star, Award, BookOpen } from 'lucide-react';

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
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      description: "Core programming languages I use for software development",
      skills: [
        {
          name: "TypeScript",
          level: 90,
          experience: "4+ years",
          proficiency: "Expert",
          projects: ["Personal Portfolio", "Enterprise Web Apps", "React Libraries"],
          description: "Advanced TypeScript development including generics, utility types, and complex type inference"
        },
        {
          name: "Python",
          level: 85,
          experience: "5+ years",
          proficiency: "Advanced",
          projects: ["ML Models", "Data Analysis", "Backend Services"],
          description: "Python for backend development, data science, and machine learning applications"
        },
        {
          name: "Java",
          level: 80,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Android Apps", "Spring Boot Services"],
          description: "Enterprise Java development with focus on Spring ecosystem"
        },
        {
          name: "SQL",
          level: 85,
          experience: "4+ years",
          proficiency: "Advanced",
          projects: ["Database Design", "Performance Optimization"],
          description: "Complex queries, database design, and optimization"
        }
      ]
    },
    {
      category: "Frameworks & Libraries",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Modern frameworks and libraries I'm proficient with",
      skills: [
        {
          name: "React",
          level: 95,
          experience: "4+ years",
          proficiency: "Expert",
          projects: ["SPAs", "Component Libraries", "Next.js Apps"],
          description: "Advanced React patterns, hooks, and performance optimization"
        },
        {
          name: "Node.js",
          level: 85,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["REST APIs", "Microservices", "Real-time Apps"],
          description: "Server-side JavaScript with Express and NestJS"
        },
        {
          name: "TensorFlow",
          level: 75,
          experience: "2+ years",
          proficiency: "Intermediate",
          projects: ["Image Recognition", "NLP Models"],
          description: "Machine learning model development and deployment"
        },
        {
          name: "Django",
          level: 80,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Web Apps", "REST APIs"],
          description: "Full-stack Python web development"
        }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: <Award className="w-6 h-6" />,
      description: "DevOps and cloud technologies I work with",
      skills: [
        {
          name: "AWS",
          level: 85,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Cloud Architecture", "Serverless Apps"],
          description: "Cloud infrastructure and serverless architecture"
        },
        {
          name: "Docker",
          level: 80,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Containerization", "Microservices"],
          description: "Container orchestration and deployment"
        },
        {
          name: "Git",
          level: 90,
          experience: "5+ years",
          proficiency: "Expert",
          projects: ["Version Control", "Team Collaboration"],
          description: "Advanced version control and Git workflows"
        },
        {
          name: "CI/CD",
          level: 85,
          experience: "3+ years",
          proficiency: "Advanced",
          projects: ["Pipeline Automation", "DevOps"],
          description: "Automated testing and deployment pipelines"
        }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'text-yellow-400';
      case 'Advanced': return 'text-green-400';
      case 'Intermediate': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Star className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-6 bg-gray-900 p-6 rounded-xl">
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
                        <span className="text-yellow-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      {activeSkill === skill.name && (
                        <div className="absolute z-10 mt-2 p-4 bg-gray-800 rounded-lg shadow-xl w-full">
                          <p className="text-sm text-gray-300 mb-2">{skill.description}</p>
                          <div className="mt-2">
                            <span className="text-xs text-yellow-400">Related Projects:</span>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {skill.projects.map((project, i) => (
                                <span 
                                  key={i}
                                  className="text-xs bg-gray-700 px-2 py-1 rounded"
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
