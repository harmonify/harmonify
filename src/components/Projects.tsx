import { FC, MutableRefObject, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Card } from "./Card";
import ScrollContainer from "react-indiana-drag-scroll";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const Projects: FC = () => {
  const ref: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    if (ref.current && window.innerWidth > 768) {
      ref.current.scrollTo(300, 0)
    }
  }, []);

  const scroll = (scrollOffset: number) => {
    window.scrollTo({
      left: (ref.current.scrollLeft += scrollOffset),
      behavior: "smooth"
    });
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center py-8"
    >
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Projects
          <span className="ml-2">✏</span>
        </h2>
      </div>

      <div className="flex flex-col justify-center items-center w-11/12 md:4/12">
        <div className="hidden md:flex self-end space-x-4">
          <button
            onClick={() => scroll(-300)}
            aria-label="Scroll Left"
          >
            <BsFillArrowLeftCircleFill className="text-4xl" />
          </button>

          <button
            onClick={() => scroll(300)}
            aria-label="Scroll Right"
          >
            <BsFillArrowRightCircleFill className="text-4xl" />
          </button>
        </div>

        <ScrollContainer
          innerRef={ref}
          className="h-auto w-full mt-8 flex items-center overflow-auto px-6 space-x-10 rounded-xl cursor-grab"
        >
          {arr.map((item, index) => (
            <Card key={index} num={index} />
          ))}
        </ScrollContainer>

        <p className="font-mono text-lg mx-auto text-center pt-6">
          - Drag to Scroll Horizontally -
        </p>
      </div>
    </section>
  );
};
