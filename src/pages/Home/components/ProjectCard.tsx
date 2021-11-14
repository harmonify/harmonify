import React from "react";
import { BsEye, BsGithub } from "react-icons/bs";
import { ProjectInterface } from "../../../interfaces/ProjectInterface";
import { Link } from "../../../components/Link";

interface ProjectCardProps {
  id: number;
  project: ProjectInterface;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({id, project}) => {
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
