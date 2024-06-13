import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";

const HeaderHome = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveSubmenu(null); // Cerrar submenú al cerrar el menú principal
    }
  };

  const handleSubmenuClick = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div className="header-home">
      <div className="header-inicio-principal">
        <div className="header-left">
          <h1>Hola, {username}</h1>
          <p className="mensaje-inicial">
            Es hora de poner a prueba tus límites
          </p>
        </div>
        <div className="header-right">
          <div className="icon-container">
            <Link to="/notifications">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#fd0054"
                className="icon icon-tabler icons-tabler-filled icon-tabler-bell"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z" />
                <path d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z" />
              </svg>
            </Link>
            <Link to="/perfil">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#fd0054"
                className="icon icon-tabler icons-tabler-filled icon-tabler-user"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
              </svg>
            </Link>
          </div>
          <div className="dots-vertical">
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
              <div className="dropdown-menu">
                <div>
                  <button onClick={() => handleSubmenuClick("home")}>
                    Home
                  </button>
                  {activeSubmenu === "home" && (
                    <div className="submenu">
                      <Link
                        to="/home/overview"
                        onClick={() => setIsOpen(false)}
                      >
                        Overview
                      </Link>
                      <Link to="/home/details" onClick={() => setIsOpen(false)}>
                        Details
                      </Link>
                    </div>
                  )}
                </div>
                <div>
                  <button onClick={() => handleSubmenuClick("about")}>
                    About
                  </button>
                  {activeSubmenu === "about" && (
                    <div className="submenu">
                      <Link to="/about/team" onClick={() => setIsOpen(false)}>
                        Team
                      </Link>
                      <Link
                        to="/about/company"
                        onClick={() => setIsOpen(false)}
                      >
                        Company
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/chat"
                  className="chat-link"
                  onClick={() => setIsOpen(false)}
                >
                  Chat
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
