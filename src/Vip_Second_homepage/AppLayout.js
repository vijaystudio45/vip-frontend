import React from "react";
import Navbarhead from "./Navbarhead";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <div className="main_appLayout">
        <div className="main_navbar_header">
          <Navbarhead />
        </div>
        <div className="main_footer">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AppLayout;
