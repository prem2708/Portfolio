import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Zap, Shield, Sparkles } from 'lucide-react';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'AI-Image Generator',
      description: 'A modern web application that allows users to generate unique images using advanced AI models. Enter a prompt, and the tool will create a custom image based on your description—perfect for designers, marketers, and anyone who needs creative visuals on demand.',
      image: 'https://ik.imagekit.io/prem2727/home%20pa.PNG?updatedAt=1751738999596?auto=compress&cs=tinysrgb&w=500',
      tech: ['HTML', 'CSS','JavaScript', 'Python', 'SQLlite','Hugging Face'],
      color: 'cyan',
      icon: Zap,
      github: 'https://github.com/prem2708/Ai_image_generator_tool.git',
      demo: 'https://aiimagegeneratortool-production.up.railway.app'

    },
    {
      title: 'AI-Resume Builder ',
      description: 'A smart, user-friendly web application that helps you create professional resumes in minutes. Powered by AI, this tool guides you through the process, suggests improvements, and generates beautiful, job-ready resumes tailored to your needs.',
      image: 'https://ik.imagekit.io/prem2727/thumb1.PNG?updatedAt=1751739669608?auto=compress&cs=tinysrgb&w=500',
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js','Google Gen AI'],
      color: 'purple',
      icon: Shield,
      github:'https://github.com/prem2708/AI-resume-builder.git',
      demo:'https://ai-resume-byprem.netlify.app'
    },
    {
      title: 'AI-Chatbot',
      description: 'A collaborative hackathon project by the Voxnova team, AIbot Musebot is an innovative web application designed to inspire creativity and assist users with AI-powered image generation and creative tools. Built during a hackathon, this project showcases teamwork, rapid prototyping, and the power of modern web technologies.',
      image: 'https://ik.imagekit.io/prem2727/thumb%202.PNG?updatedAt=1751740345894?auto=compress&cs=tinysrgb&w=500',
      tech: ['HTML', 'CSS', 'JavaScript', 'Dailogflow'],
      color: 'pink',
      icon: Sparkles,
      github:'https://github.com/prem2708/aibot-musebot-byvoxnova.git',
      demo:'https://aibot-musebot-byvoxnova-hackthonproj.netlify.app'
    },
    {
      title: 'Yog and Asan',
      description: 'This is my first project, built using only HTML and CSS. The Yoga & Asan Website provides information about various yoga poses (asanas), their benefits, and how to practice them. The site features multiple pages, including home, about, courses, and contact, with a clean and simple design for easy navigation.',
      image: 'https://ik.imagekit.io/prem2727/THUMB%203.PNG?updatedAt=1751740684309?auto=compress&cs=tinysrgb&w=500',
      tech: ['HTML', 'CSS'],
      color: 'lime',
      icon: Zap,
      github:'https://github.com/prem2708/yoga_and_asan_website-.git',
      demo:'https://yog-and-asan.netlify.app'
    },

    
    {
      title: 'AI Doctor',
      description: 'AI Doctor is an intelligent web application that provides instant medical advice and health recommendations using advanced AI models. Users can describe their symptoms and receive helpful guidance, making healthcare more accessible and convenient. Inspired by the "AI with Hassan" YouTube channel, this project demonstrates the power of AI in healthcare and was built following tutorials from the channel.',
      image: 'https://ik.imagekit.io/prem2727/Screenshot%202025-08-07%20210813.png?updatedAt=1754581134287', // Replace with your own thumbnail if available
      tech: ['Python','GROQ','GRADIO'],
      color: 'orange',
      icon: Shield,
      github: 'https://github.com/prem2708/AI_DOCTOR.git', // Replace with your repo if available
      demo: 'https://ai-doctor-s7xi.onrender.com'
    },
  ];

  const slidesPerView = 3;
  const totalSlides = Math.ceil(projects.length / slidesPerView);

  // Add smooth transition effect when slides change
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentProjects = () => {
    const startIndex = currentSlide * slidesPerView;
    return projects.slice(startIndex, startIndex + slidesPerView);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'border-cyan-500/60 shadow-cyan-500/10',
      purple: 'border-purple-500/60 shadow-purple-500/10',
      pink: 'border-pink-500/60 shadow-pink-500/10',
      lime: 'border-lime-500/60 shadow-lime-500/10',
      orange: 'border-orange-500/60 shadow-orange-500/10',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      <style>{`
        .slider-container {
          scroll-behavior: smooth;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .project-card {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .project-card:nth-child(1) { animation-delay: 0.1s; }
        .project-card:nth-child(2) { animation-delay: 0.2s; }
        .project-card:nth-child(3) { animation-delay: 0.3s; }
        .project-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .nav-dot {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-dot:hover {
          transform: scale(1.2);
        }
        .nav-button {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.3),transparent_70%)]"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 glow-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-exo">
            AI and Design Creativity
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="mb-16">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div 
              ref={sliderRef}
              className="slider-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8"
            >
              {getCurrentProjects().map((project, index) => (
                <div
                  key={index}
                  className={`project-card bg-slate-800/80 border-2 ${getColorClasses(project.color)} rounded-2xl p-6 shadow-xl`}
                >
                  <div className="relative mb-4">
                    <img src={project.image} alt={project.title} className="rounded-xl w-full h-40 object-cover" />
                    <div className="absolute top-2 right-2 bg-white/10 rounded-full p-2">
                      <project.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-exo text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 font-exo">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-cyan-900/40 text-cyan-300 px-2 py-1 rounded text-xs font-exo">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-200 transition-colors" 
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-200 transition-colors" 
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`nav-dot w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}