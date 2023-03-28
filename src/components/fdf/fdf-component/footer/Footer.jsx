import React from 'react';
import Github from '../../../../assets/fdf/github.png';
import Instagram from '../../../../assets/fdf/instagram.png';
import LinkedIn from '../../../../assets/fdf/linkedin.png';
import Logo from '../../../../assets/fdf/logo.png';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt=""/>
                    <img src={Instagram} alt=""/>
                    <img src={LinkedIn} alt=""/>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt=""/>
                </div>
            </div>
        </div>
    )
}