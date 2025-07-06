import React from 'react';
import { User, GraduationCap, Code2, Palette } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.3),transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A CSE Journey into Diverse Tech Realms
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105">
              <User className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                Passionate computer science engineer exploring the fascinating intersection of artificial intelligence, 
                web development, and creative design. My journey spans across multiple domains, from building 
                scalable applications to crafting innovative AI solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105">
              <GraduationCap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing Computer Science Engineering, continuously expanding my knowledge 
                through hands-on projects, certifications, and exploring emerging technologies in AI and machine learning.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 transform hover:scale-105">
              <Code2 className="w-8 h-8 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300 leading-relaxed">
                Specialized in full-stack development with expertise in modern frameworks and technologies. 
                I create robust, scalable applications that solve real-world problems with clean, efficient code.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-lime-500/20 hover:border-lime-500/40 transition-all duration-300 transform hover:scale-105">
              <Palette className="w-8 h-8 text-lime-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-300 leading-relaxed">
                Combining technical expertise with creative vision to deliver exceptional user experiences. 
                I believe in the power of design to make technology accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}