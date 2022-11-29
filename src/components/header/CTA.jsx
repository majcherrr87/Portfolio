import React from 'react';
import {Link} from "react-router-dom";

import CV from '../../assets/CV_AdrianMajcher.pdf';

export const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Pobierz CV</a>
            <Link to="/cv" className='btn btn-primary'>Zobacz CV</Link>

        </div>
    )
};
