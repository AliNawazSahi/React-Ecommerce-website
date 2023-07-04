import React from 'react';
import "../Main.css";
import slider_image1 from "../images/slider_image1.webp";
import slider_image2 from "../images/slider_image2.webp";
import slider_image3 from "../images/slider_image3.webp";
const Main = () => {
    return (
        <div>
            <div className="container text-center my-3">
                <li style={{ listStyle: "none", textDecoration: "none" }}><a className="px-4 py-2 border border-3 rounded" style={{ textDecoration: "none", backgroundColor: "#ebdcdc5c" }} href="/"> <b style={{ color: "red" }}><i style={{color:"#e25822"}} className="fa-sharp fa-solid fa-fire fa-fade fa-xl p-2"></i> Email</b> us for new custom designed products</a></li>
            </div>

            <div id="carouselExampleDark" className="carousel carousel-dark slide h-50" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={slider_image1} className="d-block w-100 h-95" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <h5 style={{ color: "#e95598" }}>Special Offer For this season</h5>

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider_image2} className="d-block w-100 h-95" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        <h5 style={{ color: "#e95598" }}>Currently On</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider_image3} className="d-block w-100 h-95" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Trending</h5>
                            
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
        </div>
    )
}

export default Main
