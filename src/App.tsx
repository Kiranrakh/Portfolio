import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Challenges } from './components/Challenges';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Learning } from './components/Learning';
import { Mentors } from './components/Mentors';
import { VideoIntro } from './components/VideoIntro';
import { LinkedInPosts } from './components/LinkedInPosts';
import { GitHubRepos } from './components/GitHubRepos';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AdminPanel } from './components/AdminPanel';
import { ParticleBackground } from './components/ParticleBackground';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white relative overflow-x-hidden">
        <ParticleBackground />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Challenges />
              <Education />
              <Experience />
              <Learning />
              <Mentors />
              <VideoIntro />
              <LinkedInPosts />
              <GitHubRepos />
              <Services />
              <Contact />
            </main>
          } />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;