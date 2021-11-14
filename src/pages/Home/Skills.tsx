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
  if (num === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      {[
        <span className="block p-2 ring-2 ring-inset ring-orange-600 rounded-full" />,
      ].concat(
        [...Array(Math.min(num, 3))].map(() => (
          <BsLink className="block transform rotate-90 scale-110" />
        ))
      )}
    </div>
  );
};

const SkillsContainer: FC<SkillsContainerProps> = ({ skills }) => (
  <div className="md:masonry-2-col space-y-8">
    {skills.map((skill, index) => (
      <div key={index} className="mx-16">
        <Chains num={index} />

        <Panel className="px-10 py-8">
          <h3 className="mb-3 text-2xl text-center font-bold">{skill.title}</h3>
          <ul className="flex flex-col justify-center items-center">
            {skill.items.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    ))}
  </div>
);
