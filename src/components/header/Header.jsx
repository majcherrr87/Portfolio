import React from 'react';
import {CTA} from './CTA';
import {HeaderSocials} from "./HeaderSocials";
import{dataLang} from './data-lang-Header'

import ME from '../../assets/Adrian.png';
import './header.css';


export const Header = ({lang}) => {
    const { hello, prof, myName, scroll, watchCv, downloadCv} = dataLang.find(tab => tab.lang === lang);

    return (
        <header>
            <div className="container header__container" id="header">

                <h5>{hello}</h5>
                <h1>{myName}</h1>
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


