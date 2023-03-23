import React, {useState} from 'react';

import './nav.css';
import homeIco from '../../assets/svg/homeIco.svg'
import messageIco from '../../assets/svg/messageIco.svg'
import aboutIco from '../../assets/svg/aboutIco.svg'
import skills from '../../assets/svg/skills.svg'
import portfolioIco from '../../assets/svg/portfolioIco.svg'
import {selectLang} from "../../assets/assets";
import {DataLangNav} from '../nav/data-lang-nav';

export const Nav = () => {
    const [activeNav, setActiveNav] = useState({name: '#header', index: 0});
    const lang = localStorage.getItem('lang');
    const changeLang = lang === 'POL' ? 'ENG' : 'POL';
    const indicator = document.querySelector('[data-indicator]');
    const {home, about, experience, portfolio, contact} = selectLang(DataLangNav);


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
                    <li onClick={() => setActiveNav({name: '#header', index: 0})} className={activeNav.name === '#header' ? 'active' : ''}><a href="#header">
                        <div className='icon'>
                            <img src={homeIco} alt="home"/>
                        </div>
                        <div className='text'>{home}</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#about', index: 1})} className={activeNav.name === '#about' ? 'active' : ''}><a href="#about">
                        <div className='icon'>
                            <img src={aboutIco} alt="about"/>
                        </div>
                        <div className='text'>{about}</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#experience', index: 2})} className={activeNav.name === '#experience' ? 'active' : ''}><a href="#experience">
                        <div className='icon'>
                            <img src={skills} alt="experience"/>
                        </div>
                        <div className='text'>{experience}</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#portfolio', index: 3})} className={activeNav.name === '#portfolio' ? 'active' : ''}><a href="#portfolio">
                        <div className='icon'>
                            <img src={portfolioIco} alt="portfolio"/>
                        </div>
                        <div className='text'>{portfolio}</div>
                    </a></li>

                    <li onClick={() => setActiveNav({name: '#contact', index: 4})} className={activeNav.name === '#contact' ? 'active' : ''}><a href="#contact">
                        <div className='icon'>
                            <img src={messageIco} alt="contact"/>
                        </div>
                        <div className='text'>{contact}</div>
                    </a></li>

                    <li onClick={() =>  localStorage.setItem('lang', changeLang)} className={activeNav.name === '#language' ? 'active' : ''}><a href="/">
                        <div className='icon'>
                            {changeLang}
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

