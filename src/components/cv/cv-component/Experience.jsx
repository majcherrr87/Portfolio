import {BiCheck} from "react-icons/bi";
import React from "react";
import {dataExperience} from '../data-cv';
import {selectLang} from "../../../assets/assets";

export const Experience = () => {
    const data = selectLang(dataExperience, true);
    return (
        <>
            <section className="experience sect">
                <h2 className="right-title small">{data[0].subject}</h2>

                {data.map(({id, logo, title, para, li}) => {
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