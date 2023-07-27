import React from "react";
import "../styles/Services_Home.css";

const Services_Home = () => {
  return (
    <div>
      <div id="services">
        <div class="container">
          {/* <h1 class="sub-title">Our Exciting </h1> */}
          <div class="services-list">
            <div>
              <i class="fa-duotone fa-solid fa-tags"></i>
              <h5>
                <strong>EXCITING</strong>
                <br />
                Offers & Discounts
              </h5>
            </div>
            <div>
              <i class="fa-solid fa-users-line"></i>
              <h5>
                <strong>1000+</strong>
                <br />
                Happy Costumers
              </h5>
            </div>
            <div>
              <i class="fa-solid fa-calendar-check"></i>
              <h5>
                <strong>20+</strong>
                <br />
                Years of Experience
              </h5>
            </div>
            <div>
              <i class="fa-solid fa-temperature-arrow-down"></i>
              <h5>
                <strong>Full</strong>
                <br />
                Air Conditioner
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services_Home;
