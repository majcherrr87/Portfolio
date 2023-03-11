import React from 'react';

import './about.css';
import {FaAward} from 'react-icons/fa';
import {BiTerminal} from 'react-icons/bi';
import {VscFolderLibrary} from 'react-icons/vsc';
import ME from '../../assets/Adrian2.jpg';
import {dataLang} from "../about/data-lang-about";

export const About = ({lang}) => {
    const {title, subtitle, description, button, cardTitle1, cardSubtitle1, cardTitle2, cardSubtitle2, cardTitle3, cardSubtitle3} = dataLang.find(tab => tab.lang === lang);
    return (
        <section id='about'>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="Zdciącie Adriana Majchera"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">

                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>{cardTitle1}</h5>
                            <small>{cardSubtitle1}</small>
                        </article>

                        <article className='about__card'>
                            <BiTerminal className='about__icon'/>
                            <h5>{cardTitle2}</h5>
                            <small>{cardSubtitle2}</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>{cardTitle3}</h5>
                            <small>{cardSubtitle3}</small>
                        </article>
                    </div>
                    <p>
                        {description}
                    </p>

                    <a href="#contact" className='btn btn-primary'>{button}</a>

                </div>
            </div>
        </section>
    )
}

