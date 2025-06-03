import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    emailjs.sendForm(
      'service_da92rfp',
      'template_py5nylk',
      form.current,
      'gge_HDtCWaNB5vJnO'
    ).then(
      (result) => {
        setIsLoading(false); // Stop loading
        Swal.fire({
          icon: 'success',
          title: 'Message sent successfully!',
          showConfirmButton: false,
          timer: 2000
        });
        form.current.reset();
      },
      (error) => {
        setIsLoading(false); // Stop loading
        Swal.fire({
          icon: 'error',
          title: 'Failed to send message',
          text: 'Please try again.',
          confirmButtonText: 'OK'
        });
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
            <div className="mb-3">
              <label htmlFor="user_name" className="form-label">Your Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">Email address</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                required
                disabled={isLoading}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="5"
                required
                disabled={isLoading}
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Sending...
                  </>
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
