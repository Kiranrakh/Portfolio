import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Video } from 'lucide-react';

export const VideoIntro: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="video-intro" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet Me in Person
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Watch my introduction video to get to know me better
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <a
                href="https://drive.google.com/file/d/1wod1Bcdf9Csv6Yr3U0EJfvteUbrCIyR8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center relative group cursor-pointer">
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                    <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Meet Me – DevOps Engineer Kiran Rakh
              </h3>
              
              <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                In this introduction video, I share my journey into DevOps, my passion for 
                automation and cloud technologies, and what drives me to continuously learn 
                and grow in this field.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://drive.google.com/file/d/1wod1Bcdf9Csv6Yr3U0EJfvteUbrCIyR8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Watch Video</span>
              </a>
              
              <a
                href="https://drive.google.com/uc?export=download&id=1wod1Bcdf9Csv6Yr3U0EJfvteUbrCIyR8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-slate-700/50 px-6 py-3 rounded-lg font-semibold text-slate-300 hover:bg-slate-600/50 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Download Video</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Video Highlights</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                <span>My DevOps journey and background</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Current projects and learning goals</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                <span>Vision for the future in DevOps</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Why Watch?</h3>
            <p className="text-slate-300 leading-relaxed">
              Get to know the person behind the resume. Understand my passion for DevOps, 
              my approach to problem-solving, and how I can contribute to your team's success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};