import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profile from '../assets/profile.jpg';

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
            className="text-left mt-8 lg:mt-16"
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

          {/* Revolutionary Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-8 lg:mt-16"
          >
            <div className="relative perspective-1000">
              {/* Futuristic Container */}
              <motion.div 
                className="relative w-80 h-[500px] mx-auto mt-4"
                style={{ 
                  transformStyle: "preserve-3d",
                  animation: "profileFloat 6s ease-in-out infinite"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Holographic Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-black/90 rounded-3xl backdrop-blur-xl border border-cyan-500/30 overflow-hidden">
                  {/* Energy Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: `conic-gradient(from 0deg, 
                      transparent, 
                      rgba(34, 211, 238, 0.3), 
                      transparent, 
                      rgba(168, 85, 247, 0.3), 
                      transparent, 
                      rgba(34, 211, 238, 0.3), 
                      transparent
                    )`,
                    animation: "spin 8s linear infinite"
                  }}>
                    <div className="absolute inset-1 bg-slate-900/95 rounded-3xl"></div>
                  </div>
                  
                  {/* Holographic Scan Lines */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <motion.div
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                      style={{ animation: "hologramScan 4s ease-in-out infinite" }}
                    />
                    <motion.div
                      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                      style={{ animation: "hologramScan 3s ease-in-out infinite 1s" }}
                    />
                  </div>
                  
                  {/* Data Streams */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute h-0.5 w-20 bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
                        style={{
                          top: `${20 + i * 15}%`,
                          animation: `dataStream ${2 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Profile Image Container */}
                <div className="absolute inset-4 top-16 bottom-24 rounded-2xl overflow-hidden">
                  {/* Image Frame with Rotating Energy */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                    style={{ animation: "energyPulse 3s ease-in-out infinite" }}
                  >
                    {/* Static Energy Frame */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(45deg, 
                          rgba(34, 211, 238, 0.8), 
                          rgba(168, 85, 247, 0.6), 
                          rgba(34, 211, 238, 0.8)
                        )`,
                        padding: "2px"
                      }}
                    >
                      <div className="w-full h-full bg-slate-900 rounded-2xl p-1">
                        <img
                          src="/src/assets/profile.jpg"
                          alt="Kiran Rakh - DevOps Engineer"
                          className="w-full h-full rounded-xl object-cover object-center transition-all duration-500 hover:brightness-110 hover:contrast-110"
                          style={{ 
                            filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.5)) saturate(1.1) brightness(1.05)',
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Holographic Overlay Effects */}
                    <div className="absolute inset-0 rounded-2xl">
                      {/* Prismatic Light Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-30"
                        style={{
                          background: "linear-gradient(45deg, transparent 30%, rgba(34, 211, 238, 0.2) 50%, transparent 70%)"
                        }}
                        animate={{ x: [-200, 200] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      
                      {/* Digital Glitch Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl mix-blend-screen"
                        style={{
                          background: "repeating-linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.03) 2px, transparent 4px)"
                        }}
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 0.1, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                  </motion.div>
                </div>
                
                {/* Title and Info Inside the Box */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <div className="text-center">
                      <motion.h3 
                        className="text-xl font-bold text-white mb-1"
                        style={{ animation: "titleGlow 2s ease-in-out infinite" }}
                      >
                        DevOps Engineer
                      </motion.h3>
                      <p className="text-cyan-400 text-sm mb-2 font-medium">Pune, India</p>
                      <motion.div 
                        className="flex items-center justify-center space-x-2"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full"
                          style={{ animation: "statusBlink 2s infinite" }}
                        />
                        <span className="text-green-400 text-xs font-medium">Available for opportunities</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Status Indicators */}
                  <motion.div
                    className="absolute top-6 right-6 flex items-center space-x-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                    <span className="text-green-400 text-xs font-mono">ONLINE</span>
                  </motion.div>
                  
                  {/* Floating DevOps Icons */}
                  {[
                    { icon: "🐳", delay: 0, x: -25, y: -15 },
                    { icon: "☸️", delay: 0.5, x: 25, y: -10 },
                    { icon: "🔧", delay: 1, x: -20, y: 15 },
                    { icon: "⚡", delay: 1.5, x: 30, y: 20 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-2xl opacity-60"
                      style={{
                        left: `${50 + item.x}%`,
                        top: `${40 + item.y}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        delay: item.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center mt-20"
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
