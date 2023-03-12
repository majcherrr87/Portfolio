import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";



export const BackToHomePage = () => {
    const lang = localStorage.getItem('lang');
    return (
        <>
            <Link to='/'>
                <div id="backToHomePage">
                    <IoMdArrowRoundBack className='cv-icon' /><span>{lang === 'POL'?'Powrót': 'Back'}</span>
                </div>
            </Link>


        </>
    )
}