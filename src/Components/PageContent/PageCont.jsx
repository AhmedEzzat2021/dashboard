import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../SideNavbar/SideNavbar";
import UperNavbar from "../UperNavbar/UperNavbar";
import { Mylayout } from "./Styled";
const PageContent = () => {
  return (
    <>
      <div className="app">
        <Mylayout>
          <SideNavbar />
          <div className="page">
            <UperNavbar />
            <Outlet />
          </div>
        </Mylayout>
      </div>
    </>
  );
};
export default PageContent;
