import { motion } from 'framer-motion';
import { Linkedin, Award, Briefcase } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  linkedinUrl: string;
  imageUrl: string;
}

export default function Leadership() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Benjamin Hinson',
      title: 'Founder & CEO',
      bio: "Benjamin Hinson is a digital transformation and AI implementation leader with over two decades of experience across financial services, telecoms, retail and technology. Before founding Plerk, he led large-scale programmes and architecture initiatives for organizations including AXA Insurance, Standard Bank, Absa Group, MultiChoice and John Lewis Partners. Benjamin specializes in bridging executive strategy and engineering execution, designing pragmatic AI and data solutions that deliver measurable outcomes. He combines deep enterprise architecture expertise with hands-on delivery leadership, building high-performing teams and guiding organizations from concept through to production.",
      credentials: [
        'Founder & AI Implementation Specialist – Plerk',
        'BCOMM Hons Information Technology – University of Johannesburg',
        'TOGAF 9.2 Certified, The Open Group',
        'Professional Scrum Master (PSM II) & Agile Scrum Master',
      ],
      linkedinUrl: 'https://linkedin.com/in/benjamin-hinson',
      imageUrl: '/image001.jpg',
    },
    // Add more team members here as needed
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the visionaries driving Plerk forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-accent-500 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold">{member.title}</p>
                  </div>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{member.bio}</p>

                {/* Credentials */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-primary-600" />
                    <span className="font-semibold">Key Credentials:</span>
                  </div>
                  <ul className="space-y-1 ml-6">
                    {member.credentials.map((cred, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <Briefcase className="w-3 h-3 text-primary-500" />
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

