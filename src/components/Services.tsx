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
  Shield,
  Zap,
  Database,
  Network,
  Cpu
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Development',
      description: 'Design and implement automated CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI for seamless code deployment.',
      color: 'from-cyan-400 to-blue-500',
      features: ['Automated Testing', 'Code Quality Gates', 'Multi-Environment Deployment', 'Rollback Strategies']
    },
    {
      icon: Container,
      title: 'Containerization & Orchestration',
      description: 'Containerize applications with Docker and orchestrate them using Kubernetes for scalable, resilient deployments.',
      color: 'from-blue-400 to-purple-500',
      features: ['Docker Optimization', 'Kubernetes Deployment', 'Service Mesh', 'Auto-scaling']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Design, deploy, and manage cloud infrastructure on AWS, Azure, and GCP with focus on cost optimization and security.',
      color: 'from-purple-400 to-pink-500',
      features: ['Infrastructure as Code', 'Cost Optimization', 'Security Best Practices', 'Multi-Cloud Strategy']
    },
    {
      icon: Settings,
      title: 'Infrastructure as Code (IaC)',
      description: 'Automate infrastructure provisioning and management using Terraform, Ansible, and CloudFormation.',
      color: 'from-pink-400 to-red-500',
      features: ['Terraform Modules', 'Ansible Playbooks', 'Version Control', 'Environment Consistency']
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Observability',
      description: 'Implement comprehensive monitoring solutions with Prometheus, Grafana, ELK Stack for real-time insights.',
      color: 'from-red-400 to-orange-500',
      features: ['Real-time Monitoring', 'Custom Dashboards', 'Alerting Systems', 'Log Aggregation']
    },
    {
      icon: Shield,
      title: 'DevSecOps Implementation',
      description: 'Integrate security practices into DevOps workflows with automated security scanning and compliance monitoring.',
      color: 'from-orange-400 to-yellow-500',
      features: ['Security Scanning', 'Compliance Automation', 'Vulnerability Management', 'Policy as Code']
    },
    {
      icon: Database,
      title: 'Database DevOps',
      description: 'Automate database deployments, migrations, and monitoring for both SQL and NoSQL databases.',
      color: 'from-yellow-400 to-green-500',
      features: ['Database Migrations', 'Backup Automation', 'Performance Monitoring', 'High Availability']
    },
    {
      icon: Network,
      title: 'Network Automation',
      description: 'Automate network configuration, monitoring, and security using modern networking tools and practices.',
      color: 'from-green-400 to-cyan-500',
      features: ['Network Configuration', 'Traffic Monitoring', 'Security Policies', 'Load Balancing']
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
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-900/10 to-transparent" />
      
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
              DevOps Services
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive DevOps solutions to accelerate your development lifecycle and improve operational efficiency
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs text-slate-400">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
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
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Transform Your DevOps?</h3>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Let's work together to streamline your development processes, improve deployment reliability, 
              and accelerate your time to market with modern DevOps practices.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span>Get Started</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};