import { FC, ReactNode} from 'react';

interface LinkProps {
  children: ReactNode,
  className?: string,
  href?: string,
  id?: string,
};

export const Link : FC<LinkProps> = ({ children, className = '', href = '#', id = '' }) => {
  return (
    <a
      className={className}
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
};
