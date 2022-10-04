import React from 'react';

import './about.css';
import {FaAward} from 'react-icons/fa';
import {BiTerminal} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc';
import ME from '../../assets/me-about.jpg';

export const About = () => {
    return (
        <section id='about'>
            <h5>Kilka słow</h5>
            <h2>O mnie</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Doświadczenie</h5>
                            <small>3+ Lata niekomercyjne</small>
                        </article>

                        <article className='about__card'>
                            <BiTerminal className='about__icon'/>
                            <h5>Kursy</h5>
                            <small>10+ On-line</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projekty</h5>
                            <small>30+ Kompletnych</small>
                        </article>
                    </div>
                    <p>
                        Jestem absolwentem Wyższej Szkoły Zarządzania i Administracji. Nie mam jeszcze doświadczenia zawodowego ale od wielu lat uczę się programowania na wielu kursach On-line czy też stacjonarnie
                    </p>

                    <a href="#contact" className='btn btn-primary'>Napisz do mnie</a>

                </div>
            </div>
        </section>
    )
}

