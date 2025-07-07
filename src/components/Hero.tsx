import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'DevOps Enthusiast',
    'CI/CD Pipeline Builder',
    'Cloud Native Learner',
    'Kubernetes Specialist',
    'Automation Lover',
  ];

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrase.length) {
          setCurrentText(phrase.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhrase, phrases]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/KiranRakh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kiran-rakh-b644b6248/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kiranrakh155@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20" />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Kiran Rakh
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl lg:text-3xl mb-8 h-16 flex items-center">
              <span className="text-slate-300">I'm a </span>
              <span className="ml-2 text-cyan-400 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Result-oriented DevOps Engineer with hands-on experience in automating, deploying, 
              and scaling applications using modern DevOps practices.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <a
                href="https://drive.google.com/file/d/1PCrE7L3v9qBdMoFAlB-3GWSbU6fq2TDa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl animate-pulse blur-xl opacity-30"></div>
              
              {/* Profile card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="w-64 h-64 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl rotate-6 animate-pulse"></div>
                  <img
                    src="https://drive.google.com/uc?export=view&id=1nfnuyr268TQ3SpSF02UNSCYJLQ9NHCCw"
                    alt="Kiran Rakh - DevOps Engineer"
                    className="w-full h-full rounded-xl object-cover border-4 border-white/20 backdrop-blur-sm relative z-10 hover:scale-105 transition-transform duration-300"
                    style={{ 
                      filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))',
                      background: 'transparent'
                    }}
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">DevOps Engineer</h3>
                  <p className="text-slate-300 text-sm">Pune, India</p>
                  <div className="flex items-center justify-center space-x-2 mt-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center mt-16"
        >
          <a
            href="#about"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};