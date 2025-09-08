import React, { useState } from 'react';
import { Rocket } from 'lucide-react';

type ProjectCategory = 'Applications' | 'Webapps' | 'Agents' | 'Models' | 'All';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: ProjectCategory;
}

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const projects: Project[] = [
    {
      title: "AI-Powered Analytics Platform",
      description: "A comprehensive analytics platform using machine learning to provide predictive insights for businesses.",
      technologies: ["React", "Python", "TensorFlow", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      category: "Models"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation system with voice control and energy optimization features.",
      technologies: ["Node.js", "React Native", "MongoDB", "IoT"],
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
      category: "Applications"
    },
    {
      title: "E-commerce Recommendation Engine",
      description: "Advanced recommendation system using collaborative filtering and deep learning.",
      technologies: ["Python", "PyTorch", "FastAPI", "Redis"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      category: "Models"
    },
    {
      title: "Personal AI Assistant",
      description: "An intelligent agent that helps with task management and scheduling using natural language processing.",
      technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      category: "Agents"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "Webapps"
    }
  ];

  const categories: ProjectCategory[] = ['All', 'Applications', 'Webapps', 'Agents', 'Models'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Rocket className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Portfolio</h2>
          </div>

          {/* Category Filter */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-400 text-white'
                    : 'bg-blue-900/30 border border-blue-500/30 text-blue-200 hover:bg-blue-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm border border-blue-500/20">
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 text-sm bg-blue-400/20 text-blue-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-blue-900/30 border border-blue-500/30 text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
