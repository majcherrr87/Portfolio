import React, {useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import {data} from './data-contact';

import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';


export const Contact = () => {
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z03hcrd', 'template_x5pb2kr', form.current, 'BG1c2DDI-NkQ3m80R')
            .then(()=> {
                setMessage('Wiadomość została wysłana ✅')
            })
        setTimeout(() => {
            setMessage('')
        },5000)

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Napisz do mnie</h5>
            <h2>Kontakt</h2>
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
                              <a href={address} target="_blank" rel="noopener noreferrer">{info}</a>
                          </article>
                      )
                    })}

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Imię i Nazwisko' required/>
                    <input type="email" name='email' placeholder='Twój e-mail' required/>
                    <textarea name="message" rows="7" placeholder='Wiadomość' required ></textarea>
                    <p className="contact__message">{message}</p>
                    <button type='submit' className='btn btn-primary'>Wyślij emila</button>
                </form>
            </div>
        </section>
    )
}


