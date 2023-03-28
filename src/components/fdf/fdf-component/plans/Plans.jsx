import React from 'react';
import {plansData} from '../../plansData';
import whiteTick from '../../../../assets/fdf/whiteTick.png';
import './plans.css'

export const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="programs-header second">
                <span className='stroke-text'>Ready to start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>now withus</span>
            </div>
        {/*    Plans*/}
            <div className='plans'>
                {plansData.map((plan, index) => (
                    <div className="plan" key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        
                        <div className="features">
                            {plan.features.map((feature, index) => (
                                <div className="feature">
                                    <img src={whiteTick} alt=""/>
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className="hero-btn">Join now</button>

                    </div>
                ))}
            </div>
        </div>
    )
}