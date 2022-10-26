import React from "react";

export const Profile = ({name, career,avatar, bio}) => {
    return (
        <>
            <div className="profile">
                <div className="image">
                    <img src={avatar} alt={name}/>
                </div>
                <h2 className="cv-name">{name}</h2>
                <p className="career">{career}</p>
            </div>
            <div className="contact-info">
                <h3 className="main-title">Profil</h3>
                <p>{bio}</p>
            </div>
        </>
    )
}