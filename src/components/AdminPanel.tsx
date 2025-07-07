import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Plus, Edit, Trash2, Save, X } from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'DevOps Best Practices', url: 'https://example.com/devops-best-practices', date: '2024-01-15' },
    { id: 2, title: 'Kubernetes Security', url: 'https://example.com/kubernetes-security', date: '2024-01-10' },
  ]);
  const [posts, setPosts] = useState([
    { id: 1, title: 'Real DevOps CI/CD Pipeline', url: 'https://linkedin.com/posts/kiran-rakh-devops-cicd', date: '2024-01-20' },
    { id: 2, title: 'Prometheus + Grafana Setup', url: 'https://linkedin.com/posts/kiran-rakh-monitoring', date: '2024-01-18' },
  ]);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [newBlog, setNewBlog] = useState({ title: '', url: '' });
  const [newPost, setNewPost] = useState({ title: '', url: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Kiran@DevOps123') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.url) {
      const blog = {
        id: Date.now(),
        title: newBlog.title,
        url: newBlog.url,
        date: new Date().toISOString().split('T')[0],
      };
      setBlogs([...blogs, blog]);
      setNewBlog({ title: '', url: '' });
    }
  };

  const handleAddPost = () => {
    if (newPost.title && newPost.url) {
      const post = {
        id: Date.now(),
        title: newPost.title,
        url: newPost.url,
        date: new Date().toISOString().split('T')[0],
      };
      setPosts([...posts, post]);
      setNewPost({ title: '', url: '' });
    }
  };

  const handleDeleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog);
  };

  const handleEditPost = (post: any) => {
    setEditingPost(post);
  };

  const handleSaveBlog = () => {
    if (editingBlog) {
      setBlogs(blogs.map(blog => 
        blog.id === editingBlog.id ? editingBlog : blog
      ));
      setEditingBlog(null);
    }
  };

  const handleSavePost = () => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id ? editingPost : post
      ));
      setEditingPost(null);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Admin Panel</h2>
            <p className="text-slate-300">Enter password to access blog management</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Admin Panel
            </span>
          </h1>
          <p className="text-slate-300">Manage your blogs and posts</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Blog Management */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Plus className="w-6 h-6 mr-2" />
              Blog Management
            </h2>
            
            {/* Add New Blog */}
            <div className="mb-8 p-4 bg-slate-700/30 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-4">Add New Blog</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Blog title"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-slate-400"
                />
                <input
                  type="url"
                  placeholder="Blog URL"
                  value={newBlog.url}
                  onChange={(e) => setNewBlog({ ...newBlog, url: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-slate-400"
                />
                <button
                  onClick={handleAddBlog}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition-colors duration-300"
                >
                  Add Blog
                </button>
              </div>
            </div>
            
            {/* Blog List */}
            <div className="space-y-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="p-4 bg-slate-700/30 rounded-lg">
                  {editingBlog?.id === blog.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editingBlog.title}
                        onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white"
                      />
                      <input
                        type="url"
                        value={editingBlog.url}
                        onChange={(e) => setEditingBlog({ ...editingBlog, url: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveBlog}
                          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingBlog(null)}
                          className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{blog.title}</h4>
                        <p className="text-slate-400 text-sm">{blog.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditBlog(blog)}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Post Management */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <Plus className="w-6 h-6 mr-2" />
              Post Management
            </h2>
            
            {/* Add New Post */}
            <div className="mb-8 p-4 bg-slate-700/30 rounded-lg">
              <h3 className="text-lg font-medium text-white mb-4">Add New Post</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Post title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-slate-400"
                />
                <input
                  type="url"
                  placeholder="Post URL"
                  value={newPost.url}
                  onChange={(e) => setNewPost({ ...newPost, url: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white placeholder-slate-400"
                />
                <button
                  onClick={handleAddPost}
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white transition-colors duration-300"
                >
                  Add Post
                </button>
              </div>
            </div>
            
            {/* Post List */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="p-4 bg-slate-700/30 rounded-lg">
                  {editingPost?.id === post.id ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={editingPost.title}
                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white"
                      />
                      <input
                        type="url"
                        value={editingPost.url}
                        onChange={(e) => setEditingPost({ ...editingPost, url: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-600/50 border border-slate-500 rounded text-white"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSavePost}
                          className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setEditingPost(null)}
                          className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">{post.title}</h4>
                        <p className="text-slate-400 text-sm">{post.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditPost(post)}
                          className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white transition-colors duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};