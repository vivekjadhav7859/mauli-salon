import React, { useState } from "react";
import "../styles/About.style.js";
import Img from "../assets/about.jpg";
import { motion } from "framer-motion";

import {
  AboutContainer,
  AboutUs,
  Main,
  Image,
  AllText,
  Button,
  ButtonContainer,
} from "../styles/About.style.js";
import Footer from "./Footer.jsx";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import OurTeam from "./OurTeam.jsx";
const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const handleShowMore = () => {
    setShowContent(!showContent);
  };
  const navigate = useNavigate();
  const handleContactUs = () => {
    navigate("/contact");
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutContainer>
          <AboutUs>
            <Main>
              <Image src={Img} alt="" />
              <AllText>
                <h4>About Us : </h4>
                <h1>Here is Our History of Mauli Salon n Spa</h1>
                <p>
                  Mauli Unisex Salon n Spa has a rich history that spans over a
                  decade. Established with a vision to redefine beauty and
                  wellness, our salon has become a trusted name in the industry.
                  Since our inception, we have been committed to providing
                  exceptional services and creating an atmosphere of relaxation
                  and rejuvenation. Over the years, we have continuously
                  evolved, staying abreast of the latest trends, techniques, and
                  technologies. Our team of experienced professionals has honed
                  their skills to ensure each client receives personalized care
                  and achieves their desired look. At Mauli Unisex Salon n Spa,
                  we are dedicated to enhancing beauty, boosting confidence, and
                  delivering an unforgettable experience.
                </p>
                {showContent && (
                  <p>
                    Established with a vision of creating a haven of beauty and
                    wellness, Mauli Unisex Salon n Spa has a rich history of
                    excellence. Founded by passionate individuals with extensive
                    industry experience, we have been serving clients with
                    dedication since our inception.
                  </p>
                )}
                <ButtonContainer>
                  <Button onClick={handleContactUs}>Contact Us</Button>
                  {/* <Button onClick={handleShowMore}>Show More</Button> */}
                </ButtonContainer>
              </AllText>
            </Main>
          </AboutUs>
        </AboutContainer>
        <OurTeam />
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
