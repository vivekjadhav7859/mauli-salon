import React from "react";
import "../../styles/services/hair.css";
const Hair = () => {
  return (
    <>
      <div className="headmain">
        <div className="hairhead">
          <h1 className="heading">HAIR SERVICES....!</h1>
        </div>
        <div className="hair1">
          <div className="img imgcut"></div>
          <div className="desc">
            <h3>Hair Cuts & Styling</h3>
            <p>
              Accentuate your best features with the perfect mane! Our
              hairstylists are skilled in adding movement to your hair and
              creating a look that defines your face and adds volume. At Mauli,
              you can trust our hairstylists to give you the latest hairstyle,
              while keeping in mind your preferences. New hairstyles come with a
              relaxing hair wash and conditioning, giving you a natural shine.
            </p>
            <p>Meeting the new you is only a haircut away!</p>
          </div>
        </div>

        <div className="hair2">
          <div className="desc">
            <h3>Hair Coloring & Highlights</h3>
            <p>Reinvent your whole look with a dash of colour!</p>
            <p>
              Our hair experts can transform your entire look with just a few
              streaks of our ammonia-free hair colour!
            </p>
            <p>
              Hair color gives you a new and innovative look.Try out some cool
              looks with us.{" "}
            </p>
          </div>
          <div className="imgcolor img"></div>
        </div>

        <div className="hair1">
          <div className="img keratin"></div>
          <div className="desc">
            <h3>Hair Straightening & Keratin</h3>
            <p>
              Mauli Solon services gives you the best hair restoration therapy
              by making your hair more robust and less prone to breakage
              resulting in voluminous, thicker-looking hair!
            </p>
            <p>Give your dull, brittle hair a new life in just a snap!</p>
          </div>
        </div>

        <div className="hair2">
          <div className="desc">
            <h3>Hair Spa</h3>
            <p>
              Pampering yourself and your hair with a good hair spa is a must!
              we pamper every strand of your hair thanks to our hair care
              professionals’ gifted, gentle hands. Our hair spa services are a
              healthy indulgence that exfoliates your hair, stimulates your
              scalp and promotes hair growth. A hair spa treatment is the best
              solution for dry, frizzy hair. It also relaxes your body and
              relieves stress.
            </p>
            <p>Get that pampering head-to-toe!</p>
          </div>
          <div className="img spa"></div>
        </div>
        <div className="blank"></div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Hair;
