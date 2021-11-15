import { FC, ReactElement } from 'react'

interface PanelProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export const Panel: FC<PanelProps> = ({children, className}) => {
  return (
    <div className={`border border-gray-200 dark:border-opacity-20 shadow-md hover:shadow-lg dark:shadow-xl dark:hover:shadow-2xl rounded-2xl duration-200 ${className}`}>
      {children}
    </div>
  );
}
