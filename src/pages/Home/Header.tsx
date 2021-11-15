import { FC } from "react";
import { APP } from "../../config/APP";
import { ThemeToggle } from "../../components/ThemeToggle";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  let roles = null;

  if (APP.author.roles) {
    roles = APP.author.roles.reduce((acc, curr) => {
      return acc + ", " + curr;
    });
  }

  return (
    <header className="relative flex flex-col justify-center items-center min-h-80vh md:min-h-screen overflow-hidden text-center">
      <div className="absolute block p-80 md:rounded-full bg-pattern opacity-30 dark:bg-pattern-dark dark:opacity-20 z-10 duration-500" />

      <div className="mb-10 z-20 font-comfortaa">
        <p className="text-xl md:text-2xl">
          <span className="text-3xl">👋</span>
          &nbsp;Welcome, I'm
        </p>
        <h1 className="text-orange-500 text-4xl md:text-5xl my-4">
          {APP.author.name}
        </h1>
        <p className="text-xl md:text-2xl">
          {roles !== null && (
            <>
              a&nbsp;
              <span className="font-semibold">{roles}</span>
            </>
          )}
          &nbsp;from&nbsp;
          <span className="font-semibold text-red-500">
            {APP.author.nationality}
          </span>
        </p>
      </div>

      <ThemeToggle className="z-30 border border-opacity-50 transform scale-150" />
    </header>
  );
};
