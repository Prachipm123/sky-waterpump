// pages/about.js
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header></Header>

      <section className="w3l-inner-banner-main">
        <div className="about-inner">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <h3>About</h3>
              <li>
                <a href="/">
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </li>
              <li className="active">About</li>
            </ul>
          </div>
        </div>
      </section>
      {/* //covers */}
      {/* Content-with-photo23 block */}
      <section className="w3l-content-with-photo-23">
        <div id="cwp23-block">
          <div className="wrapper">
            <div className="d-grid cwp23-content">
              <div className="cwp23-img">
                <img src="/images/e2.jpg" className="img-responsive" alt="" />
              </div>
              <div className="cwp23-text">
                <div className="cwp23-title">
                  <h3>Consectetur adipisicing elit, sed do eiusmod tempor </h3>
                </div>
                <div className="cwp23-text-cols">
                  <div className="column">
                    <h4>Our Mission</h4>
                    <p>
                      Our mission at Sky Water Pump is simple: to deliver
                      reliable water pump solutions that exceed customer
                      expectations while promoting sustainability and
                      innovation. We strive to enhance the lives of individuals
                      and communities by ensuring access to clean and efficient
                      water distribution systems.
                    </p>
                  </div>
                  <div className="column">
                    <h4>Our Team</h4>
                    <p>
                      Behind every successful endeavor is a dedicated team, and
                      at Sky Water Pump, we are fortunate to have a team of
                      skilled professionals who are committed to our vision.
                      From our experienced engineers who design cutting-edge
                      pump technologies to our friendly customer service
                      representatives who provide personalized assistance, each
                      member of our team plays a vital role in our success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Content-with-photo23 block */}
      <section className="w3l-features">
        <div className="grid top-bottom">
          <div className="wrapper">
            <div className="middle-section grid-column text-center">
              <div className="three-grids-columns">
                <span className="fa fa-lightbulb-o" />
                <h4>Customer Satisfaction</h4>
                <p style={{ textAlign: "justify" }}>
                  Customer satisfaction is our top priority, and we are proud to
                  have earned the trust and loyalty of our customers. Don't just
                  take our word for it – hear what our satisfied customers have
                  to say about their experiences with Sky Water Pump.
                </p>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-shirtsinbulk" />
                <h4>Our Products</h4>
                <p style={{ textAlign: "justify" }}>
                  At Sky Water Pump, we offer a wide range of water pumps
                  designed to meet the diverse needs of our customers. Whether
                  you're looking for a residential pump for your home or a
                  commercial pump for industrial applications, we have you
                  covered. Our pumps are engineered for durability, efficiency,
                  and performance, ensuring reliable water supply in any
                  environment.
                </p>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-user-secret" />
                <h4>Get in Touch</h4>
                <p style={{ textAlign: "justify" }}>
                  Have questions or need assistance? Our team is here to help!
                  Feel free to contact us via email, phone, or visit our
                  [location/address]. We look forward to serving you and helping
                  you find the perfect water pump solution for your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-content-with-photo-6">
        {/* /content-with-photo */}
        <div className="content-with-photo">
          <div className="float-lt photo-inn">
            <h2>Our Values</h2>
            <p>
              Integrity, quality, and customer satisfaction are the cornerstones
              of our business. We believe in conducting ourselves with honesty
              and transparency in all our interactions. We are committed to
              delivering products of the highest quality, backed by rigorous
              testing and quality control measures. Above all, we prioritize the
              satisfaction of our customers and are dedicated to providing
              exceptional service at every step of the way.
            </p>
          </div>
          <div className="float-rt photo-img">
            <img src="/images/e5.jpg" className="img-responsive" alt="vv" />
          </div>
        </div>
        {/* /content-with-photo */}
      </section>

      <Footer></Footer>
    </>
  );
};

export default AboutPage;
