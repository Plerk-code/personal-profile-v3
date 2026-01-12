import { motion } from 'framer-motion';
import { Calendar, Award, TrendingUp, Users, Building2, Globe } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: typeof Calendar;
}

export default function Traction() {
  const milestones: Milestone[] = [
    {
      year: '2014–2020',
      title: 'Enterprise transformation foundations',
      description:
        'Led major digital and architecture initiatives for banks and telecoms, including Standard Bank, Absa Group, MTN and John Lewis Partners, building deep experience in large-scale change.',
      icon: Award,
    },
    {
      year: '2021–2023',
      title: 'AI delivery at scale',
      description:
        'Delivered Azure Machine Learning and automation programmes for AXA Insurance and other enterprises, reducing processing times and improving operational KPIs.',
      icon: TrendingUp,
    },
    {
      year: '2024',
      title: 'Revision AI founded',
      description:
        'Launched Revision AI as a boutique consultancy focused on pragmatic AI implementation, with an initial portfolio in legal and financial services.',
      icon: Users,
    },
    {
      year: '2024–Present',
      title: 'Growing AI project portfolio',
      description:
        'Designed and implemented RAG systems, AI-powered customer service automation and data platforms that deliver measurable value for medium to large enterprises.',
      icon: Building2,
    },
  ];

  const metrics = [
    { label: 'Enterprise transformation initiatives led', value: '30+', icon: TrendingUp },
    { label: 'AI and automation projects delivered', value: '15+', icon: Users },
    { label: 'Strategic clients across finance, telecoms & retail', value: '10+', icon: Building2 },
    { label: 'Countries with project experience', value: '10+', icon: Globe },
  ];

  return (
    <section id="traction" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Traction & Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey of growth and achievement
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 to-accent-200 hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right' : ''}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-semibold text-primary-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-2/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Key Metrics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200 text-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Media Mentions / Awards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recognition & Media
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="text-center">
                <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="text-gray-700">
                  {item === 1 &&
                    'Featured author: “Practical AI Implementation: A Guide for Enterprises” – Business Technology Review'}
                  {item === 2 &&
                    'Article: “Bridging Business and Technology with Modern Enterprise Architecture” – CIO Magazine'}
                  {item === 3 &&
                    'Thought leadership on digital transformation in African financial services – African Business Journal'}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

