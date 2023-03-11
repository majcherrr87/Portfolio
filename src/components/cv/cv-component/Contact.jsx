import {HiOutlineLocationMarker, HiOutlineMailOpen} from "react-icons/hi";
import {BsGlobe, BsTelephone} from "react-icons/bs";
import React from "react";
import {dataProfile} from "../data-cv";
import {langTxt} from "../../../assets/assets";

export const Contact = ({www, lang}) => {
    const {city, tel, email, contact} = langTxt(lang, dataProfile)
    return (
        <>
            <div className="contact-info">
                <h3 className="main-title">{contact}</h3>
                <ul>
                    <li>
                        <HiOutlineLocationMarker className='cv-icon'/>
                        <a href="https://goo.gl/maps/H1zremZNWYgrKWQ36" target='_blank'
                           rel="noopener noreferrer">{city}</a>
                    </li>
                    <li>
                        <BsTelephone className='cv-icon'/>
                        <a href={"tel:" + tel}>{tel}</a>
                    </li>
                    <li>
                        <HiOutlineMailOpen className='cv-icon'/>
                        <a href={"mailto:" + email}>{email}</a>

                    </li>
                    <li>
                        <BsGlobe className='cv-icon'/>
                        <a href={'http://' + www} target='_blank'
                           rel="noopener noreferrer">{www}</a>
                    </li>
                </ul>
            </div>
        </>
    )
}