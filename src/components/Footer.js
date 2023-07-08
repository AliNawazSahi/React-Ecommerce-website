import React from 'react'

const Footer = () => {
    return (
        <div id='footer'>
            <div class="container">
                <footer class="pt-4">
                    <div class="row">

                        <div class="col-2">
                            <h5>SHOP</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">T-Shirts</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sleeveless</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Half Sleeves</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Full Sleeves</a></li>
                            </ul>
                        </div>

                        <div class="col-2">
                            <h5>CUSTOMER SERVICE</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return Policy</a></li>

                            </ul>
                        </div>

                        <div class="col-2 mx-3">
                            <h5>POLICY</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy
                                </a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms and Conditions</a></li>

                            </ul>
                        </div>


                    </div>

                    <div class="d-flex justify-content-between py-4  border-top">
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
