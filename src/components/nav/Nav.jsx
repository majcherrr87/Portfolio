import React, {useState} from 'react';

import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from "react-icons/fi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    const lang = localStorage.getItem('lang');
    const changeLang = lang === 'POL' ? 'ENG' : 'POL';

    return (
        <div>
            <nav>
                <a href="#header"
                   title='Home'
                   onClick={() => setActiveNav('#')}
                   className={activeNav === '#' ? 'active' : ''}>
                    <AiOutlineHome/>
                </a>
                <a href="#about"
                   title='about'
                   onClick={() => setActiveNav('#about')}
                   className={activeNav === '#about' ? 'active' : ''}>
                    <AiOutlineUser/>
                </a>
                <a href="#experience"
                   title='experience'
                   onClick={() => setActiveNav('#experience')}
                   className={activeNav === '#experience' ? 'active' : ''}>
                    <FiBook/>
                </a>
                <a href="#portfolio"
                   title='portfolio'
                   onClick={() => setActiveNav('#portfolio')}
                   className={activeNav === '#portfolio' ? 'active' : ''}>
                    <RiServiceLine/>
                </a>
                <a href="#contact"
                   title='contacte'
                   onClick={() => setActiveNav('#contact')}
                   className={activeNav === '#contact' ? 'active' : ''}>
                    <BiMessageSquareDetail/>
                </a>
                
                <a href="/"

                   title='change language'
                   onClick={() => localStorage.setItem('lang', changeLang)}
                >
                    {changeLang}
                </a>
            </nav>
        </div>
    )
};

