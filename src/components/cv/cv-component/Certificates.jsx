import React from "react";
import {dataCertificates} from "../data-cv";
import {selectLang} from "../../../assets/assets";

export const Certificates = () => {
    const data = selectLang(dataCertificates, true);
    return (
        <section className="education sect">
            <h2 className="right-title">{data[0].subject}</h2>
            {data.map(({title, link}, index) => {
                return (
                    <div className="proj-content" key={index}>
                        <h5 className="tl-title-2 proj">{title}</h5>
                        <a id='link' href={link} target='_blank'
                           rel="noopener noreferrer">{link}</a>
                    </div>
                )
            })}
        </section>
    )
}