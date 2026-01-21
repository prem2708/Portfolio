import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Sparkles, Github, Linkedin, Instagram, Rocket } from 'lucide-react';

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Graphic Designer",
    "Prompt Engineer",
    "Part Time Trader"
  ];

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-space">
      {/* Starfield Background */}
      <div className="starfield">
        <div className="stars stars-layer-1"></div>
        <div className="stars stars-layer-2"></div>
        <div className="stars stars-layer-3"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Nebula Glow Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Data Grid Overlay */}
      <div className="absolute inset-0 data-grid opacity-50"></div>

      {/* Orbital Rings - Hidden on mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden lg:block">
        <div className="orbit-ring w-[600px] h-[600px] opacity-20 orbit">
          <div className="orbital-dot"></div>
        </div>
        <div className="orbit-ring w-[800px] h-[800px] opacity-10 orbit-reverse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Mission Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 holo-card rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs sm:text-sm font-rajdhani tracking-widest text-cyan-300 uppercase">
                Systems Online • Ready for Launch
              </span>
            </div>

            {/* Name with Space Typography */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron mb-4 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">PREM</span>
              <br />
              <span className="text-shimmer">KUMAR</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-cyan-200/60 mb-6 font-rajdhani tracking-wider uppercase animate-fade-in-up neon-flicker" style={{ animationDelay: '0.2s' }}>
              Navigating the Digital Universe
            </p>

            {/* Typing Animation */}
            <div className="relative h-12 sm:h-14 md:h-16 mb-8">
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-orbitron text-sm">{'>'}</span>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-orbitron neon-text">
                      {displayedText}
                      <span className="inline-block w-0.5 sm:w-1 h-5 sm:h-6 md:h-7 bg-cyan-400 ml-1 align-middle animate-blink"></span>
                    </p>
                  </div>
                  <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl animate-pulse-glow rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Skill Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {['Developer', 'AI Engineer', 'Designer'].map((skill, i) => (
                <span
                  key={skill}
                  className="px-4 py-2 holo-card rounded-lg text-xs sm:text-sm font-rajdhani tracking-wider text-cyan-300 border border-cyan-500/30 animate-fade-in-up hover-jello cursor-default"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="https://drive.google.com/file/d/1IBxhhcCu6zar4fynFSGlx60G1qXaBfve/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="space-btn space-btn-primary shine-effect icon-spin-hover rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=preminnovator2708@gmail.com&su=Hello%20from%20tech&body=Hi%20Prem,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="space-btn shine-effect icon-spin-hover rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: 'https://github.com/prem2708', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/prem-kumar22/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/kumar_prem_2708', label: 'Instagram' },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 holo-card rounded-xl flex items-center justify-center
                      text-cyan-400 social-icon-hover hover-border-glow
                      animate-float-space"
                    style={{ animationDelay: `${i * 0.2}s` }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side - Astronaut/Planet Visual */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main Visual Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Planet/Video Container */}
                <div className="absolute inset-0 planet animate-float-space">
                  <video
                    className="w-full h-full object-cover rounded-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      mixBlendMode: 'luminosity',
                      opacity: 0.8
                    }}
                  >
                    <source
                      src="https://ik.imagekit.io/ioyklag3bb/Hailuo_Video_create_a_3d_video_iron_man_and_398156683206049794.mp4_1751784563583.webm"
                      type="video/mp4"
                    />
                  </video>

                  {/* Planet Ring */}
                  <div className="planet-ring w-[130%] h-[40%] -left-[15%] top-[30%]"></div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 orbit" style={{ animationDuration: '15s' }}>
                  <div className="absolute -top-4 left-1/2 w-10 h-10 sm:w-12 sm:h-12 holo-card rounded-xl flex items-center justify-center neon-glow">
                    <span className="text-lg sm:text-xl">🚀</span>
                  </div>
                </div>

                <div className="absolute inset-0 orbit-reverse" style={{ animationDuration: '20s' }}>
                  <div className="absolute -bottom-2 left-1/4 w-8 h-8 sm:w-10 sm:h-10 holo-card rounded-lg flex items-center justify-center">
                    <span className="text-sm sm:text-base">⚡</span>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-6 -right-6 w-14 h-14 sm:w-16 sm:h-16 holo-card rounded-2xl flex items-center justify-center animate-float-space neon-border" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">💻</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 holo-card rounded-xl flex items-center justify-center animate-float-space neon-border-purple" style={{ animationDelay: '2s' }}>
                  <span className="text-xl">🤖</span>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-rajdhani tracking-widest text-cyan-400/60 uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 text-cyan-400/60" />
        </div>
      </div>

      {/* Bottom HUD Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
}