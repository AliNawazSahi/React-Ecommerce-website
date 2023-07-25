import React from 'react'
import offer_image1 from "../images/offer_image1.png"
import "../Main.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Offers = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
}, [])

  return (
    <div>
      <div className="container-lg my-5" data-aos="fade-up">
        <div className="row row-cols-1 row-cols-md-3 g-5 text-center ">
          <div className="col">
            <div className="card offer_card pb-3">
              <img src={offer_image1} className="card-img-top mt-3 offer_image " alt="..." />
              <div className="card-body">
                <h5 style={{ color: "#e95598" }} className="card-title">Premium T-Shirts</h5>
                <p className="card-text">Our T-Shirts are 100% made of cotton</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card offer_card pb-3 ">
              <i className="fa-solid fa-truck-fast fa-2xl   card-img-top mt-5 pb-3 offer_image"></i>
              <div className="card-body">
                <h5 style={{ color: "#e95598" }} className="card-title">Free Shipping</h5>
                <p className="card-text">We ship all over India for FREE.</p>
              </div>
            </div>
            {/* <i class="fa-solid fa-hand-holding-dollar fa-2xl"></i> */}
          </div>
          <div className="col">
            <div className="card offer_card pb-3 ">
              <i className="fa-solid fa-hand-holding-dollar fa-2xl   card-img-top mt-5 pb-3 offer_image"></i>
              <div className="card-body">
                <h5 style={{ color: "#e95598" }} className="card-title">Exciting Offers</h5>
                <p  className="card-text">We provide offers & discounts</p>
              </div>
            </div>
          </div>
        </div>      </div>
      <br /><br /><br /><br />
    </div>

  )
}

export default Offers
