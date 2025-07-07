import React from 'react';
import { Code, Heart, Github, Linkedin, Mail, Settings, Container, Cloud, BarChart3 } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const devopsTools = [
    { name: 'Docker', icon: Container },
    { name: 'Kubernetes', icon: Settings },
    { name: 'AWS', icon: Cloud },
    { name: 'Monitoring', icon: BarChart3 },
  ];

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Kiran Rakh
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              DevOps Engineer passionate about automation, cloud technologies, and continuous learning.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#projects" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-white font-semibold mb-4">DevOps Tools</h3>
            <div className="space-y-2">
              {devopsTools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-center space-x-2 text-slate-300">
                  <tool.icon className="w-4 h-4" />
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/KiranRakh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kiran-rakh-b644b6248/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:kiranrakh155@gmail.com"
                className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center">
            © {currentYear} Kiran Rakh. Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};