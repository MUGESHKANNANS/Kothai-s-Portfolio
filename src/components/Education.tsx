import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievement?: string;
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      degree: "Ph.D. in Computer Science and Engineering",
      institution: "SRM Institute of Science and Technology",
      location: "Kattankulathur",
      period: "January 2019 - November 2023",
      description: "Completed Ph.D. in Computer Science and Engineering with a focus on Intelligent Transport System for Traffic Prediction, Congestion Avoidance and Secured Data Transmission.",
      achievement: "Successfully defended thesis and published multiple papers in reputed journals."
    },
    {
      id: 2,
      degree: "M.E. in Computer Science and Engineering",
      institution: "Coimbatore Institute of Technology",
      location: "Coimbatore",
      period: "2016 - 2018",
      description: "Completed M.E. in Computer Science and Engineering with Distinction.",
      achievement: "Graduated with 8.61 CGPA."
    },
    {
      id: 3,
      degree: "B.E. in Computer Science and Engineering",
      institution: "Sasurie Academy of Engineering",
      location: "Coimbatore",
      period: "2012 - 2016",
      description: "Completed B.E. in Computer Science and Engineering with First Class.",
      achievement: "Graduated with 7.85 CGPA."
    },
    {
      id: 4,
      degree: "Higher Secondary School",
      institution: "SVGV Matriculation Higher Secondary School",
      location: "Coimbatore",
      period: "2010 - 2012",
      description: "Completed Higher Secondary School with First Class.",
      achievement: "Scored 70% marks."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education" subtitle="Academic Journey & Qualifications" />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 dark:bg-gray-700 bg-gray-200"></div>
            
            {educationItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row md:items-center ${index !== educationItems.length - 1 ? 'mb-12' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full dark:bg-[#8E2DE2] bg-[#D1C4E9]"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200">
                    <div className="flex items-center mb-3 justify-between">
                      <div className="p-2 rounded-lg dark:bg-indigo-900/30 bg-indigo-100 mr-3 md:hidden">
                        <GraduationCap className="w-5 h-5 dark:text-indigo-400 text-indigo-600" />
                      </div>
                      <h3 className="text-lg font-semibold dark:text-white text-gray-800 flex-1">
                        {item.degree}
                      </h3>
                    </div>
                    <div className={`flex flex-wrap items-center text-sm mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center mr-4 dark:text-gray-400 text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.period}
                      </div>
                      <div className="flex items-center dark:text-gray-400 text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                    <p className="dark:text-gray-300 text-gray-700 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm dark:text-gray-400 text-gray-600 mb-2">
                      {item.description}
                    </p>
                    {item.achievement && (
                      <div className="mt-2 dark:bg-gray-700/50 bg-gray-100 px-3 py-1 rounded-md">
                        <p className="text-sm dark:text-gray-300 text-gray-700">
                          <strong>Achievement:</strong> {item.achievement}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;