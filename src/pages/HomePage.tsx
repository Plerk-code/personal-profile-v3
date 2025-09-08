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
                🎮 Gamer since the Commodore 64 era, now channeling a lifelong passion for games into producing and delivering great titles.
              </p>
              <div className="flex gap-4">
                <div className="relative group">
                  <a href="mailto:bhinson@plerk.co.za" className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full overflow-hidden pointer-events-auto shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105 inline-block">
                    <span className="relative z-10 text-white font-medium">
                      Let's Connect
                    </span>
                  </a>
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
                  href="/Benjamin_Hinson_-_Senior_Producer.pdf" 
                  download="Benjamin_Hinson_Senior_Producer_Resume.pdf"
                  className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full overflow-hidden pointer-events-auto transition-colors duration-300 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span className="relative z-10 text-white font-medium">
                    Download Resume
                  </span>
                </a>
              </div>
              
                                {/* Chat Component */}
                  <div id="chat-section" className="mt-12 pointer-events-auto max-w-md">
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

             {/* Game Development Journey Section */}
       <section className="py-24 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
         <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold mb-6">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                 🎮 My Game Development Journey
               </span>
             </h2>
             <p className="text-blue-200 text-lg max-w-3xl mx-auto">
               From Commodore 64 enthusiast to Senior Producer - here's how my passion for gaming evolved into a career in game development and production.
             </p>
           </div>

           {/* Journey Timeline */}
           <div className="relative">
             {/* Timeline Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600"></div>
             
             <div className="space-y-16">
               {/* 1980s - Gaming Beginnings */}
               <div className="relative flex items-center">
                 <div className="w-1/2 pr-8 text-right">
                   <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-l-2xl border-l-4 border-blue-400">
                     <div className="text-2xl mb-2">🎮</div>
                     <h3 className="text-xl font-bold text-blue-300 mb-2">Gaming Beginnings</h3>
                     <p className="text-blue-200 text-sm">Started my journey with the Commodore 64, discovering the magic of interactive entertainment and digital worlds.</p>
                     <div className="text-xs text-blue-400 mt-2">1980s</div>
                   </div>
                 </div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                 <div className="w-1/2 pl-8"></div>
               </div>

               {/* 2000s - Business & Technology */}
               <div className="relative flex items-center">
                 <div className="w-1/2 pr-8"></div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                 <div className="w-1/2 pl-8">
                   <div className="bg-gradient-to-l from-blue-900/20 to-transparent p-6 rounded-r-2xl border-r-4 border-blue-400">
                     <div className="text-2xl mb-2">💼</div>
                     <h3 className="text-xl font-bold text-blue-300 mb-2">Business & Technology</h3>
                     <p className="text-blue-200 text-sm">Built expertise in enterprise delivery, project management, and digital transformation across multiple industries.</p>
                     <div className="text-xs text-blue-400 mt-2">2000s-2020s</div>
                   </div>
                 </div>
               </div>

               {/* 2020s - AI & Innovation */}
               <div className="relative flex items-center">
                 <div className="w-1/2 pr-8 text-right">
                   <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-l-2xl border-l-4 border-blue-400">
                     <div className="text-2xl mb-2">🤖</div>
                     <h3 className="text-xl font-bold text-blue-300 mb-2">AI & Innovation</h3>
                     <p className="text-blue-200 text-sm">Led Azure Machine Learning implementations and pioneered AI strategies, bridging the gap between technology and business value.</p>
                     <div className="text-xs text-blue-400 mt-2">2020-2023</div>
                   </div>
                 </div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                 <div className="w-1/2 pl-8"></div>
               </div>

               {/* 2024+ - Game Production */}
               <div className="relative flex items-center">
                 <div className="w-1/2 pr-8"></div>
                 <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                 <div className="w-1/2 pl-8">
                   <div className="bg-gradient-to-l from-blue-900/20 to-transparent p-6 rounded-r-2xl border-r-4 border-blue-400">
                     <div className="text-2xl mb-2">🎯</div>
                     <h3 className="text-xl font-bold text-blue-300 mb-2">Senior Producer</h3>
                     <p className="text-blue-200 text-sm">Now channeling decades of experience into game production, combining technical expertise with creative vision to deliver exceptional gaming experiences.</p>
                     <div className="text-xs text-blue-400 mt-2">2024+</div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

                         {/* Call to Action */}
              <div className="text-center mt-16">
                <p className="text-blue-200 mb-6">Ready to bring this unique perspective to your game development team?</p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => {
                      const chatElement = document.getElementById('chat-section');
                      if (chatElement) {
                        chatElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        // Focus on the chat input if it exists
                        setTimeout(() => {
                          const chatInput = chatElement.querySelector('input, textarea');
                          if (chatInput) {
                            chatInput.focus();
                          }
                        }, 1000);
                      } else {
                        console.log('Chat section not found');
                      }
                    }}
                    className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full text-blue-400 font-medium hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Let's Chat
                  </button>
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
                  My career path reflects a unique blend of delivery leadership, creative collaboration, and technical expertise. With over 15 years of experience leading complex projects across finance, retail, and technology, I've built a track record of guiding multi-disciplinary teams from concept to release. Alongside this, I've been a lifelong gamer—immersed in the evolution of titles from the Commodore 64 to modern PlayStation and Xbox platforms—giving me a deep appreciation for both the craft and culture of game development. Today, I'm focused on channeling my delivery expertise and passion for games into production, where I bridge business priorities, creative vision, and technical execution to help developers bring memorable player experiences to life.
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
