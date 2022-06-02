import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
            <a href="http://github.com" target='_blank'><FaGithub/></a>
            <a href="http://facebook.com" target='_blank'><GrFacebook/></a>
        </div>
    );
};

export default HeaderSocials;
