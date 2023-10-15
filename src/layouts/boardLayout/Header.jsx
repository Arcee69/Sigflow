import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import { useUser } from "../../../providers/userDetailsProvider";
import hamburger from "../../assets/icons/hamburger.svg";
import Logo from "../../assets/icons/logo-b.svg";
import TokenService from "../../services/token"

export default function Header({ setOpenMobileSidebar }) {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const userData = JSON.parse(sessionStorage.getItem('userObj'))
  console.log(userData, "opor")

  // console.log(user, "opor")

  const location = useLocation()

  const navigate = useNavigate()

  return (
    <div className="w-full h-full bg-[#fff]  flex justify-between items-center">
      <div className="flex gap-3">
        <img
          src={hamburger}
          alt="hamburger"
          loading="lazy"
          className="lg:hidden xs:block cursor-pointer"
          onClick={() => setOpenMobileSidebar(true)}
        />
      </div>
      <div className="flex gap-4 items-center">
  
        <img
          src={Logo}
          alt="avatar"
          loading="lazy"
          className="h-[40px] w-[40px] cursor-pointer"
        />
        <div 
          className="flex flex-col cursor-pointer"
          id="header-menu"
          aria-controls={open ? "header-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <p className="text-sm font-bold text-[#101828]">Sigflow</p>
          <p className="text-[#828282] text-sm">{`${userData?.first_name} ${userData?.last_name}`}</p>
        </div>
        <Menu
          id="header-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              TokenService.removeUser()
              navigate("/")
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
