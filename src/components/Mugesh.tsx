import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Mugesh: React.FC = () => {
  const { theme } = useTheme();

  const bgClass = theme === 'dark' ? 'bg-black/70' : 'bg-white/10';
  const borderClass = theme === 'dark' ? 'border-white/40' : 'border-white/20';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  const iconColorClass = theme === 'dark' ? 'text-purple-400' : 'text-purple-700';
  const linkClass =
    theme === 'dark'
      ? 'text-purple-400 hover:text-purple-600'
      : 'text-purple-800 hover:text-purple-400';

  return (
    <footer
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${bgClass} backdrop-blur-md ${borderClass} ${textClass} px-6 py-3 rounded-xl shadow-lg z-50`}
    >
      <div className="group flex items-center justify-center space-x-2 text-sm font-light">
        <span className={`animate-bounce slow-bounce group-hover:animate-none hover:cursor-pointer ${iconColorClass} duration-300`}>
            <FaLaptopCode />
        </span>

        <p>
          Coded with care by{' '}
          <a
            href="https://mugeshkannan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} transition-all duration-200 underline underline-offset-4`}
          >
            Mugesh Kannan
          </a>{' '}
          • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Mugesh;
