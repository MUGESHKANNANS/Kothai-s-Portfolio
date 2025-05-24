import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'dark:bg-[#0D0D0D]/90 bg-white/90 backdrop-blur-sm shadow-md' 
          : 'dark:bg-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] bg-clip-text text-transparent">
          Dr. Kothai G
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-all dark:text-gray-300 text-gray-700 hover:dark:text-white hover:text-black relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 dark:after:bg-gradient-to-r dark:after:from-[#8E2DE2] dark:after:to-[#00C9FF] after:from-[#D1C4E9] after:to-[#81D4FA]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-gray-800/50 bg-gray-100 hover:dark:bg-gray-700 hover:bg-gray-200 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full dark:bg-gray-800/50 bg-gray-100 hover:dark:bg-gray-700 hover:bg-gray-200 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md dark:bg-gray-800/50 bg-gray-100 hover:dark:bg-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} className="dark:text-white text-black" /> : <Menu size={24} className="dark:text-white text-black" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white dark:bg-[#0D0D0D] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-medium dark:text-gray-200 text-gray-800 hover:dark:text-white hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;