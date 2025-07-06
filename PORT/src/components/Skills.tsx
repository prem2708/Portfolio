import React, { useState, useRef, useEffect } from 'react';

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML', level: 95, icon: '🌐', color: 'orange' },
    { name: 'CSS', level: 90, icon: '🎨', color: 'blue' },
    { name: 'JavaScript', level: 88, icon: '⚡', color: 'yellow' },
    { name: 'React', level: 85, icon: '⚛️', color: 'cyan' },
    { name: 'Next.js', level: 80, icon: '▲', color: 'white' },
    { name: 'Node.js', level: 82, icon: '🟢', color: 'green' },
    { name: 'Python', level: 85, icon: '🐍', color: 'blue' },
    { name: 'Django', level: 78, icon: '🎯', color: 'green' },
    { name: 'Java', level: 80, icon: '☕', color: 'orange' },
    { name: 'C', level: 75, icon: '⚙️', color: 'gray' },
    { name: 'C++', level: 78, icon: '🔧', color: 'blue' },
    { name: 'AI/ML', level: 75, icon: '🤖', color: 'purple' },
    { name: 'Adobe Premiere Pro', level: 78, icon: '🎬', color: 'purple' },
    { name: 'Photoshop', level: 85, icon: '🖼️', color: 'blue' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: 'green' },
    { name: 'MySQL', level: 82, icon: '🐬', color: 'blue' },
    { name: 'SQLite', level: 85, icon: '💾', color: 'gray' },
  ];

  const slidesPerView = 4;
  const totalSlides = Math.ceil(skills.length / slidesPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Add smooth transition effect when slides change
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
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

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'from-orange-500 to-orange-600 shadow-orange-500/50',
      blue: 'from-blue-500 to-blue-600 shadow-blue-500/50',
      yellow: 'from-yellow-500 to-yellow-600 shadow-yellow-500/50',
      cyan: 'from-cyan-500 to-cyan-600 shadow-cyan-500/50',
      white: 'from-gray-300 to-gray-400 shadow-gray-400/50',
      green: 'from-green-500 to-green-600 shadow-green-500/50',
      purple: 'from-purple-500 to-purple-600 shadow-purple-500/50',
      gray: 'from-gray-500 to-gray-600 shadow-gray-500/50',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getTextColor = (color: string) => {
    const colors = {
      orange: 'text-orange-400',
      blue: 'text-blue-400',
      yellow: 'text-yellow-400',
      cyan: 'text-cyan-400',
      white: 'text-gray-300',
      green: 'text-green-400',
      purple: 'text-purple-400',
      gray: 'text-gray-400',
    };
    return colors[color as keyof typeof colors] || 'text-cyan-400';
  };

  const getCurrentSkills = () => {
    const startIndex = currentSlide * slidesPerView;
    return skills.slice(startIndex, startIndex + slidesPerView);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <style>{`
        .slider-container {
          scroll-behavior: smooth;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .skill-card {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .skill-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-card:nth-child(4) { animation-delay: 0.4s; }
        .skill-card:hover {
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
        .progress-bar {
          transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-lime-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 glow-text">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-exo">
            Mastering Modern Technologies & Creative Tools
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
              className="slider-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8"
            >
              {getCurrentSkills().map((skill, index) => (
              <div
                key={index}
                  className="skill-card bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                  <h3 className={`text-lg font-bold font-exo ${getTextColor(skill.color)} group-hover:text-white transition-colors duration-300`}>
                    {skill.name}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-exo">Proficiency</span>
                    <span className="text-white font-semibold font-exo">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                        className={`progress-bar h-full bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          i < Math.floor(skill.level / 20) 
                            ? `bg-gradient-to-r ${getColorClasses(skill.color).split(' ')[0]} shadow-sm` 
                            : 'bg-gray-600'
                        }`}
                      ></div>
                    ))}
                  </div>
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

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAutoPlaying
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
              </button>
            </div>
          </div>
        </div>



        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <span className="inline-block"><svg className="w-12 h-12 mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" /></svg></span>
                <div className="text-lg font-bold text-cyan-400 mb-1 font-exo">Frontend</div>
                <div className="text-gray-400 text-sm font-exo">React, Next.js, HTML/CSS</div>
              </div>
              <div className="text-center group">
                <span className="inline-block"><svg className="w-12 h-12 mx-auto mb-2 text-purple-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" /></svg></span>
                <div className="text-lg font-bold text-purple-400 mb-1 font-exo">Backend</div>
                <div className="text-gray-400 text-sm font-exo">Node.js, Python, Django</div>
              </div>
              <div className="text-center group">
                <span className="inline-block"><svg className="w-12 h-12 mx-auto mb-2 text-pink-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" /></svg></span>
                <div className="text-lg font-bold text-pink-400 mb-1 font-exo">AI/ML</div>
                <div className="text-gray-400 text-sm font-exo">Machine Learning</div>
              </div>
              <div className="text-center group">
                <span className="inline-block"><svg className="w-12 h-12 mx-auto mb-2 text-lime-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" /></svg></span>
                <div className="text-lg font-bold text-lime-400 mb-1 font-exo">Design</div>
                <div className="text-gray-400 text-sm font-exo">Photoshop, Premiere</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}