import React from "react";
import { useRef } from "react";
import img1 from "../../assets/makeup1.jpg";
import img2 from "../../assets/makeup2.jpg";
import img3 from "../../assets/makeup3.jpg";
import img4 from "../../assets/makeup4.jpg";
import img5 from "../../assets/makeup5.jpg";
import img6 from "../../assets/makeup6.jpeg";
import img7 from "../../assets/makeup7.jpg";
import "../../styles/services/makeup.css";
const Makeup = () => {
  // let [scrollcard, setscrollcard] = useState(0);
  const containerRef = useRef();

  // const handlescrollLeft = () => {
  //   containerRef.current.scrollLeft -= 500;
  // };

  // const handlescrollRight = () => {
  //   containerRef.current.scrollLeft += 500;
  // };
  return (
    <>
      <div className="makeuphead">
        <div className="makeupmain">
          <h1 className="heading">
            MAKEUP <br />
            SERVICES....!
          </h1>
        </div>

        <h2>Make your face the center of attraction.....</h2>
        <div className="card-slider-conatiner sec">
          <div className="main-slider-contianer">
            <div
              className="slider"
              // style={{ scrollLeft: scrollcard }}
              ref={containerRef}
            >
              {
                <>
                  <div className="slider-card">
                    <div>
                      <img
                        className="slider-card-image cardimg"
                        src={img5}
                        alt=""
                      />
                    </div>
                    <h5 className="tag"> Your beauty is priceless. </h5>
                  </div>

                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img6}
                      alt=""
                    />

                    <h5 className="tag">Makes you love yourself. </h5>
                  </div>
                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img3}
                      alt=""
                    />
                    <h5 className="tag"> Let your beauty speak for you.</h5>
                  </div>
                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img4}
                      alt=""
                    />
                    <h5 className="tag"> Bringing out the best in you. </h5>
                  </div>
                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img1}
                      alt=""
                    />
                    <h5 className="tag"> Say yes to looking beautiful. </h5>
                  </div>
                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img2}
                      alt=""
                    />
                    <h5 className="tag"> The glam every woman deserves. </h5>
                  </div>
                  <div className="slider-card">
                    <img
                      className="slider-card-image cardimg"
                      src={img7}
                      alt=""
                    />
                    <h5 className="tag"> Perfect skin for the perfect you. </h5>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Makeup;
