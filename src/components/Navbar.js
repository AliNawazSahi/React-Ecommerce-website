import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "#e95598" }} href="/"><b>{"<Wear-MyShirt/>"}</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-0">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    T-Shirts
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown" style={{ backgroundColor: '#e95598', color: "white" }}>
                                    <li><a style={{ color: "white" }} className="dropdown-item" href="/SwagDekh">SwagDekh</a></li>
                                    <li><a style={{ color: "white" }} className="dropdown-item" href="/Naruto_Tshirt">Naruto T-Shirt</a></li>
                                    <li><a style={{ color: "white" }} className="dropdown-item" href="/Marvel_Tshirt">Marvel T-Shirt</a></li>
                                    <li><a style={{ color: "white" }} className="dropdown-item" href="/WingsOfFreedom">Wings Of Freedom</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/sellingProducts_model">Trending</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/#selling_products">New Stuff</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/About">About</a>
                            </li>

                        </ul>

                        <i className="fa-solid fa-cart-shopping fa-2xl px-4" style={{ color: '#e95598' }}></i>

                        <a style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success mx-1" href="/" role="button">Login</a>
                        <a style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success mx-2" href="/" role="button">SignUp</a>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
