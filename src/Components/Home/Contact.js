import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

function Contact() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_da92rfp',      // ✅ Your EmailJS service ID
      'template_py5nylk',     // ✅ Your EmailJS template ID
      form.current,
      'gge_HDtCWaNB5vJnO'      // ✅ Your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset(); // Clear the form after sending
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <div className="container my-5" data-aos="flip-left">
      <div className="row justify-content-center">
        <div className="col-md-6 border p-4 rounded shadow">
          <h2 className="mb-4 text-center">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">Your Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">Email address</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
