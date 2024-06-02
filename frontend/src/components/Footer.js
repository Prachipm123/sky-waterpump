import React from "react";

function Footer() {
  const data = {
    _id: "6603ce64c2bb85446f91b976",
    email: "admin@gmail.com",
    phone: "9687458965",
    address: "Ahmedabad",
  };

  return (
    <>
      <section className="w3l-footer-29-main ">
        <div className="footer-29 ">
          <div className="wrapper">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29">
                <h6 className="footer-title-29">Sky Water Pump</h6>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-29">
                <ul>
                  <h6 className="footer-title-29">Solutions</h6>
                  <li>
                    <a href="/products">Our Products</a>
                  </li>
                </ul>
              </div>

              <div className="footer-list-29">
                <h6 className="footer-title-29">Contact Info</h6>
                <div className="cont-details-main">
                  <div className="cont-top1">
                    <div className="cont-left2">
                      <span className="fa fa-mobile" />
                    </div>
                    <div className="cont-right1">
                      <h6>
                        <a href="tel:+142 5897555">Phone</a>
                      </h6>
                      <p>{data.phone}</p>
                    </div>
                  </div>
                  <div className="cont-top1">
                    <div className="cont-left1">
                      <span className="fa fa-clock-o" />
                    </div>
                    <div className="cont-right1">
                      <h6>Email</h6>
                      <p>{data.email}</p>
                    </div>
                  </div>
                  <div className="cont-top1">
                    <div className="cont-left1">
                      <span className="fa fa-map-marker" />
                    </div>
                    <div className="cont-right1">
                      <h6>Address</h6>
                      <p>{data.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="footer_copy">
          <div className="wrapper">
            <div className="d-grid grid-col-2 bottom-copies">
              <p className="copy-footer-29">
                © 2024 Sky Water Pump Production. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
