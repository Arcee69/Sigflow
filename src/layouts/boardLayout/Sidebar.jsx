import React from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import logo from "../../assets/icons/logo.svg";

import events from "../../assets/icons/event.svg";
import pipeline from "../../assets/icons/pipeline.svg";
import source from "../../assets/icons/source.svg";
import destination from "../../assets/icons/source.svg";
import transformation from "../../assets/icons/transformation.svg";
import account from "../../assets/icons/account.svg";
import settings from "../../assets/icons/settings.svg";
import help from "../../assets/icons/help.svg";
import selector from "../../assets/icons/chevron-selector.svg";
import { Divider } from "@mui/material";



export default function Sidebar() {
  const navigate = useNavigate();
  

  const location = useLocation()


  const menuItems = [
      {
          title: "Events",
          children: false,
          itemId: '/event',
          icon: () => (
            <img src={events} alt="icon" />
          ),
      
      },
      {
          title: "Pipeline",
          children: false,
          itemId: '/pipeline',
          icon: () => (
            <img src={pipeline} alt="icon" />
          ),
      },
      {
          title: "Source",
          children: false,
          itemId: '/source',
          icon: () => (
            <img src={source} alt="icon" />
          ),
      },
      {
          title: "Destination",
          children: false,
          itemId: '/destination',
          icon: () => (
            <img src={destination} alt="icon" />
          ),
      },
      {
          title: "Transformation",
          children: false,
          itemId: '/dashboard',
          icon: () => (
            <img src={transformation} alt="icon" />
          ),
      },
  ];

  

  return (
    <div className="bg-[#fafafa]">
      <div className="w-full h-[100px]  flex gap-4 px-[20%] items-center"> {/* 175px */}
        <img
          src={logo}
          alt="logo"
          loading="lazy"
          className=" z-30 cursor-pointer" //h-[41px] w-[45px]
          onClick={() => navigate("/dashboard")}
        />
 
      </div>
      <div className="px-[20%]">
        <button className="flex justify-between bg-[#f6f6f6] w-[188px] rounded-lg p-1 items-center ">
          <p className="text-left text-BLACK-_100 font-bold">Sigflow</p>
          <img src={selector} alt="Selector" />
        </button>

      </div>
      <div className="w-full">
        <div className="px-[10%] py-[8%] flex flex-col gap-8 "> {/* px-[20%] */}
          <Navigation
                activeItemId={location.pathname}
                onSelect={({ itemId }) => {
                    navigate(itemId, { state: { title: "title" } });
                    // handleClose()
                }}
                items={menuItems.map((list) => ({
                title: (
                    <p className="text-sm hover:text-primary">
                        {list?.title}
                    </p>
                ),
                    itemId: list?.itemId,
                    elemBefore: list?.icon,
                    // subNav: list?.children && list?.subNav,
                }))}
          />
        </div>
        <Divider flexItem="vertical" className="text-[#828282]" />

        <div className="flex flex-col gap-4 px-[20%] py-[12%] mt-[5%]">
          <div className="flex gap-4 ">
            <img src={account} alt="User" />
            <p className="text-sm hover:text-primary text-[#828282]">Account</p>
          </div>
          <div className="flex gap-4 ">
            <img src={settings} alt="Settings" />
            <p className="text-sm hover:text-primary text-[#828282]">Settings</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-[20%] py-[12%] mt-[10%]">
          <div className="flex gap-4 ">
            <img src={help} alt="Help" />
            <p className="text-sm text-primary font-bold text-[#828282]">Help</p>
          </div>
          <div className="flex gap-4 ">
            <img src={help} alt="Documentation" />
            <p className="text-sm text-primary font-bold text-[#828282]">Documentation</p>
          </div>
        </div>

      </div>
    </div>
  );
}
