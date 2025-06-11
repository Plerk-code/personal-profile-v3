
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const EducationPage = () => {
  const education = [
    {
      degree: "BCOMM Honors Information Technology",
      school: "University of Johannesburg",
      period: "January 2017 — November 2019",
      description: "Major Subjects: Enterprise Architecture, IT Management, Project Management and Research Methodology",
      achievements: [
        "Thesis: Critical challenges organizations face in the adoption of agile software development principles while trying to improve product delivery",
        "Focus on enterprise architecture frameworks and methodologies",
        "Research on agile implementation strategies in corporate environments"
      ]
    }
  ];

  const certifications = [
    {
      name: "Business Leadership",
      issuer: "University of Stellenbosch Business School",
      year: "November 2010",
      description: "Advanced business leadership training focused on strategic management and organizational development."
    },
    {
      name: "TOGAF",
      issuer: "The Open Group",
      year: "June 2011",
      description: "Enterprise architecture methodology and framework that enables organizations to design, plan, implement, and govern enterprise information technology architecture."
    },
    {
      name: "ITIL",
      issuer: "Pink Elephant",
      year: "February 2010",
      description: "IT service management framework that aligns IT services with business needs and provides best practices for IT service delivery."
    },
    {
      name: "Agile Scrum Master",
      issuer: "Scrum Alliance",
      year: "November 2014",
      description: "Expertise in Scrum methodologies, facilitating team collaboration, and implementing agile project management practices."
    },
    {
      name: "COBIT",
      issuer: "Pink Elephant",
      year: "April 2010",
      description: "Framework for the governance and management of enterprise IT, providing a comprehensive set of controls for IT processes."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Education Section */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Education</h2>
          </div>
          
          <div className="space-y-12 mb-24">
            {education.map((edu, index) => (
              <div key={index} className="relative border-l-2 border-blue-500 pl-8 pb-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
                <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-blue-300 mb-4">
                  <span>{edu.school}</span>
                  <span className="hidden sm:block">•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-blue-200 mb-4">{edu.description}</p>
                <ul className="list-disc list-inside space-y-2 text-blue-200">
                  {edu.achievements.map((achievement, achieveIndex) => (
                    <li key={achieveIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-black/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/10 transition-all duration-300 border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-blue-300 mb-3">
                      <span>{cert.issuer}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-blue-200 text-sm">{cert.description}</p>
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

export default EducationPage;
