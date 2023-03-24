import React from 'react';
import {Header} from "./header/Header";
import hero_image from '../../../../assets/fdf/hero_image.png';
import hero_image_back from '../../../../assets/fdf/hero_image_back.png';
import Heart from '../../../../assets/fdf/heart.png';
import Calories from '../../../../assets/fdf/calories.png';

import './Hero.css';


export const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>

            {/*the best ad*/}
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

            {/*Hero Heading*/}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

            {/*figures*/}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

            {/*hero buttons*/}
                <div className="hero-buttons">
                    <button className="hero-btn">Get Started</button>
                    <button className="hero-btn">Learn More</button>
                </div>

            </div>
            <div className="right-h">
                <button className='hero-btn'>Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span>
                    <span>116 bmp</span>
                </div>

            {/* hero images*/}
                <img src={hero_image} alt="" className='hero-image'/>
                <img src={hero_image_back} alt="" className='hero-image-back'/>

            {/* calories */}
                <div className="calories">
                    <img src={Calories} alt=""/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>


            </div>
        </div>
    )
}