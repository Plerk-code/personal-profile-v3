import { motion } from 'framer-motion';
import { Award, Building2, MapPin, CheckCircle } from 'lucide-react';

export default function Credentials() {
  const certifications = [
    'TOGAF 9.2 Certified – The Open Group',
    'Professional Scrum Master (PSM II) – Scrum.org',
    'ITIL 4 Foundation – AXELOS',
    'COBIT 5 Foundation – ISACA',
  ];

  const clients = [
    'AXA Insurance',
    'Standard Bank Group',
    'Absa Group',
    'MultiChoice Group',
  ];

  const expertise = [
    {
      title: 'Enterprise AI implementation',
      description:
        'Designing and delivering AI solutions such as RAG systems, automation platforms and decision-support tools that integrate with complex legacy environments.',
    },
    {
      title: 'Digital transformation & architecture',
      description:
        'Leading digital transformation initiatives, developing future-state architectures and roadmaps, and applying frameworks such as TOGAF and domain-driven design.',
    },
    {
      title: 'Product & delivery leadership',
      description:
        'Guiding cross-functional teams from concept to production using agile, Scrum, Kanban and DevOps practices, with a strong focus on measurable outcomes.',
    },
  ];

  return (
    <section id="credentials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Credentials & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven track record and industry recognition
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary-600" />
            <h3 className="text-3xl font-display font-bold text-gray-900">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-4 border border-primary-200 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Clients/Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary-600" />
            <h3 className="text-3xl font-display font-bold text-gray-900">Major Clients & Projects</h3>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Revision AI and its founder have delivered strategic programmes and AI initiatives for leading financial services, telecoms and
              media organizations, often operating at the intersection of business strategy, architecture and delivery.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-800 font-semibold">{client}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Industry Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Industry Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Geographic Reach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8" />
            <h3 className="text-3xl font-display font-bold">Geographic Reach</h3>
          </div>
          <p className="text-lg leading-relaxed mb-6 max-w-3xl">
            Experience delivering programmes across South Africa, broader Africa, the United Kingdom and Europe, with a particular focus on
            pan-African banking and insurance. Revision AI is building on this foundation to serve clients across additional high-growth
            emerging markets.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-center text-lg">
              Operating across 10+ countries with deep experience in African and European markets
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

