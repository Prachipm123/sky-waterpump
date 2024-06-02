import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className="w3l-header-4">
        <header id="headers4-block">
          <div className="wrapper">
            <div className="d-grid nav-mobile-block header-align">
              <div className="logo">
                <Link className="brand-logo" href="/">
                  <span className="fa fa-industry" /> Sky Water Pump
                </Link>
              </div>
              <input type="checkbox" id="nav" />
              <label className="nav" htmlFor="nav" />
              <nav>
                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>

                  <li>
                    <Link href="/products">
                      Products <span className="drop-text" aria-hidden="true" />
                    </Link>
                    <input type="checkbox" id="drop-5" />
                  </li>
                  <li>
                    <Link href="/blog">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
              {/* {isLoggedIn ? (
                <div className="button">
                  <Link onClick={(e) => handleLogout(e)}>Log Out</Link>
                </div>
              ) : (
                <Link className="button" title="login now" href="/login">
                  Login
                </Link>
              )} */}
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
