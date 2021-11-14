import { FC, MutableRefObject, useEffect, useRef } from "react";
import {
  BsEye,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsGithub,
} from "react-icons/bs";
import ScrollContainer from "react-indiana-drag-scroll";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";
import { Title } from "../../components/Title";
import { Section } from "../../components/Section";
import { ProjectInterface } from "../../interfaces/ProjectInterface";
import { Link } from "../../components/Link";

interface ProjectsProps {}

interface ProjectCardProps {
  id: number;
  project: ProjectInterface;
}

interface ScrollContainerButtonProps {
  scroll: (num: number) => void
}

export const Projects: FC<ProjectsProps> = () => {
  const ref: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (ref.current && window.innerWidth > 768) {
      ref.current.scrollTo(300, 0);
    }
  }, []);

  const scroll = (scrollOffset: number) : void => {
    window.scrollTo({
      left: (ref.current.scrollLeft += scrollOffset),
      behavior: "smooth",
    });
  };

  return (
    <Section id="projects">
      <Title href="#projects">
        Personal&nbsp;
        <span className="text-orange-600">Projects</span>&nbsp;
        <span className="ml-2">✏</span>
      </Title>

      <Stripes />

      <div className="flex flex-col justify-center items-center w-11/12 md:w-9/12 max-w-5xl">
        <ScrollContainerButton scroll={scroll} />

        <ScrollContainer
          innerRef={ref}
          className="h-auto w-full mt-8 flex items-center overflow-auto px-6 space-x-10 rounded-xl cursor-grab"
        >
          {APP.author.projects.map((project, index) => (
            <ProjectCard key={index} id={index} project={project} />
          ))}
        </ScrollContainer>

        <p className="text-orange-600 font-mono text-lg font-semibold mx-auto text-center pt-6">
          - Drag to Scroll Horizontally -
        </p>
      </div>
    </Section>
  );
};

const ScrollContainerButton: FC<ScrollContainerButtonProps> = ({scroll}) => (
  <div className="hidden md:flex self-end space-x-4">
    <button onClick={() => scroll(-300)} aria-label="Scroll Left">
      <BsFillArrowLeftCircleFill className="fill-orange-600 hover:fill-orange-500 focus:fill-orange-500 text-5xl transform hover:scale-110 duration-200" />
    </button>

    <button onClick={() => scroll(300)} aria-label="Scroll Right">
      <BsFillArrowRightCircleFill className="fill-orange-600 hover:fill-orange-500 focus:fill-orange-500 text-5xl transform hover:scale-110 duration-200" />
    </button>
  </div>
);

const ProjectCard: FC<ProjectCardProps> = ({id, project}) => {
  return (
    <figure
      id={`project-${id+1}`}
      className="flex flex-shrink-0 relative w-72 h-96 md:w-96 md:h-124 bg-cover bg-center rounded-3xl group"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="absolute w-full h-full z-10 left-0 top-0 rounded-3xl bg-black opacity-40 group-hover:opacity-50 duration-200" />

      <section className="w-full h-full z-20 p-7 flex flex-col justify-center">
        <div className="opacity-0 group-hover:opacity-100 mt-auto mx-auto space-y-3 duration-200">
          {project.demo && (
            <Link
              href={project.demo}
              newTab={true}
              className="flex items-center z-30 rounded-xl text-lg px-4 py-3 bg-orange-600 hover:bg-orange-500 font-semibold text-white"
            >
              <BsEye className="inline-block" />
              <span>&nbsp;View Live Demo</span>
            </Link>
          )}
          {project.src && (
            <Link
              href={project.src}
              newTab={true}
              className="flex items-center z-30 rounded-xl text-lg px-4 py-3 bg-gray-700 hover:bg-gray-600 font-semibold text-white"
            >
              <BsGithub className="inline-block" />
              <span>&nbsp;View Source Code</span>
            </Link>
          )}
        </div>

        <div className="space-y-1 mt-auto text-white">
          <h3 className="text-3xl md:text-4xl font-bold truncate">{project.title}</h3>
          <figcaption className="text-sm md:text-base tracking-wider truncate">
            {project.description}
          </figcaption>
        </div>
      </section>
    </figure>
  );
};
