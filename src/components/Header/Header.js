import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import mainLogo from "../../data/assests/mainLogo.png";

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
      <Logo to="/">
          <img src={mainLogo} alt="Main Logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About
          </NavLink>
          <NavLink className="menu-item" to="contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://drive.google.com/file/d/14yYeI_Yb0v09MfWNvUAFpGGhWd_sn33U/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;


