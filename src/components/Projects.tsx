import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Code, ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: string;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Intelligent Transport System for Traffic Prediction",
      description: "Developed a hybrid deep learning model combining CNN and GRU for accurate traffic congestion prediction in smart cities. The system analyzes traffic patterns and provides real-time congestion alerts, helping to optimize traffic flow and reduce travel time.",
      technologies: ["Python", "TensorFlow", "CNN", "GRU", "Traffic Data Analysis"],
      type: "PhD Research"
    },
    {
      id: 2,
      title: "Secure VANET Communication Protocol",
      description: "Designed and implemented a chaotic light-weight authentication protocol for Vehicular Ad-hoc Networks to ensure secure vehicle-to-vehicle and vehicle-to-infrastructure communication, protecting against message alteration attacks.",
      technologies: ["Network Security", "Cryptography", "Authentication Protocols", "VANET"],
      type: "Security Research"
    },
    {
      id: 3,
      title: "Hybrid CNN-GRU Intrusion Detection System",
      description: "Created an intrusion detection system for VANETs using a hybrid CNN-GRU architecture, capable of identifying and mitigating security threats in vehicular networks with high accuracy.",
      technologies: ["Deep Learning", "Network Security", "Python", "TensorFlow", "Data Analysis"],
      type: "Security Research"
    },
    {
      id: 4,
      title: "Rainfall Prediction using Deep Learning",
      description: "Developed a system using machine learning and deep learning techniques to predict rainfall patterns, helping with agricultural planning and flood management.",
      technologies: ["Machine Learning", "Deep Learning", "Time Series Analysis", "Python"],
      type: "Environmental Research"
    },
    {
      id: 5,
      title: "Smart Collision Alert System",
      description: "Designed and patented an intelligent system for smart collision alerts in vehicles, using sensors and AI algorithms to detect potential collisions and alert drivers in real-time.",
      technologies: ["IoT", "Artificial Intelligence", "Sensor Networks", "Real-time Systems"],
      type: "Patented Technology"
    },
    {
      id: 6,
      title: "Sign Language to Text Conversion using RNN-LSTM",
      description: "Implemented a system that converts sign language gestures to text using Recurrent Neural Networks with Long Short-Term Memory, enhancing communication accessibility for the hearing impaired.",
      technologies: ["RNN", "LSTM", "Computer Vision", "TensorFlow", "Python"],
      type: "Accessibility Research"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Projects" subtitle="Research Implementations & Technical Work" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`rounded-xl dark:bg-gray-800/50 bg-white shadow-md transition-all duration-300 ${
                  activeProject === project.id 
                    ? 'transform scale-105 z-10 dark:shadow-[0_0_30px_rgba(129,212,250,0.2)] shadow-[0_0_30px_rgba(209,196,233,0.3)]' 
                    : 'hover:shadow-lg hover:transform hover:scale-102'
                } dark:border-gray-700/50 border border-gray-200 overflow-hidden`}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg dark:bg-teal-900/30 bg-teal-100">
                      <Code className="w-5 h-5 dark:text-teal-400 text-teal-600" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-gray-700">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="dark:text-gray-300 text-gray-700 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium dark:text-gray-400 text-gray-600 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="text-xs px-2 py-1 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-2 border-t dark:border-gray-700 border-gray-200">
                    <button className="flex items-center text-sm font-medium dark:text-[#00C9FF] text-blue-600 hover:underline">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-4">
              Research Collaborations
            </h3>
            <p className="dark:text-gray-300 text-gray-700 mb-6 max-w-3xl mx-auto">
              I'm actively seeking research collaborations in the fields of Machine Learning, 
              Deep Learning, Network Security, and Intelligent Transportation Systems. If you're 
              interested in collaborating on research projects, please reach out.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Discuss Collaboration <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;