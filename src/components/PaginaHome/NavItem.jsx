import React from "react";

const NavItem = ({ text, href }) => {
  return (
    <a href={href} className="nav-item">
      {text}
    </a>
  );
};

export default NavItem;
