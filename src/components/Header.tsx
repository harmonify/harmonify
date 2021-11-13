import { FC } from 'react'
import { APP } from '../config/APP';
import { getRoles } from '../utilities/getRoles';

interface HeaderProps {
  
}

export const Header: FC<HeaderProps> = () => {
  const roles = getRoles();

  return (
    <header className="relative flex flex-col justify-center items-center min-h-80vh md:min-h-screen overflow-hidden text-center">
      <div className="absolute p-80 md:rounded-full bg-pattern opacity-40 z-10" />

      <div className="z-50">
        <p className="text-xl md:text-2xl">
          <span>👋&nbsp;</span>
          <span className="font-semibold">Hi!</span>
          &nbsp;Welcome, I'm
        </p>
        <h1 className="text-orange-500 text-4xl md:text-5xl font-semibold my-4">{APP.author.name}</h1>
        <p className="text-xl md:text-2xl">
          {(roles !== null) && <>
            a&nbsp;
            <span className="font-semibold">{roles}</span>
          </>}
          &nbsp;from&nbsp;
          <span className="font-semibold text-red-500">{APP.author.nationality}</span>
        </p>
      </div>
    </header>
  );
}

