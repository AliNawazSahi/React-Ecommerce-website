import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <div id='footer' data-aos="fade-up">
            <div className="container">
                <footer className="pt-4">
                    <div className="row">

                        <div className="col-2">
                            <p>SHOP</p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="/SwagDekh" className="nav-link p-0 text-muted">SwagDekh</a></li>
                                <li className="nav-item mb-2"><a href="/Naruto_Tshirt" className="nav-link p-0 text-muted">Naruto T-Shirt</a></li>
                                <li className="nav-item mb-2"><a href="/Marvel_Tshirt" className="nav-link p-0 text-muted">Marvel T-Shirt</a></li>
                                <li className="nav-item mb-2"><a href="/WingsOfFreedom" className="nav-link p-0 text-muted">Wings Of Freedom</a></li>
                            </ul>
                        </div>

                        <div className="col-2">
                            <p >CUSTOMER SERVICE</p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href='mailto:ahsansahi@gmail.com' title='Email' className="nav-link p-0 text-muted">Contact Us</a></li>
                                <li className="nav-item mb-2"><a href="/About" className="nav-link p-0 text-muted">About Us</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Return Policy</a></li>

                            </ul>
                        </div>

                        <div className="col-2 mx-3">
                            <p>POLICY</p>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy Policy
                                </a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li>

                            </ul>
                        </div>


                    </div>

                    <div className="d-flex justify-content-between py-4  border-top">
                        <p className='my-4'>&copy; 2023 Company, Inc. All rights reserved.</p>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "row" }}>
                            <li ><a href='https://github.com/AliNawazSahi' target='_blank' title='Github' ><i className="fa-brands fa-square-github fa-2xl mx-3 my-5 contact" style={{ cursor: "pointer", color: "black" }}></i></a></li>
                            <li><a href='https://www.linkedin.com/in/ahsan-nawaz-sahi-53713527a' target='_blank' title='LinkedIn'><i className="fa-brands fa-linkedin fa-2xl mx-3 my-5 contact" style={{ color: "#3d73c7", cursor: "pointer" }}></i></a></li>
                            <li><a href='mailto:ahsansahi@gmail.com' target='_blank' title='Email'><i className="fa-solid fa-envelope fa-2xl mx-3 my-5 contact" style={{ color: "red", cursor: "pointer" }}></i></a></li>
                            <li><a href='https://www.facebook.com/ahsan.sahi.5439' target='blank' title='Facebook'><i className="fa-brands fa-facebook fa-2xl mx-3 my-5 contact" style={{ color: "#3a3aa9", cursor: "pointer" }}></i></a></li>
                        </ul>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer
