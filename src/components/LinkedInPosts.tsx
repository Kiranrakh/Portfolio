import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin, ThumbsUp, MessageCircle } from 'lucide-react';

export const LinkedInPosts: React.FC = () => {
  const posts = [
    {
      title: 'Deployed Jenkins + Ansible on Kubernetes',
      preview: 'Successfully deployed Jenkins and Ansible on Kubernetes cluster, creating a powerful automation pipeline for DevOps workflows...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_devops-kubernetes-amazonlinux-activity-7342778441542295552-eZ4U',
      engagement: { likes: 45, comments: 12 },
      date: '3 days ago',
    },
    {
      title: 'Monitoring Stack from Scratch — No Prebuilt Images, No Shortcuts',
      preview: 'Built a complete monitoring solution from scratch using custom configurations. Real hands-on experience with Prometheus, Grafana, and more...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_devops-docker-ansible-activity-7340989180090449922-MyXc',
      engagement: { likes: 38, comments: 8 },
      date: '1 week ago',
    },
    {
      title: 'Completed My CI/CD Pipeline Project Using Jenkins, Docker, and Ansible on AWS EC2!',
      preview: 'Just finished implementing a comprehensive CI/CD pipeline that automates the entire deployment process from code commit to production...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_devops-ciabrcd-jenkins-activity-7340241725711384576-1nax',
      engagement: { likes: 52, comments: 15 },
      date: '1 week ago',
    },
    {
      title: 'Dockerized Web App using Ansible + Minikube on EC2!',
      preview: 'Successfully containerized and deployed a web application using Ansible automation and Minikube on AWS EC2 instance...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_devops-ansible-docker-activity-7339535824830484480-nBmS',
      engagement: { likes: 29, comments: 6 },
      date: '2 weeks ago',
    },
    {
      title: 'Agentless. Powerful. Simple. Here\'s Why Ansible Works So Well',
      preview: 'Exploring the power of Ansible and why it\'s become such a crucial tool in modern DevOps practices. Agentless architecture makes all the difference...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_ansible-devops-automation-activity-7326833871944048640-Uk0i',
      engagement: { likes: 34, comments: 9 },
      date: '3 weeks ago',
    },
    {
      title: '📈Leveling Up with AWS: My Cloud & DevOps Journey🎯',
      preview: 'Sharing my journey with AWS cloud services and how it\'s transforming my understanding of scalable infrastructure and DevOps practices...',
      link: 'https://www.linkedin.com/posts/kiran-rakh_aws-devops-cloudcomputing-activity-7324402355964137472-zwwJ',
      engagement: { likes: 41, comments: 11 },
      date: '1 month ago',
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
    <section id="linkedin-posts" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      
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
              Featured LinkedIn Posts
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Recent insights and experiences I've shared with the DevOps community
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/10 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                  {post.preview}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <span>Read More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
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
            href="https://www.linkedin.com/in/kiran-rakh-b644b6248/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>Follow on LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};