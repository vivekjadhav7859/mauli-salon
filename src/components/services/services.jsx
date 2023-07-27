import "../../styles/services/services.css";
import { motion } from "framer-motion";
import { Button, ButtonContainer } from "./../../styles/Home.style";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const MoveTOHer = () => {
    navigate("/services/her");
  };

  const MoveTOHim = () => {
    navigate("/services/him");
  };

  return (
    <>
      <motion.div
        className="back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="serviceshead">
          <h1>SERVICES</h1>
        </div>
        <div className=" cardhead">
          <h2> What Our Magicians Can Do For You</h2>
        </div>
        <div className="cardhead">
          <p>
            Experience the enchantment of Mauli Unisex Salon N Spa's magicians.
            From captivating haircuts to mesmerizing hair colors, our talented
            team will transform your look. Indulge in magical manicures and
            soothing spa treatments, and let our magicians work their charm for
            an unforgettable beauty and wellness experience.
          </p>
        </div>

        <ButtonContainer className="btncont">
          <Button onClick={MoveTOHer} className="btn">
            SERVICES FOR HER
          </Button>
          <Button onClick={MoveTOHim} className="btn">
            SERVICES FOR HIM
          </Button>
        </ButtonContainer>
      </motion.div>
    </>
  );
};

export default Services;
