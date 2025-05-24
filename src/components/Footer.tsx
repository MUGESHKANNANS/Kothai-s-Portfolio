import React from 'react';
import { Mail, Phone, MapPin, Linkedin, BookOpen, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#0D0D0D] bg-gray-100 dark:text-gray-300 text-gray-700 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] bg-clip-text text-transparent">
              Dr. Kothai G
            </h3>
            <p className="mb-4">
              Assistant Professor & Researcher specializing in Machine Learning, Deep Learning, 
              Vehicular Ad-hoc Networks, and Network Security.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/kothai-g-758056140" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://scholar.google.com/citations?hl=en&user=d5WwqnkAAAAJ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors"
                aria-label="Google Scholar"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a 
                href="https://www.researchgate.net/profile/Kothai-G" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-gray-900 transition-colors"
                aria-label="ResearchGate"
              >
                <Award className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#research" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a 
                  href="#publications" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  Publications
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white text-gray-800">
              Contact Details
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 dark:text-gray-400 text-gray-600" />
                <a 
                  href="mailto:emailtokothaiganesan@gmail.com" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  emailtokothaiganesan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 dark:text-gray-400 text-gray-600" />
                <a 
                  href="tel:+919677660531" 
                  className="hover:dark:text-white hover:text-gray-900 transition-colors"
                >
                  +91 9677660531
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 dark:text-gray-400 text-gray-600" />
                <span>
                  Coimbatore, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Award className="w-4 h-4 dark:text-gray-400 text-gray-600" />
                <span>
                  ORCID: 0000-0002-9581-1679
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t dark:border-gray-800 border-gray-200 pt-8 text-center">
          <p className="text-sm">
            &copy; {currentYear} Dr. Kothai G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;