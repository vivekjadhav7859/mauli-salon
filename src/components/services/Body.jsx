import React from "react";
import "../../styles/services/Body.css";
const Body = () => {
  return (
    <div className="body">
      <div className="bodyhead">
        <h1 className="heading"> BODY SERVICES....!</h1>
      </div>

      <div className="hair1">
        <div className="imgs manicure"></div>
        <div className="desc">
          <h3>MANICURE</h3>
          <p>
            Indulge in the ultimate hand care experience with our luxurious
            manicure services at Mauli Salon n Spa. Our skilled technicians will
            pamper your nails, shape them to perfection, and provide meticulous
            cuticle care. Enjoy a soothing hand massage and choose from a wide
            selection of stunning nail colors for a flawless finish.
          </p>
        </div>
      </div>

      <div className="hair2">
        <div className="desc">
          <h3>PEDICURE</h3>
          <p>
            Relax and revitalize your feet with our indulgent pedicure services
            at Mauli Salon n Spa. Our expert technicians will soak, exfoliate,
            and moisturize your feet, while paying special attention to cuticles
            and calluses. Enjoy a soothing foot massage and choose from a range
            of trendy nail polish colors for the perfect finishing touch.
          </p>
        </div>
        <div className="imgs pedicure"></div>
      </div>

      <div className="hair1">
        <div className="imgs gspa"></div>
        <div className="desc">
          <h3>Body Spa</h3>
          <p>
            Escape to a world of tranquility and pampering with our exquisite
            body spa treatments at Mauli Salon n Spa. Our skilled therapists
            combine therapeutic techniques with luxurious products to melt away
            tension, improve circulation, and promote deep relaxation. Immerse
            yourself in pure bliss and emerge feeling renewed, refreshed, and
            rejuvenated.
          </p>
        </div>
      </div>
      <div className="blank"></div>
    </div>
  );
};

export default Body;
