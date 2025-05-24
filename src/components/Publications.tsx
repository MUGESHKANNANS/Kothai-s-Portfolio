import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import { FileText, BookOpen, Award, Filter } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal: string;
  year: number;
  type: 'journal' | 'conference' | 'book' | 'patent';
  url?: string;
  authors: string;
  highlight?: boolean;
}

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const publications: Publication[] = [
    {
      id: 1,
      title: "A New Hybrid Deep Learning Algorithm for Prediction of Wide Traffic Congestion in Smart Cities",
      journal: "Wireless Communications and Mobile Computing",
      year: 2021,
      type: "journal",
      url: "https://doi.org/10.1155/2021/5583874",
      authors: "Kothai G, et al.",
      highlight: true
    },
    {
      id: 2,
      title: "Performance Analysis of Stationary and Deterministic AODV Model",
      journal: "International Journal of Interactive Mobile Technologies (IJIM)",
      year: 2020,
      type: "journal",
      authors: "Kothai G, et al."
    },
    {
      id: 3,
      title: "A Hybrid CNN-GRU based Intrusion Detection System for secure communication in Vehicular Adhoc Network",
      journal: "Information Security Journal, Taylor & Francis",
      year: 2024,
      type: "journal",
      authors: "Kothai G, et al.",
      highlight: true
    },
    {
      id: 4,
      title: "IoT-Based Automatic SOP Adoption in Pandemic Scenario",
      journal: "International Journal of High Technology Letters",
      year: 2022,
      type: "journal",
      authors: "Kothai G, et al."
    },
    {
      id: 5,
      title: "Traffic Sign Detection in the digital era: Leveraging CNN",
      journal: "IEEE 4th International Multidisciplinary Conference on Engineering Technology (IMCET)",
      year: 2023,
      type: "conference",
      authors: "Kothai G, et al."
    },
    {
      id: 6,
      title: "Efficient Deep learning approach automatic license plate detection with novel feature extraction",
      journal: "2nd International conference on Machine Learning and Data Engineering (ICMLDE)",
      year: 2023,
      type: "conference",
      authors: "Kothai G, et al."
    },
    {
      id: 7,
      title: "MLP-BASED SPEECH EMOTION RECOGNITION FOR AUDIO AND VISUAL FEATURES",
      journal: "7th International Conference on Microelectronics and Telecommunication Engineering",
      year: 2023,
      type: "conference",
      authors: "Kothai G, et al."
    },
    {
      id: 8,
      title: "Chaotic Light Weight Authentication Protocol for Vehicular Adhoc Network",
      journal: "6th International Conference on Smart City Applications",
      year: 2021,
      type: "conference",
      authors: "Kothai G, et al.",
      highlight: true
    },
    {
      id: 9,
      title: "Smart Energy Conservation in Irrigation Management for Greenhouse Agriculture",
      journal: "Environmental Informatics, Springer",
      year: 2024,
      type: "book",
      authors: "Kothai G, et al."
    },
    {
      id: 10,
      title: "Role of Blockchain Technology in Intelligent Transportation System",
      journal: "Blockchain for 6G-Enabled Network-based Applications, Taylor & Francis",
      year: 2024,
      type: "book",
      authors: "Kothai G, et al."
    },
    {
      id: 11,
      title: "A SYSTEM FOR INTELLIGENT TRANSPORT WITH A SMART COLLISION ALERT AND A METHOD THEREOF",
      journal: "Indian Patent (202241051798 A)",
      year: 2022,
      type: "patent",
      authors: "Kothai G, et al.",
      highlight: true
    }
  ];

  const getPublicationIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <FileText className="w-5 h-5 dark:text-blue-400 text-blue-600" />;
      case 'conference':
        return <BookOpen className="w-5 h-5 dark:text-purple-400 text-purple-600" />;
      case 'book':
        return <BookOpen className="w-5 h-5 dark:text-teal-400 text-teal-600" />;
      case 'patent':
        return <Award className="w-5 h-5 dark:text-amber-400 text-amber-600" />;
      default:
        return <FileText className="w-5 h-5 dark:text-gray-400 text-gray-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'journal':
        return 'Journal Paper';
      case 'conference':
        return 'Conference Paper';
      case 'book':
        return 'Book Chapter';
      case 'patent':
        return 'Patent';
      default:
        return type;
    }
  };

  const filteredPublications = publications
    .filter(pub => filter === 'all' || pub.type === filter)
    .filter(pub => 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <section id="publications" className="py-20 dark:bg-[#0F0F0F] bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Publications" subtitle="Research Contributions & Scholarly Work" />
        
        <div className="max-w-5xl mx-auto mb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 px-4 pl-10 rounded-lg dark:bg-gray-800 bg-white dark:text-white text-gray-800 border dark:border-gray-700 border-gray-300 focus:outline-none focus:ring-2 dark:focus:ring-[#8E2DE2] focus:ring-[#D1C4E9]"
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 dark:text-gray-400 text-gray-500 w-4 h-4" />
            </div>
            
            <div className="flex gap-2 w-full md:w-auto flex-wrap justify-center">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all' 
                    ? 'dark:bg-[#8E2DE2] bg-[#D1C4E9] dark:text-white text-gray-800' 
                    : 'dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('journal')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'journal' 
                    ? 'dark:bg-[#8E2DE2] bg-[#D1C4E9] dark:text-white text-gray-800' 
                    : 'dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100'
                }`}
              >
                Journals
              </button>
              <button
                onClick={() => setFilter('conference')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'conference' 
                    ? 'dark:bg-[#8E2DE2] bg-[#D1C4E9] dark:text-white text-gray-800' 
                    : 'dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100'
                }`}
              >
                Conferences
              </button>
              <button
                onClick={() => setFilter('book')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'book' 
                    ? 'dark:bg-[#8E2DE2] bg-[#D1C4E9] dark:text-white text-gray-800' 
                    : 'dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100'
                }`}
              >
                Books
              </button>
              <button
                onClick={() => setFilter('patent')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'patent' 
                    ? 'dark:bg-[#8E2DE2] bg-[#D1C4E9] dark:text-white text-gray-800' 
                    : 'dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100'
                }`}
              >
                Patents
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredPublications.length > 0 ? (
              filteredPublications.map((pub) => (
                <div 
                  key={pub.id} 
                  className={`p-6 rounded-xl dark:bg-gray-800/50 bg-white shadow-md transition-all hover:shadow-lg ${
                    pub.highlight 
                      ? 'dark:border-l-4 dark:border-l-[#8E2DE2] border-l-4 border-l-[#D1C4E9]' 
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:block">
                      <div className="p-3 rounded-lg dark:bg-gray-700/50 bg-gray-100">
                        {getPublicationIcon(pub.type)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-lg font-semibold dark:text-white text-gray-800">
                          {pub.title}
                        </h3>
                        <span className="text-sm font-medium px-3 py-1 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-gray-700">
                          {pub.year}
                        </span>
                      </div>
                      <p className="text-sm dark:text-gray-400 text-gray-600 mb-3">
                        {pub.authors}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-sm dark:text-gray-300 text-gray-700 italic">
                          {pub.journal}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-gray-700">
                            {getTypeLabel(pub.type)}
                          </span>
                          {pub.url && (
                            <a 
                              href={pub.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm font-medium dark:text-[#00C9FF] text-blue-600 hover:underline"
                            >
                              View Publication
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center dark:text-gray-400 text-gray-600">
                <p>No publications found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;