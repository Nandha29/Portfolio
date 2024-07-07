"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  MdHome,
  MdPerson,
  MdWork,
  MdLightbulb,
  MdDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { WiDaySunny } from "react-icons/wi";

const Sidebar = () => {
  const router = useRouter();
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

  console.log("router-----", router);

  const routes = [
    {
      path: "/",
      label: "Home",
      icon: <MdHome />,
    },
    {
      path: "/about",
      label: "About",
      icon: <MdPerson />,
    },
    {
      path: "/skills",
      label: "Skills",
      icon: <MdLightbulb />,
    },
    {
      path: "/education",
      label: "Education",
      icon: <FaGraduationCap />,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: <AiFillProject />,
    },
    {
      path: "/experience",
      label: "Experience",
      icon: <MdWork />,
    },
    {
      path: "/contact",
      label: "Contact",
      icon: <PiPhoneCallFill />,
    },
  ];

  return (
    <div className={`theme-sidebar h-screen w-80 hidden md:block`}>
      <div className="flex flex-col items-center justify-center px-5 py-6">
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/101483922?v=4"
          sx={{ width: 100, height: 100 }}
          className="border-4 border-gray-500"
        />
        <div className="text-center text-3xl mt-4 font-bold">Nandha</div>
      </div>
      {routes.map((route) => {
        return (
          <div
            key={route.path}
            className={`hover:bg-gray-500 cursor-pointer px-5 py-5 ${
              ""
              // router.pathname === route.path ? "bg-gray-500" : ""
            } `}
            onClick={() => {
              router.push(route.path);
            }}
          >
            <div className="flex space-x-5 items-center justify-center">
              <div className="text-2xl">{route.icon}</div>
              <div className={`text-xl`}>{route.label}</div>
            </div>
          </div>
        );
      })}

      <div
        className="flex items-center px-5 py-6 mt-18 space-x-5 justify-center cursor-pointer"
        onClick={handleThemeSwitcher}
      >
        <div className="text-2xl">
          {theme === "dark" ? <WiDaySunny /> : <MdDarkMode />}
        </div>

        <div className="text-xl">Change Theme</div>
      </div>
    </div>
  );
};

export default Sidebar;
