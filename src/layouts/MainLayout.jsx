// packages
import React from "react";
import { Outlet } from "react-router-dom";

// styling
import './MainLayout.css';

// components
import Sidebar from "../components/sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="MainLayout">
      {/* left section */}
      <div className="MainLayout__leftSection">
        <Sidebar />
      </div>

      {/* right section */}
      <div className="MainLayout__rightSection">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
