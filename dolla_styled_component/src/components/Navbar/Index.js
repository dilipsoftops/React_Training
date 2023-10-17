import React, { Component } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollNav: true,
    };
  }

  toggleHome = () => {
    scroll.scrollToTop();
  };

  render() {
   
   return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <Nav scrollNav={this.state.scrollNav}>
            <NavbarContainer>
              <NavLogo to="/" onClick={this.toggleHome}>
                dolla
              </NavLogo>
              <MobileIcon onClick={this.props.toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="/about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    About
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    Discover
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    Services
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    Sign Up
                  </NavLinks>
                </NavItem>
              </NavMenu>
              <NavBtn>
                <NavBtnLink to="/signin" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Sign In
                </NavBtnLink>
              </NavBtn>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  }
}
