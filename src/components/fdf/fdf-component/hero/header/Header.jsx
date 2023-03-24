import React from 'react';
import logo from '../../../../../assets/fdf/logo.png';
import './Header.css';

export const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" className='logo'/>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}