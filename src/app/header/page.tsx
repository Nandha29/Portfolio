"use client";
import React from "react";
import { TiThMenu } from "react-icons/ti";

import { useRouter } from "next/navigation";
import {
  MdHome,
  MdPerson,
  MdWork,
  MdLightbulb,
  MdDarkMode,
} from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { PiPhoneCallFill } from "react-icons/pi";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  const channels = [
    {
      label: "Github",
      link: "",
      icon: "/channels/github.png",
    },
    {
      label: "LinkedIn",
      link: "",
      icon: "/channels/linkedin.png",
    },
    {
      label: "Stackoverflow",
      link: "",
      icon: "/channels/stackoverflow.png",
    },
  ];

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

  const MenuList = () => {
    const router = useRouter();

    return (
      <div
        className={`items-center space-y-2 theme-sidebar md:hidden sm:block`}
      >
        {routes.map((route) => (
          <div
            key={route.path}
            className={`hover:bg-gray-500 cursor-pointer p-2 ${
              ""
              // router.pathname === route.path ? "bg-gray-500" : ""
            } `}
            onClick={() => {
              router.push(route.path);
            }}
          >
            <div className="flex space-x-5 items-center justify-center">
              <div className={`text-xl`}>{route.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className={`theme-header md:hidden sm:block h-12`}>
        <div className={`flex justify-between items-center align-middle p-2`}>
          <div className={`flex items-center`}>
            <div className={`text-2xl font-bold`}>Portfolio</div>
          </div>
          <div className={`flex items-center space-x-5 p-1`}>
            {channels.map((channel) => (
              <div key={channel.label}>
                <img src={channel.icon} className="h-6 w-6" />
              </div>
            ))}
            <div className={`text-2xl ml-2`}>
              <TiThMenu />
            </div>
          </div>
        </div>
      </div>
      <MenuList />
    </>
  );
};

export default Header;
