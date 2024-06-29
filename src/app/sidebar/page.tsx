"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const routes = [
    {
      path: "/",
      label: "Home",
    },
    // {
    //   path: "/home",
    //   label: "Home",
    // },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/skills",
      label: "Skills",
    },
  ];

  return (
    <div className="theme">
      {routes.map((route) => {
        return (
          <div
            key={route.path}
            className={`p-4 hover:bg-gray-500 cursor-pointer`}
            onClick={() => {
              router.push(route.path);
            }}
          >
            {route.label}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
