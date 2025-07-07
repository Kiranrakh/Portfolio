import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Clock } from 'lucide-react';

export const Learning: React.FC = () => {
  const learningItems = [
    {
      skill: 'Helm',
      description: 'Kubernetes package manager for streamlined application deployment',
      progress: 75,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      skill: 'ELK Stack',
      description: 'Elasticsearch, Logstash, and Kibana for log management and analytics',
      progress: 60,
      color: 'from-green-400 to-blue-500',
    },
    {
      skill: 'GitOps with ArgoCD',
      description: 'Continuous delivery using Git as the single source of truth',
      progress: 70,
      color: 'from-purple-400 to-pink-500',
    },
    {
      skill: 'Kubernetes RBAC',
      description: 'Role-based access control for secure cluster management',
      progress: 65,
      color: 'from-orange-400 to-red-500',
    },
    {
      skill: 'Security Best Practices',
      description: 'DevSecOps implementation and security automation',
      progress: 55,
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
    <section id="learning" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Currently Learning
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Continuously expanding my DevOps knowledge and staying current with industry trends
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={item.skill}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {item.skill}
                      </h3>
                      <p className="text-slate-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">In Progress</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-cyan-400 font-medium">{item.progress}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Learning Goals</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                <span>Become proficient in advanced Kubernetes features</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Implement comprehensive monitoring solutions</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                <span>Master GitOps workflows and practices</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Learning Resources</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                <span>Kubernetes official documentation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                <span>Cloud provider training programs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                <span>Hands-on labs and practice projects</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};