import React from "react";
import {dataProjects} from "../data-cv";
import {selectLang} from "../../../assets/assets";

export const Projects = ({www}) => {
    const data = selectLang(dataProjects,true);
    return (
        <section className="education sect">
            <h2 className="right-title">{data[0].subject}</h2>
            {
                data.map(({title, para, link},index) => {
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