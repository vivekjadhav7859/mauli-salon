import React from "react";
import img1 from "../../assets/skin.avif";
import img2 from "../../assets/hairservices.jpg";
import img3 from "../../assets/bride.jpg";
import img4 from "../../assets/body1.jpg";
import "./../../styles/services/services.css";
import Services from "../services/services";
const Forher = () => {
  return (
    <div className="forher">
      <Services />
      <div>
        <h3 className="herhead">SERVICES FOR HER</h3>
      </div>
      <div className="imgart">
        <div className="row">
          <div className="column1">
            <div class="card">
              <img src={img2} alt="..." style={{ height: "100%" }} />
              <div>
                <h5>HAIR</h5>
                <p style={{ textTransform: "lowercase" }}>
                  Having a stunning hairstyle can give you a confidence boost
                  that you always wanted.Experience the ultimate hair
                  rejuvenation with our luxurious hair treatments at Mauli Salon
                  n Spa. Our skilled stylists use nourishing products and
                  specialized techniques to repair and hydrate.
                </p>
                <a href="/services/hair" class="btn btn-primary">
                  Know More...
                </a>
              </div>
            </div>
            <div class="card">
              <img src={img3} alt="..." style={{ height: "100%" }} />
              <div class="card-body">
                <h5>MAKEUP</h5>
                <p style={{ textTransform: "lowercase" }}>
                  Enhancing your appearance, boosting your confidence, and
                  expressing your creativity. It's important to remember that
                  makeup should be used as a complement to your natural beauty.
                </p>
                <a href="/services/makeup" class="btn btn-primary">
                  Know More...
                </a>
              </div>
            </div>
            <div class="card">
              <img src={img1} alt="..." style={{ height: "100%" }} />
              <div class="card-body">
                <h5>SKIN</h5>
                <p style={{ textTransform: "lowercase" }}>
                  At Mauli Salon n Spa, we specialize in transforming your skin
                  into a radiant and healthy complexion. Our range of skincare
                  treatments includes facials, peels, and personalized skincare.
                </p>
                <a href="/services/skin" class="btn btn-primary">
                  Know More...
                </a>
              </div>
            </div>
            <div class="card">
              <img src={img4} alt="..." style={{ height: "100%" }} />
              <div class="card-body">
                <h5 class="card-title">BODY</h5>
                <p style={{ textTransform: "lowercase" }}>
                  At Mauli Salon n Spa, we offer a range of body treatments
                  designed to relax, revive, and replenish your body. From
                  soothing massages to invigorating body scrubs all at one place
                  only here
                </p>
                <a href="/services/body" class="btn btn-primary">
                  Know More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forher;
