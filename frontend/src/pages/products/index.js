import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

function Ecommerce(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const products = props.productsData;

  
  // Change page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Header />
      <section className="w3l-inner-banner-main">
        <div className="about-inner">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <h3>Products</h3>
              <li>
                <Link href="/">
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </li>
              <li className="active">Products</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="w3l-features-15">
        <section id="features15-block">
          <div className="d-grid features15-col-3">
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-plane" />
              </div>
              <div className="features15-para">
                <h4>Free Shipping</h4>
                <p>ON ORDERS WORTH 5000 ₹ </p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-money" />
              </div>
              <div className="features15-para">
                <h4>Warehouse Prices</h4>
                <p>WITH LOW PRICE GUARANTEE</p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-shield" />
              </div>
              <div className="features15-para">
                <h4>Secure Shopping</h4>
                <p>CERTIFIED BY AUTHORITIES </p>
              </div>
            </div>
            <div className="features15-col-text d-grid">
              <div className="features15-info">
                <span className="fa fa-shopping-cart" />
              </div>
              <div className="features15-para">
                <h4>Largest Selection</h4>
                <p>OF TOP QUALITY PRODUCTS</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="w3l-products-1">
        <div className="products1">
          <div className="wrapper">
            <div className="products1-content">
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <div className="column" key={product._id}>
                    <Link href={`/product/${product._id}`}>
                      <img
                        src={`/images/products/${product.productImgs[0]}`}
                        className="img-responsive"
                        alt={product.productName || ""}
                      />
                    </Link>
                    <h4>
                      <Link href={`/product/${product._id}`}>
                        {product.productName || ""}
                      </Link>
                    </h4>
                    <p>₹ {(product.productPrice || 0).toFixed(2)}</p>
                  </div>
                ))
              ) : (
                <p className="d-flex text-center h1">No products found.</p>
              )}
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="pagination-container d-flex justify-content-center mt-5">
                <Pagination
                  current={currentPage}
                  total={products.length}
                  pageSize={productsPerPage}
                  onChange={handlePageChange}
                  hideOnSinglePage={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Ecommerce;

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
