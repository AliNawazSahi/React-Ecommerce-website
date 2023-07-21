import React  from 'react';
import "../Main.css";
import Bounce from 'react-reveal/Bounce';
import collection_image1 from "../images/collection_image1.webp";
import collection_image2 from "../images/collection_image2.webp";
import collection_image3 from "../images/collection_image3.webp";
import collection_image4 from "../images/collection_image4.webp";
import theme_image4 from "../images/theme_image4.webp";


const Collections = () => {
  

    return (
        <div>
            <div className="container-lg text-center mb-3" id='collection'>
                <h2 className="my-5">
                    <b>COLLECTIONS</b>
                </h2>
                <div className="row my-4">
                    <div className="col collection_image mx-3">
                    <a href='/sellingProducts_model'>
                       <div className="aspect-ratio">
                            <Bounce>
                                <img src={collection_image1} alt="Collection 1" className="img-fluid rounded" />
                            </Bounce>
                        </div>
                        </a>
                        
                    </div>
                    <div className="col collection_image mx-1">
                        <div className="aspect-ratio">
                            <Bounce>
                                <img src={collection_image2} alt="Collection 2" className="img-fluid rounded" />
                            </Bounce>
                        </div>
                    </div>
                    <div className="col collection_image mx-3">
                        <div className="aspect-ratio">
                            <Bounce>
                                <img src={collection_image3} alt="Collection 3" className="img-fluid rounded" />
                            </Bounce>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-4 collection_image mx-3 ">
                        <div className="aspect-ratio custom-aspect-ratio">
                            <Bounce>
                                <img src={collection_image4} alt="Collection 4" className="img-fluid rounded" />
                            </Bounce>
                        </div>
                    </div>
                    <div className="col-4 collection_image ">
                        <div className="aspect-ratio custom-aspect-ratio">
                            <Bounce>
                                <img src={theme_image4} alt="Collection 4" className="img-fluid rounded" />
                            </Bounce>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Collections;
