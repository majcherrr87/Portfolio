import {HiOutlineLocationMarker, HiOutlineMailOpen} from "react-icons/hi";
import {BsGlobe, BsTelephone} from "react-icons/bs";
import React from "react";
import {dataProfile} from "../data-cv";

export const Contact = ({www}) => {
    return (
        <>
            <div className="contact-info">
                <h3 className="main-title">Kontakt</h3>
                <ul>
                    <li>
                        <HiOutlineLocationMarker className='cv-icon'/>
                        <a href="https://goo.gl/maps/H1zremZNWYgrKWQ36" target='_blank'
                           rel="noopener noreferrer">{dataProfile.city}</a>
                    </li>
                    <li>
                        <BsTelephone className='cv-icon'/>
                        <a href={"tel:" + dataProfile.tel}>{dataProfile.tel}</a>
                    </li>
                    <li>
                        <HiOutlineMailOpen className='cv-icon'/>
                        <a href={"mailto:" + dataProfile.email}>{dataProfile.email}</a>

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