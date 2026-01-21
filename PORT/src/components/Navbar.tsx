import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Radio } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-[#030014]/90 backdrop-blur-xl border-b border-cyan-500/20'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] transition-all duration-300">
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold font-orbitron text-white leading-none">
                PREM<span className="text-cyan-400">.</span>DEV
              </span>
              <span className="text-[10px] font-rajdhani tracking-widest text-cyan-400/60 uppercase hidden sm:block">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 font-rajdhani font-medium text-sm tracking-wider uppercase transition-all duration-300 rounded-lg ${activeSection === item.href.substring(1)
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                  }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f5ff]"></span>
                )}
              </button>
            ))}

            {/* Status */}
            <div className="ml-4 flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <Radio className="w-3 h-3 text-green-400 animate-pulse" />
              <span className="text-xs font-rajdhani text-green-400 tracking-wider">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ top: '64px' }}
              onClick={() => setIsOpen(false)}
            />
            <div className="lg:hidden absolute left-4 right-4 top-full mt-2 bg-[#0a0618]/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4 shadow-2xl">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 font-rajdhani font-medium tracking-wider uppercase rounded-lg transition-all duration-300 flex items-center justify-between ${activeSection === item.href.substring(1)
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-cyan-400/50 text-xs">0{index + 1}</span>
                      {item.name}
                    </span>
                    {activeSection === item.href.substring(1) && (
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}