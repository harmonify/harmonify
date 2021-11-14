import { FC } from "react";
import { Timeline } from "../../components/Timeline";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";

interface StudyExperiencesProps {}

export const StudyExperiences: FC<StudyExperiencesProps> = () => {
  return (
    <section
      id="courses"
      className="w-11/12 max-w-5xl flex flex-col justify-center items-center py-8 space-y-8 mx-auto"
    >
      <Title href="#courses">
        Courses&nbsp;
        <span className="text-orange-600">I've taken</span>
        <span className="ml-2">📚</span>
      </Title>

      <Stripes />
      
      <Timeline experiences={APP.author.studyExperiences} />
    </section>
  );
};
