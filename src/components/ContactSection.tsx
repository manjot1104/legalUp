import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent successfully! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50" id="contact">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="legalup-chip mx-auto mb-4">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground mr-2 text-xs">
                <Mail className="w-3 h-3" />
              </span>
              <span>Contact Us</span>
            </div>
            
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Have questions? Let's talk!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700">
              Ready to transform your legal processes? Get in touch with our team of experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-elegant">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                    required 
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                    required 
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your Message" 
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none" 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="button-primary w-full flex items-center justify-center py-4"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Schedule a Call
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">shrutiyadav09@outlook.com</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+91 7000896466</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-elegant text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;