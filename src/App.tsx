import React from 'react';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { GithubCorners } from './components/GithubCorners';
import { Header } from './components/Header';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { WorkExperiences } from './components/WorkExperiences';
import { StudyExperiences } from './components/StudyExperiences';

function App() {
  return (
    <div className="flex flex-col">
      <GithubCorners />

      <Header />
      <About />
      <Projects />
      <Skills />
      <WorkExperiences />
      <StudyExperiences />
      <Footer />
    </div>
  );
}

export default App;
