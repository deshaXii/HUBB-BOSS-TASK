import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineArrowRight } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__header">
          <div className="sidebar__header__logo">
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="sidebar__body">
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Dashboard</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Transaction</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Task</span>
            </a>
          </div>
          <div className="sidebar__body__item active">
            <a href="/">
              <RiDashboardLine />
              <span>Documents</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Store</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Notification</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Profile</span>
            </a>
          </div>
          <div className="sidebar__body__item">
            <a href="/">
              <RiDashboardLine />
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom__item">
          <div className="like-icon">
            <AiOutlineLike />
          </div>
          <span>
            Upgrade to <b>Pro</b> for get all featurs
          </span>
          <a href="#0">
            <span>Upgrade Now</span>
            <HiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
