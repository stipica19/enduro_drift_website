import React, { useEffect, useState } from "react";
import logo from "../images/log.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import deFlag from "../images/flags/4x3/de.svg";
import gbFlag from "../images/flags/4x3/gb.svg";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [display, setDisplay] = useState(false);

  const changeBackground = () => {
    //console.log(window.scrollY);
    // console.log(window.innerWidth);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);
  });

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="container">
        <img
          className={navbar ? "logo active" : "logo"}
          src={logo}
          alt="enduro drift bosnien"
        />

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
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/">
              HOME
            </Link>
          </li>

          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/apply">
              APPLY
            </Link>
          </li>
          <li className="navbar__item">
            <span className="navbar__link" onClick={() => setDisplay(!display)}>
              GALLERY
            </span>
            {display && (
              <>
                {" "}
                <ul>
                  <li>
                    <Link
                      className="navbar__link"
                      to="/gallery"
                      onClick={toggleMenuClick}
                    >
                      PHOTO
                    </Link>
                  </li>
                  <li className="navbar__item">
                    <Link
                      className="navbar__link"
                      to="/gallery"
                      onClick={toggleMenuClick}
                    >
                      VIDEO
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </li>

          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/tour-guide">
              TOUR GUIDE
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/guest-book">
              GUEST BOOK
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <Link className="navbar__link" to="/dates-2023">
              DATES 2023
            </Link>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <a className="navbar__link " href="docs.html">
              <img src={deFlag} alt="deFlag" className="flags" />
            </a>
          </li>
          <li className="navbar__item" onClick={toggleMenuClick}>
            <a className="navbar__link " href="docs.html">
              <img src={gbFlag} alt="deFlag" className="flags" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
