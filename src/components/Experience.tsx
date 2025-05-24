import React from 'react';
import SectionTitle from './ui/SectionTitle';
import { Briefcase, Calendar, Users, BookOpen } from 'lucide-react';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
  type: 'academic' | 'role';
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      id: 1,
      position: "Assistant Professor",
      company: "KPR Institute of Engineering and Technology",
      period: "June 2023 - Present",
      description: [
        "Handling various subjects including Soft Computing, Design Studio, Computer Organization and Architecture, and more.",
        "Serving as Vertical Head of Minors degree (Applied Machine Learning) and Domain Coordinator for Transport Systems.",
        "Faculty Advisor for IEEE Computational Intelligence Society."
      ],
      type: 'academic'
    },
    {
      id: 2,
      position: "Assistant Professor",
      company: "Kalasalingam Academy of Research and Education",
      period: "July 2022 - April 2023",
      description: [
        "Handled subjects including Natural Language Processing, Predictive Analytics, Deep Learning, and Data Warehousing and Data Mining.",
        "Supervised student projects and research activities.",
        "Participated in faculty development programs and academic activities."
      ],
      type: 'academic'
    },
    {
      id: 3,
      position: "Department Responsibilities",
      company: "",
      period: "Current Roles",
      description: [
        "Exam Cell Coordinator",
        "IQAC Coordinator",
        "Event Coordinator",
        "R and D Coordinator",
        "Autonomous Coordinator",
        "Chief Mentor for III year AIML Students"
      ],
      type: 'role'
    },
    {
      id: 4,
      position: "Institution Level Responsibilities",
      company: "",
      period: "Current Roles",
      description: [
        "Appraisal Committee Member - Evaluator - Non-teaching Staffs at KPRIET",
        "Vertical Head of Minors degree (Applied Machine Learning)",
        "Domain Coordinator for Transport Systems",
        "Faculty Advisor for IEEE Computational Intelligence Society"
      ],
      type: 'role'
    }
  ];

  return (
    <section id="experience" className="py-20 dark:bg-[#0F0F0F] bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Experience" subtitle="Professional Journey & Responsibilities" />
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experienceItems.map((item) => (
              <div 
                key={item.id} 
                className="p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 dark:border-gray-700/50 border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden sm:block">
                    <div className="p-3 rounded-lg dark:bg-blue-900/30 bg-blue-100">
                      {item.type === 'academic' ? (
                        <Briefcase className="w-6 h-6 dark:text-blue-400 text-blue-600" />
                      ) : (
                        <Users className="w-6 h-6 dark:text-purple-400 text-purple-600" />
                      )}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-semibold dark:text-white text-gray-800">
                        {item.position}
                      </h3>
                      {item.type === 'academic' && (
                        <div className="flex items-center text-sm dark:text-gray-400 text-gray-600">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.period}
                        </div>
                      )}
                    </div>
                    
                    {item.company && (
                      <p className="text-lg dark:text-gray-300 text-gray-700 mb-4">
                        {item.company}
                      </p>
                    )}
                    
                    <div className="space-y-2">
                      {item.description.map((desc, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="min-w-4 pt-1">
                            <div className="w-2 h-2 rounded-full dark:bg-[#8E2DE2] bg-[#D1C4E9]"></div>
                          </div>
                          <p className="dark:text-gray-300 text-gray-700">{desc}</p>
                        </div>
                      ))}
                    </div>
                    
                    {item.type === 'academic' && (
                      <div className="mt-4 flex items-center dark:text-gray-400 text-gray-600 text-sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        <span>Teaching & Research</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md dark:border-gray-700/50 border border-gray-200">
            <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-4">
              Subjects Taught
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Natural Language Processing",
                "Deep Learning",
                "Predictive Analytics",
                "Computer Organization and Architecture",
                "Data Warehousing and Data Mining",
                "Soft Computing",
                "Design Studio",
                "Text and Visual Analytics",
                "Introduction to AI",
                "Feature Engineering"
              ].map((subject, index) => (
                <div key={index} className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 dark:text-blue-400 text-blue-600" />
                  <span className="dark:text-gray-300 text-gray-700">{subject}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;