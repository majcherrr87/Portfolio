import React from 'react';
import {Link} from "react-router-dom";

import CV from '../../assets/CV_AdrianMajcher.pdf';

export const CTA = ({watchCv, downloadCv}) => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>{downloadCv}</a>
            <Link to="/cv" className='btn btn-primary'>{watchCv}</Link>
        </div>
    )
};
