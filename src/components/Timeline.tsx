import { FC } from "react";
import { Link } from "./Link";
import { BsHourglassSplit } from "react-icons/bs";
import { ExperienceInterface } from "../interfaces/ExperienceInterface";

interface TimelineProps {
  className?: string;
  experiences: ExperienceInterface[] | undefined;
}

const Timeline: FC<TimelineProps> = ({ className, experiences }) => (
  <div className={`py-7 px-5 border-l-2 border-orange-500 ${className}`}>
    {experiences?.map((experience) => (
      <div className="mb-10">
        <div className="relative">
          <span
            className="absolute w-3 h-3 bg-orange-500 rounded-full"
            style={{ left: "-1.7rem", bottom: ".5rem" }}
          />

          <span className="text-xs inline-block py-1 px-5 rounded-full border border-orange-500">
            {experience.date}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
          <div className="my-2 col-span-2">
            <h3 className="text-xl md:text-2xl font-semibold">
              <Link href={experience.titleLink ?? ""} iconEnabled={true} iconPosition="right" >
                {experience.title}
              </Link>
            </h3>
            <h4 className="text-md md:text-lg text-orange-600 font-semibold tracking-wider">
              {experience.subtitle}
            </h4>
          </div>

          <div className="md:text-base text-gray col-span-3">
            <p className="mb-2">
              {experience.description}
            </p>

            <ul className="list-inside list-disc relative">
              {experience.items.map((item, index) => (
                <li className="hover:text-orange-600" key={index}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}

    <div className="relative mt-5">
      <div
        className="absolute bg-orange-500 rounded-full w-auto p-2 text-white"
        style={{ left: "-2.3rem" }}
      >
        <BsHourglassSplit />
      </div>
    </div>
  </div>
);

export { Timeline };
