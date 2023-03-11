import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {FaMedal} from "react-icons/fa";
import {data} from './data-service';

export const Services = ({lang}) => {
    const card = data.filter(tab => tab.lang === lang);
    return (
        <section id='services'>
            <h5>{card[0].subtitle}</h5>
            <h2>{card[0].title}</h2>


            <div className="container services__container">

                {card.map(({id,logo, description,link, skill, certificate }) => {
                    return (
                        <article key={id} className="service">
                            <div className="service__head">
                                <a href={link} target='_blank' rel="noopener noreferrer">
                                    <img className='service__head-icon' src={logo} alt=""/>
                                </a>

                            </div>
                            <ul className="service__list">
                                <p>{description}</p>
                                {skill.map((li,index) => {
                                    return (
                                        <li key={index}>

                                            <BiCheck className='service__list-icon'/>
                                            <p>{li}</p>
                                        </li>
                                    )
                                })}
                                {
                                    certificate
                                        ?
                                        <li>
                                            <FaMedal className='service__list-icon'/>
                                            <a href={certificate} target='_blank' rel="noopener noreferrer"> Certyfikat  </a>
                                        </li>
                                        : ''
                                }
                            </ul>
                        </article>
                    )
                })}
            </div>
        </section>
    )
};

