import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { Brain, Network, Shield, Car } from 'lucide-react';

interface ResearchArea {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ResearchAreas: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number | null>(null);

  const researchAreas: ResearchArea[] = [
    {
      id: 1,
      title: "Machine Learning & Deep Learning",
      description: "Developing novel algorithms and models for intelligent data analysis, pattern recognition, and prediction. My work includes hybrid CNN-GRU models for intrusion detection and deep learning approaches for traffic congestion prediction.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Vehicular Ad-hoc Networks (VANETs)",
      description: "Researching communication protocols, routing algorithms, and simulation models for vehicle-to-vehicle and vehicle-to-infrastructure communication. I focus on performance analysis of routing protocols and creating efficient models for urban mobility.",
      icon: <Network className="w-12 h-12" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Network Security",
      description: "Designing and evaluating security mechanisms for wireless networks with a focus on intrusion detection, authentication protocols, and encryption schemes. My research includes developing chaotic light-weight authentication protocols for VANETs.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-red-600 to-orange-600"
    },
    {
      id: 4,
      title: "Intelligent Transport Systems",
      description: "Creating AI-powered solutions for traffic prediction, congestion avoidance, and safe data transmission in smart cities. My PhD research focused on developing a hybrid deep learning algorithm for wide traffic congestion prediction.",
      icon: <Car className="w-12 h-12" />,
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Research Areas" subtitle="Exploring the Frontiers of Technology" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {researchAreas.map((area) => (
            <div 
              key={area.id}
              className={`relative overflow-hidden dark:bg-gray-800/50 bg-white rounded-xl shadow-lg transition-all duration-300 ${
                activeArea === area.id 
                  ? 'transform scale-105 z-10 dark:shadow-[0_0_30px_rgba(129,212,250,0.2)] shadow-[0_0_30px_rgba(209,196,233,0.3)]' 
                  : 'hover:transform hover:scale-105'
              }`}
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <div 
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${area.color}`}
              ></div>
              
              <div className="p-6">
                <div className={`p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${area.color} text-white`}>
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-4 dark:text-white text-gray-800">
                  {area.title}
                </h3>
                
                <p className="dark:text-gray-300 text-gray-600 text-center">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center dark:text-gray-300 text-gray-700">
          <h3 className="text-xl font-semibold mb-4 dark:text-white text-gray-800">Research Interests</h3>
          <p className="mb-6">
            My research interests lie at the intersection of artificial intelligence, network security, and transportation systems. 
            I'm particularly focused on developing intelligent solutions that can address real-world challenges in these domains.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['Deep Neural Networks', 'Traffic Congestion Prediction', 'Secure Communication', 'Data Encryption', 
              'Intrusion Detection Systems', 'Urban Mobility', 'VANET Simulation', 'Hybrid ML Models'].map((interest, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 text-sm font-medium"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;