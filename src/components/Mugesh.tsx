import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Mugesh: React.FC = () => {
  const { theme } = useTheme();

  // Customizations for light mode
  const bgClass = theme === 'dark' ? 'bg-black/50' : 'bg-white/70';
  const borderClass = theme === 'dark' ? 'border-white/40' : 'border-gray-300';
  const textClass = theme === 'dark' ? 'text-white/80' : 'text-black/90';
  const iconColorClass = theme === 'dark' ? 'text-purple-400' : 'text-purple-700';
  const linkClass =
    theme === 'dark'
      ? 'text-purple-700 hover:text-purple-500'
      : 'text-purple-600 hover:text-purple-900';

  return (
    <div className="bottom-0 left-0 right-0 flex justify-center items-center group">
      <footer
        className={`inline-block px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-xl shadow-lg z-50 transition-all duration-300 ${bgClass} backdrop-blur-md border ${borderClass} ${textClass} max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md`}
      >
        <div className="group flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-light">
          <span className={`animate-bounce group-hover:animate-none hover:cursor-pointer ${iconColorClass} duration-300 text-sm sm:text-base`}>
            <FaLaptopCode />
          </span>
          <p className="text-center whitespace-nowrap">
            Coded with care by{' '}
            <a
              href="https://mugeshkannan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} transition-all duration-200 underline underline-offset-4`}
            >
              Mugesh Kannan S
            </a>{' '}
            • {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Mugesh;
