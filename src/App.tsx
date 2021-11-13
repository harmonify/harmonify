import React from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { GithubCorners } from './components/GithubCorners';
import { Header } from './components/Header';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="flex flex-col">
      <GithubCorners />
      
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
