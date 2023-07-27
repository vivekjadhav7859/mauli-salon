import React from "react";
// import "../styles/Footer.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { color } from "framer-motion";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubContainer>
          <FooterRow>
            <FooterColumn>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FooterLink href="/about">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/services">Services</FooterLink>
                </li>
                <li>
                  <FooterLink href="/products">Products</FooterLink>
                </li>
                <li>
                  <FooterLink href="/contact">Contact Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="/gallery">Gallery</FooterLink>
                </li>
                <li>
                  <NavLink style={{}} to="/login">
                    Admin Login
                  </NavLink>
                </li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h4>Get Help</h4>
              <ul>
                <li>
                  <FooterLink href="#">FAQ</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Help</FooterLink>
                </li>
              </ul>
            </FooterColumn>
            <FooterColumn>
              <h4>About Mauli Salon</h4>
              Indulge in luxury at Mauli Unisex Salon n Spa. With our skilled
              professionals, we offer exceptional hair, skin, and makeup
              services. From rejuvenating facials to trendy haircuts, experience
              the pinnacle of beauty and relaxation. Discover the difference at
              Mauli Unisex Salon n Spa, where your satisfaction is our priority.
            </FooterColumn>
            <FooterColumn>
              <h4>follow us</h4>
              <SocialLinks>
                <a href="www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="www.linkedin.com">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </SocialLinks>
            </FooterColumn>
          </FooterRow>
          <p
            style={{ textAlign: "center", marginTop: "20px", color: "silver" }}
          >
            Copyright © 2023 Mauli Salon n Spa, All rights reserved Website
            Design And Development - freelancers pvt ltd
          </p>
        </FooterSubContainer>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  background: #000000;
  padding: 30px 0;
`;
const FooterSubContainer = styled.div`
  max-width: 1170px;
  margin: auto;
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  width: 25%;
  padding: 0 15px;

  /* text-align: justify; */
  color: silver;
  h4 {
    font-size: 18px;
    color: var(--primary-color);
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }
  h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #ff007f;
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
  ul {
    list-style: none;
    li:not(:last-child) {
      margin-bottom: 10px;
      /* a {
        font-size: 16px;
        text-transform: capitalize;
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 300;
        color: #000000;
        display: block;
        transition: all 0.3s ease;
      }
      a:hover {
        color: var(--primary-color);
        padding-left: 8px;
      } */
    }
  }

  @media (max-width: 767px) {
    width: 50%;
    margin-bottom: 10px;
  }
  @media (max-width: 574px) {
    width: 100%;
  }
`;
const SocialLinks = styled.div`
  a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: #ff007f;
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #000000;
    transition: all 0.5s ease;
  }
  a:hover {
    color: var(--primary-color);
    background: linear-gradient(#ff007f, #ff2e96);
  }
`;
const FooterLink = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: silver;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    color: var(--primary-color);
    padding-left: 8px;
  }
`;

export default Footer;
