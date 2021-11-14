import { FC } from "react";
import { Timeline } from "../../components/Timeline";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";
import { Section } from "../../components/Section";

interface WorkExperiencesProps {}

export const WorkExperiences: FC<WorkExperiencesProps> = () => {
  return (
    <Section
      id="work-experience"
    >
      <Title href="#work-experience">
        Work&nbsp;
        <span className="text-orange-600">Experiences</span>
        <span className="ml-2">💼</span>
      </Title>

      <Stripes />

      <div className="w-11/12 max-w-5xl">
        <Timeline experiences={APP.author.workExperiences} />
      </div>
    </Section>
  );
};
