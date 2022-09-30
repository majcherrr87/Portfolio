import React from 'react';

import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';


export const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Adrian Majcher</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/adrian-majcher-46a529163" target='_blank'><BsLinkedin/></a>
                <a href="https://github.com/majcherrr87" target='_blank'><FaGithub/></a>
                <a href="https://www.facebook.com/adrian.majcher.568/" target='_blank'><GrFacebook/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Adrian Majcher wszelkie prawa zastrzeżone.</small>
            </div>
        </footer>
    )
};

