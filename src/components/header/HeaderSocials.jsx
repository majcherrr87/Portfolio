import React from 'react';

import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {GrFacebook} from 'react-icons/gr';

export const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/adrian-majcher-46a529163" target='_blank'><BsLinkedin/></a>
            <a href="https://github.com/majcherrr87" target='_blank'><FaGithub/></a>
            <a href="https://www.facebook.com/adrian.majcher.568/" target='_blank'><GrFacebook/></a>
        </div>
    );
};


