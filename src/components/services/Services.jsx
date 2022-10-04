import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {FaMedal} from "react-icons/fa";
import {data} from './data-service';

export const Services = () => {
    return (
        <section id='services'>
            <h5>Kursy</h5>
            <h2>Zdobyte doświadczenia</h2>

            <div className="container services__container">

                {data.map(({id,logo, description,link, skill, certificate }) => {
                    return (
                        <article key={id} className="service">
                            <div className="service__head">
                                <a href={link} target='_blank'>
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
                                            <a href={certificate} target='_blank'> Certyfikat  </a>
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

