import React from 'react';
import image1 from '../../../../assets/fdf/image1.png';
import image2 from '../../../../assets/fdf/image2.png';
import image3 from '../../../../assets/fdf/image3.png';
import image4 from '../../../../assets/fdf/image4.png';
import nb from '../../../../assets/fdf/nb.png';
import adidas from '../../../../assets/fdf/adidas.png';
import nike from '../../../../assets/fdf/nike.png';
import tick from '../../../../assets/fdf/tick.png';
import './reasons.css';

export const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image4} alt=""/>
            </div>
            <div className="right-r">
                <span>some reasons</span>
                <div>
                    <span className='stroke-text'>why</span>
                    <span> choose us?</span>
                </div>

                <div className='details-r'>
                    <div>
                        <img src={tick} alt=""/>
                        <span>Over 140+ Expert Coach's</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>Train smarter and faster then before</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt=""/>
                        <span>reliable partners</span>
                    </div>
                </div>
                <span id='normal'>our partners</span>
                <div className="partners">
                    <img src={nb} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                </div>

            </div>
        </div>
    )
}