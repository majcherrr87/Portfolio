import React, {useState} from 'react';

import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from "react-icons/fi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import {GrLanguage} from "react-icons/gr";



export const Nav = ({lang}) => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <div>
            <nav>
                <a href="#header"
                   onClick={() => setActiveNav('#')}
                   className={activeNav === '#' ? 'active' : ''}>
                    <AiOutlineHome/>
                </a>
                <a href="#about"
                   onClick={() => setActiveNav('#about')}
                   className={activeNav === '#about' ? 'active' : ''}>
                    <AiOutlineUser/>
                </a>
                <a href="#experience"
                   onClick={() => setActiveNav('#experience')}
                   className={activeNav === '#experience' ? 'active' : ''}>
                    <FiBook/>
                </a>
                <a href="#portfolio"
                   onClick={() => setActiveNav('#portfolio')}
                   className={activeNav === '#portfolio' ? 'active' : ''}>
                    <RiServiceLine/>
                </a>
                <a href="#contact"
                   onClick={() => setActiveNav('#contact')}
                   className={activeNav === '#contact' ? 'active' : ''}>
                    <BiMessageSquareDetail/>
                </a>
                <a href="/"
                   onClick={() => localStorage.setItem('lang', lang === 'PL' ? 'EN' : 'PL')}
                >

                    <span>POL</span>
                    TODO: ustawić ikone zmiany języka

                </a>
            </nav>
        </div>
    )
};

