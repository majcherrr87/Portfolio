import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {data, langData} from './data-contact';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {selectLang} from "../../assets/assets";

import './contact.css';


export const Contact = () => {
    const [message, setMessage] = useState('');
    const form = useRef();
    const {title, subTitle, sendInfo, PHName, PHEmail, PHMessage, Button, SendMessage} = selectLang(langData);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z03hcrd', 'template_x5pb2kr', form.current, 'BG1c2DDI-NkQ3m80R')
            .then(()=> {

                setMessage(SendMessage)
            })
        setTimeout(() => {
            setMessage('')
        },5000)

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>{subTitle}</h5>
            <h2>{title}</h2>
            <div className="container contact__container">
                <div className="contact__options">

                    {data.map(({id, title, link, address}) => {
                      return (
                          <article key={id} className="contact__option">
                              {id === 0 ? <MdOutlineEmail className='contact__option-icon'/> : ''}
                              {id === 1 ? <RiMessengerLine className='contact__option-icon'/> : ''}
                              {id === 2 ? <BsWhatsapp className='contact__option-icon'/> : ''}
                              <h4>{title}</h4>

                              <h5>{link}</h5>
                              <a href={address} target="_blank" rel="noopener noreferrer">{sendInfo[id]}</a>
                          </article>
                      )
                    })}

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder={PHName} required/>
                    <input type="email" name='email' placeholder={PHEmail} required/>
                    <textarea name="message" rows="7" placeholder={PHMessage} required ></textarea>
                    <p className="contact__message">{message}</p>
                    <button type='submit' className='btn btn-primary'>{Button}</button>
                </form>
            </div>
        </section>
    )
}


