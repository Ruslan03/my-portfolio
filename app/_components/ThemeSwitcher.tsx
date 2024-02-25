"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { Tooltip } from "@nextui-org/tooltip";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return <div></div>;
  }


  return (
    <Tooltip content={<div className="px-2"> {theme === "light" ? 'Dark mode' : 'Light mode'}</div>} showArrow color="foreground">
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:bg-gray-200 dark:hover:bg-zinc-800 p-2 rounded-xl ease-in-out duration-400"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
    </Tooltip>
  );
};