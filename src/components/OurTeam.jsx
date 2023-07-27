import React from "react";
import "../styles/OurTeam.css";
import pf2 from "../assets/owner.png";
import pf1 from "../assets/cofounder.png";
import pf3 from "../assets/beautician.png";
const OurTeam = () => {
  return (
    <section>
      <div class="row">
        <h1>Our Key Members</h1>
      </div>
      <div class="row" style={{ padding: "2em 1em", textAlign: "center" }}>
        {/* <!-- Column 1--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf2} />
            </div>
            <h3>Mukund Jadhav</h3>
            <p>Founder / CEO</p>
            <div className="info">
              Mukund Jadhav, the Founder and CEO of Mauli Unisex Salon n Spa, is
              a visionary leader with a passion for beauty and wellness. With
              years of Salon experience, our expertise and guidance have shaped
              Mauli Salon into a premier destination. Committed to excellence,
              we ensures exceptional services and a luxurious experience for
              every client.
            </div>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf1} />
            </div>
            <h3>Mrs. Jadhav</h3>
            <p>Co-founder / CTO</p>
            <div className="info">
              Mrs. Jadhav, the Co-founder and CTO of Mauli Unisex Salon n Spa,
              is a driving force behind the brand's success. With our astute
              business acumen and technological expertise, she has played a
              pivotal role in shaping the salon's operations and digital
              presence. Our dedication ensures a seamless experience for our
              valued clients.
            </div>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div class="column">
          <div class="card" style={{ margin: "auto" }}>
            <div class="img-container">
              <img src={pf3} />
            </div>
            <h3>Shreya jadhav</h3>
            <p>Beautician</p>
            <div className="info">
              Meet Shreya Jadhav, the creative and talented beautician at Mauli
              Salon. With a passion for beauty and a keen eye for detail, she
              delivers exceptional hair and makeup transformations, leaving
              clients feeling confident and radiant. Experience her expertise
              and personalized touch for a truly pampering salon experience like
              no other.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
