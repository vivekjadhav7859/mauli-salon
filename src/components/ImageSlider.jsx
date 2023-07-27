import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import img1 from "../assets/imageslider-1.jpg";
import img2 from "../assets/imageslider-2.jpg";
import img3 from "../assets/imageslider-3.jpg";
import img4 from "../assets/imageslider-4.jpg";

const SliderContainer = styled.div`
  max-width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const ImageSlider = () => {
  const images = [
    "https://images.pexels.com/photos/417144/pexels-photo-417144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/17058050/pexels-photo-17058050/free-photo-of-wood-light-sea-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6010/sea-beach-holiday-vacation.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // img1,
    // img2,
    // img3,
    // img4,
  ];

  return (
    <SliderContainer>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={1000}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Carousel>
    </SliderContainer>
  );
};

export default ImageSlider;
