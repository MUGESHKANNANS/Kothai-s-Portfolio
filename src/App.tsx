import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Publications from './components/Publications';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import NeuralBackground from './components/ui/NeuralBackground';
import ParticlesBackground from './components/ParticlesBackground';
import Mugesh from './components/Mugesh';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <ParticlesBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <ResearchAreas />
            <Publications />
            <Education />
            <Experience />
            <Projects />
            <Awards />
            <Contact />
          </main>
          <Footer />
          <Mugesh />
          <BackToTop isVisible={isVisible} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;