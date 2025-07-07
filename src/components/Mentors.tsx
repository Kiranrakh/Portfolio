import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Heart, ExternalLink } from 'lucide-react';

export const Mentors: React.FC = () => {
  const mentors = [
    {
      name: 'Vimal Daga Sir',
      role: 'DevOps Expert & Trainer',
      description: 'Inspiring mentor who introduced me to the world of DevOps and cloud technologies.',
      color: 'from-blue-400 to-cyan-500',
      linkedin: 'https://www.linkedin.com/in/vimaldaga/',
    },
    {
      name: 'Abhishek Veeramalla',
      role: 'DevOps Engineer & Content Creator',
      description: 'Excellent teacher who simplifies complex DevOps concepts through practical examples.',
      color: 'from-purple-400 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/abhishek-veeramalla/',
    },
    {
      name: 'Train With Shubham',
      role: 'DevOps Trainer & YouTuber',
      description: 'Provides comprehensive DevOps training with real-world project implementations.',
      color: 'from-green-400 to-blue-500',
      linkedin: 'https://www.linkedin.com/in/shubhamlondhe1996/',
    },
    {
      name: 'Gourav Sharma',
      role: 'Cloud & DevOps Expert',
      description: 'Skilled professional sharing valuable insights on cloud architecture and automation.',
      color: 'from-orange-400 to-red-500',
    },
    {
      name: 'M Prashant',
      role: 'DevOps Practitioner',
      description: 'Experienced engineer who shares practical DevOps knowledge and best practices.',
      color: 'from-red-400 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
    <section id="mentors" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mentors & Inspiration
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Grateful to the amazing mentors who have shaped my DevOps journey
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${mentor.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 bg-slate-700/50 rounded text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {mentor.name}
                </h3>
                
                <p className="text-sm text-slate-400 mb-3 font-medium">
                  {mentor.role}
                </p>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {mentor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Gratitude</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              "I'm incredibly grateful to all my mentors who have shared their knowledge, 
              experience, and wisdom. Their guidance has been instrumental in shaping my 
              understanding of DevOps and helping me grow as a professional."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};