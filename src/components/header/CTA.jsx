import React from 'react';
import {Link} from "react-router-dom";

import cvPol from '../../assets/CV-POL_AdrianMajcher.pdf';
import cvEng from '../../assets/CV-ENG_AdrianMajcher.pdf';
const lang = localStorage.getItem('lang');
const CV = lang === 'POL'? cvPol : cvEng;

export const CTA = ({watchCv, downloadCv}) => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>{downloadCv}</a>
            <Link to="/cv" className='btn btn-primary'>{watchCv}</Link>
        </div>
    )
};
