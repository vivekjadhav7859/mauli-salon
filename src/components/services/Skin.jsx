import React from "react";
import "../../styles/services/Skin.css";
const Skin = () => {
  return (
    <div className="skin">
      <div className="skinhead">
        <h1 className="heading">SKIN SERVICES....!</h1>
      </div>

      <div className="hair1">
        <div className="imgs cleanup"></div>
        <div className="desc">
          <h3>Face Clean Up</h3>
          <p>
            Pamper your skin with our rejuvenating face cleanup service at Mauli
            Salon n Spa. Our skilled estheticians will cleanse, exfoliate, and
            nourish your skin, removing impurities and revealing a radiant
            complexion. Relax and let us revitalize your face with our gentle
            yet effective treatments for a fresh and glowing appearance.
          </p>
        </div>
      </div>

      <div className="hair2">
        <div className="desc">
          <h3>Facial</h3>
          <p>
            Experience the transformative power of fascial treatments at Mauli
            Salon n Spa. Our skilled therapists employ specialized techniques to
            release tension, improve circulation, and promote deep relaxation.
            Whether you seek facial rejuvenation or relief from muscular
            discomfort, our customized fascial therapies will leave you feeling
            revitalized and balanced.
          </p>
        </div>
        <div className="imgs facial"></div>
      </div>

      <div className="hair1">
        <div className="imgs threading"></div>
        <div className="desc">
          <h3>Waxing And Threading</h3>
          <p>
            Achieve smooth, flawless skin with our professional waxing and
            threading services at Mauli Salon n Spa. Our experienced
            estheticians use gentle techniques to remove unwanted hair, ensuring
            minimal discomfort and long-lasting results. Whether it's brows,
            upper lip, or full-body waxing, trust us to deliver impeccable
            grooming with a personalized touch.
          </p>
        </div>
      </div>
      <div className="blank"></div>
    </div>
  );
};

export default Skin;
