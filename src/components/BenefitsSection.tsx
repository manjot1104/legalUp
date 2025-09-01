import React from "react";
import { Clock, DollarSign, Shield, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Processing",
      description: "Reduce manual effort with AI-powered automation, cutting document processing time by up to 80%."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective Solutions",
      description: "Affordable legal compliance for all business sizes with transparent pricing and scalable plans."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security Guaranteed",
      description: "Built-in encryption and secure storage ensuring your sensitive legal data is always protected."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Always Updated",
      description: "Stay ahead with evolving legal frameworks through continuous AI learning and regulatory updates."
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white" id="benefits">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <div className="legalup-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
              <TrendingUp className="w-3 h-3" />
            </span>
            <span>Benefits</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Legalup?
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the future of legal services with our comprehensive benefits designed for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="button-primary inline-flex items-center px-8 py-4 text-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;