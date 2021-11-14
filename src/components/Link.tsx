import { FC, ReactNode } from "react";
import { FaLink } from "react-icons/fa";

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  id?: string;
  label?: string;
  newTab?: boolean;
  iconEnabled?: boolean;
  iconPosition?: "left" | "right";
  iconClassName?: string;
}

export const Link: FC<LinkProps> = ({
  children,
  className = "",
  href = "#",
  id = "",
  label = "",
  newTab = true,
  iconEnabled = false,
  iconPosition = "left",
  iconClassName = "",
}) => {
  const icon = iconEnabled && (
    <FaLink
      className={`inline-block mx-1 my-auto opacity-0 group-hover:opacity-60 duration-75 ${iconClassName}`}
    />
  );

  return (
    <a
      className={`group ${className}`}
      id={id}
      href={href}
      aria-label={label}
      target={newTab ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </a>
  );
};
