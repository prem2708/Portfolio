import React from 'react';
import { Code, Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Prem Kumar
            </span>
          </div>
          
          <p className="text-gray-400 mb-6">
            Innovating at the intersection of code and creativity
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-400" />
            <span>by Prem Kumar</span>
          </div>
          
          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © 2025 Prem Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}