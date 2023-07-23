import React from 'react';
import sizechart from "../ModelImages/sizechart.jpg"

const SizeChart_Popup = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div class="lightbox">
                    <div>
                        <img
                            src={sizechart}
                            alt="Shirt size chart"
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SizeChart_Popup
