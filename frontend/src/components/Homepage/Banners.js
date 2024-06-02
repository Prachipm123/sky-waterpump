import React, { useEffect, useState } from "react";
import Link from "next/link";
function Banners() {
  const banners = [
    {
      _id: "660a4a96784f5fdfb95bec92",
      bannerTitle: "Sky Water Pumps For Futures",
      bannerDesc:
        "Welcome to Water Pump Company Slogans! We’ve got a fantastic collection of catchy and effective slogans that showcase our dedication to top-notch water pump technology.",
      status: "active",
    },
    {
      _id: "660a5048784f5fdfb95bec93",
      bannerTitle: "Long Run Waterpumps we make...",
      bannerDesc: "We are the best for production of waterpumps",
      status: "active",
    },
  ];

  return (
    <section className="w3l-hero-headers-14">
      <div className="hh14-block">
        <section id="hh14-content">
          <div className="wrapper">
            <div>
              {/* main-slider */}
              <div className="main-slider">
                <div className="csslider infinity" id="slider1">
                  {banners.map((banner, index) => (
                    <input
                      key={index}
                      type="radio"
                      name="slides"
                      defaultChecked={index === 0 ? "checked" : ""}
                      id={`slides_${index + 1}`}
                    />
                  ))}
                  <ul>
                    {banners.map((banner, index) => (
                      <li key={index}>
                        <div className="slider-info">
                          <div className="d-grid hh14-text">
                            <div className="hh14-info">
                              <h3 className="text-white">
                                {banner.bannerTitle}
                              </h3>
                              <p className="text-white ">
                                {" "}
                                {banner.bannerDesc}
                              </p>
                              <Link href="/" className="actionbg btn">
                                Start Exploring
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="navigation">
                    <div>
                      {banners.map((banner, index) => (
                        <label key={index} htmlFor={`slides_${index + 1}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* /main-slider */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Banners;
