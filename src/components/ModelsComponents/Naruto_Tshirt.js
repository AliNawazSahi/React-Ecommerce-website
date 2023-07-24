import React, { useState } from 'react';
import "./Model.css";
import narutoshirt1_image from '../ModelImages/narutoshirt1_image.webp';
import narutoshirt1a_image from '../ModelImages/narutoshirt1a_image.webp';
import narutoshirt1b_image from '../ModelImages/narutoshirt1b_image.webp';
import narutoshirt1c_image from '../ModelImages/narutoshirt1c_image.webp';
import Recommended_Products from '../Recommended_Products';
import Footer from '../Footer';
import ReactImageMagnify from 'react-image-magnify';

const ShirtSizeButtonGroup = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  // Function to toggle the selected button
  const toggleButton = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  // SizeChart
  const sizechart_detail = "/SizeChart_Popup"
  const openModel = () => {
    window.open(sizechart_detail, "", "width=600px,height=400px,left=400px,top=200px")
  }

  return (
    <div className="container my-4">
      <b>
        <span style={{ color: '#e95598' }}> Size : </span>
      </b>
      <a href="#" className="mx-2">
        <button
          className={`p-1 rounded px-2 ${selectedSize === 'S' ? 'selected' : ''}`}
          onClick={() => toggleButton('S')}
        >
          S
        </button>
      </a>
      <a href="#" className="mx-2">
        <button
          className={`p-1 rounded px-2 ${selectedSize === 'M' ? 'selected' : ''}`}
          onClick={() => toggleButton('M')}
        >
          M
        </button>
      </a>
      <a href="#" className="mx-2">
        <button
          className={`p-1 rounded px-2 ${selectedSize === 'L' ? 'selected' : ''}`}
          onClick={() => toggleButton('L')}
        >
          L
        </button>
      </a>
      <a href="#" className="mx-2">
        <button
          className={`p-1 rounded px-2 ${selectedSize === 'XL' ? 'selected' : ''}`}
          onClick={() => toggleButton('XL')}
        >
          XL
        </button>
      </a>
      <a href="#" className="mx-2">
        <button
          className={`p-1 rounded px-2 ${selectedSize === 'XXL' ? 'selected' : ''}`}
          onClick={() => toggleButton('XXL')}
        >
          XXL
        </button>
      </a>

      &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

      <b><span>Size Chart</span></b>  &nbsp;&nbsp; <span><i onClick={openModel} className="fa-solid fa-chart-simple fa-fade fa-2xl" style={{ cursor: "pointer" }}></i></span>


    </div>
  );
};


const Naruto_Tshirt = () => {


  const [mainImage, setMainImage] = useState(narutoshirt1_image);
  const handleImageClick = (image) => {
    setMainImage(image);
  };


  return (
    <>
      <div className='mt-5'>
        <div className="container-lg">
          <div className="container mx-auto d-flex col ">
            <div className="container w-25 my-3 ">
              <div className="container my-4">
                <a href="#" className='swagdekh'>
                  <img src={narutoshirt1_image} alt="New Product" onClick={() => handleImageClick(narutoshirt1_image)} />
                </a>
              </div>
              <div className="container my-4">
                <a href="#" className='swagdekh'>
                  <img src={narutoshirt1a_image} alt="New Product" onClick={() => handleImageClick(narutoshirt1a_image)} />
                </a>
              </div>
              <div className="container my-4">
                <a href="#" className='swagdekh'>
                  <img src={narutoshirt1b_image} alt="New Product" onClick={() => handleImageClick(narutoshirt1b_image)} />
                </a>
              </div>
              <div className="container my-4">
                <a href="#" className='swagdekh'>
                  <img src={narutoshirt1c_image} alt="New Product" onClick={() => handleImageClick(narutoshirt1c_image)} />
                </a>
              </div>
            </div>
            <div className="container w-50 my-5">
              <div className='container-lg'>
                <div className="card">
                <ReactImageMagnify {...{
                    smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      isFluidWidth: true,
                      src: mainImage
                    },
                    largeImage: {
                      src: mainImage,
                      width: 1200,
                      height: 1800
                    }
                  }} />
                </div>
              </div>
            </div>
            <div className="container-lg my-5" >
              <div className="container">
                <b> <p style={{ color: '#e95598' }} className='m-0'>Wear my Shirt</p> </b>
                <p className='h3'> Naruto Tshirt Sarcastic Graphic Printed Oversizedtshirt (L/Black)</p>
                <b> <p style={{ color: '#e95598' }}>Product Description</p> </b>
                <p>Add a touch of attitude and sarcasm to your wardrobe with the "Naruto Tshirt Sarcastic Graphic Printed Oversized T-shirt". This trendy and edgy t-shirt features a bold and eye-catching graphic print that showcases your unique sense of style. The oversized fit offers a relaxed and comfortable look, perfect for a laid-back and effortless vibe. Crafted from premium-quality fabric, this t-shirt ensures a soft and comfortable feel against your skin. The "Naruto Tshirt" print delivers a sarcastic message with a touch of humor, making it a conversation starter wherever you go. Whether you're hanging out with friends or running errands, this t-shirt is a statement piece that adds a dose of personality to your outfit. Pair it with jeans, leggings, or shorts for a cool and casual ensemble. Express your individuality and showcase your swag with the "Naruto Tshirt Sarcastic Graphic Printed Oversized T-shirt".</p>
              </div>
              <div className="container">
                <b> <p style={{ color: '#e95598' }}>Product Highlights </p></b>
                <ul>
                  <li>Bold and eye-catching "Naruto Tshirt" graphic print</li>
                  <li>Oversized fit for a relaxed and comfortable look</li>
                  <li>Made from premium-quality fabric for a soft feel</li>
                  <li>Perfect for a cool and casual outfit</li>
                  <li>Expresses your individuality and sense of humor</li>
                </ul>
              </div>
              {/* Move the ShirtSizeButtonGroup component outside */}
              <ShirtSizeButtonGroup />
              <hr />
              <span className='h2'><del style={{ color: "#95b7b2" }}>Rs.1150</del>&nbsp;&nbsp;Rs.949</span> (Free Shipping)
              <div className="container d-flex p-0">
                <div className='mr-4 my-4'>
                  <button style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success rounded m-0 " type="submit">Buy Now</button>
                </div>
                <div className='mx-5 my-4'>
                  <button style={{ backgroundColor: '#e95598', color: "white" }} className="btn btn-outline-success rounded m-0" type="submit">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Recommended_Products />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5 p-0 m-0">
        <Footer />
      </div>
    </>
  );
};

export default Naruto_Tshirt;
