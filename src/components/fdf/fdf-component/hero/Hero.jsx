import React from 'react';
import {Header} from "./header/Header";

import './Hero.css';


export const Hero = () => {
    return (
        <div className='hero'>
            <div className="left-h">
                <Header/>
            </div>
            <div className="right-h">left side</div>
        </div>
    )
}