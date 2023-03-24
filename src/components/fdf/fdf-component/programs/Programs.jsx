import React from 'react';
import './programs.css';
import {programsData} from '../../programsData';
import RightArrow from '../../../../assets/fdf/rightArrow.png';


export const Programs = () => {
    return (
        <div className="Programs" id='programs'>

        {/*    header*/}
            <div className="programs-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>
            <div className="program-categories">
                {programsData.map((program, index) => (
                    <div key={index} className="category">

                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}