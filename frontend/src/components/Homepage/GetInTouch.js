import React from "react";
import Link from "next/link";

function GetInTouch() {
  return (
    <>
      <section className="w3l-feature-3">
        <div className="grid top-bottom">
          <div className="wrapper">
            <div className="middle-section grid-column text-center">
              <div className="three-grids-columns">
                <span className="fa fa-map-marker" />
                <h4>Our offices</h4>
                <p>
                  User interface design includes selecting and&nbsp;arranging
                  interface elements{" "}
                </p>
                <Link href="/contact" className="actionbg">
                  Nearest Office{" "}
                </Link>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-envelope-o" />
                <h4>Drop us a line</h4>
                <p>
                  Page layout is where these components come together, while
                  wireframing
                </p>
                <Link href="/contact" className="actionbg">
                  Fill Our Form{" "}
                </Link>
              </div>
              <div className="three-grids-columns">
                <span className="fa fa-life-ring" />
                <h4>Open a Ticket</h4>
                <p>
                  For complex projects, wireframes using computer software is
                  popular
                </p>
                <Link href="/login" className="actionbg">
                  Login{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch;
