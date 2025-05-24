import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Brain, Milestone, BookOpen, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="My Journey & Vision" />
        
        <div className="max-w-4xl mx-auto dark:text-gray-300 text-gray-700">
          <p className="text-lg mb-8 leading-relaxed">
            I am Dr. Kothai Ganesan, an Assistant Professor with a passion for developing and 
            promoting creativity and high-ordered thinking skills that foster quality education for student development. 
            My research focuses on Machine Learning, Deep Learning, Vehicular Ad-hoc Networks (VANETs), and Network Security.
            I recently completed my Ph.D. in Computer Science and Engineering at SRM Institute of Science and Technology 
            with a focus on Intelligent Transport Systems for Traffic Prediction, Congestion Avoidance, and Secured Data Transmission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="dark:bg-gray-800/50 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg dark:bg-indigo-900/30 bg-indigo-100 mr-4">
                  <Brain className="w-6 h-6 dark:text-indigo-400 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">Research Focus</h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    My research integrates Machine Learning and Deep Learning techniques to solve 
                    complex problems in transportation systems and network security, with a focus on developing 
                    intelligent solutions for real-world challenges.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="dark:bg-gray-800/50 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg dark:bg-blue-900/30 bg-blue-100 mr-4">
                  <Milestone className="w-6 h-6 dark:text-blue-400 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">Teaching Philosophy</h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    I believe in leveraging my extrovert and dynamic approach to teaching, 
                    creating an environment that encourages critical thinking, innovation, and 
                    practical application of theoretical concepts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="dark:bg-gray-800/50 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg dark:bg-purple-900/30 bg-purple-100 mr-4">
                  <BookOpen className="w-6 h-6 dark:text-purple-400 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">Academic Contributions</h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    I have published multiple research papers in reputed journals and conferences, 
                    focusing on intelligent transportation systems, security in VANETs, and 
                    applications of deep learning in solving complex problems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="dark:bg-gray-800/50 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg dark:bg-teal-900/30 bg-teal-100 mr-4">
                  <Award className="w-6 h-6 dark:text-teal-400 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-gray-800">Professional Goals</h3>
                  <p className="dark:text-gray-300 text-gray-600">
                    I aim to contribute my knowledge and skills in organizations that offer genuine 
                    opportunities for career progression, while continuing to advance research in 
                    emerging technologies and mentor the next generation of computer scientists.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 dark:text-white text-gray-800">Areas of Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Machine Learning', 'Deep Learning', 'Feature Engineering', 'Cryptography', 'Vehicular Ad-hoc Networks', 
                'Network Security', 'Intelligent Transport Systems', 'Python Programming'].map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 rounded-full dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;