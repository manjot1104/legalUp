import React from "react";
import { Brain, Shield, TrendingUp, Users } from "lucide-react";

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Enhanced Legal Services",
      description: "Automating complex legal processes with intelligence and precision, reducing time and increasing accuracy."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Privacy First",
      description: "Full compliance with GDPR, IT Act, and global regulations with built-in encryption and secure storage."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proactive Risk Management",
      description: "Anticipating and mitigating compliance risks before they become issues through predictive analysis."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Focus",
      description: "Tailored solutions for businesses, lawyers, and individuals with personalized service delivery."
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white" id="approach">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <div className="legalup-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
              <Brain className="w-3 h-3" />
            </span>
            <span>Our Approach</span>
          </div>
          
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We combine technology, law, and ethics<br className="hidden sm:block" />
            to create impactful solutions
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-elegant-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {approach.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;