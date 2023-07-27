import React from "react";
import WSPGallery from "./WSPGallery";
import Footer from "./Footer";
import { motion } from "framer-motion";
import img1 from "../assets/gallery/gallery1.jpg";
import img2 from "../assets/gallery/gallery2.jpg";
import img3 from "../assets/gallery/gallery3.jpg";
import img4 from "../assets/gallery/gallery4.jpg";
import img5 from "../assets/gallery/gallery5.jpg";
import img6 from "../assets/gallery/gallery6.jpg";
import img7 from "../assets/gallery/gallery7.jpg";
import img8 from "../assets/gallery/gallery8.jpg";
import img9 from "../assets/gallery/gallery9.jpg";
import img10 from "../assets/gallery/gallery10.jpg";
import img11 from "../assets/gallery/gallery11.jpg";
import img12 from "../assets/gallery/gallery12.jpg";
import img13 from "../assets/gallery/gallery13.jpg";
import img14 from "../assets/gallery/gallery14.jpg";
import img15 from "../assets/gallery/gallery15.jpg";
import img16 from "../assets/gallery/gallery16.jpg";
import img17 from "../assets/gallery/gallery17.jpg";
import img18 from "../assets/gallery/gallery18.jpg";

const galleryImages1 = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
];

const galleryImages2 = [
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
  {
    img: img10,
  },
  {
    img: img11,
  },
  {
    img: img12,
  },
];
const galleryImages3 = [
  {
    img: img13,
  },
  {
    img: img14,
  },
  {
    img: img15,
  },
  {
    img: img16,
  },
  {
    img: img17,
  },
  {
    img: img18,
  },
];

export default function Gallery() {
  return (
    <>
      <div className="title"></div>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <br />
        <div style={{ marginTop: "100px" }}>
          <strong>
            <h1 style={{ color: "#D10068" }}>
              <strong>ELEVATE Your style with Us</strong>
            </h1>
          </strong>
        </div>
        <div style={{ marginTop: "100px" }}>
          <strong>
            <h1 style={{ color: "#FA6800" }}>
              <strong>Our Top Pics</strong>
            </h1>
          </strong>
        </div>

        <WSPGallery galleryImages={galleryImages1} />
        <div style={{ marginTop: "100px" }}>
          <strong>
            <h1 style={{ color: "#FA6800" }}>
              <strong>Our Work</strong>
            </h1>
          </strong>
        </div>

        <WSPGallery galleryImages={galleryImages2} />
        <div style={{ marginTop: "100px" }}>
          <strong>
            <h1 style={{ color: "#FA6800" }}>
              <strong>Our Happy Clients</strong>
            </h1>
          </strong>
        </div>

        <WSPGallery galleryImages={galleryImages3} />
      </motion.div>
      <Footer />
    </>
  );
}
