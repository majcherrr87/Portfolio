import React from 'react';
import {data} from "./data-footer";

import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';


export const Footer = ({lang}) => {
    const {home, about, courses, skills, portfolio, opinions, contact, copyright} = data.find(el => el.lang === lang);
    return (
        <footer>
            <a href="#header" className='footer__logo'>Adrian Majcher</a>

            <ul className='permalinks'>
                <li><a href="#header">{home}</a></li>
                <li><a href="#about">{about}</a></li>
                <li><a href="#services">{courses}</a></li>
                <li><a href="#experience">{skills}</a></li>
                <li><a href="#portfolio">{portfolio}</a></li>
                <li><a href="#testimonials">{opinions}</a></li>
                <li><a href="#contact">{contact}</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/adrian-majcher-46a529163" target='_blank' rel="noopener noreferrer"><BsLinkedin/></a>
                <a href="https://github.com/majcherrr87" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.facebook.com/adrian.majcher.568/" target='_blank' rel="noopener noreferrer"><GrFacebook/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; {copyright}</small>
            </div>
        </footer>
    )
};

