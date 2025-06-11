import React from 'react';
import { Briefcase, GraduationCap, Code, Rocket, Phone, Download, Send } from 'lucide-react';
import Chat from '../components/Chat';

const HomePage = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.1),transparent_50%)] animate-pulse" />
        </div>
        
        {/* Left Aligned Text Overlay */}
        <div className="absolute inset-0 flex items-center z-20 pointer-events-none px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="md:max-w-[50%] lg:max-w-[45%]">
              <h1 className="text-[10vw] md:text-[6vw] lg:text-[5vw] font-bold leading-none tracking-tighter mb-8">
                <span className="block">Hello, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Ben Hinson
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-xl text-blue-200 font-light mb-12">
                Here's where I share things I have done, currently doing and plan on doing. 
              </p>
              <div className="flex gap-4">
                <div className="relative group">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full overflow-hidden pointer-events-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 text-white font-medium">
                      Let's Connect
                    </span>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/90 ring-1 ring-blue-500 ring-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a href="mailto:bhinson@plerk.co.za" className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-700 cursor-pointer" role="menuitem">
                        <Send className="inline-block w-4 h-4 mr-2" /> Email
                      </a>
                      <a href="tel:+27825654665" className="block px-4 py-2 text-sm text-blue-200 hover:bg-blue-700 cursor-pointer" role="menuitem">
                        <Phone className="inline-block w-4 h-4 mr-2" /> Phone
                      </a>
                    </div>
                  </div>
                </div>
                <a 
                  href="/Benjamin_CV[23375]-1.pdf" 
                  download
                  className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden pointer-events-auto transition-colors duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span className="relative z-10 text-white font-medium">
                    Download Resume
                  </span>
                </a>
              </div>
              
              {/* Chat Component */}
              <div className="mt-12 pointer-events-auto max-w-md">
                <Chat />
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative w-full pt-24">
          <div className="max-w-[2000px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="relative z-10">
                {/* Left column intentionally empty to create space */}
              </div>
              <div className="relative h-[80vh] md:h-screen w-full md:ml-auto">
                <img src="src/assets/images/image001.jpg" 
                 alt="AI Executive"
                  className="absolute inset-0 w-full h-full object-cover object-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="animate-scroll inline-flex">
              <span className="text-[8vw] font-bold text-white/5">
                DELIVERY • ARCHITECTURE • STRATEGY • TECHNOLOGY •&nbsp;
              </span>
              <span className="text-[8vw] font-bold text-white/5">
              DELIVERY • ARCHITECTURE • STRATEGY • TECHNOLOGY •&nbsp;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-blue-900">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              >
                <source src="/path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent" />
            </div>

            {/* Video Introduction */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  My Intro Video
                </span>
              </h2>
              <p className="text-blue-200 text-lg mb-8">
                Watch this short introduction to learn more about my journey, expertise, and what drives me in the world of technology and innovation.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-medium">
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Professional Experience Card */}
            <div className="group relative h-48 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative h-full p-4 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-300">
                <Briefcase className="w-6 h-6 mb-2 text-blue-300 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-1">Professional Journey</h3>
                <p className="text-blue-200/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  From Solution Architecture at First Rand to Delivery Lead at Equal Experts, specializing in digital transformation and strategic technology leadership across Africa and the UK.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="group relative h-48 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative h-full p-4 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 mb-2 text-blue-300 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-1">Education</h3>
                <p className="text-blue-200/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Elite academics
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="group relative h-48 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative h-full p-4 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-300">
                <Code className="w-6 h-6 mb-2 text-blue-300 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-1">Skills</h3>
                <p className="text-blue-200/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AI mastery
                </p>
              </div>
            </div>

            {/* Portfolio Card */}
            <div className="group relative h-48 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative h-full p-4 flex flex-col justify-end transform group-hover:-translate-y-1 transition-transform duration-300">
                <Rocket className="w-6 h-6 mb-2 text-blue-300 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-bold text-white mb-1">Portfolio</h3>
                <p className="text-blue-200/80 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Innovation showcase
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="experience" className="py-24 relative bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Professional Journey
              </span>
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
              My career path represents a unique convergence of business leadership, technical expertise, and innovation. With over two decades of experience spanning marketing, entrepreneurship, and technology, I've evolved from traditional business roles into a technology-focused leader specializing in AI implementation and digital transformation. My journey has been shaped by formal education in Information Technology and Business Leadership, complemented by hands-on experience delivering complex technical solutions in enterprise environments. Today, I leverage this multidisciplinary background to bridge the gap between business strategy and technological innovation, creating AI-powered solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold">Delivery Lead - Azure Machine Learning</div>
                  <div className="text-sm text-blue-200">Equal Experts / AXA • 2022-2023</div>
                  <div className="text-sm text-blue-200">Led the Azure Machine Learning implementation project, managing cross-functional teams and stakeholders while overcoming complex technical challenges in enterprise-scale ML deployment.</div>
                </li>
                <li>
                  <div className="font-semibold">Associate Partner</div>
                  <div className="text-sm text-blue-200">IQbusiness South Africa • 2024</div>
                  <div className="text-sm text-blue-200">Contributing to business strategy and growth through strategic business development, client relationship management, and team leadership.</div>
                </li>
                <li>
                  <div className="font-semibold">Senior Manager Strategy and Advisory</div>
                  <div className="text-sm text-blue-200">Accenture • 2020-2021</div>
                  <div className="text-sm text-blue-200">Led digital transformation initiatives for international telecom and financial institutions, focusing on architecture governance and policy formulation.</div>
                </li>
                <li>
                  <div className="font-semibold">Technology Strategist</div>
                  <div className="text-sm text-blue-200">Equal Experts • 2019-2020</div>
                  <div className="text-sm text-blue-200">Worked on major projects including John Lewis Partners (London), focusing on MVP proposition for Wish List and gift list.</div>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-semibold">BCOMM Honors Information Technology</div>
                  <div className="text-sm text-blue-200">University of Johannesburg • 2017-2019</div>
                  <div className="text-sm text-blue-200">Major in Enterprise Architecture, IT Management, Project Management and Research Methodology</div>
                </li>
              </ul>
            </div>

            {/* Skills & Achievements */}
            <div className="bg-black/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-black/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Skills & Achievements</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-2">Core Competencies</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">AI Strategy</span>
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">Prototype Development</span>
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">Enterprise Architecture</span>
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">Project Management</span>
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">Digital Transformation</span>
                    <span className="px-3 py-1 bg-blue-400/10 rounded-full text-sm">Leadership</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-2">Certification</div>
                  <ul className="text-sm text-blue-200 space-y-1">
                    <li>• Business Leadership - University of Stellenbosch Business School</li>
                    <li>• TOGAF - The Open Group</li>
                    <li>• Agile Scrum Master - Scrum Alliance</li>
                    <li>• ITIL - Pink Elephant</li>
                    <li>• COBIT - Pink Elephant</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
              Download Full Resume
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
