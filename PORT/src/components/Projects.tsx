import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Zap, Shield, Sparkles, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const projects = [
    {
      title: 'AI-Image Generator',
      codename: 'GENESIS',
      description: 'Generate unique images using advanced AI models. Enter a prompt and create custom visuals instantly.',
      image: 'https://ik.imagekit.io/ioyklag3bb/home%20pa.PNG?updatedAt=1763748682526',
      tech: ['Python', 'Hugging Face', 'SQLite'],
      status: 'DEPLOYED',
      icon: Zap,
      github: 'https://github.com/prem2708/Ai_image_generator_tool.git',
      demo: 'https://aiimagegeneratortool-production.up.railway.app'
    },
    {
      title: 'AI-Resume Builder',
      codename: 'ARCHITECT',
      description: 'Smart web app that creates professional resumes in minutes using AI-powered suggestions.',
      image: 'https://ik.imagekit.io/ioyklag3bb/thumb1.PNG?updatedAt=1763748680542',
      tech: ['React.js', 'TypeScript', 'Google AI'],
      status: 'ACTIVE',
      icon: Shield,
      github: 'https://github.com/prem2708/AI-resume-builder.git',
      demo: 'https://ai-resume-byprem.netlify.app'
    },
    {
      title: 'AI-Chatbot',
      codename: 'MUSEBOT',
      description: 'Hackathon project - AI-powered creative assistant for image generation and creative tools.',
      image: 'https://ik.imagekit.io/ioyklag3bb/thumb%202.PNG?updatedAt=1763748681177',
      tech: ['JavaScript', 'Dialogflow', 'CSS'],
      status: 'COMPLETE',
      icon: Sparkles,
      github: 'https://github.com/prem2708/aibot-musebot-byvoxnova.git',
      demo: 'https://aibot-musebot-byvoxnova-hackthonproj.netlify.app'
    },
    {
      title: 'Yog & Asan',
      codename: 'HARMONY',
      description: 'Yoga website with information about various poses, benefits, and practice guides.',
      image: 'https://ik.imagekit.io/ioyklag3bb/THUMB%203.PNG?updatedAt=1763748682424',
      tech: ['HTML', 'CSS'],
      status: 'LEGACY',
      icon: Zap,
      github: 'https://github.com/prem2708/yoga_and_asan_website-.git',
      demo: 'https://yog-and-asan.netlify.app'
    },
    {
      title: 'AI Doctor',
      codename: 'MEDEX',
      description: 'Intelligent web app providing instant medical advice using advanced AI models.',
      image: 'https://ik.imagekit.io/ioyklag3bb/Screenshot%202025-08-07%20210813.png?updatedAt=1763748680038',
      tech: ['Python', 'GROQ', 'GRADIO'],
      status: 'ACTIVE',
      icon: Shield,
      github: 'https://github.com/prem2708/AI_DOCTOR.git',
      demo: 'https://ai-doctor-s7xi.onrender.com'
    },
    {
      title: 'Aayam 2025',
      codename: 'NEXUS',
      description: 'Official website for annual tech fest with event details, schedules, and registration.',
      image: 'https://ik.imagekit.io/ioyklag3bb/AAY.png?updatedAt=1763748682456',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'DEPLOYED',
      icon: Rocket,
      github: 'https://github.com/prem2708/Hackthon_website.git',
      demo: 'https://aayam2025.netlify.app/'
    },

    {
      title: 'Mac portfolio ',
      codename: 'MACPORT',
      description: 'Portfolio website for a web developer.',
      image: 'https://ik.imagekit.io/ioyklag3bb/new%20port.png',
      tech: ['React.js', 'javascript', 'Tailwind CSS'],
      status: 'DEPLOYED',
      icon: Rocket,
      github: 'https://github.com/prem2708/prem_new_portfolio.git',
      demo: 'https://premnewport.netlify.app/'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(projects.length / itemsPerView);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const getCurrentProjects = () => {
    const startIndex = currentSlide * itemsPerView;
    return projects.slice(startIndex, startIndex + itemsPerView);
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'DEPLOYED': 'text-green-400 bg-green-500/10',
      'ACTIVE': 'text-cyan-400 bg-cyan-500/10',
      'COMPLETE': 'text-purple-400 bg-purple-500/10',
      'LEGACY': 'text-gray-400 bg-gray-500/10',
    };
    return colors[status] || colors['ACTIVE'];
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 section-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 data-grid opacity-30"></div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 holo-card rounded-full mb-6">
            <Rocket className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-rajdhani tracking-widest text-cyan-400 uppercase">Mission Archive</span>
          </div>

          <h2 className="section-title-space font-orbitron gradient-text-aurora mb-4">
            PROJECTS
          </h2>
          <p className="section-subtitle-space">
            Completed Missions & Active Operations
          </p>
        </div>

        {/* Projects Slider */}
        <div className="mb-16">
          <div>
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: `repeat(${itemsPerView}, 1fr)` }}
            >
              {getCurrentProjects().map((project, index) => {
                const Icon = project.icon;

                return (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="hud-border holo-card rounded-2xl overflow-hidden 
                      transition-all duration-500 tilt-effect hover:neon-glow group
                      animate-scale-in flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent"></div>

                      {/* Status Badge */}
                      <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-rajdhani tracking-wider ${getStatusColor(project.status)}`}>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                          {project.status}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute top-3 right-3 w-10 h-10 holo-card rounded-xl flex items-center justify-center neon-border">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>

                      {/* Codename */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-xs font-rajdhani text-cyan-400/60 tracking-widest">CODENAME</span>
                        <p className="text-lg font-orbitron text-white">{project.codename}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-orbitron text-white mb-2 group-hover:neon-text transition-all">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 font-exo line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-rajdhani text-cyan-300 tracking-wider"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 holo-card rounded-lg flex items-center justify-center gap-2
                            text-gray-300 hover:text-cyan-400 hover:neon-border transition-all text-sm font-rajdhani tracking-wider"
                        >
                          <Github className="w-4 h-4" />
                          CODE
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 space-btn-primary rounded-lg flex items-center justify-center gap-2
                            text-sm font-rajdhani tracking-wider"
                        >
                          <ExternalLink className="w-4 h-4" />
                          LAUNCH
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation - Side by Side */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0618]/80 backdrop-blur rounded-xl border border-cyan-500/30
                  hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 
                  flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </button>

              <div className="flex space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-cyan-400 shadow-[0_0_10px_#00f5ff] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0618]/80 backdrop-blur rounded-xl border border-cyan-500/30
                  hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 
                  flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://github.com/prem2708?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 space-btn rounded-xl text-sm sm:text-base"
          >
            <Github className="w-5 h-5" />
            VIEW ALL MISSIONS
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
    </section>
  );
}