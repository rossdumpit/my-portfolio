import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import Aos from 'aos'
import { Bounce, toast } from "react-toastify";

const ContactMe = ()=>{
    const form = useRef();
    const [isSending,setIsSending] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        if(!isSending){
            setIsSending(true)
            emailjs
                .sendForm('service_gyw7z73', 'template_rhg3m1f', form.current, 'lE563NLJaVl1fDVel')
                .then(() => {
                    e.target.reset();
                    setIsSending(false)
                    toast.success('Email sent!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                },
                (error) => {
                    setIsSending(false)
                    toast.error('Sending failed...', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });
                });
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 1000,  // Animation duration in ms
            once: true,      // Run the animation once
        });
    }, []);

    return(
        <div data-aos={"fade-up"} className="col-lg-8 offset-lg-1">
            <div className="row mb-5">
                <div className="col">
                    <h1 className="fs-4 fw-bold">Get in touch</h1>
                    <p>Reach out if you'd like to discuss potential work opportunities or collaborations. I'm always open to new projects!</p>
                    <div className="row d-flex">
                        <div className="col-md-8 col-lg-6">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3"><label className="form-label">Name</label><input id="name" className="form-control" type="text" name="your_name" placeholder="Name" /></div>
                                <div className="mb-3"><label className="form-label">Email</label><input id="email" className="form-control" type="email" name="your_email" placeholder="Email" /></div>
                                <div className="mb-3"><label className="form-label">Project Details</label><textarea id="message" className="form-control" name="message" rows="6" placeholder="Message"></textarea></div>
                                <button type="submit" disabled={isSending} value="Send" className="contact-me-button p-2 rounded shadow-none w-100 font-lg fs-5 mb-2">
                                    {isSending?<div className="loader mx-auto"/>:'Send'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe