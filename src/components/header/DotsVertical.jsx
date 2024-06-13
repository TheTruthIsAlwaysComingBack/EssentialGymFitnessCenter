import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DotsVertical.css";

const DotsVertical = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmenuClick = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className="dots-vertical-general">
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
        style={{ cursor: "pointer" }}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
      {isOpen && (
        <div className="dropdown-menu-general">
          <div>
            <button onClick={() => handleSubmenuClick("home")}>Home</button>
            {activeSubmenu === "home" && (
              <div className="submenu-general">
                <Link to="/home/overview" onClick={() => setIsOpen(false)}>
                  Overview
                </Link>
                <Link to="/home/details" onClick={() => setIsOpen(false)}>
                  Details
                </Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => handleSubmenuClick("about")}>About</button>
            {activeSubmenu === "about" && (
              <div className="submenu-general">
                <Link to="/about/team" onClick={() => setIsOpen(false)}>
                  Team
                </Link>
                <Link to="/about/company" onClick={() => setIsOpen(false)}>
                  Company
                </Link>
              </div>
            )}
          </div>
          <Link to="/chat" onClick={() => setIsOpen(false)}>
            Chat
          </Link>
        </div>
      )}
    </div>
  );
};

export default DotsVertical;
