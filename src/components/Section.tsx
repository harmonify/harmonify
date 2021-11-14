import { FC, ReactElement } from "react";

interface SectionProps {
  id?: string;
  children: ReactElement | ReactElement[];
  className?: string;
}

export const Section: FC<SectionProps> = ({ id, children, className }) => (
  <section
    id={id}
    className={`flex flex-col justify-center items-center py-16 space-y-8 ${className}`}
  >
    {children}
  </section>
);
