import { FC, useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../providers/ThemeProvider";
import Switch from "react-switch";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleChange = (nextChecked: any) => {
    toggleTheme();
  };

  return (
    <Switch
      className={className}
      onChange={handleChange}
      checked={theme === "light" ? true : false}
      onColor="#e7e7e7"
      offColor="#1E293B"
      checkedIcon={<FaMoon className="p-1 h-full w-full text-lg text-amber-500 font-bold" />}
      uncheckedIcon={<FaSun className="p-1 h-full w-full text-lg dark:text-amber-500 font-bold" />}
    />
  );
};
