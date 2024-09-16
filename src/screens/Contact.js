import React, { useState, useRef } from 'react';
import NavBar from '../navigation/NavBar';
import { FaPaperPlane, FaEnvelope, FaUser, FaCommentAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ConfirmationModal = ({ isOpen, onClose, isError }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isError ? "Oops!" : "Thank You!"}</h2>
        <p>{isError 
          ? "There was an error sending your message. Please try again later." 
          : "Your message sent! I will try to respond as soon as I can :)"}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vvpir7f', 'template_g5g8xqc', form.current, 'MLNR7yuIGbcQuyQ1f') // ('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                setIsError(false);
                setIsModalOpen(true);
                // To reset the fields hehe
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                setIsError(true);
                setIsModalOpen(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <NavBar />
            <main className="contact-container">
                <h1 className="contact-title">Get in Touch! <FaPaperPlane /></h1>
                <p className="contact-subtitle">I'd love to hear from you! Drop me a message below.</p>
                <form className="contact-form" onSubmit={handleSubmit} ref={form}>
                    <div className="form-group">
                        <label htmlFor="name"><FaUser style={{marginRight: '5px'}} /> Name</label>
                        <input
                            type="text"
                            id="name"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"><FaEnvelope style={{marginRight: '5px'}} /> Email</label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message"><FaCommentAlt style={{marginRight: '5px'}} /> Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message <FaPaperPlane />
                    </button>
                </form>
                <ConfirmationModal isOpen={isModalOpen} onClose={closeModal} isError={isError} />
            </main>
        </div>
    );
};

export default Contact;