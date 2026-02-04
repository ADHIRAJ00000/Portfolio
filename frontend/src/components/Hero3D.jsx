import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/mockData';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Code2, Terminal } from 'lucide-react';

const Hero3D = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z -= this.speedZ;

        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;

        const opacity = 1 - this.z / 1000;
        ctx.fillStyle = `rgba(0, 217, 255, ${opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#1a0f2e]">
      {/* 3D Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-blue-600/20 rotate-45 animate-spin-slow" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-cyan-600/20 animate-spin-reverse" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm">
                <div className="w-12 h-0.5 bg-blue-400" />
                <span>Hello, I'm</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                {personalInfo.title}
              </h2>
              <p className="text-xl text-gray-400 font-mono">
                {personalInfo.subtitle}
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              {personalInfo.about}
            </p>

            <div className="flex items-center gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-400 font-semibold rounded-lg hover:bg-blue-600/10 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Right: Smaller Profile Image in corner */}
          <div className="relative flex justify-end items-start animate-fade-in-up animation-delay-300">
            <div className="relative group">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              
              {/* Image container with 3D effect - smaller size */}
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-blue-600/30 shadow-2xl shadow-blue-600/20 transform hover:scale-105 transition-transform duration-500 hover:rotate-2">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 20%' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 to-transparent" />
              </div>

              {/* Floating tech icons - adjusted positions */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-600/10 backdrop-blur-sm rounded-xl border border-blue-600/30 flex items-center justify-center animate-float">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-600/10 backdrop-blur-sm rounded-xl border border-cyan-600/30 flex items-center justify-center animate-float-delayed">
                <Terminal className="w-8 h-8 text-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer bg-transparent border-none"
      >
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-scroll" />
        </div>
      </button>
    </section>
  );
};

export default Hero3D;