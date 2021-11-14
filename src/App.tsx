import { ReactElement } from 'react';
import { GithubCorners } from './components/GithubCorners';
import { Header } from './pages/Home/Header';
import { About } from './pages/Home/About';
import { Projects } from './pages/Home/Projects';
import { Skills } from './pages/Home/Skills/Skills';
import { WorkExperiences } from './pages/Home/WorkExperiences';
import { StudyExperiences } from './pages/Home/StudyExperiences';
import { Footer } from './pages/Home/Footer';

function App() : ReactElement {
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
