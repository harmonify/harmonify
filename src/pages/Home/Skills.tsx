import { FC } from "react";
import { Stripes } from "../../components/Stripes";
import { Panel } from "../../components/Panel";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { BsLink } from "react-icons/bs";
import { Section } from "../../components/Section";
import { SkillInterface } from "../../interfaces/SkillInterface";

interface SkillsProps {}

interface ChainsProps {
  num: number;
}

interface SkillsContainerProps {
  skills: SkillInterface[];
}

export const Skills: React.FC<SkillsProps> = () => {
  return (
    <Section id="skills">
      <Title href="#skills">
        My&nbsp;
        <span className="text-orange-600">Skill</span>
        &nbsp;Set&nbsp;
        <span>💡</span>
      </Title>

      <Stripes />

      <SkillsContainer skills={APP.author.skills} />
    </Section>
  );
};

const Chains: FC<ChainsProps> = ({ num }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {[
        <span key={"dot"} className="block p-2 ring-2 ring-inset ring-orange-600 rounded-full" />,
      ].concat(
        [...Array(Math.min(num, 3))].map((v, i) => (
          <BsLink key={i} className="block transform rotate-90 scale-110" />
        ))
      )}
    </div>
  );
};

const SkillsContainer: FC<SkillsContainerProps> = ({ skills }) => (
  <div className="md:masonry-2-col space-y-8 text-center">
    {skills.map((skill, index) => (
      <div key={index} className="mx-8 lg:mx-16">
        <Chains num={index} />

        <Panel className="bg-white dark:bg-blue-gray-900 dark:bg-opacity-60 px-10 py-8">
          <h3 className="mb-3 text-2xl text-center  dark:text-orange-600">{skill.title}</h3>

          <ul className="flex flex-col justify-center items-center font-comfortaa">
            {skill.items.map((item, i) => (
              <li key={i} className="text-lg font-550">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    ))}
  </div>
);
