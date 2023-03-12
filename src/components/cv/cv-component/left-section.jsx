import React from "react";
import {dataProfile} from '../data-cv';
import {Profile} from "./profile";
import {Contact} from "./Contact";
import {Social} from "./Social";
import {Education} from "./Education";
import {selectLang} from "../../../assets/assets";


export const LeftSection = ({avatar, www}) => {
    const {name, career, bio,profile} = selectLang(dataProfile)

    return (
        <>
            <section className="left-section">
                <div className="left-content">
                    <Profile name={name} career={career} avatar={avatar} bio={bio} profile={profile}/>
                    <Contact www={www} />
                    <Social />
                    <Education />
                </div>

            </section>
        </>
    )
}