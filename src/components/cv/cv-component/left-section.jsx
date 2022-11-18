import React from "react";
import {dataProfile} from '../data-cv';
import {Profile} from "./profile";
import {Contact} from "./Contact";
import {Social} from "./Social";
import {Education} from "./Education";
import {BackToHomePage} from "./BackToHomePage";

export const LeftSection = ({avatar, bio, www}) => {
    return (
        <>
            <section className="left-section">
                <div className="left-content">
                    <Profile name={dataProfile.name} career={dataProfile.career} avatar={avatar} bio={bio}/>
                    <Contact www={www}/>
                    <Social/>
                    <Education/>
                </div>

            </section>
        </>
    )
}