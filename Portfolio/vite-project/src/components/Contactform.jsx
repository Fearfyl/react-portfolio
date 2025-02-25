import React, { useState } from 'react';
import '../style/contact.css';

function Contactform() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setErrorMessage('Please fill out all fields');
        } else if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
        } else {
            setErrorMessage('Message Sent');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
                <p>Name:</p>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name"
                    onChange={handleInputChange}
                />

                <p>Email:</p>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email.@mail.com"
                    onChange={handleInputChange}
                />

                <p>Message:</p>
                <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Your Message"
                    onChange={handleInputChange}
                ></textarea>

                <button type="submit">Send</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Contactform;
