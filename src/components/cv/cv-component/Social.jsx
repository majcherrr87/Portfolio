import {FaGithub} from "react-icons/fa";
import {GrFacebook} from "react-icons/gr";
import {BsLinkedin} from "react-icons/bs";
import React from "react";
import {dataProfile} from "../data-cv";

export const Social = () => {
    return (
        <>
            <div className="contact-info">
                <h3 className="main-title">Social</h3>
                <ul>
                    <li>
                        <FaGithub className='cv-icon'/>
                        <a href={dataProfile.github} target='_blank'
                           rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <GrFacebook className='cv-icon'/>
                        <a href={dataProfile.facebook} target='_blank'
                           rel="noopener noreferrer">Facebook</a>
                    </li>
                    <li>
                        <BsLinkedin className='cv-icon'/>
                        <a href={dataProfile.linkedin} target='_blank'
                           rel="noopener noreferrer">Linkedin</a>

                    </li>
                </ul>
            </div>
        </>
    )
}