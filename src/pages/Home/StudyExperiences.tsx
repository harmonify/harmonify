import { FC } from "react";
import { Timeline } from "../../components/Timeline";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";
import { Section } from "../../components/Section";

interface StudyExperiencesProps {}

export const StudyExperiences: FC<StudyExperiencesProps> = () => {
  return (
    <Section
      id="study-experience"
    >
      <Title href="#study-experience">
        Courses&nbsp;
        <span className="text-orange-600">I've</span>
        &nbsp;taken
        <span className="ml-2">📚</span>
      </Title>

      <Stripes />

      <div className="w-11/12 max-w-5xl">
        <Timeline experiences={APP.author.studyExperiences} />
      </div>
    </Section>
  );
};
