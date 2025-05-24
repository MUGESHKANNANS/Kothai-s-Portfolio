import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  attraction: number;
  brightness: number;
  targetBrightness: number;
}

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const themeRef = useRef<'dark' | 'light'>('dark');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateTheme = () => {
      themeRef.current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initParticles();
    };

    const initParticles = () => {
      const numberOfParticles = Math.min(60, Math.floor(canvas.width * canvas.height / 8000));
      particlesRef.current = Array.from({ length: numberOfParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        attraction: 0,
        brightness: 0,
        targetBrightness: 0
      }));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        // Natural movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges with damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.9;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.9;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }

        // Mouse interaction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 150);

          if (influence > 0) {
            particle.targetBrightness = influence;
            
            // Gentle attraction
            const angle = Math.atan2(dy, dx);
            const force = influence * 0.15;
            particle.speedX += Math.cos(angle) * force;
            particle.speedY += Math.sin(angle) * force;
          } else {
            particle.targetBrightness = 0;
          }
        } else {
          particle.targetBrightness = 0;
        }

        // Smooth brightness transition
        particle.brightness += (particle.targetBrightness - particle.brightness) * 0.1;

        // Speed limiting with smooth damping
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > 2) {
          const damping = 0.95;
          particle.speedX *= damping;
          particle.speedY *= damping;
        }

        // Size pulsing based on brightness
        particle.size = particle.baseSize * (1 + particle.brightness * 0.5);
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const brightness = Math.max(particle.brightness, other.brightness);
            const opacity = (1 - distance / 120) * (0.15 + brightness * 0.35);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            if (themeRef.current === 'dark') {
              gradient.addColorStop(0, `rgba(142, 45, 226, ${opacity})`);
              gradient.addColorStop(1, `rgba(0, 201, 255, ${opacity})`);
            } else {
              gradient.addColorStop(0, `rgba(209, 196, 233, ${opacity * 1.5})`);
              gradient.addColorStop(1, `rgba(129, 212, 250, ${opacity * 1.5})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + brightness;
            ctx.stroke();
          }
        }
      });

      // Draw particles
      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );

        if (themeRef.current === 'dark') {
          gradient.addColorStop(0, `rgba(142, 45, 226, ${0.4 + particle.brightness * 0.6})`);
          gradient.addColorStop(0.5, `rgba(0, 201, 255, ${0.2 + particle.brightness * 0.4})`);
          gradient.addColorStop(1, `rgba(0, 201, 255, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(209, 196, 233, ${0.6 + particle.brightness * 0.4})`);
          gradient.addColorStop(0.5, `rgba(129, 212, 250, ${0.4 + particle.brightness * 0.3})`);
          gradient.addColorStop(1, `rgba(129, 212, 250, 0)`);
        }

        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = () => {
      updateTheme();
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10"></canvas>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] bg-clip-text text-transparent animate-fadeIn">
            Dr. Kothai G
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 dark:text-gray-300 text-gray-700 animate-fadeIn animation-delay-300">
            Assistant Professor & Researcher
          </h2>
          <div className="mb-12 dark:text-gray-300 text-gray-700 max-w-2xl mx-auto animate-fadeIn animation-delay-500">
            <p className="text-lg mb-4">
              A passionate educator and researcher specializing in Machine Learning, 
              Deep Learning, Vehicular Ad-hoc Networks, and Network Security.
            </p>
            <p>
              Currently working as an Assistant Professor at KPR Institute of Engineering and Technology,
              dedicated to academic excellence and innovative research in emerging technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-700">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-gradient-to-r dark:from-[#8E2DE2] dark:to-[#00C9FF] from-[#D1C4E9] to-[#81D4FA] text-white font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Connect With Me
            </a>
            <a 
              href="/assets/CV_Kothai_G.pdf" 
              download
              className="px-6 py-3 rounded-full dark:bg-gray-800 bg-gray-200 dark:text-white text-gray-800 font-medium flex items-center justify-center gap-2 hover:dark:bg-gray-700 hover:bg-gray-300 transition-all"
            >
              Download CV <Download size={16} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down" className="dark:text-white/60 text-black/60 hover:dark:text-white hover:text-black transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;