import React, {useEffect, useState} from 'react'
import './cv.css'
import {FaGithub} from "react-icons/fa";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BsTelephone, BsGlobe, BsLinkedin} from "react-icons/bs";
import {HiOutlineMailOpen} from "react-icons/hi";
import {GrFacebook} from "react-icons/gr";
import html from '../../assets/techStack/html.png';

export const Cv = () => {
    const [userAvatar, setUserAvatar] = useState('');
    const [userBio, setUserBio] = useState('');
    const [userWww, setUserWww] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/majcherrr87`);
            const data = await res.json();
            setUserAvatar(data.avatar_url);
            setUserBio(data.bio);
            setUserWww(data.blog);
        }
        fetchData();


    },[]);

    return (
        <>
            <div className='cv-container'>
                <main className='main-content'>
                    <section className="left-section">
                        <div className="left-content">
                            <div className="profile">
                                <div className="image">
                                    <img src={userAvatar} alt=""/>
                                </div>
                                <h2 className="cv-name">Adrian Majcher</h2>
                                <p className="career">Web developer</p>
                            </div>
                            <div className="contact-info">
                                <h3 className="main-title">Profil</h3>
                                <p>{userBio}</p>
                            </div>
                            <div className="contact-info">
                                <h3 className="main-title">Kontakt</h3>
                                <ul>
                                    <li>
                                        <HiOutlineLocationMarker className='cv-icon'/>
                                        <a href="https://goo.gl/maps/H1zremZNWYgrKWQ36" target='_blank' rel="noopener noreferrer">Warszawa</a>
                                    </li>
                                    <li>
                                        <BsTelephone className='cv-icon'/>
                                        <a href="tel:513354369">513 354 369</a>
                                    </li>
                                    <li>
                                        <HiOutlineMailOpen className='cv-icon'/>
                                        <a href="mailto:majcherrr87@gmail.com">majcherrr87@gmail.com</a>

                                    </li>
                                    <li>
                                        <BsGlobe className='cv-icon'/>
                                        <a href={'http://'+ userWww} target='_blank' rel="noopener noreferrer">{userWww}</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="contact-info">
                                <h3 className="main-title">Social</h3>
                                <ul>
                                    <li>
                                        <FaGithub className='cv-icon'/>
                                        <a href="https://github.com/majcherrr87" target='_blank' rel="noopener noreferrer">GitHub</a>
                                    </li>
                                    <li>
                                        <GrFacebook className='cv-icon'/>
                                        <a href="https://www.facebook.com/adrian.majcher.568/" target='_blank' rel="noopener noreferrer">Facebook</a>
                                    </li>
                                    <li>
                                        <BsLinkedin className='cv-icon'/>
                                        <a href="https://www.linkedin.com/in/adrian-majcher-46a529163/" target='_blank' rel="noopener noreferrer">Linkedin</a>

                                    </li>
                                </ul>
                            </div>

                            <div className="skills-section">
                                <h3 className="main-title">Edukacja</h3>
                                <div className="timeline left-timeline">
                                    <div className="right-tl-content">
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Wyższa szkoła zarządzania i Administracji</h5>
                                            <p className="para"><b>Inżynier Oprogramowania</b></p>
                                            <p className="para">2013 - 2017</p>
                                        </div>
                                        <div className="tl-content">
                                            <h5 className="tl-title-2">Liceum profilowane</h5>
                                            <p className="para">o profilu <b>Zarządzanie informacją</b></p>
                                            <p className="para">2003 - 2006</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                    <section className="right-section">
                        <div className="right-main-content">
                            <section className="about sect">
                                <h2 className="right-title">Tech stack</h2>
                                <div className="tech-stock">
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>
                                    <div className="tech-stock-icon">
                                        <img src={html} alt=""/>
                                        <h5 className='tech-stock-desc'>HTML</h5>
                                    </div>

                                </div>
                            </section>
                            <section className="experience sect">
                                <h2 className="right-title">Kursy i szkolenia</h2>
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
                            <section className="awards sect">
                                <h2 className="right-title">Awards</h2>
                                <div className="timeline">
                                    <div className="left-tl-content">
                                        <h5 className="tl-title">Excellent Work</h5>
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
                                        <h5 className="tl-title">Excellent Work</h5>
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


