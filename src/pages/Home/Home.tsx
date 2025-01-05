import { FC } from 'react'
// import { GithubCorners } from '../../components/GithubCorners';
import { Header } from './Header';
import { About } from './About';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { WorkExperiences } from './WorkExperiences';
import { StudyExperiences } from './StudyExperiences';
import { Footer } from './Footer';

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  return (
    <div className="flex flex-col dark:bg-true-gray-900 dark:text-gray-100 duration-500">
      {/* <GithubCorners /> */}

      <Header />
      <About />
      <Projects />
      <WorkExperiences />
      <StudyExperiences />
      <Skills />
      <Footer />
    </div>
  );
}
