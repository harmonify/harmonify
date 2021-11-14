import { FC } from "react";
import { Timeline } from "../../components/Timeline";
import { Title } from "../../components/Title";
import { APP } from "../../config/APP";
import { Stripes } from "../../components/Stripes";

interface WorkExperiencesProps {}

export const WorkExperiences: FC<WorkExperiencesProps> = () => {
  return (
    <section
      id="work-experience"
      className="w-11/12 max-w-5xl flex flex-col justify-center items-center py-8 space-y-8 mx-auto"
    >
      <Title href="#work-experience">
        Work&nbsp;
        <span className="text-orange-600">Experiences</span>
        <span className="ml-2">💼</span>
      </Title>

      <Stripes />

      <Timeline experiences={APP.author.workExperiences} />
    </section>
  );
};
