import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cloud, Container, Server } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: '3-Tier AWS Architecture Setup',
      description: 'Comprehensive 3-tier AWS architecture setup using public and private subnets with automated deployment pipeline.',
      tools: ['AWS', 'Terraform', 'EC2', 'GitHub', 'Jenkins'],
      github: 'https://github.com/Kiranrakh/terraform-wordpress-3tier-aws.git',
      icon: Cloud,
      color: 'from-orange-400 to-red-500',
      features: [
        'Infrastructure as Code with Terraform',
        'Multi-tier security architecture',
        'Automated CI/CD pipeline',
        'Scalable and resilient design'
      ]
    },
    {
      title: 'Flask Web App with CI/CD',
      description: 'Complete DevOps workflow for a Flask application including automated testing, containerization, and deployment.',
      tools: ['Flask', 'Docker', 'Jenkins', 'Pytest', 'EC2'],
      github: 'https://github.com/KiranRakh/LW-Project-10-Monitoring-Dockerized-Microservice',
      icon: Container,
      color: 'from-blue-400 to-purple-500',
      features: [
        'Automated testing with Pytest',
        'Docker containerization',
        'Jenkins pipeline automation',
        'Production deployment on EC2'
      ]
    },
    {
      title: 'Kubernetes Static Website Deployment',
      description: 'Deploying static HTML website on Kubernetes using Docker & Nginx with rolling updates and service exposure.',
      tools: ['Nginx', 'PHP', 'Kubernetes', 'Docker'],
      github: 'https://github.com/KiranRakh/LW-Project-09-Multi-Tier-LAMP-Stack-using-Ansible-inside-a-Kubernetes-cluster-on-AWS-EC2',
      icon: Server,
      color: 'from-green-400 to-cyan-500',
      features: [
        'Kubernetes orchestration',
        'Docker image optimization',
        'Rolling update strategy',
        'Service mesh configuration'
      ]
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
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent" />
      
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
              Featured Projects
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Real-world DevOps projects showcasing infrastructure automation, CI/CD pipelines, and cloud-native solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-300 flex items-center">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 hover:bg-slate-600/50 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
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
          <a
            href="https://github.com/KiranRakh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};