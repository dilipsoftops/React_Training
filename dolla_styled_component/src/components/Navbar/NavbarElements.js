import { styled } from "@material-ui/core";
import { Link, Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled("nav")({
  background: "#000",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1rem",
  position: "sticky",
  top: "0",
  zIndex: "10",
  "@media(max-width:960px)": {
    transition: "0.8s all ease",
  },
});

export const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
  zIndex: "1",
  width: "100%",
  padding: " 0 24px",
  maxWidth: "1100px",
});

export const NavLogo = styled("LinkR")({
  color: "#fff",
  justifySelf: "flex-start",
  cursor: "pointer",
  fontSize: "1.5rem",
  display: "flex",
  alignItems: "center",
  marginLeft: "24px",
  fontWeight: "bold",
  textDecoration: "none",
});

export const MobileIcon = styled("div")({
  display: "none",
  "@media(max-width:768px)": {
    display: "block",
    position: "absolute",
    top: "0",
    right: "0",
    transform: "translate(-100%,60%)",
    fontSize: "1.8rem",
    cursor: "pointer",
    color: "#fff",
  },
});

export const NavMenu = styled("ul")({
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  textAlign: "center",
  marginRight: "-22px",
  "@media(max-width:768px)": {
    display: "none",
  },
});

export const NavItem = styled("li")({
  height: "80px",
});

export const NavLinks = styled("LinkS")({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  height: "100%",
  cursor: "pointer",
  "&:active": {
    borderBottom: "3px solid #01bf71",
  },
});

export const NavBtn = styled("nav")({
  display: "flex",
  alignItems: "center",
  "@media(max-width:768px)": {
    display: "none",
  },
});

export const NavBtnLink = styled("LinkR")({
  borderRadius: "50px",
  backgroundColor: "#01bf71",
  whiteSpace: "nowrap",
  padding: "10px 22px",
  color: "#010606",
  fontSize: "16px",
  outline: "none",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
    color: "#10606",
  },
});
