import React, { useState } from "react";
import { Drawer, List, ListItem } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  MdHome,
  MdLightbulb,
  MdLightMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const SideNavbar = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("Home");
  const [openSideBar, setOpenSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const pages = [
    {
      key: "/",
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
      key: "/contacts",
      label: "Contacts",
      icon: <PiPhoneCallFill />,
    },
  ];

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className={``}>
      <div className="p-4 flex">
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
          onClick={() => {
            setSelected(page.label);
            navigate(page.key);
          }}
          className={`p-4 cursor-pointer ${
            selected === page.label ? "bg-gray-400 dark:bg-gray-700" : ""
          } transition-colo  `}
        >
          <div className="flex">
            <div className={`${openSideBar ? "mr-4" : ""} text-2xl`}>
              {page.icon}
            </div>
            <div
              className={`mr-4 text-para ${openSideBar ? "block" : "hidden"} `}
            >
              {page.label}
            </div>
          </div>
        </div>
      ))}

      <div
        onClick={() => {
          setDarkMode(!darkMode);
          toggleTheme();
        }}
        className="flex p-4 cursor-pointer"
      >
        {darkMode ? (
          <MdOutlineLightMode
            className={`${openSideBar ? "mr-4" : ""} text-2xl`}
          />
        ) : (
          <MdLightMode className={`${openSideBar ? "mr-4" : ""} text-2xl`} />
        )}
        <div className={`${openSideBar ? "mr-4" : ""} text-para`}>
          {openSideBar ? (darkMode ? "Light" : "Dark") : ""}
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
