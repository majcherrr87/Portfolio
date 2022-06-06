import React from 'react';

import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from "react-icons/fi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";

export const Nav = () => {
    return (
        <div>
            <nav>
                <a href="#"><AiOutlineHome/></a>
                <a href="#about"><AiOutlineUser/></a>
                <a href="#experience"><FiBook/></a>
                <a href="#portfolio"><RiServiceLine/></a>
                <a href="#contact"><BiMessageSquareDetail/></a>
            </nav>
        </div>
    )
};

