import React from 'react';
import { ChevronUp } from 'lucide-react';

interface BackToTopProps {
  isVisible: boolean;
}

const BackToTop: React.FC<BackToTopProps> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full dark:bg-[#8E2DE2] bg-[#D1C4E9] text-white shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
};

export default BackToTop;