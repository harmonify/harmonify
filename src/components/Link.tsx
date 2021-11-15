import { FC, ReactNode } from "react";
import { FaLink } from "react-icons/fa";

interface LinkProps {
  children: ReactNode;
  className?: string;
  href: string | undefined;
  id?: string;
  label?: string;
  outlineEnabled?: boolean;
  newTab?: boolean;
  iconEnabled?: boolean;
  iconClassName?: string;
}

export const Link: FC<LinkProps> = ({
  children,
  href,
  className = "",
  id = "",
  label = "",
  newTab = false,
  outlineEnabled = false,
  iconEnabled = false,
  iconClassName = "",
}) => {
  const icon = iconEnabled && (
    <FaLink
      className={`absolute inline-block mx-2 h-full text-orange-600 opacity-0 group-hover:opacity-100 group-focus:opacity-100 duration-100 ${iconClassName}`
      }
    />
  );

  return (
    <a
      className={`relative group ${outlineEnabled ? '' : 'outline-none'} ${href === undefined ? 'pointer-events-none' : ''} ${className}`}
      id={id}
      href={href}
      aria-label={label}
      target={newTab ? "_blank" : ""}
      rel="noopener noreferrer"
    >
      {icon}
      {children}
    </a>
  );
};
