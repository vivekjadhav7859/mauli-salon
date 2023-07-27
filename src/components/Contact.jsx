import React, { useState } from "react";
import contactImg from "../assets/contact.jpg";
import "../styles/Contact.css";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const bodyData = [[name, email, message, new Date().toISOString()]];
  const Uri = process.env.CONTACT_FORM_API;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/jamesbond007/google_sheets/AZthuDmxgUJjLtlV?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData((prevData) => ({
        ...prevData,
        name: "",
        email: "",
        message: "",
      }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <motion.div
        className="bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container py-5">
          <div className="row py-5 g-3">
            <div className="col-md-6 first_col ">
              <h1 className="text-center mt-3">Contact Us</h1>
              <form className="p-4 mt-5 form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-group">
                    Enter your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={name}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-group">
                    Email ID
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    value={email}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Enter your massage
                  </label>
                  <textarea
                    name="message"
                    type="textarea"
                    className="form-control"
                    rows="3"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="submit"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6 sec_col">
              <img src={contactImg} className="img-fluid" />
            </div>
          </div>
          <div className="row-last">
            <div className="row row-cols-1 row-cols-md-3  p-3 text-white">
              <div className="col">
                <h4>CALL US</h4>
                <p>
                  You can Call us on <br />
                  <h5>+91 9823425684</h5>
                  <h5>+91 9834097842</h5>
                </p>
              </div>
              <div className="col">
                <h4>LOCATION</h4>
                <p>
                  <a
                    href="https://www.google.com/maps/place/Mauli+unisex+salon+and+spa/@16.7069998,74.4432246,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc11d9355d4afc1:0x8bab075b7afc7835!8m2!3d16.7069998!4d74.4454133!16s%2Fg%2F11hn_jrsws?entry=ttu"
                    target="_blank"
                  >
                    {" "}
                    click here
                  </a>
                  <p>
                    to access the location of{" "}
                    <strong>Mauli Unisex Salon n Spa</strong>
                  </p>
                </p>
              </div>
              <div className="col">
                <h4>Email</h4>
                <p>
                  You can email us on
                  <br />
                  <h6>mukundjadhav@gmail.com</h6>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
