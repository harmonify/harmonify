import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import me from '../assets/img/me.jpg';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center py-8 space-y-8"
    >
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          About Me
          <span className="ml-2">📕</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-24">
        <div className="relative bg-white border-2 shadow-lg px-6 pt-6 pb-24 md:pb-32 rounded-lg group md:transform md:-rotate-6 md:hover:rotate-0 duration-300">
          <div className="w-80 h-80 overflow-hidden">
            <img
              src={me}
              className="transform scale-125 md:rotate-6 md:group-hover:rotate-0 duration-300"
              alt="profile"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center border shadow-sm w-11/12 md:w-5/12 max-w-5xl">
          <div className="flex px-2 py-1 bg-warm-gray-100">
            <GoPrimitiveDot className="text-2xl text-red-600" />
            <GoPrimitiveDot className="text-2xl text-yellow-500" />
            <GoPrimitiveDot className="text-2xl text-green-500" />
          </div>
          <div className="px-8 py-6 tracking-wider space-y-4">
            <h3 className="font-semibold text-2xl">
              Hello <span>👋</span>
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              adipisci minus debitis soluta esse facere ea animi tempora, eos,
              quos sapiente! Ullam cupiditate corporis, repellat eum,
              praesentium sint ab quam pariatur expedita dicta itaque suscipit
              at magni. Incidunt atque voluptates qui, placeat earum nihil
              inventore?
              <span className="ml-px blinking-cursor" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
