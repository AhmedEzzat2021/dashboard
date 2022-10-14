import React from "react";
import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineSetting,
  AiOutlineShareAlt,
  AiOutlineUser,
} from "react-icons/ai";
import { FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { GoNote } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { HeadTit, SideMENU, Title, Unlist } from "./styled";
const SideNavbar = () => {
  return (
    <SideMENU>
      <Title className="title_nav">
        <HeadTit>
          <span>Ahmed</span>
          <span>Ezzat</span>
        </HeadTit>
      </Title>
      <Unlist>
        <NavLink to="dashboard" className="link_nav">
          <AiOutlineBarChart />
          Dashboard
        </NavLink>
        <NavLink to="setting" className="link_nav">
          <AiOutlineSetting />
          Setting
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <AiOutlineUser />
          Profile
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <AiOutlineShareAlt />
          Project
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <FaGraduationCap />
          Courses
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <FaUserFriends />
          Friends
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <AiOutlineFileText />
          Files
        </NavLink>
        <NavLink to="profile" className="link_nav">
          <GoNote />
          Plans
        </NavLink>
      </Unlist>
    </SideMENU>
  );
};
export default SideNavbar;

// AiOutlineFileText,
// AiOutlineSetting,
// AiOutlineShareAlt,
// AiOutlineUser,

// import { FaGraduationCap, FaUserFriends } from "react-icons/fa";
// import { GoNote } from "react-icons/go";
