import React from "react";
import {dataCertificates} from "../data-cv";

export const Certificates = () => {
    return (
        <section className="education sect">
            <h2 className="right-title">Certyfikaty</h2>
            {dataCertificates.map(({title, link}, index) => {
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