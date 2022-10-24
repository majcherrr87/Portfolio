import React from 'react'
import './cv.css'
import foto from '../../assets/avatar/avatar1.jpg';
import {FaGithub} from "react-icons/fa";

export const Cv = () => {
    return (
        <>
            <div className='cv-container'>
                <main className='main-content'>
                    <section className="left-section">
                        <div className="left-content">
                            <div className="profile">
                                <img src={foto} alt=""/>
                                <h2 className="cv-name">Adrian Majcher</h2>
                                <p className="career">Web developer</p>
                            </div>
                            <div className="contact-info">
                                <h3 className="main-title">Contact Info</h3>
                                <ul>
                                    <li>
                                        <FaGithub className='cv-icon'/>
                                        513 354 369
                                    </li>
                                    <li>
                                        <FaGithub className='cv-icon'/>
                                        majcherrr87@gmail.com
                                    </li>
                                    <li>
                                        <FaGithub className='cv-icon'/>
                                        www.majcher.pl
                                    </li>
                                </ul>
                            </div>
                            <div className="skills-section">
                                <h3 className="main-title">Skills</h3>
                                <ul>
                                    <li>
                                        <h5 className="skill-title">JavaScript</h5>
                                        <div className="progress-bar">
                                            <div className="progress js-progress"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="right-section"></section>
                </main>
            </div>
        </>
    )
};


