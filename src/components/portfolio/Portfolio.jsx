import React from 'react';
import {data, dataLang} from './data-portfolio';
import {selectLang} from "../../assets/assets";

import './portfolio.css';

export const Portfolio = () => {
    const {title, subTitle, names} = selectLang(dataLang)
    return (
        <section id='portfolio'>
            <h5>{subTitle}</h5>
            <h2>{title}</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id,image, github, demo}, ) => {
                        return (
                            <article className="portfolio__item" key={id}>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={names[id]}/>
                                </div>
                                <h3>{names[id]}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>

                                    {demo.includes('#')
                                    ? <a href={demo} className='btn btn-primary'>Live Demo</a>
                                    : <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                                    }
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

