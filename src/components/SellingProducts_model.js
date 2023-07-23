import React from 'react';
import '../Main.css';
import oversizedshirt1 from "./ModelImages/oversizedshirt1_image.webp";
import marvelshirt1 from "./ModelImages/marvelshirt1_image.webp";
import narutoshirt1_image from "./ModelImages/narutoshirt1_image.webp";
import wingsOfFreedom1_image from './ModelImages/wingsOfFreedom1_image.webp';

const SellingProducts_model = () => {
  return (
    <div className='mt-5'>
      <div className="container-fluid w-100 d-flex m-0 p-0">
        <div className="container w-25 mt-3">
          <span>
            <h1 className="mt-2">Filter</h1>
          </span>
          <hr />

          <div className="container">
            <div className="container mt-3 mb-3">
              <strong>Theme</strong>
            </div>
            <span>
              <div className="container m-1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate2"
                  />
                  <label className="form-check-label" htmlFor="flexCheckIndeterminate2">
                    LifeStyle
                  </label>
                </div>
              </div>
            </span>
          </div>
          <div className="container">
            <div className="container">
              <div className="container mt-3 mb-3 p-0">
                <strong>Color</strong>
              </div>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate2"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate2">
                      White
                    </label>
                  </div>
                </div>
              </span>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate3"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate3">
                      Black
                    </label>
                  </div>
                </div>
              </span>
            </div>
            <div className="container">
              <div className="container mt-3 mb-3 p-0">
                <strong>Size</strong>
              </div>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate4"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate4">
                      S
                    </label>
                  </div>
                </div>
              </span>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate5"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate5">
                      M
                    </label>
                  </div>
                </div>
              </span>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate6"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate6">
                      L
                    </label>
                  </div>
                </div>
              </span>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate7"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate7">
                      XL
                    </label>
                  </div>
                </div>
              </span>
              <span>
                <div className="container m-1">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckIndeterminate8"
                    />
                    <label className="form-check-label" htmlFor="flexCheckIndeterminate8">
                      XXL
                    </label>
                  </div>
                </div>
              </span>
            </div>
            <div className='container my-4'>
              <button style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success" type="submit">Apply Filter</button>

            </div>
          </div>
        </div>
        <div className="container w-75">
          <div className="container text-center">
            <h2 className='m-4'>
              <b>Explore Our Oversized T-shirts Collection</b>
            </h2>
            <div className="container row w-100" id="SellingProducts_model_container">
              <div className="container col  ">
                <a href="/SwagDekh" style={{ textDecoration: "none" }}>
                  <div className="card SellingProducts_model_card_boxShadow ">
                    <div className="container p-3 "> <img src={oversizedshirt1} className="card-img-top rounded" alt="Free Shipping" /></div>
                    <div className="card-body">
                      <p style={{ color: "#95b7b2" }} className="card-text">Free Shipping</p>
                      <h5 className="card-title" style={{ color: "#e95598" }}> <b> Swag Dekh</b></h5>
                      <h5 className="card-title" style={{ color: "black" }} > <del>Rs.950</del> Rs.549</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="container col ">
                <a href="/Marvel_Tshirt" style={{ textDecoration: "none" }}>
                  <div className="card SellingProducts_model_card_boxShadow">
                    <div className="container p-3 "> <img src={marvelshirt1} className="card-img-top rounded" alt="Free Shipping" /></div>
                    <div className="card-body">
                      <p style={{ color: "#95b7b2" }} className="card-text">Free Shipping</p>
                      <h5 className="card-title" style={{ color: "#e95598" }}> <b> Marvel Shirt</b></h5>
                      <h5 className="card-title" style={{ color: "black" }} > <del>Rs.950</del> Rs.849</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="container col ">
                <a href="/Naruto_Tshirt" style={{ textDecoration: "none" }}>
                  <div className="card SellingProducts_model_card_boxShadow">
                    <div className="container p-3 "> <img src={narutoshirt1_image} className="card-img-top rounded" alt="Free Shipping" /></div>
                    <div className="card-body">
                      <p style={{ color: "#95b7b2" }} className="card-text">Free Shipping</p>
                      <h5 className="card-title" style={{ color: "#e95598" }}> <b> Naruto Shirt</b></h5>
                      <h5 className="card-title" style={{ color: "black" }}> <del>Rs.1150</del> Rs.949</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="container col boxShadow">
                <a href="/WingsOfFreedom" style={{ textDecoration: "none" }}>
                <div className="card SellingProducts_model_card_boxShadow">
                  <div className="container p-3 "> <img src={wingsOfFreedom1_image} className="card-img-top rounded" alt="Free Shipping" /></div>
                  <div className="card-body">
                    <p style={{ color: "#95b7b2" }} className="card-text">Free Shipping</p>
                    <h5 className="card-title" style={{ color: "#e95598" }}> <b> Wings Of Free...</b></h5>
                    <h5 className="card-title" style={{ color: "black" }}> <del>Rs.1050</del> Rs.849</h5>
                  </div>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default SellingProducts_model;
