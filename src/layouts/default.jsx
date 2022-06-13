import React from "react";
import Sidebar from "../components/sidebar";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Default = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-layout__body">
        <div className="app-layout-top-header">
          <div className="alth-page-title">
            <h1>Documents</h1>
          </div>
          <div className="alth-left">
          <div className="alth-search">
            <form>
              <input type="text" placeholder="Search" />
              <button type="submit">
                <FiSearch />
              </button>
            </form>
          </div>
          <div className="alth-auth-area">
            <div className="alth-auth-img">
              <img src="/defaultUser.png" alt="user imagea" />
            </div>
            <div className="alth-auth-name">
              <span>Angelina Joli</span>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Default;
