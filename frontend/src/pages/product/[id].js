// pages/product/[id].js
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDetailsPage = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const [enquiryData, setEnquiryData] = useState({
    productId: id,
    username: "",
    email: "",
    enquiry: "",
  });

  const products = props.productsData;

 

  function filterProductsById(products, id) {
    return products.filter((product) => product._id === id);
  }

  const product = filterProductsById(products, id)[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEnquiryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validEmail = enquiryData.email
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
        `http://localhost:4000/enquiries`,
        enquiryData
      );

      toast.success(response, {
        autoClose: 1500,
      });
    } catch (error) {
      toast.error("Internal Error Occured", {
        autoClose: 1500,
      });
      console.log(error);
    } finally {
      setEnquiryData((prevData) => ({
        ...prevData,
        username: "",
        email: "",
        enquiry: "",
      }));
    }
  };

  return (
    <>
      <Header />
      {product && (
        <section className="w3l-inner-banner-main">
          <div className="about-inner">
            <div className="wrapper">
              <ul className="breadcrumbs-custom-path">
                <h3>Product details</h3>
                <li>
                  <Link href="/">
                    Home{" "}
                    <span className="fa fa-angle-right" aria-hidden="true" />
                  </Link>
                </li>
                <li className="active">Product details</li>
              </ul>
            </div>
          </div>
        </section>
      )}
      {product && (
        <section className="w3l-features-photo-7">
          <div className="features-photo-7_sur">
            <div className="wrapper">
              <div className="features-photo-7_top">
                <div className="features-photo-7_top-right">
                  <div className="galleryContainer">
                    <div className="gallery">
                      {product.productImgs.map((img, index) => (
                        <React.Fragment key={index}>
                          <input
                            type="radio"
                            name="controls"
                            id={`c${index + 1}`}
                            defaultChecked={index === 0}
                          />
                          <img
                            className="galleryImage"
                            id={`i${index + 1}`}
                            src={`/images/products/${img}`}
                            alt=""
                          />
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="thumbnails">
                      {product.productImgs.map((img, index) => (
                        <label
                          key={index}
                          className="thumbnailImage"
                          htmlFor={`c${index + 1}`}
                        >
                          <img
                            style={{
                              width: "75px",
                              height: "75px",
                              objectFit: "cover",
                            }}
                            src={`/images/products/${img}`}
                            className="img-responsive"
                            alt=""
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="features-photo-7_top-left">
                  <h3>{product.productName}</h3>
                  <h5>₹ {product.productPrice.toFixed(2)}</h5>
                  <h4>Enquiry:-</h4>
                  {/* form goes here */}
                  <div className="form-group">
                    <form onSubmit={handleSubmit}>
                      <div className="row col-12 ">
                        <div className="col-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="username"
                            value={enquiryData.username}
                            placeholder="Name"
                            onChange={handleChange}
                          />
                        </div>
                        <br></br>
                        <div className="col-6 mb-3">
                          <input
                            type="email"
                            className="form-control"
                            id="name"
                            name="email"
                            value={enquiryData.email}
                            placeholder="Email"
                            onChange={handleChange}
                          />
                        </div>
                        <br></br>
                        <div className="col-12">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            name="enquiry"
                            onChange={handleChange}
                            value={enquiryData.enquiry}
                            placeholder="Your Enquiry"
                            required
                          />
                        </div>
                        <br></br>
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button className="mybtn" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="desc_single1">
                <h5>Product Information</h5>
                <p>{product.productDesc}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default ProductDetailsPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const response = await fetch("http://localhost:4000/products");
  const productsData = await response.json();

  return {
    props: {
      productsData: productsData,
    },
  };
}
