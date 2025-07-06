import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Sparkles, Github, Linkedin, Instagram } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "AI Enthusiast", 
    "Graphic Designer",
    "Prompt Engineer",
    "Part Time Trader"
  ];

  // Typing animation state
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: number;
    const currentRole = roles[roleIndex];

    if (typing) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-lime-500 rounded-full mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Cyberpunk Grid Pattern */}
      <div className="absolute inset-0 opacity-10 cyber-grid"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-lime-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-200"></div>
        <div className="absolute top-1/3 right-5 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-600"></div>
      </div>

      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-20 h-20 border-2 border-cyan-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-16 h-16 border-2 border-purple-400/30 rotate-12 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-r from-pink-500/20 to-lime-500/20 rotate-45 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left lg:pr-8">
            <div className="mb-8">
              {/* Small "I am" text with enhanced animation */}
              <p className="text-lg md:text-xl text-gray-400 mb-3 font-light font-exo animate-fade-in-smooth">
                I am
              </p>
              
              {/* Name with stylish font */}
              <h1 className="text-5xl md:text-7xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 transform hover:scale-105 transition-transform duration-300 leading-tight animate-slide-up-smooth glow-text">
                Prem Kumar
              </h1>
              
              {/* Small descriptive text */}
              <p className="text-sm md:text-base text-gray-500 mb-6 font-exo animate-fade-in-delay-smooth">
                Innovating at the intersection of code and creativity
              </p>
              
              {/* Enhanced Animated Role Text */}
              <div className="relative h-20 mb-8">
                <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                  <div className="relative">
                    <p className="text-2xl md:text-4xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-text-glow-enhanced">
                      {displayedText}
                      <span className="inline-block w-2 h-7 md:h-9 bg-cyan-400 ml-1 align-middle animate-blink-cursor rounded-sm"></span>
                    </p>
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse-glow-enhanced rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/30 transition-all duration-300 transform hover:scale-105 text-sm font-exo animate-float-smooth">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-105 text-sm font-exo animate-float-delay-1-smooth">
                  AI Enthusiast
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30 backdrop-blur-sm hover:bg-pink-500/30 transition-all duration-300 transform hover:scale-105 text-sm font-exo animate-float-delay-2-smooth">
                  Graphic Designer
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold font-exo transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
              </button>
              <a
                href="https://mail.google.com/mail/?view=cm&to=preminnovator2708@gmail.com&su=Hello%20from%20tech&body=Hi%20Prem,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold font-exo hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                Contact Me
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://github.com/prem2708"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 animate-float-smooth"
              >
                <Github className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 animate-float-delay-1-smooth"
              >
                <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/kumar_prem_2708?igsh=OTZmYmYzcGtlcjdsr"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25 animate-float-delay-2-smooth"
              >
                <Instagram className="w-6 h-6 text-white group-hover:text-pink-400 transition-colors duration-300 group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            <div className="animate-bounce lg:hidden">
              <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>

          {/* Right Side - Video with Background Removed */}
          <div className="relative flex justify-center lg:justify-end lg:pr-12">
            <div className="relative">
              {/* Video Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:ml-12">
                {/* Main Video Container */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden transform rotate-6 hover:rotate-3 transition-transform duration-500 shadow-2xl shadow-cyan-500/25">
                  <video
                    className="w-full h-full object-cover rounded-3xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      filter: 'contrast(1.2) brightness(1.1) saturate(1.3)',
                      mixBlendMode: 'multiply',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  >
                    <source 
                      src="https://ik.imagekit.io/prem2727/Hailuo_Video_create_a_3d_video_iron_man_and_398156683206049794.mp4_1751784563583.mp4?updatedAt=1751784792686" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl"></div>
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-4 border-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-70 animate-pulse"></div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10">
                  <span className="text-white font-bold text-xl">💻</span>
                </div>
                
                <div className="absolute -top-2 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-float-delay-1 z-10">
                  <span className="text-white font-bold">🚀</span>
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-gradient-to-r from-pink-500 to-lime-500 rounded-2xl flex items-center justify-center shadow-lg animate-float-delay-2 z-10">
                  <span className="text-white font-bold">⚡</span>
                </div>
                
                <div className="absolute -bottom-2 -left-6 w-10 h-10 bg-gradient-to-r from-lime-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg animate-float-delay-3 z-10">
                  <span className="text-white font-bold text-sm">🎨</span>
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl filter blur-xl scale-110 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Only visible on larger screens */}
        <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-smooth {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up-smooth {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay-smooth {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes text-glow-enhanced {
          0%, 100% { text-shadow: 0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(34, 211, 238, 0.3); }
          50% { text-shadow: 0 0 30px rgba(34, 211, 238, 0.8), 0 0 60px rgba(34, 211, 238, 0.5); }
        }
        
        @keyframes blink-cursor {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes pulse-glow-enhanced {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes float-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delay-1-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes float-delay-2-smooth {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delay-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }
        
        @keyframes float-delay-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
        }
        
        .animate-fade-in-smooth {
          animation: fade-in-smooth 1s ease-out;
        }
        
        .animate-slide-up-smooth {
          animation: slide-up-smooth 1.2s ease-out;
        }
        
        .animate-fade-in-delay-smooth {
          animation: fade-in-delay-smooth 1.5s ease-out;
        }
        
        .animate-text-glow-enhanced {
          animation: text-glow-enhanced 3s ease-in-out infinite;
        }
        
        .animate-blink-cursor {
          animation: blink-cursor 1s infinite;
        }
        
        .animate-pulse-glow-enhanced {
          animation: pulse-glow-enhanced 4s ease-in-out infinite;
        }
        
        .animate-float-smooth {
          animation: float-smooth 3s ease-in-out infinite;
        }
        
        .animate-float-delay-1-smooth {
          animation: float-delay-1-smooth 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-float-delay-2-smooth {
          animation: float-delay-2-smooth 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delay-1 {
          animation: float-delay-1 4s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-delay-2 {
          animation: float-delay-2 4s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-delay-3 {
          animation: float-delay-3 4s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .glow-text {
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.5), 0 0 60px rgba(34, 211, 238, 0.3);
        }
        
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}