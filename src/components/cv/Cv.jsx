import React from 'react'
import './cv.css'
import foto from '../../assets/avatar/avatar1.jpg';

export const Cv = () => {
    return (
        <>
            <div className="cv_container">
                <div className="cv_container_main">
                    <div className="left_side">
                        <div className="profileText">
                            <div className="imgBx">
                                <img src={foto} alt=""/>
                            </div>
                            <h2>Adrian Majcher <br/> <span>Web Deweloper</span></h2>
                        </div>
                        <div className="contactInfo">
                            <h3 className="title">Contact Info</h3>
                        </div>
                    </div>
                    <div className="right_side"></div>
                </div>
            </div>
        </>
    )
};

