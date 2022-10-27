import React from "react";
import {dataProjects} from "../data-cv";

export const Projects = ({www}) => {
    return (
        <section className="education sect">
            <h2 className="right-title">Projekty</h2>
            {
                dataProjects.map(({title, para, link},index) => {
                    return (
                        <div className="proj-content" key={index}>
                            <h5 className="tl-title-2 proj">{title}</h5>
                            {link.map((link,index) => {
                                return (
                                    <>

                                        <a id='link' key={index} href={link === 'www'? ('http://' + www) : link} target='_blank'
                                           rel="noopener noreferrer">{link === 'www'? www : link}</a><br/>
                                    </>
                                )
                            })}
                            <p className="para">{para}</p>
                        </div>
                    )
                })
            }
        </section>
    )
}