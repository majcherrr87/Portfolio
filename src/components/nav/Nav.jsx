import React, {useState} from 'react';

import './nav.css';
import home from '../../assets/svg/home.svg'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from "react-icons/fi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export const Nav = () => {
    const [activeNav, setActiveNav] = useState({name: '#', index: 0});
    const lang = localStorage.getItem('lang');
    const changeLang = lang === 'POL' ? 'ENG' : 'POL';
    const indicator = document.querySelector('[data-indicator]');

    if (indicator != null){
        indicator.style.setProperty('--position', activeNav.index);
    }


    return (
        <div>
            <nav className='navbar-container'>
                <ul className='nav-list'>
                    <div data-indicator className="indicator">
                        <div className="corners"></div>
                    </div>
                    <li onClick={() => setActiveNav({name: '#', index: 0})} className={activeNav.name === '#' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Home</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#about', index: 1})} className={activeNav.name === '#about' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>About</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#experience', index: 2})} className={activeNav.name === '#experience' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Experience</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#portfolio', index: 3})} className={activeNav.name === '#portfolio' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Portfolio</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#contact', index: 4})} className={activeNav.name === '#contact' ? 'active' : ''}><a href="#">
                        <div className='icon'>
                            <img src={home} alt="home"/>
                        </div>
                        <div className='text'>Contact</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#language', index: 5})} className={activeNav.name === '#language' ? 'active' : ''}><a href="#">
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

