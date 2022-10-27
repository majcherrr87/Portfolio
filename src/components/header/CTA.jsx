import React from 'react';

import CV from '../../assets/cv.pdf';
import {Link} from "react-router-dom";

export const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Pobierz CV</a>
            <Link to="/cv" className='btn btn-primary'>Zobacz CV</Link>

        </div>
    )
};
