import React from "react";
import { Scale, Users, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="legalup-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                <Scale className="w-3 h-3" />
              </span>
              <span>Who We Are</span>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Legalup
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              At Legalup, we merge legal expertise with AI-powered innovation to deliver smarter, faster, and secure compliance solutions. Our commitment to data privacy and legal accuracy ensures every service is reliable and future-ready.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Legal Team</h3>
              <p className="text-gray-600">
                Our team combines decades of legal experience with cutting-edge technology expertise to deliver unmatched service quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600">
                Every solution is built with privacy at its core, ensuring full compliance with GDPR, IT Act, and international data protection laws.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Driven</h3>
              <p className="text-gray-600">
                We continuously evolve our AI models and legal frameworks to stay ahead of regulatory changes and industry trends.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Scale className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ethical AI</h3>
              <p className="text-gray-600">
                Our AI systems are designed with ethical considerations, transparency, and accountability at every level of operation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;