import { motion } from 'framer-motion';
import { Lightbulb, Target, Zap, Shield, TrendingUp, Users } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: Zap,
      title: 'End-to-end AI implementation',
      description:
        'From opportunity assessment to production rollout, we guide enterprises through every stage of AI delivery, ensuring solutions are aligned to strategy, architecture and real business outcomes.',
    },
    {
      icon: Shield,
      title: 'Enterprise-grade architecture',
      description:
        'Solutions are designed using proven enterprise architecture practices (TOGAF, domain-driven design, integration patterns) to fit into complex legacy landscapes without compromising resilience or security.',
    },
    {
      icon: TrendingUp,
      title: 'Measurable business value',
      description:
        'Each engagement is anchored in clear KPIs such as cycle-time reduction, cost-to-serve, or revenue uplift, with progress tracked through dashboards and executive-ready reporting.',
    },
    {
      icon: Users,
      title: 'Human-centered change',
      description:
        'We invest heavily in stakeholder alignment, training and operating-model design so that teams adopt AI tools with confidence and understand how decisions are made.',
    },
    {
      icon: Target,
      title: 'Use-case prioritization',
      description:
        'Using a structured AI readiness and value framework, we identify and prioritize high-impact use cases, helping leadership focus investment where it matters most.',
    },
    {
      icon: Lightbulb,
      title: 'Modern AI tooling & RAG expertise',
      description:
        'Hands-on experience with LLMs, RAG architectures, vector databases and cloud AI platforms enables us to design solutions that are both innovative and maintainable.',
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 text-center">
            The Problem We Solve
          </h2>
          <div className="max-w-4xl mx-auto bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              Many enterprises invest in AI but struggle to move beyond isolated proofs of concept. Business leaders see inspiring demos, yet production systems remain fragile, poorly integrated, or never make it out of experimentation. Teams are overwhelmed by fast-moving AI tooling, legacy constraints, and unclear ownership, which leads to stalled programmes, wasted spend and missed opportunities to transform customer experiences and operations.
            </p>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 text-center">
            Our Solution
          </h2>
          <div className="max-w-4xl mx-auto bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Plerk partners with organizations to design and implement AI solutions that are grounded in enterprise architecture and real delivery constraints. We help you choose the right use cases, architect robust data and integration flows, and build AI-powered workflows (including RAG systems and automation) that plug into your existing platforms. Our consulting model combines strategic advisory, technical design and embedded delivery leadership so that AI initiatives translate into sustainable capabilities rather than one-off experiments.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-accent-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Unique Value Proposition</h3>
            <p className="text-lg leading-relaxed">
              Plerk brings a rare combination of hands-on AI implementation experience, deep enterprise architecture expertise and proven programme leadership. We specialize in highly regulated, complex environments where robustness, compliance and stakeholder alignment matter as much as innovation. Rather than selling generic frameworks, we co-create tailored roadmaps, architectures and delivery approaches that respect your constraints and accelerate time to value.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">
            Key Differentiators
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our AI Implementation Process
            </h3>
            
            {/* Process Flow Diagram */}
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {/* Step 1 */}
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-200 hover:border-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Assess & Strategize</h4>
                    <p className="text-sm text-gray-600 text-center">AI readiness assessment, use case prioritization, strategic roadmap</p>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-primary-400"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-200 hover:border-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Design & Architect</h4>
                    <p className="text-sm text-gray-600 text-center">Solution architecture, integration design, data flow planning</p>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-primary-400"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-200 hover:border-primary-500 transition-colors">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Build & Integrate</h4>
                    <p className="text-sm text-gray-600 text-center">Development, RAG systems, API integration, testing</p>
                  </div>
                  {/* Arrow */}
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-primary-400"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-primary-400 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md border-2 border-accent-200 hover:border-accent-500 transition-colors">
                    <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                      4
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-center">Deploy & Scale</h4>
                    <p className="text-sm text-gray-600 text-center">Production deployment, monitoring, optimization, scaling</p>
                  </div>
                </div>
              </div>

              {/* Bottom Info Box */}
              <div className="mt-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">Continuous Support</h4>
                    <p className="text-sm text-gray-700">
                      Throughout the process, we provide embedded delivery leadership, stakeholder management, and knowledge transfer to ensure sustainable success.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-4 py-2 bg-white rounded-lg border border-primary-200">
                      <div className="text-2xl font-bold text-primary-600">65%</div>
                      <div className="text-xs text-gray-600">Faster Time-to-Value</div>
                    </div>
                    <div className="px-4 py-2 bg-white rounded-lg border border-primary-200">
                      <div className="text-2xl font-bold text-accent-600">94%</div>
                      <div className="text-xs text-gray-600">Production Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

