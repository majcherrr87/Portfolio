import React from 'react';
import {CTA} from './CTA';
import {HeaderSocials} from "./HeaderSocials";

import ME from '../../assets/Adrian.png';
import './header.css';


export const Header = () => {
    return (
        <header>
            <div className="container header__container" id="header">
                <h5>Cześć jestem</h5>
                <h1>Adrian Majcher</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>Zjedź w dół    -></a>
            </div>
        </header>
    )
};


