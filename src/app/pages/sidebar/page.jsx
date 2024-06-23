"use client";
import React, { useState } from "react";
import {
  MdHome,
  MdLightbulb,
  MdLightMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import Link from "next/link";

const Sidebar = () => {
  const [selected, setSelected] = useState("Home");
  const [openSideBar, setOpenSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const pages = [
    {
      key: "/home",
      label: "Home",
      icon: <MdHome />,
    },
    // {
    //   key: "/about",
    //   label: "About",
    //   icon: <MdHome />,
    // },
    {
      key: "/skills",
      label: "Skills",
      icon: <MdLightbulb />,
    },
    {
      key: "/education",
      label: "Education",
      icon: <FaGraduationCap />,
    },
    {
      key: "/experience",
      label: "Experience",
      icon: <FaTools />,
    },
    {
      key: "/contact",
      label: "Contacts",
      icon: <PiPhoneCallFill />,
    },
  ];

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <div className="flex p-4">
        {openSideBar ? (
          <RiMenuFoldFill
            onClick={() => setOpenSideBar(!openSideBar)}
            className="text-2xl cursor-pointer ml-auto"
          />
        ) : (
          <RiMenuUnfoldFill
            onClick={() => setOpenSideBar(!openSideBar)}
            className="text-2xl cursor-pointer ml-auto"
          />
        )}
      </div>

      {pages.map((page) => (
        <div
          key={page.key}
          className={`flex cursor-pointer ${
            selected === page.label ? "bg-white" : ""
          }`}
          onClick={() => setSelected(page.label)}
        >
          <div className="text-2xl ml-4 mb-3 mt-3">{page.icon}</div>
          <div
            className={`text-para ml-2 mr-4 mb-3 mt-3 ${
              openSideBar ? "block" : "hidden"
            }`}
          >
            {page.label}
          </div>
        </div>
      ))}

      <div
        onClick={() => {
          setDarkMode(!darkMode);
          toggleTheme();
        }}
        className="flex cursor-pointer ml-4 mr-4 mt-3"
      >
        {darkMode ? (
          <MdOutlineLightMode className="text-2xl" />
        ) : (
          <MdLightMode className="text-2xl" />
        )}
        {openSideBar && (
          <div className="ml-2 text-para">{darkMode ? "Light" : "Dark"}</div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
