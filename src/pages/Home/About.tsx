import { FC } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { APP } from "../../config/APP";
import { getAbout } from "../../utilities/getAbout";
import { Section } from "../../components/Section";
import { Stripes } from "../../components/Stripes";
import { Title } from "../../components/Title";

interface AboutProps {}

interface AboutAvatarProps {}

interface AboutDescriptionProps {}

export const About: FC<AboutProps> = () => {
  return (
    <Section id="about">
      <Title href="#about">
        About&nbsp;
        <span className="text-orange-600">Me</span>
        <span className="ml-2">📕</span>
      </Title>

      <Stripes />

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-24">
        <AboutAvatar />

        <AboutDescription />
      </div>
    </Section>
  );
};

const AboutAvatar: FC<AboutAvatarProps> = () => (
  <div className="relative bg-white border-2 shadow-lg px-8 pt-8 pb-24 md:pb-28 rounded-lg group md:transform md:-rotate-6 md:hover:rotate-0 duration-300">
    <div className="w-80 h-80 overflow-hidden rounded-md">
      <img
        src={APP.author.avatar}
        className="transform scale-125 md:rotate-6 md:group-hover:rotate-0 duration-300"
        alt="avatar"
      />
    </div>
  </div>
);

const AboutDescription: FC<AboutDescriptionProps> = () => {
  const about = getAbout();

  return (
    <div className="flex flex-col justify-center border shadow-sm w-11/12 md:w-5/12 max-w-5xl">
      <div className="flex px-2 py-1 bg-warm-gray-100">
        <GoPrimitiveDot className="text-2xl text-red-600" />
        <GoPrimitiveDot className="text-2xl text-yellow-500" />
        <GoPrimitiveDot className="text-2xl text-green-500" />
      </div>

      <div className="px-8 py-6 tracking-wider">
        <h3 className="font-semibold text-2xl mb-4">
          Hello <span>👋</span>
        </h3>

        {about}
      </div>
    </div>
  );
};
