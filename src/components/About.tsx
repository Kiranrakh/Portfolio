import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
      
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
              About Me
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Passionate about turning complex infrastructure challenges into elegant, automated solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed">
              Result-oriented DevOps Engineer with hands-on experience in automating, deploying, 
              and scaling applications using modern DevOps practices. Passionate about simplifying 
              infrastructure with CI/CD pipelines and cloud-native tools.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Why I Chose DevOps</h3>
            <p className="text-slate-300 leading-relaxed">
              I love solving complex problems and turning manual chaos into automated flows 
              that are fast, reliable, and scalable. The intersection of development and 
              operations fascinates me, especially when it enables teams to deliver value faster.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Current Roles</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-medium text-cyan-400">FusionPact Technologies</p>
                <p className="text-sm">DevOps Intern (May 2025–Present)</p>
              </div>
              <div>
                <p className="font-medium text-purple-400">LinuxWorld Informatics</p>
                <p className="text-sm">DevOps Intern As Learner (Jan 2025–Present)</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-semibold mb-4 text-white">Location & Contact</h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-300">
              <div>
                <p className="font-medium text-cyan-400">Location</p>
                <p>Pune, India</p>
              </div>
              <div>
                <p className="font-medium text-purple-400">Email</p>
                <p>kiranrakh155@gmail.com</p>
              </div>
              <div>
                <p className="font-medium text-green-400">Phone</p>
                <p>+91 7721879397</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};