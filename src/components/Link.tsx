import { FC, ReactNode} from 'react';

interface LinkProps {
  children: ReactNode,
  className?: string,
  href?: string,
  id?: string,
  label?: string,
};

export const Link : FC<LinkProps> = ({ children, className = '', href = '#', id = '', label ='' }) => {
  return (
    <a
      className={className}
      id={id}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
};
