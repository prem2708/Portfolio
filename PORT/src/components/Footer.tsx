import React from 'react';
import { Rocket, Heart, Coffee, Github, Linkedin, Instagram, ChevronUp, Mail, Radio } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/prem2708', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prem-kumar22/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kumar_prem_2708', label: 'Instagram' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20" style={{ background: 'linear-gradient(180deg, #030014 0%, #0a0618 100%)' }}>
      {/* Background Grid */}
      <div className="absolute inset-0 data-grid opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 holo-card rounded-xl flex items-center justify-center neon-border">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-xl font-orbitron text-white">PREM<span className="text-cyan-400">.</span>DEV</span>
                  <p className="text-xs font-rajdhani text-cyan-400/60 tracking-widest">SPACE STATION</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-exo mb-6 leading-relaxed">
                Navigating the digital universe, building the future one line of code at a time.
              </p>

              {/* Status */}
              <div className="flex items-center gap-2 mb-4">
                <Radio className="w-3 h-3 text-green-400 animate-pulse" />
                <span className="text-xs font-rajdhani text-green-400 tracking-wider">STATION ONLINE</span>
              </div>

              {/* Social */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 holo-card rounded-xl flex items-center justify-center
                        text-gray-400 social-icon-hover hover-border-glow"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-orbitron text-white text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                NAVIGATION
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-rajdhani tracking-wider
                        flex items-center gap-2 group"
                    >
                      <span className="text-cyan-400/40 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                      {link.name.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-orbitron text-white text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                COMMUNICATIONS
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:preminnovator2708@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm font-exo group"
                >
                  <Mail className="w-4 h-4" />
                  <span className="truncate">preminnovator2708@gmail.com</span>
                </a>
                <p className="text-gray-400 text-sm font-exo">📍 Ranchi, India</p>
                <p className="text-green-400 text-sm font-rajdhani flex items-center gap-2 tracking-wider">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  ACCEPTING MISSIONS
                </p>
              </div>
            </div>

            {/* CTA */}
            <div>
              <h4 className="font-orbitron text-white text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                MISSION CONTROL
              </h4>
              <p className="text-gray-400 text-sm font-exo mb-4">
                Ready to launch your next project into orbit?
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&to=preminnovator2708@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 space-btn shine-effect icon-spin-hover rounded-lg text-xs font-orbitron tracking-wider"
              >
                <Mail className="w-4 h-4" />
                INITIATE CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

        {/* Bottom */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Made with */}
            <div className="flex items-center flex-wrap justify-center gap-1 text-gray-500 text-xs font-rajdhani tracking-wider">
              <span>CRAFTED WITH</span>
              <Heart className="w-3 h-3 text-red-400 animate-pulse" />
              <span>&</span>
              <Coffee className="w-3 h-3 text-amber-400" />
              <span>BY</span>
              <span className="neon-text font-orbitron">PREM KUMAR</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-xs font-rajdhani tracking-wider">
              © {currentYear} PREM.DEV STATION • ALL RIGHTS RESERVED
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 holo-card rounded-xl flex items-center justify-center
                text-cyan-400 hover-pop hover-border-glow neon-border"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </footer>
  );
}