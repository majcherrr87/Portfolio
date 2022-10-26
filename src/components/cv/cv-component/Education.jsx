import React from "react";
import {dataEdu} from "../data-cv";

export const Education = () => {
    return (
        <>
            <div className="skills-section">
                <h3 className="main-title">Edukacja</h3>
                <div className="timeline left-timeline">
                    <div className="right-tl-content">
                        {dataEdu.map(({title, desc, year},index) => {
                            return (
                                <div className="tl-content" key={index}>
                                    <h5 className="tl-title-2">{title}</h5>
                                    <p className="para"><b>{desc}</b></p>
                                    <p className="para">{year}</p>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}