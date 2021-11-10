import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface CardProps {
  num: number;
}

export const Card: React.FC<CardProps> = ({num}) => {
  return (
    <figure
      className="flex flex-shrink-0 relative w-72 h-96 md:w-96 md:h-124 bg-cover rounded-3xl hover:opacity-70 duration-200"
      style={{ backgroundImage: `url(https://source.unsplash.com/random/500x400)` }}
    >
      <div className="w-full h-full bg-black opacity-50 absolute left-0 top-0 rounded-3xl z-10" />

      <section className="w-full h-full relative z-20 p-7 flex flex-col justify-between">
        <div className="flex flex-row justify-end items-end">
          <div className="rounded-3.5 text-lg font-somatic p-2 bg-black bg-opacity-50 text-white">
            <BsArrowRight />
          </div>
        </div>

        <div className="space-y-1 text-white">
          <h3 className="text-3xl md:text-4xl font-bold truncate">Project Title {num}</h3>
          <figcaption className="text-sm md:text-base tracking-wider truncate">
            Project description
          </figcaption>
        </div>
      </section>
    </figure>
  );
};
