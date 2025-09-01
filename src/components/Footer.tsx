
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-12">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Legalup</span>
            </div>
            <p className="text-gray-400 mb-4">
              Innovation Meets Integrity: Law, AI, and Data Privacy.
            </p>
            <p className="text-gray-400 text-sm">
              Revolutionizing legal compliance with AI-driven solutions and future-ready digital frameworks.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Legal Documentation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Compliance Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Legal Research</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Privacy Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Legalup. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Legal Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
