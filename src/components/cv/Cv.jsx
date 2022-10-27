import React, {useEffect, useState} from 'react'
import './cv.css'
import {LeftSection} from "./cv-component/left-section";
import {RightSection} from "./cv-component/RightSection";

export const Cv = () => {
    const [userAvatar, setUserAvatar] = useState('');
    const [userBio, setUserBio] = useState('');
    const [userWww, setUserWww] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/majcherrr87`);
            const data = await res.json();
            setUserAvatar(data.avatar_url);
            setUserBio(data.bio);
            setUserWww(data.blog);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className='cv-container'>
                <main className='main-content'>
                    <LeftSection avatar={userAvatar} bio={userBio} www={userWww}/>
                    <RightSection www={userWww}/>
                </main>
            </div>
        </>
    )
};


