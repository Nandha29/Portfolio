"use client";
import React, { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitcher = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("dark");
    }
  };

  return (
    <div>
      <div className=" p-4  theme ">
        Header
        <button
          className="ml-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 float-right"
          onClick={handleThemeSwitcher}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default Header;
