// pages/about.js
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const ContactUsPage = () => {
  //   const navigate = useNavigate();
  const router = useRouter();

  const data = {
    success: false,
    message: "Missing required fields!",
    phone: "+91 9876543210",
    email: "my@gmail.com",
    address: "Ahmedabad",
  };

  //storing Data data from input fields
  const [ContactUsData, setContactUsData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  //getting textdata from input fields
  const handleDataChange = (e) => {
    const { name, value } = e.target;

    //storing textdata from input fields
    setContactUsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //adding user details to MongoDB
  const handleDataSubmit = async (e) => {
    e.preventDefault();

    //sending API for storing user data to MongoDB

    const validEmail = ContactUsData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!validEmail) {
      toast.error("Please enter a valid email address", {
        autoClose: 1500,
      });
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/contactus",
        ContactUsData
      );
      toast.success("Data Added Succesfully!");

      // redirect("/");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Header></Header>

      <section className="w3l-contacts-9-main">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29919311035!2d72.41492724371444!3d23.02015808155443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712732741979!5m2!1sen!2sin"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
        <div className="contacts-9">
          <div className="wrapper">
            <div className="top-map">
              <div className="cont-details">
                <h4>Call Us or fill the form</h4>
                <div className="cont-top">
                  <div className="cont-left">
                    <span className="fa fa-mobile" />
                  </div>
                  <div className="cont-right">
                    <h6>
                      <a href="tel:+142 5897555">Phone</a>
                    </h6>
                    <p>{data.phone}</p>
                  </div>
                </div>
                <div className="cont-top">
                  <div className="cont-left">
                    <span className="fa fa-clock-o" />
                  </div>
                  <div className="cont-right">
                    <h6>Email</h6>
                    <p>{data.email}</p>
                  </div>
                </div>
                <div className="cont-top">
                  <div className="cont-left">
                    <span className="fa fa-map-marker" />
                  </div>
                  <div className="cont-right">
                    <h6>Address</h6>
                    <p>{data.address}</p>
                  </div>
                </div>
              </div>

              <div className="">
                <form onSubmit={handleDataSubmit}>
                  <div className="col-12 form-group mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={ContactUsData.name}
                      onChange={handleDataChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="row col-12 mb-3">
                    <div className="col-6">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={ContactUsData.email}
                        onChange={handleDataChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                    <br></br>
                    <div className="col-6">
                      <input
                        type="tel"
                        maxLength={10}
                        minLength={10}
                        className="form-control"
                        name="phone"
                        value={ContactUsData.phone}
                        onChange={handleDataChange}
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <br></br>
                  <textarea
                    name="message"
                    value={ContactUsData.message}
                    onChange={handleDataChange}
                    placeholder="Message"
                    maxLength={500}
                    rows={4}
                    className="form-control"
                    required
                    defaultValue={""}
                  />
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default ContactUsPage;
