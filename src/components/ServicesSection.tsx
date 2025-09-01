import React from "react";
import { FileText, Shield, Search, Lock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Legal Documentation",
      description: "Contracts, agreements, NDAs powered by AI for faster creation and error-free legal documents.",
      features: ["AI-powered contract generation", "Template customization", "Legal compliance checking", "Digital signatures"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Automation",
      description: "Simplify GST, corporate law, and data protection compliance with automated workflows and monitoring.",
      features: ["GST compliance tracking", "Corporate governance", "Regulatory monitoring", "Automated reporting"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "AI-Powered Legal Research",
      description: "Accurate, fast legal insights with comprehensive case law analysis and precedent research.",
      features: ["Case law analysis", "Precedent research", "Legal citation", "Judgment predictions"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy & Data Security Consulting",
      description: "End-to-end data protection strategies ensuring compliance with global privacy regulations.",
      features: ["GDPR compliance", "Data audit services", "Privacy policy drafting", "Security assessments"]
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <div className="legalup-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
              <FileText className="w-3 h-3" />
            </span>
            <span>Services</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Key Offerings
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive legal technology solutions designed to streamline your legal processes and ensure compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;