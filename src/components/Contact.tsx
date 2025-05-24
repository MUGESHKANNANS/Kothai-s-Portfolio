import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Mail, Phone, MapPin, Send, Linkedin, BookOpen, Award } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Me" subtitle="Let's Connect & Collaborate" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md dark:border-gray-700/50 border border-gray-200 h-full">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-indigo-900/30 bg-indigo-100">
                      <Mail className="w-5 h-5 dark:text-indigo-400 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium dark:text-gray-400 text-gray-600 mb-1">
                        Email
                      </h4>
                      <a 
                        href="mailto:emailtokothaiganesan@gmail.com" 
                        className="dark:text-white text-gray-800 hover:underline"
                      >
                        emailtokothaiganesan@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-blue-900/30 bg-blue-100">
                      <Phone className="w-5 h-5 dark:text-blue-400 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium dark:text-gray-400 text-gray-600 mb-1">
                        Phone
                      </h4>
                      <a 
                        href="tel:+919677660531" 
                        className="dark:text-white text-gray-800 hover:underline"
                      >
                        +91 9677660531
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full dark:bg-teal-900/30 bg-teal-100">
                      <MapPin className="w-5 h-5 dark:text-teal-400 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium dark:text-gray-400 text-gray-600 mb-1">
                        Location
                      </h4>
                      <p className="dark:text-white text-gray-800">
                        Coimbatore, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-4">
                    Academic Profiles
                  </h3>
                  <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/kothai-g-758056140" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://scholar.google.com/citations?hl=en&user=d5WwqnkAAAAJ" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Google Scholar</span>
                    </a>
                    <a 
                      href="https://www.researchgate.net/profile/Kothai-G" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-gray-900 transition-colors"
                    >
                      <Award className="w-5 h-5" />
                      <span>ResearchGate</span>
                    </a>
                    <div className="flex items-center gap-3 dark:text-gray-300 text-gray-700">
                      <Award className="w-5 h-5" />
                      <span>ORCID: 0000-0002-9581-1679</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md dark:border-gray-700/50 border border-gray-200 h-full">
                <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 dark:focus:ring-[#8E2DE2] focus:ring-[#D1C4E9]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 dark:focus:ring-[#8E2DE2] focus:ring-[#D1C4E9]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 dark:focus:ring-[#8E2DE2] focus:ring-[#D1C4E9]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 rounded-lg dark:bg-gray-700 bg-gray-100 dark:text-white text-gray-900 border dark:border-gray-600 border-gray-300 focus:outline-none focus:ring-2 dark:focus:ring-[#8E2DE2] focus:ring-[#D1C4E9]"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="px-6 py-3 rounded-lg bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] text-white font-medium shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                    
                    {formStatus === 'success' && (
                      <div className="mt-4 p-3 rounded-lg dark:bg-green-900/30 bg-green-100 dark:text-green-400 text-green-700">
                        Your message has been sent successfully. I'll get back to you soon!
                      </div>
                    )}
                    
                    {formStatus === 'error' && (
                      <div className="mt-4 p-3 rounded-lg dark:bg-red-900/30 bg-red-100 dark:text-red-400 text-red-700">
                        There was an error sending your message. Please try again later.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;