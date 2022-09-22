import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {data} from './data-contact';

import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z03hcrd', 'template_x5pb2kr', form.current, 'BG1c2DDI-NkQ3m80R')

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">

                    {data.map(({id, icon, title, link, address, info}) => {
                      return (
                          <article key={id} className="contact__option">
                              {id === 1 ? <MdOutlineEmail className='contact__option-icon'/> : ''}
                              {id === 2 ? <RiMessengerLine className='contact__option-icon'/> : ''}
                              {id === 3 ? <BsWhatsapp className='contact__option-icon'/> : ''}
                              <h4>{title}</h4>

                              <h5>{link}</h5>
                              <a href={address} target="_blank">{info}</a>
                          </article>
                      )
                    })}

                    {/*<article className="contact__option">*/}
                    {/*    <MdOutlineEmail className='contact__option-icon'/>*/}
                    {/*    <h4>Email</h4>*/}
                    {/*    <h5>majcherrr87@gmail.com</h5>*/}
                    {/*    <a href="mailto:majcherrr87@gmail.com" target="_blank">Send a message</a>*/}
                    {/*</article>*/}
                    {/*<article className="contact__option">*/}
                    {/*    <RiMessengerLine className='contact__option-icon'/>*/}
                    {/*    <h4>Messenger</h4>*/}
                    {/*    <h5>Adrian Majcher</h5>*/}
                    {/*    <a href="https://m.me/adrian.majcher.568" target="_blank">Send a message</a>*/}
                    {/*</article>*/}
                    {/*<article className="contact__option">*/}
                    {/*    <BsWhatsapp className='contact__option-icon'/>*/}
                    {/*    <h4>Whatsapp</h4>*/}
                    {/*    <h5>513354369</h5>*/}
                    {/*    <a href="https://api.whatsapp.com/send?phone=513354369" target="_blank">Send a message</a>*/}
                    {/*</article>*/}
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}


