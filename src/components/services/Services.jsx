import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
import {data} from './data-service';

export const Services = () => {
    return (
        <section id='services'>
            <h5>Kursy</h5>
            <h2>Zdobyte doświadczenia</h2>

            <div className="container services__container">

                {data.map(({logo, skill}) => {
                    return (
                        <article className="service">
                            <div className="service__head">
                                <img className='service__head-icon' src={logo} alt=""/>
                            </div>
                            <ul className="service__list">
                                {skill.map(li => {
                                    return (
                                        <li>
                                            <BiCheck className='service__list-icon'/>
                                            <p>{li}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </article>
                    )
                })}
            </div>
        </section>
    )
};

