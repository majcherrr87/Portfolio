import React, {useState} from 'react';

import './nav.css';
import home from '../../assets/svg/home.svg'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from "react-icons/fi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const lang = localStorage.getItem('lang');
    const changeLang = lang === 'POL' ? 'ENG' : 'POL';


// TODO: 'https://www.youtube.com/watch?v=YaONowiQKW8&t=480s 53:39'
    return (
        <div>
            <nav className='navbar-container'>
                <ul className='nav-list'>
                    <div className="indicator">
                        <div className="corners"></div>
                    </div>
                    <li onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Home</div>
                    </a></li>

                    <li onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>About</div>
                    </a></li>

                    <li onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Experience</div>
                    </a></li>

                    <li onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Portfolio</div>
                    </a></li>

                    <li onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Contact</div>
                    </a></li>

                    <li onClick={() => setActiveNav('#language')} className={activeNav === '#language' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Language</div>
                    </a></li>
                </ul>
            </nav>


            {/*<nav>*/}
            {/*    <a href="#header"*/}
            {/*       title='Home'*/}
            {/*       onClick={() => setActiveNav('#')}*/}
            {/*       className={activeNav === '#' ? 'active' : ''}>*/}
            {/*        <AiOutlineHome/>*/}
            {/*    </a>*/}
            {/*    <a href="#about"*/}
            {/*       title='about'*/}
            {/*       onClick={() => setActiveNav('#about')}*/}
            {/*       className={activeNav === '#about' ? 'active' : ''}>*/}
            {/*        <AiOutlineUser/>*/}
            {/*    </a>*/}
            {/*    <a href="#experience"*/}
            {/*       title='experience'*/}
            {/*       onClick={() => setActiveNav('#experience')}*/}
            {/*       className={activeNav === '#experience' ? 'active' : ''}>*/}
            {/*        <FiBook/>*/}
            {/*    </a>*/}
            {/*    <a href="#portfolio"*/}
            {/*       title='portfolio'*/}
            {/*       onClick={() => setActiveNav('#portfolio')}*/}
            {/*       className={activeNav === '#portfolio' ? 'active' : ''}>*/}
            {/*        <RiServiceLine/>*/}
            {/*    </a>*/}
            {/*    <a href="#contact"*/}
            {/*       title='contacte'*/}
            {/*       onClick={() => setActiveNav('#contact')}*/}
            {/*       className={activeNav === '#contact' ? 'active' : ''}>*/}
            {/*        <BiMessageSquareDetail/>*/}
            {/*    </a>*/}
            {/*    */}
            {/*    <a href="/"*/}

            {/*       title='change language'*/}
            {/*       onClick={() => localStorage.setItem('lang', changeLang)}*/}
            {/*    >*/}
            {/*        {changeLang}*/}
            {/*    </a>*/}
            {/*</nav>*/}
        </div>
    )
};

