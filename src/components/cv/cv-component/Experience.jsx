import {BiCheck} from "react-icons/bi";
import React from "react";
import {dataExperience} from '../data-cv';

export const Experience = () => {
    return (
        <>
            <section className="experience sect">
                <h2 className="right-title small">Kursy i szkolenia</h2>

                {dataExperience.map(({id, logo, title, para, li}) => {
                    return (
                        <>
                            <div className="timeline" key={id}>
                                <div className="left-tl-content">
                                    <img id={id} src={logo} alt={id}/>
                                </div>
                                <div className="right-tl-content">
                                    <div className="tl-content">
                                        <h5 className="tl-title-2 line">{title}</h5>

                                        <p className="para">{para}</p>
                                        {li.map((li,index) => {
                                            return (
                                                <ul>
                                                    <li key={index}>
                                                        <BiCheck className='service__list-icon'/>
                                                        <span>{li}</span>
                                                    </li>
                                                </ul>
                                            )
                                        })}

                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}