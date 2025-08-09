import React, { useState, useRef, useEffect } from 'react';
import './Contact.scss';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const logos = ['🦊', '🚀', '🎮', '🎧', '🧠', '💡'];

// Correct prop name here
const Contact = ({ onGameLogoClick }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    time: '',
  });

  const form = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Update time whenever formData changes
  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString();
    setFormData((prev) => ({ ...prev, time: formatted }));
  }, [formData.name, formData.email, formData.message]);

  const handleEmailClick = () => {
    if (!showInfo) {
      setLogoIndex((prev) => (prev + 1) % logos.length);
    }
    setShowInfo((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vhak3h1', 'template_hn57t6a', form.current, {
        publicKey: 'Jpb71iLrMB-WeE901',
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setFormData({ name: '', email: '', message: '', time: '' });
        },
        () => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        {/* Info Box */}
        <div className={`info-box ${showInfo ? 'active' : ''}`}>
          <div className="title">Send a Message</div>
          <form ref={form} className="contact-eform" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <input type="hidden" name="time" value={formData.time} />
            <button type="submit">Send</button>
            {error && <div className="error-msg">❌ Something went wrong.</div>}
            {success && <div className="success-msg">✅ Message sent successfully!</div>}
          </form>
        </div>

        {/* Logo Box */}
        {!showInfo && (
          <div className="logo-box">
            {logoIndex === 2 ? (
              // Use the correct prop name here
              <div className="logo-icon" onClick={onGameLogoClick}>{logos[logoIndex]}</div>
            ) : (
              <div className="logo-icon">{logos[logoIndex]}</div>
            )}
          </div>
        )}

        {/* Right Side */}
        <div className="text-Container">
          <h2>Contact By</h2>
          <div className="button-contact">
            <button className="email-btn" onClick={handleEmailClick}>
              <span className="email">Email</span>
              <FaEnvelope style={{ marginRight: '8px' }} />
            </button>

            <button
              className="linkedin-btn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/amey-ahire-96b55325b/',
                  '_blank'
                )
              }
            >
              <span className="linkdin">LinkedIn</span>
              <FaLinkedin style={{ marginRight: '8px' }} />
            </button>

            <button
              className="git-btn"
              onClick={() =>
                window.open('https://github.com/ameyahire', '_blank')
              }
            >
              <span className="git">GitHub</span>
              <FaGithub style={{ marginRight: '8px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;