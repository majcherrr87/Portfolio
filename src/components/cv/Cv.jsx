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
                                        <p className="skill-title">JavaScript</p>
                                        <div className="progress-bar">
                                            <div className="progress js-progress"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="skill-title">JavaScript</p>
                                        <div className="progress-bar">
                                            <div className="progress js-progress"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="skill-title">Javaipt</p>
                                        <div className="progress-bar">
                                            <div className="progress js-progress"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="skill-title">JavaScripvvcxvt</p>
                                        <div className="progress-bar">
                                            <div className="progress js-progress"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="references-section">
                                <h3 className="main-title">References</h3>
                                <div className="referee">
                                    <h6 className="sub-title">Michael Bowen</h6>
                                    <p className='sub-para'>Product Manager</p>
                                    <ul>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            513 354 369
                                        </li>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            majcherrr87@gmail.com
                                        </li>
                                    </ul>
                                </div>
                                <div className="referee">
                                    <h6 className="sub-title">Michael Bowen</h6>
                                    <p className='sub-para'>Product Manager</p>
                                    <ul>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            513 354 369
                                        </li>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            majcherrr87@gmail.com
                                        </li>
                                    </ul>
                                </div>
                                <div className="referee">
                                    <h6 className="sub-title">Michael Bowen</h6>
                                    <p className='sub-para'>Product Manager</p>
                                    <ul>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            513 354 369
                                        </li>
                                        <li>
                                            <FaGithub className='cv-icon'/>
                                            majcherrr87@gmail.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="right-section">
                        <div className="right-main-content">
                            <section className="about sect">
                                <h2 className="right-title">About Me</h2>
                                <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                                    delectus dignissimos dolorem quas. Assumenda expedita molestias possimus quasi
                                    veniam. Aperiam laborum perspiciatis porro provident veniam voluptatum. Dolores
                                    iusto quidem velit. <br/> <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi dolore
                                    dolorum impedit molestias natus, neque obcaecati odit, qui quidem quis quo tenetur
                                    vel
                                </p>
                            </section>
                            <section className="experience sect">
                                <h2 className="right-title">Experience</h2>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">2001 - 2003</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Junior Dev</h5>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Consequuntur deserunt earum et voluptates? Accusamus aliquid autem
                                                cupiditate deleniti dolores eius est ex, inventore reprehenderit sint
                                                ullam ut veniam veritatis voluptates.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">2001 - 2003</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Junior Dev</h5>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Consequuntur deserunt earum et voluptates? Accusamus aliquid autem
                                                cupiditate deleniti dolores eius est ex, inventore reprehenderit sint
                                                ullam ut veniam veritatis voluptates.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">2001 - 2003</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Junior Dev</h5>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Consequuntur deserunt earum et voluptates? Accusamus aliquid autem
                                                cupiditate deleniti dolores eius est ex, inventore reprehenderit sint
                                                ullam ut veniam veritatis voluptates.</p>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section className="education sect">
                                <h2 className="right-title">Education</h2>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">2001 - 2003</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Junior Dev</h5>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Consequuntur deserunt earum et voluptates? Accusamus aliquid autem
                                                cupiditate deleniti dolores eius est ex, inventore reprehenderit sint
                                                ullam ut veniam veritatis voluptates.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Microsoft</h5>
                                        <p className="para">2001 - 2003</p>
                                    </div>
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Junior Dev</h5>
                                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. Consequuntur deserunt earum et voluptates? Accusamus aliquid autem
                                                cupiditate deleniti dolores eius est ex, inventore reprehenderit sint
                                                ullam ut veniam veritatis voluptates.</p>
                                        </div>
                                    </div>

                                </div>
                            </section>

                        </div>
                    </section>
                </main>
            </div>
        </>
    )
};


