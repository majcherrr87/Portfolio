import React, { useEffect, useState } from 'react'
import './cv.css'
import { LeftSection } from "./cv-component/left-section";
import { RightSection } from "./cv-component/RightSection";
import {BackToHomePage} from "./cv-component/BackToHomePage";

export const Cv = ({lang}) => {
    const [userAvatar, setUserAvatar] = useState('');
    const [userWww, setUserWww] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/majcherrr87`);
            const data = await res.json();
            setUserAvatar(data.avatar_url);
            setUserWww(data.blog);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className='cv-container'>
                <BackToHomePage lang={lang}/>
                <main className='main-content'>
                    <LeftSection lang={lang} avatar={userAvatar} www={userWww} />
                    <RightSection www={userWww} />
                </main>
            </div>
        </>
    )
};


