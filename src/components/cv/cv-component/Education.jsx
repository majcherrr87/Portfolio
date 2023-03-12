import React from "react";
import {dataEdu} from "../data-cv";
import {selectLang} from "../../../assets/assets";

export const Education = () => {
    const text = selectLang(dataEdu, true);

    return (
        <>
            <div className="skills-section">
                <h3 className="main-title">{text[0].education}</h3>
                <div className="timeline left-timeline">
                    <div className="right-tl-content">
                        {text.map(({title, desc, year, city},index) => {
                            return (
                                <div className="tl-content" key={index}>
                                    <h5 className="tl-title-2 line">{title}</h5>
                                    <p className="para"><b>{desc}</b></p>

                                    <p className="para">{city} {year}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}