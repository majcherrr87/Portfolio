import React from "react";
import {TechStack} from "./TechStack";
import {Experience} from "./Experience";
import {Projects} from "./Projects";
import {Certificates} from "./Certificates";

export const RightSection = ({www}) => {
    return (
        <>
            <section className="right-section">
                <div className="right-main-content">
                    <TechStack/>
                    <Experience/>
                    <Projects www={www}/>
                    <Certificates/>
                </div>
            </section>
        </>
    )
}