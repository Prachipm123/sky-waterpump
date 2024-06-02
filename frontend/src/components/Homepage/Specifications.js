import React from "react";
function Specifications() {
  const data = {
    totalProductCount: 9,
    totalContactCount: 15,
    totalEnquiryCount: 18,
    success: true,
    message: "Enquiries fetch Successful",
  };

  return (
    <section className="w3l-specifications-9">
      <div className="main-w3">
        <div className="wrapper">
          <div className="d-flex main-cont-wthree-fea justify-content-center">
            <div className="grids-speci">
              <div className="speci-inner">
                <div className="sp-lft">
                  <span className="fa fa-handshake-o" />
                </div>
                <div className="sp-rgt">
                  <h3 className="title-spe"> {data.totalProductCount}</h3>
                  <h4>
                    <bold>Our Products</bold> in the market
                  </h4>
                </div>
              </div>
            </div>
            <div className="grids-speci midd-eff-las">
              <div className="speci-inner">
                <div className="sp-lft">
                  <span className="fa fa-globe" />
                </div>
                <div className="sp-rgt">
                  <h3 className="title-spe"> {data.totalEnquiryCount}</h3>
                  <h4>
                    <bold>Feedbacks </bold>
                    from around the world
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //specifications */}
    </section>
  );
}

export default Specifications;
