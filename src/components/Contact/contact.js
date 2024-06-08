import React, { useRef } from 'react';
import "./contact.css";
import FacebookIcon from "../../pics/facebookicon.png";
import InstaIcon from "../../pics/instaicon.png";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_gyw7z73', 'template_rhg3m1f', form.current, 'lE563NLJaVl1fDVel')
            .then(() => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent ! ');
             },
            (error) => {
                console.log('FAILED...', error.text);
                alert('Failed to send email. Please try again later.');
            });
        };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDescription'> Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name ="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>      
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className='links'>
                    <a href={"https://www.facebook.com/rosvelt.dumpit/"} target="_blank" rel="noopener noreferrer" className="workItem">
                        <img src={FacebookIcon} alt='Facebook' className='link' />
                    </a>
                    <a href={"https://www.instagram.com/ross01_online/"} target="_blank" rel="noopener noreferrer" className="workItem">    
                        <img src={InstaIcon} alt='Instagram' className='link' />
                    </a>
                    </div>
                </form>           
            </div>
        </section>

    );
}

export default Contact;
