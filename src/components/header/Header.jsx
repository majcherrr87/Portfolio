import React from 'react';
import {CTA} from './CTA';
import {HeaderSocials} from "./HeaderSocials";
import{dataLang} from './data-lang-Header'
import {selectLang} from "../../assets/assets";

import ME from '../../assets/Adrian.png';
import './header.css';


export const Header = () => {
    const { subtitle, prof, title, scroll, watchCv, downloadCv} = selectLang(dataLang);


    return (
        <header>
            <div className="container header__container nav-position" id="header">

                <h5>{subtitle}</h5>
                <h1>{title}</h1>
                <h5 className="text-light">{prof}</h5>
                <CTA watchCv={watchCv} downloadCv={downloadCv}/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className='scroll__down'>{scroll}</a>
            </div>
        </header>
    )
};


