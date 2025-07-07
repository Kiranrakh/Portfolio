import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

export const GitHubRepos: React.FC = () => {
  const repos = [
    {
      name: 'DevOps-Journey-With-LinuxWorld',
      description: 'A hands-on DevOps learning journey during my internship at LinuxWorld Informatics Pvt Ltd, under the mentorship of Vimal Daga Sir. This repo showcases real-world projects, CI/CD pipelines, Docker, Kubernetes, cloud infrastructure (AWS), and more — documented step-by-step.',
      language: 'Shell',
      stars: 18,
      forks: 7,
      url: 'https://github.com/Kiranrakh/DevOps-Journey-With-LinuxWorld.git',
      topics: ['devops', 'linuxworld', 'kubernetes', 'docker', 'aws', 'ci-cd'],
    },
    {
      name: 'Flask-Web-Application-with-CI-CD',
      description: 'Complete DevOps workflow for a Flask application including automated testing, containerization, and deployment with comprehensive CI/CD pipeline.',
      language: 'Python',
      stars: 12,
      forks: 4,
      url: 'https://github.com/Kiranrakh/DevOps-Project-Series-01-Flask-Web-Application-with-CI-CD.git',
      topics: ['flask', 'ci-cd', 'docker', 'jenkins', 'python', 'devops'],
    },
    {
      name: 'terraform-wordpress-3tier-aws',
      description: '3-tier WordPress architecture on AWS using Terraform infrastructure as code with public and private subnets setup.',
      language: 'HCL',
      stars: 15,
      forks: 6,
      url: 'https://github.com/Kiranrakh/terraform-wordpress-3tier-aws.git',
      topics: ['terraform', 'aws', 'infrastructure', 'wordpress', 'iac', '3-tier'],
    },
    {
      name: 'full-static-nginx-website',
      description: 'A fully functional multi-page static website hosted using Nginx and Docker. This project showcases how to deploy a complete frontend (HTML, CSS, JS) site on an Nginx server in a Docker container.',
      language: 'HTML',
      stars: 8,
      forks: 3,
      url: 'https://github.com/Kiranrakh/full-static-nginx-website.git',
      topics: ['nginx', 'docker', 'static-website', 'html', 'css', 'frontend'],
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

  const getLanguageColor = (language: string) => {
    const colors = {
      'Shell': 'bg-green-500',
      'Python': 'bg-blue-500',
      'HCL': 'bg-purple-500',
      'HTML': 'bg-orange-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-600',
      'YAML': 'bg-red-500',
    };
    return colors[language as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <section id="github-repos" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
      
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
              Featured GitHub Repositories
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Open source projects and code repositories showcasing my DevOps expertise
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {repo.name}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {repo.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                    <span className="text-slate-400 text-sm">{repo.language}</span>
                  </div>
                  
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700/50 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300 hover:bg-slate-600/50 transition-colors duration-300"
                    >
                      {topic}
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Repositories</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};