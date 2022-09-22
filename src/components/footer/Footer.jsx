import React from 'react';

import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';


export const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Majcher</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://www.facebook.com/adrian.majcher.568/"><FaFacebookF/></a>
                <a href="https://www.facebook.com/adrian.majcher.568/"><FiInstagram/></a>
                <a href="https://www.facebook.com/adrian.majcher.568/"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Majcher Tutorials. All rights reserved.</small>
            </div>
        </footer>
    )
};

