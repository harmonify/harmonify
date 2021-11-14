import React from "react";
import { Stripes } from "../../components/Stripes";
import { Panel } from "../../components/Panel";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { BsLink } from "react-icons/bs";
import { Section } from "../../components/Section";

interface SkillsProps {}

const getChains = (n: number) => {
  if (n === 0) return [];

  const chains = [
    <span className="block p-2 ring-2 ring-inset ring-orange-600 rounded-full" />,
  ];

  return chains.concat(
    [...Array(Math.min(n, 2))].map(() => (
      <BsLink className="block transform rotate-90 scale-110" />
    ))
  );
};

export const Skills: React.FC<SkillsProps> = () => {
  return (
    <Section
      id="skills"
    >
      <Title href="#skills">
        My&nbsp;
        <span className="text-orange-600">Skill</span>
        &nbsp;Set&nbsp;
        <span>💡</span>
      </Title>

      <Stripes />

      <div className="md:masonry-2-col space-y-8">
        {APP.author.skills.map((skill, index) => (
          <div key={index} className="mx-16">
            <div className="flex flex-col items-center justify-center">
              {getChains(index)}
            </div>
            <Panel>
              <h3 className="mb-3 text-2xl text-center font-bold">
                {skill.title}
              </h3>
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
    </Section>
  );
};
