import React from 'react';

import './experience.css';

import {dataFront, dataBack, langTitle} from './data-experience';


export const Experience = ({lang}) => {
    const txtTitle = langTitle.find(el => el.lang === lang);

    return (
        <section id='experience'>
            <h5>{txtTitle.subTitle}</h5>
            <h2>{txtTitle.title}</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">

                        {dataFront.map(({id, name, logo, skill}) => {
                            return (
                                <article key={id} className='experience__details'>
                                    <img className='tech_stack_icon' src={logo} alt={name}/>
                                    <div>
                                        <h4>{name}</h4>
                                        <small className="text-light">{txtTitle[skill]}</small>
                                    </div>
                                </article>
                            )
                        })}


                    </div>

                </div>

                <div className="experience__backend">
                    <h3>Backend</h3>
                    <div className="experience__content">
                        {dataBack.map(({id, name, logo, skill}) => {
                            return (
                                <article key={id} className='experience__details'>
                                    <img className='tech_stack_icon' src={logo} alt={name}/>
                                    <div>
                                        <h4>{name}</h4>
                                        <small className="text-light">{txtTitle[skill]}</small>
                                    </div>
                                </article>
                            )
                        })}


                    </div>

                </div>
            </div>
        </section>
    )
}
