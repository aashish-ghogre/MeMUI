import React from "react";
import "./AppHeader.css";
import { Link } from "react-router-dom";
import settingLogo from "./../../resources/icons/settings.png";

const AppHeader = () => {
  return (
    <div className="header">
      <div className="header-text">
        <Link to="/">
          <span>MeManaged11</span>
        </Link>
      </div>
      <div className="admin-link">
        <Link to="/settings">
          <img className="settings-logo" src={settingLogo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
