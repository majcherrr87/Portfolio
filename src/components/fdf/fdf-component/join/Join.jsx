import React, {useRef} from 'react';

import './Join.css';

export const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form)
    };

    return (
        <div className='Join' id='join-is'>
            <div className="left-j">
                <hr/>
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Enter your Email address'/>
                    <button className='hero-btn btn-j'>Video Now</button>
                </form>
            </div>
        </div>
    )
}