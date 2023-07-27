import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackGround,
  IntroContainer,
  Text,
  MobileText,
  TabletText,
  Introduction,
  Image,
  ImageGallery,
  ImgCart,
  Row,
  Column,
  Img,
  Portfolio,
  Container,
  SubTitle,
  WorkList,
  Work,
  LayerImage,
  Layer,
  LayerHeading,
  LayerContent,
  Button,
  ButtonContainer,
  ImageSliderContainer,
  ImageSlider,
  WhyUsContainer,
  WhyUsContent,
  WhyUsHeading,
  SpecialitiesContainer,
  SpecialitiesContent,
  SpecialitiesHeading,
  AnotherSubTitle,
  AnotherContainer,
} from "../styles/Home.style";
import bridalmakeup from "../assets/bridalmakeup.jpg";
import imageg1 from "../assets/imggal1.jpg";
import imageg2 from "../assets/imggal2.jpg";
import imageg3 from "../assets/imggal3.jpg";
import imageg4 from "../assets/imggal4.jpg";
import imageg5 from "../assets/imggal5.jpg";
import imageg6 from "../assets/imggal6.jpg";
import imageg7 from "../assets/imggal7.jpg";
import imageg8 from "../assets/imggal8.jpg";
import imageg9 from "../assets/imggal9.jpg";
import hairbonding from "../assets/hairbonding.jpg";
import hairstyling from "../assets/hairstyling.jpg";
import Footer from "../components/Footer";
import Services_Home from "./Services_Home";
import { motion } from "framer-motion";
import LandingGallery from "./LandingGallery";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    navigate("/services");
  };

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* <BackGround /> */}
        <div
          className="landingContainer"
          // style={{
          //   height: "100vh",
          //   backgroundColor: "black",
          //   marginBottom: "80px",
          // }}
        >
          <LandingGallery />
        </div>
        <IntroContainer>
          <Introduction>
            {isMobile && (
              <MobileText>
                <p>Elevate Your Beauty & Wellness Journey </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </MobileText>
            )}
            {isTablet && (
              <TabletText>
                <p>
                  {" "}
                  Elevate Your Beauty <br /> & Wellness Journey{" "}
                </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </TabletText>
            )}
            {!isMobile && !isTablet && (
              <Text>
                <p>
                  Elevate Your Beauty <br /> & Wellness Journey{" "}
                </p>
                <h4> at "Mauli Unisex Salon n Spa...!!!"</h4>
              </Text>
            )}
            <ButtonContainer>
              <Button onClick={handleContactClick}>Contact Us</Button>
              <Button onClick={handleServicesClick}>Services</Button>
            </ButtonContainer>
          </Introduction>
          <ImageGallery>
            <ImgCart>
              <Row>
                <Column>
                  <Img src={imageg1} />
                  <Img src={imageg2} />
                  <Img src={imageg7} />
                </Column>
                <Column id="mid-col">
                  <Img src={imageg3} />
                  <Img src={imageg4} />
                  <Img src={imageg8} />
                </Column>
                <Column>
                  <Img src={imageg5} />
                  <Img src={imageg6} />
                  <Img src={imageg9} />
                </Column>
              </Row>
            </ImgCart>
          </ImageGallery>
        </IntroContainer>
        <Services_Home />
        <Portfolio>
          <Container>
            <SubTitle>Our Specialities</SubTitle>
            <WorkList>
              <Work>
                <LayerImage src={bridalmakeup} />
                <Layer>
                  <LayerHeading>Bridal Makeup</LayerHeading>
                  <LayerContent>
                    Experience exceptional bridal makeup at Mauli Unisex Salon n
                    Spa. Our skilled team specializes in creating personalized
                    looks that enhance your natural beauty. Using high-quality
                    products and the latest techniques, we ensure you look
                    stunning on your special day. Trust us for flawless
                    complexion, captivating eyes, and the perfect finishing
                    touches.
                  </LayerContent>
                </Layer>
              </Work>
              <Work>
                <LayerImage src={hairbonding} />
                <Layer>
                  <LayerHeading>Hair Bonding</LayerHeading>
                  <LayerContent>
                    Achieve beautiful, voluminous hair with hair bonding at
                    Mauli Unisex Salon n Spa. Our expert stylists use
                    high-quality bonding materials to seamlessly blend and
                    attach hair extensions. Get instant length, thickness, and a
                    natural-looking finish that will leave you with stunning,
                    head-turning hair.
                  </LayerContent>
                </Layer>
              </Work>
              <Work>
                <LayerImage src={hairstyling} />
                <Layer id="layer">
                  <LayerHeading>Skin/Hair Styling</LayerHeading>
                  <LayerContent>
                    At Mauli Unisex Salon n Spa, we offer top-notch skin and
                    hair styling services. Our skilled professionals use
                    advanced techniques and premium products to create flawless
                    skin and trendy hairstyles. Whether you desire a radiant
                    complexion or a stunning hair makeover, trust us to enhance
                    your natural beauty with our expertise.
                  </LayerContent>
                </Layer>
              </Work>
            </WorkList>
            <WhyUsContainer>
              <WhyUsHeading>
                <strong>Why Us?</strong>
              </WhyUsHeading>
              <WhyUsContent>
                Welcome to <br />
                <b style={{ color: "#FF033E" }}>"Mauli Unisex Salon n Spa"</b>
                , where beauty meets bliss! Our commitment is to make you feel
                rejuvenated and confident, inside and out. With a team of
                skilled professionals, state-of-the-art facilities, and a
                relaxing ambiance, we offer an unparalleled experience that
                leaves you feeling pampered and refreshed.
                <br />
                <br /> <h4 style={{ color: "#FF033E" }}>Why choose us?</h4>
                <br /> <b style={{ color: "orange" }}>
                  1. Expert Stylists:{" "}
                </b>{" "}
                Our talented stylists are well-versed in the latest trends and
                techniques, ensuring you get the perfect look that complements
                your unique personality.
                <br />
                <b style={{ color: "orange" }}>
                  2. Luxurious Treatments:{" "}
                </b>{" "}
                Indulge in our array of luxurious spa treatments designed to
                melt away stress and revitalize your body and mind.
                <br /> <b style={{ color: "orange" }}>
                  3. Premium Products:{" "}
                </b>{" "}
                We use only top-quality products that are gentle on your skin
                and hair, leaving you with long-lasting results. <br />{" "}
                <b style={{ color: "orange" }}>4. Personalized Service: </b>{" "}
                Each visit is tailored to your preferences, providing
                personalized attention and a warm, friendly atmosphere.
                <br /> <b style={{ color: "orange" }}>
                  5. Affordable Luxury:{" "}
                </b>{" "}
                Experience the epitome of luxury without breaking the bank. At
                Mauli Unisex Salon n Spa, we believe in enhancing your natural
                beauty and providing an escape from the hustle and bustle of
                everyday life. Treat yourself to the ultimate beauty and
                relaxation experience – you deserve it!
              </WhyUsContent>
            </WhyUsContainer>
          </Container>
        </Portfolio>

        <AnotherSubTitle>Elevate Your Style</AnotherSubTitle>
        <SpecialitiesContainer>
          <SpecialitiesHeading>
            <strong>
              Hair Bonding
              <br /> First Time In Ichalkaranji
            </strong>
          </SpecialitiesHeading>
          <SpecialitiesContent>
            <b>1. Professional Expertise:</b> Our salon in the area has a team
            of highly skilled and experienced professionals who specialize in
            hair bonding treatments. They have extensive knowledge and expertise
            in the latest techniques and trends.
            <br /> <b>2. Customized Solutions:</b> We offer personalized
            consultations to understand your specific hair goals and concerns.
            Our experts will recommend and tailor the hair bonding treatment to
            meet your individual needs, whether it's adding length, volume, or
            addressing hair thinning. <br />
            <b>3. High-Quality Products:</b> We use premium-quality hair bonding
            products that are safe and reliable. These products ensure strong
            and long-lasting bonds, providing natural-looking results that blend
            seamlessly with your existing hair.
            <br />
            <b>4. Natural Appearance:</b> Our skilled professionals are adept at
            achieving a natural appearance with hair bonding. They carefully
            select and match the hair extensions or pieces to your hair color,
            texture, and style, ensuring a seamless blend. <br />
            <b>5. Long-Lasting Results:</b> Our hair bonding treatments are
            designed to provide long-lasting results. With proper care and
            maintenance, the bonded hair extensions or pieces can last for
            several months, allowing you to enjoy your desired hairstyle for an
            extended period.
          </SpecialitiesContent>
        </SpecialitiesContainer>

        <ImageSliderContainer>
          <ImageSlider />
        </ImageSliderContainer>
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
