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
        <nav className="fixed top-0 w-full z-40 px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={plerkLogo} alt="Plerk Logo" className="h-24 md:h-28" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#solution" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                Solution
              </a>
              <a href="#market" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                Market
              </a>
              <a href="#invest" className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                Invest
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                Contact
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