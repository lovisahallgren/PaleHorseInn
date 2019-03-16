import React from 'react';
import ContactItem from '../ContactItem';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-content">
                <ContactItem contactText="Contact us" phone="076-823 17 86" email="palehorseinn@gmail.com"/>
            </div>
        </div>
    )
}

export default Contact;