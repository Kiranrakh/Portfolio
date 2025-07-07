import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Zap } from 'lucide-react';

export const Challenges: React.FC = () => {
  const challenges = [
    {
      title: 'Docker Image Optimization',
      problem: 'Large Docker images causing slow deployments and increased storage costs',
      solution: 'Rewrote Dockerfiles using multi-stage builds and alpine base images',
      result: 'Reduced image size by 60% and improved deployment speed',
      icon: Zap,
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Kubernetes Pod CrashLoopBackOff',
      problem: 'Pods continuously restarting due to health check failures',
      solution: 'Resolved health check misconfiguration using readinessProbes and proper environment variable mapping',
      result: 'Achieved 99.9% pod uptime and stable application performance',
      icon: CheckCircle,
      color: 'from-green-400 to-cyan-500',
    },
    {
      title: 'Jenkins Pipeline Failures',
      problem: 'CI/CD pipeline failing at Docker push step intermittently',
      solution: 'Implemented proper Docker daemon setup and credential management',
      result: 'Reduced pipeline failure rate from 30% to less than 2%',
      icon: AlertCircle,
      color: 'from-orange-400 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="challenges" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent" />
      
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
              Challenges Solved
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Real-world DevOps challenges I've encountered and successfully resolved
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${challenge.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {challenge.title}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
                        <h4 className="text-red-400 font-medium mb-2">Problem</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {challenge.problem}
                        </p>
                      </div>
                      
                      <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-700/30">
                        <h4 className="text-yellow-400 font-medium mb-2">Solution</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {challenge.solution}
                        </p>
                      </div>
                      
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
                        <h4 className="text-green-400 font-medium mb-2">Result</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {challenge.result}
                        </p>
                      </div>
                    </div>
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
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-semibold mb-4 text-white">Problem-Solving Approach</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              "Every challenge is an opportunity to learn and improve. I approach problems systematically: 
              understand the root cause, research solutions, test thoroughly, and document for future reference."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};