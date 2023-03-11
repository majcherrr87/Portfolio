import React from "react";
import {dataProfile} from '../data-cv';
import {Profile} from "./profile";
import {Contact} from "./Contact";
import {Social} from "./Social";
import {Education} from "./Education";
import {langTxt} from "../../../assets/assets";


export const LeftSection = ({avatar, www, lang}) => {
    const {name, career, bio,profile} = langTxt(lang, dataProfile)

    return (
        <>
            <section className="left-section">
                <div className="left-content">
                    <Profile name={name} career={career} avatar={avatar} bio={bio} profile={profile}/>
                    <Contact www={www} lang={lang}/>
                    <Social lang={lang}/>
                    <Education/>
                </div>

            </section>
        </>
    )
}