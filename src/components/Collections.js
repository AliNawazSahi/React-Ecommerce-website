import React from 'react';
import collection_image1 from "../images/collection_image1.webp";
import collection_image2 from "../images/collection_image2.webp";
import collection_image3 from "../images/collection_image3.webp";
import collection_image4 from "../images/collection_image4.webp";


const Collections = () => {
    return (
        <div>
            <div className="container text-center">
                <h2 className='my-4'><b>COLLECTIONS</b></h2>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={collection_image1} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={collection_image2} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <img src={collection_image3} className="card-img-top" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center h-50 w-50 ">
                <div className=" my-4 w-50 h-50 text-center">
                            <div className="card h-100 w-100 ">
                                <img src={collection_image4} className="card-img-top h-75 w-100" alt="..."/>
                            </div>
                        </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

export default Collections
