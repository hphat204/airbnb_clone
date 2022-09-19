import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import globe from "../img/globe.png";
import hamburger from "../img/hamburger.png";
import user from "../img/user.png";
import redLogo from "../img/logored.png";
import blackGlobe from "../img/blackglobe.png";
import "../scss/Nav.css";
import searchIcon from "../img/search.png";
function Nav() {
  const [fixedNav, setFixedNav] = useState(false);
  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight >= 5) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className="Navcontainer"
      style={{
        position: fixedNav && "fixed",
        zIndex: fixedNav && "1",
        backgroundColor: fixedNav && "white",
        transition: fixedNav && " 0.2s ease-in",
      }}
    >
      <div className="logo">
        <img src={fixedNav ? redLogo : logo} width="100px" alt="logo" />
      </div>
      <form>
        <input type="text" placeholder="Bắt đầu tìm kiếm" style={{ boxShadow: "0 0 1px gray" }} />
        <button className="search-btn">
          <img src={searchIcon} width="20px" alt="search icon" />
        </button>
      </form>
      <div className="info-list">
        <div className="list-task">
          <button style={{ color: fixedNav && "black" }} className={fixedNav ? "hover-dark" : "hover-light"}>
            Trở thành chủ nhà
          </button>
          <img src={fixedNav ? blackGlobe : globe} width="15px" height="15px" alt="globe icon" />
        </div>
        <div className="user-info" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
          <img src={hamburger} width="15px" alt="hamburger menu" />
          <img src={user} width="25px" alt="user avatar" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
