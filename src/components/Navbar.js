import React, { useState } from "react";
import logo from "../images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="navbar">
      <div className="container">
        <img className="logo" src={logo} alt="enduro drift bosnien" />

        {menuClicked ? (
          <FiX size={25} className={"navbar__menu"} onClick={toggleMenuClick} />
        ) : (
          <FiMenu
            size={25}
            className={"navbar__menu"}
            onClick={toggleMenuClick}
          />
        )}
        <ul
          className={
            menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
          }
        >
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="features.html">
              OFFER
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              APPLY
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              GALLERY
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              TOUR GUIDE
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              GUESTBOOK
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              CONTACT
            </a>
          </li>
          <li className="navbar__item">
            <a className="navbar__link" href="docs.html">
              TERMS 2023
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
