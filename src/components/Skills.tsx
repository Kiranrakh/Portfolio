import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Container, 
  Cloud, 
  Code, 
  Server, 
  BarChart3,
  GitBranch,
  Boxes
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: GitBranch,
      title: 'CI/CD',
      color: 'from-cyan-400 to-blue-500',
      skills: ['Jenkins', 'GitHub Actions'],
    },
    {
      icon: Container,
      title: 'Containers',
      color: 'from-blue-400 to-purple-500',
      skills: ['Docker', 'Docker Compose'],
    },
    {
      icon: Boxes,
      title: 'Kubernetes',
      color: 'from-purple-400 to-pink-500',
      skills: ['Minikube', 'Kubeadm'],
    },
    {
      icon: Cloud,
      title: 'Cloud',
      color: 'from-pink-400 to-red-500',
      skills: ['AWS (EC2, S3, VPC, IAM, Lambda)'],
    },
    {
      icon: Settings,
      title: 'IaC',
      color: 'from-red-400 to-orange-500',
      skills: ['Terraform', 'Ansible'],
    },
    {
      icon: Server,
      title: 'OS/Scripting',
      color: 'from-orange-400 to-yellow-500',
      skills: ['Linux (Ubuntu, Amazon Linux)', 'Bash'],
    },
    {
      icon: BarChart3,
      title: 'Monitoring',
      color: 'from-yellow-400 to-green-500',
      skills: ['Prometheus', 'Grafana', 'Node Exporter'],
    },
    {
      icon: Code,
      title: 'Development',
      color: 'from-green-400 to-cyan-500',
      skills: ['Python', 'JavaScript', 'Go'],
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
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
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
              DevOps Toolkit
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Technologies and tools I use to build, deploy, and maintain modern applications
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-600/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
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
            <h3 className="text-2xl font-semibold mb-4 text-white">Core Philosophy</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              "Automate everything, monitor proactively, and fail fast to learn faster. 
              The best infrastructure is the one that's invisible to developers and reliable for users."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};