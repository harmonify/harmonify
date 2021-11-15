import { FC } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { APP } from "../../config/APP";
import { Section } from "../../components/Section";
import { Stripes } from "../../components/Stripes";
import { Title } from "../../components/Title";
import { Panel } from "../../components/Panel";

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

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-16 lg:space-x-24">
        <AboutAvatar />

        <AboutDescription />
      </div>
    </Section>
  );
};

const AboutAvatar: FC<AboutAvatarProps> = () => (
  <Panel className="bg-white dark:bg-true-gray-100 relative px-8 pt-8 pb-24 md:pb-28 rounded-lg group md:transform md:-rotate-6 md:hover:rotate-0 duration-300">
    <div className="w-80 h-80 overflow-hidden rounded-md">
      <img
        src={APP.author.avatar}
        className="transform scale-125 md:rotate-6 md:group-hover:rotate-0 duration-300"
        alt="avatar"
      />
    </div>
  </Panel>
);

const AboutDescription: FC<AboutDescriptionProps> = () => {
  const about = getAbout();

  return (
    <div className="flex flex-col justify-center border dark:border-opacity-40 dark:shadow-2xl shadow-sm w-11/12 md:w-8/12 lg:w-5/12 max-w-5xl">
      <div className="flex px-2 py-1 bg-warm-gray-100 dark:bg-gray-900">
        <GoPrimitiveDot className="text-2xl text-red-600" />
        <GoPrimitiveDot className="text-2xl text-yellow-500" />
        <GoPrimitiveDot className="text-2xl text-green-500" />
      </div>

      <div className="px-8 py-6 tracking-wider bg-white dark:bg-black dark:bg-opacity-40">
        <h3 className="font-semibold text-2xl mb-4">
          Hello <span>👋</span>
        </h3>

        {about}
      </div>
    </div>
  );
};

const getAbout = () => {
  return APP.author.about
    .slice(0, -1)
    .map((paragraph, index) => (
      <p key={index} className="mb-2">
        {paragraph}
      </p>
    ))
    .concat(
      <p key={"last"} className="mb-2">
        {APP.author.about.slice(-1)[0]}
        <span className="ml-px blinking-cursor" />
      </p>
    );
};
