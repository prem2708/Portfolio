import React from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.3),transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Let's Connect</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:preminnovator2708@gmail.com"
                className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">preminnovator2708@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-lime-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">Ranchi Jharkhand, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-6 text-center">Follow me on social media</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/prem-kumar-560549373" 
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/prem2708" 
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/kumar_prem_2708?igsh=OTZmYmYzcGtlcjdsr" 
                  className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-2">Ready to Start a Project?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  I'm always excited to work on new and challenging projects. Let's discuss your ideas!
                </p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&to=preminnovator2708@gmail.com&su=Hello%20from%20Portfolio&body=Hi%20Prem,%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}