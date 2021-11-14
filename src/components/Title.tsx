import { FC, ReactNode } from "react";
import { Link } from "./Link";

interface TitleProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const Title: FC<TitleProps> = ({ children, href, className }) => {
  return (
    <Link
      href={href}
      newTab={false}
      iconEnabled={true}
      iconClassName="text-3xl transform -translate-y-2"
    >
      <h2 className={`inline-block text-3xl md:text-4xl font-bold text-center ${className}`}>
        {children}
      </h2>
    </Link>
  );
};
