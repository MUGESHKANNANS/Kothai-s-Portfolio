import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Award, BookOpen, AlignCenterVertical as Certificate, CheckCircle } from 'lucide-react';

interface AwardItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  type: 'award' | 'certification' | 'achievement';
  icon: React.ReactNode;
}

const Awards: React.FC = () => {
  const awardsItems: AwardItem[] = [
    {
      id: 1,
      title: "Patent for Intelligent Transport System with Smart Collision Alert",
      issuer: "Indian Patent Office",
      year: "2022",
      type: "award",
      icon: <Award className="w-6 h-6 dark:text-amber-400 text-amber-600" />
    },
    {
      id: 2,
      title: "Patent for Augmented Reality Glasses for Skin Cancer Classification",
      issuer: "Design Patent",
      year: "2023",
      type: "award",
      icon: <Award className="w-6 h-6 dark:text-amber-400 text-amber-600" />
    },
    {
      id: 3,
      title: "Australian Patent for Intelligent Cost-Effective Mitigation System for Flash Flood Catastrophe Control",
      issuer: "Australian Patent Office",
      year: "2021",
      type: "award",
      icon: <Award className="w-6 h-6 dark:text-amber-400 text-amber-600" />
    },
    {
      id: 4,
      title: "Natural Language Processing",
      issuer: "NPTEL",
      year: "2024",
      type: "certification",
      icon: <Certificate className="w-6 h-6 dark:text-green-400 text-green-600" />
    },
    {
      id: 5,
      title: "Big Data Computing",
      issuer: "NPTEL",
      year: "2021",
      type: "certification",
      icon: <Certificate className="w-6 h-6 dark:text-green-400 text-green-600" />
    },
    {
      id: 6,
      title: "Introduction to Cybersecurity",
      issuer: "Simplilearn",
      year: "2020",
      type: "certification",
      icon: <Certificate className="w-6 h-6 dark:text-green-400 text-green-600" />
    },
    {
      id: 7,
      title: "Introduction to Self-Driving Cars",
      issuer: "Coursera",
      year: "2020",
      type: "certification",
      icon: <Certificate className="w-6 h-6 dark:text-green-400 text-green-600" />
    },
    {
      id: 8,
      title: "Unsupervised Machine Learning",
      issuer: "Coursera",
      year: "2023",
      type: "certification",
      icon: <Certificate className="w-6 h-6 dark:text-green-400 text-green-600" />
    },
    {
      id: 9,
      title: "Published book on Machine Learning and Artificial Intelligence",
      issuer: "CiiT Publications",
      year: "2024",
      type: "achievement",
      icon: <BookOpen className="w-6 h-6 dark:text-blue-400 text-blue-600" />
    },
    {
      id: 10,
      title: "Faculty Orientation Program on Ignite Entrepreneurship",
      issuer: "Wadhwani Entrepreneur Network",
      year: "2024",
      type: "achievement",
      icon: <CheckCircle className="w-6 h-6 dark:text-purple-400 text-purple-600" />
    }
  ];

  const certifications = [
    "Good Citation Behavior (Clarivate - Web of Science Academy)",
    "Learn to Program: The Fundamentals (Coursera)",
    "Supervised Machine Learning: Classification (Coursera)",
    "Machine Learning Capstone (Coursera)"
  ];

  const events = [
    "Expert Talk Series on Fuzzy Systems and Genetic Algorithms",
    "Workshop on Enhancing Performance in Computer Systems by Pipelining Concepts",
    "Two Weeks STTP on Machine Learning, Data Science and Gen AI",
    "Industry Expert Talk Series on Text and Visual Analytics",
    "Guest Lecture on AI in Health Care",
    "Two Days Workshop on The Future of Intelligence: Machine Learning and Beyond",
    "Industry One Credit Course on Data Visualization using PowerBI"
  ];

  return (
    <section id="awards" className="py-20 dark:bg-[#0F0F0F] bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Awards & Certifications" subtitle="Recognitions & Professional Development" />
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsItems.map((item) => (
              <div 
                key={item.id} 
                className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg dark:bg-gray-700/50 bg-gray-100">
                    {item.icon}
                  </div>
                  
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm dark:text-gray-400 text-gray-600">
                        {item.issuer}
                      </p>
                      <span className="text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-gray-700">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md dark:border-gray-700/50 border border-gray-200">
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-4 flex items-center">
                <Certificate className="w-5 h-5 mr-2 dark:text-green-400 text-green-600" />
                Additional Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="min-w-4 pt-1">
                      <div className="w-2 h-2 rounded-full dark:bg-[#8E2DE2] bg-[#D1C4E9]"></div>
                    </div>
                    <p className="dark:text-gray-300 text-gray-700">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md dark:border-gray-700/50 border border-gray-200">
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 dark:text-amber-400 text-amber-600" />
                Events Organized
              </h3>
              <div className="space-y-2">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="min-w-4 pt-1">
                      <div className="w-2 h-2 rounded-full dark:bg-[#8E2DE2] bg-[#D1C4E9]"></div>
                    </div>
                    <p className="dark:text-gray-300 text-gray-700">{event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;