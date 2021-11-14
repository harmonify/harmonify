import { FC, ReactElement } from 'react'

interface PanelProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export const Panel: FC<PanelProps> = ({children, className}) => {
  return (
    <div className={`px-10 py-8 border bg-white border-gray-200 shadow-md hover:shadow-lg rounded-2xl duration-200 ${className}`}>
      {children}
    </div>
  );
}
