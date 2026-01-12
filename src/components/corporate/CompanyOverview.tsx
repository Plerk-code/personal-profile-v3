import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, MapPin, Calendar } from 'lucide-react';

export default function CompanyOverview() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering solutions that transform industries and create lasting value.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering partnerships that drive mutual success and shared growth.',
    },
    {
      icon: Eye,
      title: 'Excellence',
      description: 'Delivering exceptional quality in every project, every time.',
    },
  ];

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl font-display font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Plerk our mission is to turn complex AI ideas into practical, production-ready systems that create measurable business value. We help enterprises move beyond experiments and pilots by designing, implementing, and scaling AI solutions that are trusted by executives, loved by teams, and grounded in sound architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-accent-600" />
              <h2 className="text-3xl font-display font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to become the trusted partner for responsible AI implementation across Africa and global emerging markets, known for bridging strategy and execution. We aim to build a portfolio of AI platforms and accelerators that help organizations modernize their operating models while keeping people, ethics, and long-term resilience at the center.
            </p>
          </motion.div>
        </div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              Plerk was founded in 2024 by Benjamin Hinson after two decades leading digital transformation, enterprise architecture, and AI delivery for organizations such as AXA Insurance, Standard Bank, Absa, MultiChoice, MTN and John Lewis Partners. Having repeatedly seen enterprises struggle to move from slideware and pilots to production AI, Benjamin created Plerk as a boutique consultancy focused on pragmatic, outcome-driven implementation. Drawing on experience in finance, telecoms, retail and professional services, the firm combines deep technical understanding of modern AI stacks with rigorous delivery leadership and stakeholder management.
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-primary-600" />
                <span>Founded: 2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>Location: Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

