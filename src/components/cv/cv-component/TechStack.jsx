import {dataTechStock} from "../data-cv";
import React from "react";

export const TechStack = () => {
    return (
        <>
            <section className="about sect">
                <h2 className="right-title">Tech stack</h2>
                <div className="tech-stock">
                    {dataTechStock.map(({name, logo}) =>{
                        return (
                            <div className="tech-stock-icon" key={name}>
                                <img src={logo} alt=""/>
                                <h5 className='tech-stock-desc '>{name}</h5>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}