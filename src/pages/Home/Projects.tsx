import { FC, MutableRefObject, useEffect, useRef } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { ProjectCard } from "./components/ProjectCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";
import { Title } from "../../components/Title";
import { Section } from "../../components/Section";

export const Projects: FC = () => {
  const ref: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (ref.current && window.innerWidth > 768) {
      ref.current.scrollTo(300, 0);
    }
  }, []);

  const scroll = (scrollOffset: number) => {
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
        <div className="hidden md:flex self-end space-x-4">
          <button onClick={() => scroll(-300)} aria-label="Scroll Left">
            <BsFillArrowLeftCircleFill className="fill-orange-600 hover:fill-orange-500 focus:fill-orange-500 text-5xl transform hover:scale-110 duration-200" />
          </button>

          <button onClick={() => scroll(300)} aria-label="Scroll Right">
            <BsFillArrowRightCircleFill className="fill-orange-600 hover:fill-orange-500 focus:fill-orange-500 text-5xl transform hover:scale-110 duration-200" />
          </button>
        </div>

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
