import React from "react";
import img0 from "../assets/logo.jpg";
import img1 from "../assets/imageslider-4.jpg";
import img3 from "../assets/imggal1.jpg";
import "../styles/LandingGallery.css";

const LandingGallery = () => {
  return (
    <div className="cont">
      <div class="banner1">
        <img src={img0} alt="" />
        <div class="text-box text-box1">
          <h1 style={{ color: "#FA6800" }}>
            <strong> Mauli Unisex Salon n Spa </strong>
          </h1>
          <span></span>
          {/* <p>
            "Hair Bonding: A Comprehensive Guide to Natural-Looking Hair
            Extensions"
          </p> */}
        </div>
      </div>
      <div class="banner2">
        <img src={img1} alt="" />
        <div class="text-box text-box2">
          <h1 style={{ color: "#FA6800" }}>
            <strong>"Hair Bonding"</strong>
          </h1>
          <span></span>
          <p>
            "Hair Bonding: A Comprehensive Guide to Natural-Looking Hair
            Extensions"
          </p>
        </div>
      </div>
      <div class="banner3">
        <img
          src={
            "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
        <div class="text-box text-box3">
          <h1 style={{ color: "#FA6800" }}>
            <strong>"Bridal Makeup"</strong>
          </h1>
          <span></span>
          <p>
            "Bridal Makeup: Unveiling Timeless Elegance for Your Special Day"
          </p>
        </div>
      </div>
      <div class="banner4">
        <img src={img3} alt="" />
        <div class="text-box text-box4">
          <h1 style={{ color: "#FA6800" }}>
            <strong>"Hair Styling"</strong>
          </h1>
          <span></span>
          <p>"Hair Styling: Unlocking the Artistry of Captivating Tresses"</p>
        </div>
      </div>
      {/* <div class="banner4">
        <img
          src={
            "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
        />
        <div class="text-box text-box4">
          <h1 style={{ color: "#FA6800" }}>
            <strong>"Radiant Skin Care"</strong>
          </h1>
          <span></span>
          <p>"Radiant Skin Care: Nurturing Your Natural Beauty"</p>
        </div>
      </div> */}
    </div>
  );
};

export default LandingGallery;
