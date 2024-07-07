import React from "react";
import { TiThMenu } from "react-icons/ti";

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

  return (
    <div className={`theme-sidebar md:hidden sm:block h-12`}>
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
  );
};

export default Header;
