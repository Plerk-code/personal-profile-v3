import React, { useEffect, useRef, useState } from 'react';
import plerkLogo from './assets/images/Plerk_Logo_Transparent.png';
import { Brain, Briefcase, GraduationCap, Award, Code, Rocket, Send, Phone, Linkedin } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import Footer from './components/Footer';
import Analytics from './components/Analytics';

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'bot',
      message: "Hello! I'm here to help you learn more about my resume. What would you like to know?",
    },
  ]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatHistory((prev) => [...prev, { type: 'user', message }]);

    // Simulate bot response
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: 'bot',
          message: "I'll be happy to tell you more about my experience and skills. What specific aspect would you like to know about?",
        },
      ]);
    }, 1000);

    setMessage('');
  };

  return (
    <Router>
      <Analytics measurementId={import.meta.env.VITE_GA_MEASUREMENT_ID} />
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Custom cursor */}
        <div ref={cursorRef} className="fixed w-8 h-8 pointer-events-none mix-blend-difference z-50 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 px-6 py-8 bg-black/80 backdrop-blur-sm">
          <div className="max-w-[2000px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center gap-6">
                <a href="https://www.plerk.co.za" target="_blank" rel="noopener noreferrer">
                  <img src={plerkLogo} alt="Plerk Logo" className="h-24" />
                </a>
                <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Benjamin Hinson CSM : TOGAF : KANBAN
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
              <Link to="/" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/experience" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Professional Experience
              </Link>
              <Link to="/education" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Education
              </Link>
              <Link to="/skills" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Skills
              </Link>
              <Link to="/portfolio" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
              <Link to="/blog" className="text-sm font-medium hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <a 
                href="https://linkedin.com/in/benjamin-hinson" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;