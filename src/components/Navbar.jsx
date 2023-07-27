import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navbar.style";
import LogoImg from "../assets/logo.jpg";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/" activeclassname="active">
              {" "}
              Home
            </NavbarLink>
            <NavbarLink to="/about" activeclassname="active">
              {" "}
              About Us
            </NavbarLink>
            <NavbarLink to="/services" activeclassname="active">
              {" "}
              Services
            </NavbarLink>
            <NavbarLink to="/contact" activeclassname="active">
              {" "}
              Contact Us
            </NavbarLink>
            <NavbarLink to="/products" activeclassname="active">
              {" "}
              Products
            </NavbarLink>
            <NavbarLink to="/gallery" activeclassname="active">
              {" "}
              Gallery
            </NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer >
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }} to="/" activeclassname="active">
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }}to="/about" activeclassname="active">
            {" "}
            About Us
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }} to="/services" activeclassname="active">
            {" "}
            Services
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }} to="/products" activeclassname="active">
            {" "}
            Products
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }} to="/gallery" activeclassname="active">
            {" "}
            Gallery
          </NavbarLinkExtended>
          <NavbarLinkExtended onClick={()=>{setExtendNavbar(false) }} to="/contact" activeclassname="active">
            {" "}
            Contact Us
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;
