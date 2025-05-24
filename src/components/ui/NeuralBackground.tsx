import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  brightness: number;
  targetBrightness: number;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      const { width, height } = document.documentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initParticles();
    };

    const initParticles = () => {
      const numberOfParticles = Math.min(80, Math.floor((canvas.width * canvas.height) / 25000));
      particlesRef.current = Array.from({ length: numberOfParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
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
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -0.9;
          particle.x = particle.x < 0 ? 0 : canvas.width;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -0.9;
          particle.y = particle.y < 0 ? 0 : canvas.height;
        }

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / 200);

          if (influence > 0) {
            particle.targetBrightness = influence;
            const angle = Math.atan2(dy, dx);
            const force = influence * 0.2;
            particle.speedX += Math.cos(angle) * force;
            particle.speedY += Math.sin(angle) * force;
          } else {
            particle.targetBrightness = 0;
          }
        } else {
          particle.targetBrightness = 0;
        }

        particle.brightness += (particle.targetBrightness - particle.brightness) * 0.1;
        particle.size = particle.baseSize * (1 + particle.brightness * 0.5);

        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > 2) {
          const damping = 0.95;
          particle.speedX *= damping;
          particle.speedY *= damping;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const brightness = Math.max(particle.brightness, other.brightness);
            const opacity = (1 - distance / 150) * (0.15 + brightness * 0.3);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);

            const gradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            if (theme === 'dark') {
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

      particlesRef.current.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );

        if (theme === 'dark') {
          gradient.addColorStop(0, `rgba(142, 45, 226, ${0.4 + particle.brightness * 0.6})`);
          gradient.addColorStop(0.5, `rgba(0, 201, 255, ${0.2 + particle.brightness * 0.4})`);
          gradient.addColorStop(1, 'rgba(0, 201, 255, 0)');
        } else {
          gradient.addColorStop(0, `rgba(209, 196, 233, ${0.6 + particle.brightness * 0.4})`);
          gradient.addColorStop(0.5, `rgba(129, 212, 250, ${0.4 + particle.brightness * 0.3})`);
          gradient.addColorStop(1, 'rgba(129, 212, 250, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ touchAction: 'none' }}
    />
  );
};

export default NeuralBackground;