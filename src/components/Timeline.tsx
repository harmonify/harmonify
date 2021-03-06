import { FC } from "react";
import { Link } from "./Link";
import { BsHourglassSplit } from "react-icons/bs";
import { ExperienceInterface } from "../interfaces/ExperienceInterface";

interface TimelineProps {
  experiences: ExperienceInterface[] | undefined;
  className?: string;
}

const Timeline: FC<TimelineProps> = ({ className, experiences }) => (
  <div className={`py-7 px-5 border-l-2 border-orange-500 ${className}`}>
    {experiences?.map((experience, index) => {
      const { title, titleLink, subtitle, date, description, items } =
        experience;

      return (
        <div key={index} className="mb-10">
          <div className="relative">
            <span
              className="absolute w-3 h-3 bg-orange-500 rounded-full"
              style={{ left: "-1.7rem", bottom: ".5rem" }}
            />

            <span className="inline-block py-1 px-5 rounded-full border border-orange-500">
              {date}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12">
            <div className="my-2 col-span-2">
              <div>
                <Link
                  href={titleLink}
                  newTab
                  className="inline-block"
                  iconEnabled={titleLink ? true : false}
                  iconClassName="-right-8"
                >
                  <h3 className="text-xl md:text-2xl font-semibold bg">
                    {title}
                  </h3>
                </Link>
              </div>

              <h4 className="text-md md:text-lg text-orange-600 font-550">
                {subtitle}
              </h4>
            </div>

            <div className="md:text-base col-span-3">
              <p className="mb-2">{description}</p>

              <ul className="list-inside list-disc">
                {items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.link}
                      newTab={true}
                      className="hover:text-orange-600 focus:text-orange-600"
                      iconEnabled={item.link ? true : false}
                      iconClassName="relative float-right -bottom-1 fill-black dark:fill-white group-hover:fill-orange-600 opacity-80"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    })}

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
