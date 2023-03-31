import React, {useState} from 'react';
import {testimonialsData} from '../../testimonialsData';
import leftArrow from '../../../../assets/fdf/leftArrow.png';
import rightArrow from '../../../../assets/fdf/rightArrow.png';
import {motion} from 'framer-motion';

import './Testimonials.css';

export const Testimonials = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

    return (
        <div className='Testimonials' id='testimonials'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{opacity: 0, x:-100}}
                    animate={{opacity: 1, x:0}}
                    exit={{opacity: 1, x:-100}}
                    transition={transition}
                >
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span>{' '}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.div
                    initial={{opacity: 0, x: 100}}
                    transition={{...transition, duration: 2}}
                    whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.img
                    key={selected}
                    initial={{opacity: 0, x:100}}
                    animate={{opacity: 1, x:0}}
                    exit={{opacity: 1, x:-100}}
                    transition={transition}
                    src={testimonialsData[selected].image}
                    alt=""/>
                <div className="arrows">
                    <img
                        onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                        src={leftArrow} alt=""/>
                    <img
                        onClick={() => {
                            selected === tLength -1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                        src={rightArrow} alt=""/>
                </div>
            </div>
        </div>
    )
}