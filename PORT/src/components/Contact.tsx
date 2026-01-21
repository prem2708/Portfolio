import React from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram, Send, Radio, Satellite } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prem-kumar22/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/prem2708', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/kumar_prem_2708', label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 section-space relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 data-grid opacity-30"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 holo-card rounded-full mb-6">
            <Satellite className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-rajdhani tracking-widest text-cyan-400 uppercase">Communication Hub</span>
          </div>

          <h2 className="section-title-space font-orbitron gradient-text-aurora mb-4">
            CONTACT
          </h2>
          <p className="section-subtitle-space">
            Establish Connection • Initiate Transmission
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="hud-border holo-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 holo-card rounded-xl flex items-center justify-center neon-border">
                  <Radio className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron text-white">SIGNAL CHANNELS</h3>
                  <p className="text-xs font-rajdhani text-green-400 tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    RECEIVING
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:preminnovator2708@gmail.com"
                  className="flex items-center gap-4 p-4 holo-card rounded-xl hover:neon-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 
                    flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-rajdhani text-gray-500 tracking-wider uppercase">Primary Channel</p>
                    <p className="text-white font-exo text-sm truncate group-hover:text-cyan-400 transition-colors">
                      preminnovator2708@gmail.com
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 holo-card rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 
                    flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-rajdhani text-gray-500 tracking-wider uppercase">Base Location</p>
                    <p className="text-white font-exo text-sm">Ranchi, Jharkhand, India</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-4 p-4 holo-card rounded-xl neon-border">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-cyan-500 
                    flex items-center justify-center shadow-lg">
                    <Satellite className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-rajdhani text-gray-500 tracking-wider uppercase">System Status</p>
                    <p className="text-green-400 font-orbitron text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      AVAILABLE FOR MISSIONS
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs font-rajdhani text-gray-500 text-center mb-4 tracking-widest uppercase">
                  Secondary Channels
                </p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 holo-card rounded-xl flex items-center justify-center
                          text-cyan-400 social-icon-hover hover-border-glow neon-border"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="hud-border holo-card rounded-2xl p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 holo-card rounded-xl flex items-center justify-center neon-border-purple">
                  <Send className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-orbitron text-white">INITIATE CONTACT</h3>
                  <p className="text-xs font-rajdhani text-purple-400/60 tracking-wider">MISSION BRIEFING</p>
                </div>
              </div>

              <p className="text-gray-400 font-exo text-sm mb-6 leading-relaxed flex-1">
                Ready to embark on a new mission? Whether you need a cutting-edge website,
                an AI-powered solution, or creative designs, I'm here to help bring your
                vision to life. Let's explore the possibilities together.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: '< 24h', label: 'Response Time' },
                  { value: '100%', label: 'Mission Success' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 holo-card rounded-xl">
                    <div className="text-lg font-orbitron neon-text">{stat.value}</div>
                    <div className="text-xs font-rajdhani text-gray-500 tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=preminnovator2708@gmail.com&su=Mission%20Briefing&body=Hello%20Commander%20Prem,%20I%20have%20a%20mission%20for%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 space-btn-primary shine-effect icon-spin-hover rounded-xl flex items-center justify-center gap-3
                  font-orbitron text-sm tracking-wider group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                TRANSMIT MESSAGE
              </a>

              <p className="text-center text-xs font-rajdhani text-gray-600 mt-4 tracking-wider">
                OR CONNECT VIA{' '}
                <a href="https://www.linkedin.com/in/prem-kumar22/" target="_blank" rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline">LINKEDIN</a>
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 italic font-exo">
              "The cosmos is within us. We are made of{' '}
              <span className="neon-text not-italic font-semibold">star-stuff</span>."
            </blockquote>
            <p className="text-gray-600 text-sm mt-2 font-rajdhani tracking-wider">— CARL SAGAN</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </section>
  );
}