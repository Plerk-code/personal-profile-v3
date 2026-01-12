import React from 'react';
import { Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import plerkLogo from '../assets/images/Plerk_Logo_Transparent.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={plerkLogo} alt="Plerk Logo" className="h-20 md:h-24" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Delivering enterprise solutions to drive sustainable growth across emerging markets.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/[PROFILE]"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:bhinson@plerk.co.za"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+27825654665"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('overview')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                Our Solution
              </button>
              <button
                onClick={() => scrollToSection('market')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                Market Opportunity
              </button>
              <button
                onClick={() => scrollToSection('traction')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                Traction
              </button>
            </div>
          </div>

          {/* Investors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Investors</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('invest')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                Why Invest
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors"
              >
                Contact Us
              </button>
              <a href="#" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Investment Deck
              </a>
              <a href="#" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Location & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-gray-300 text-sm mb-4">
              Johannesburg, South Africa<br />
              Serving Pan-African Markets
            </p>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-cyan-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PLERK. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
