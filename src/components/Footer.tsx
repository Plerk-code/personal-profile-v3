import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-[2000px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Benjamin Hinson CSM : TOGAF
            </h3>
            <p className="text-gray-400 text-sm">
              Transforming ideas into impactful solutions through innovative technology and strategic thinking.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-blue-400 text-sm">Home</Link>
              <Link to="/experience" className="block text-gray-400 hover:text-blue-400 text-sm">Experience</Link>
              <Link to="/education" className="block text-gray-400 hover:text-blue-400 text-sm">Education</Link>
              <Link to="/skills" className="block text-gray-400 hover:text-blue-400 text-sm">Skills</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 text-sm">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 text-sm">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-blue-400 text-sm">Twitter</a>
              <a href="mailto:contact@example.com" className="block text-gray-400 hover:text-blue-400 text-sm">Email</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-gray-400 text-sm">
              Johannesburg,<br />
              Gauteng, South Africa.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Benjamin Hinson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
