import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
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
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
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
              Education
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Academic foundation that prepared me for the DevOps journey
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
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Bachelor of Engineering
                </h3>
                <p className="text-cyan-400 text-lg font-medium mb-4">
                  Electronics & Telecommunication
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>JSPM's Imperial College of Engineering and Research, Pune</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Graduated: 2024</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Award className="w-4 h-4 text-green-400" />
                      <span>CGPA: 7.33/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-700/30">
                  <h4 className="text-purple-400 font-medium mb-2">Relevant Coursework</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                      <span className="text-slate-300 text-sm">Computer Networks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                      <span className="text-slate-300 text-sm">Operating Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-pink-400 rounded-full"></span>
                      <span className="text-slate-300 text-sm">Database Management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                      <span className="text-slate-300 text-sm">Software Engineering</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-semibold mb-4 text-white">Learning Philosophy</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              "My engineering background provided me with strong analytical and problem-solving skills. 
              The intersection of electronics and telecommunications gave me a deep understanding of 
              systems thinking, which directly translates to modern DevOps practices."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};