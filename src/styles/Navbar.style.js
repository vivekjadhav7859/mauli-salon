import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: ${(props) => (props.extendNavbar ? "80vw" : "100%")};
  top: 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background: linear-gradient(#000000, #171717);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  @media (min-width: 1110px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  Logo {
    width: 60px;
    height: 60px;
  }
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-family: var(--font-family);
  text-decoration: none;
  margin: 15px;
  text-transform: uppercase;

  &.active {
    border-bottom: 3.5px solid #ff007f;
    transition: 0.5s;
    transform: scale(1.1);
  }

  @media (max-width: 1110px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-family: var(--font-family);
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  /* background-color: red; */
  margin: 10px;
  max-width: 180px;
  height: auto;
  border-radius: 30px;
  cursor: pointer;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: silver;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1110px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1110px) {
    display: none;
  }
`;
