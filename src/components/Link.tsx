import { FC, ReactNode } from "react";
import { FaLink } from "react-icons/fa";

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string | undefined;
  id?: string;
  label?: string;
  newTab?: boolean;
  iconEnabled?: boolean;
  iconPosition?: "left" | "right";
  iconClassName?: string;
}

export const Link: FC<LinkProps> = ({
  children,
  href,
  className = "",
  id = "",
  label = "",
  newTab = false,
  iconEnabled = false,
  iconPosition = "left",
  iconClassName = "",
}) => {
  const icon = iconEnabled && (
    <FaLink
      className={`absolute inline-block mx-2 h-full text-orange-600 opacity-0 group-hover:opacity-100 duration-100 ${iconClassName}`
      }
    />
  );

  return (
    <a
      className={`relative group ${href === undefined ? 'pointer-events-none' : ''} ${className}`}
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
