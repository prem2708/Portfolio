import React from 'react';
import { User, GraduationCap, Code2, Palette, Satellite } from 'lucide-react';

export default function About() {
  const aboutCards = [
    {
      icon: User,
      title: 'Mission Origin',
      subtitle: 'MY JOURNEY',
      description: 'Passionate computer science engineer exploring the fascinating intersection of artificial intelligence, web development, and creative design. My journey spans across multiple domains.',
      color: 'cyan',
      stats: { label: 'Years Active', value: '2+' }
    },
    {
      icon: GraduationCap,
      title: 'Training Academy',
      subtitle: 'EDUCATION',
      description: 'Currently pursuing Computer Science Engineering, continuously expanding my knowledge through hands-on projects, certifications, and emerging technologies.',
      color: 'purple',
      stats: { label: 'Certifications', value: '15+' }
    },
    {
      icon: Code2,
      title: 'Tech Arsenal',
      subtitle: 'DEVELOPMENT',
      description: 'Specialized in full-stack development with expertise in modern frameworks. Creating robust, scalable applications that solve real-world problems.',
      color: 'pink',
      stats: { label: 'Projects Built', value: '10+' }
    },
    {
      icon: Palette,
      title: 'Creative Lab',
      subtitle: 'DESIGN',
      description: 'Combining technical expertise with creative vision to deliver exceptional user experiences through thoughtful and engaging designs.',
      color: 'green',
      stats: { label: 'Designs Created', value: '50+' }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]',
      purple: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(191,0,255,0.2)]',
      pink: 'border-pink-500/30 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(255,0,170,0.2)]',
      green: 'border-green-500/30 hover:border-green-400 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]',
    };
    return colors[color] || colors.cyan;
  };

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      green: 'text-green-400',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 section-space relative">
      {/* Background Elements */}
      <div className="absolute inset-0 data-grid opacity-30"></div>

      {/* Nebula effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 holo-card rounded-full mb-6">
            <Satellite className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-rajdhani tracking-widest text-cyan-400 uppercase">Crew Profile</span>
          </div>

          <h2 className="section-title-space font-orbitron gradient-text-aurora mb-4">
            ABOUT ME
          </h2>
          <p className="section-subtitle-space">
            A CSE Journey Into Diverse Tech Realms
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`holo-card hud-border rounded-2xl p-6 sm:p-8 border ${getColorClasses(card.color)}
                  transition-all duration-500 tilt-effect group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl holo-card flex items-center justify-center ${getIconColor(card.color)} 
                      group-hover:neon-glow transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-rajdhani tracking-widest text-gray-500 uppercase">{card.subtitle}</p>
                      <h3 className="text-lg sm:text-xl font-bold font-orbitron text-white">{card.title}</h3>
                    </div>
                  </div>

                  {/* Stats Badge */}
                  <div className="text-right">
                    <p className="text-2xl font-bold font-orbitron gradient-text-space">{card.stats.value}</p>
                    <p className="text-xs font-rajdhani text-gray-500 tracking-wider">{card.stats.label}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 font-exo leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < 4 ? getIconColor(card.color).replace('text-', 'bg-') : 'bg-gray-700'}`}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs font-rajdhani text-gray-500 tracking-wider">
                    SECTOR 0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Stats Panel */}
        <div className="hud-border holo-card rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-orbitron text-white mb-2">MISSION STATISTICS</h3>
            <p className="text-xs font-rajdhani text-cyan-400/60 tracking-widest">REAL-TIME DATA FEED</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '2+', label: 'Years Active', icon: '🚀' },
              { value: '10+', label: 'Missions Complete', icon: '✨' },
              { value: '15+', label: 'Certifications', icon: '🏆' },
              { value: '∞', label: 'Lines of Code', icon: '💻' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold font-orbitron neon-text mb-1 
                  group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-rajdhani text-gray-400 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}