import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_iecm02n",
      "template_zokpahf",
      form.current,
      "HH9WM6g8bCsZSVgWM"
    );
    e.target.reset();

    toast.success("Message sent!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="flex justify-center">
              <MdOutlineEmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5>goodnessigunma1@gmail.com</h5>
            <a href="mailto:goodnessigunma1@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <div className="flex justify-center">
              <RiMessengerLine className="contact__option-icon" />
            </div>
            <h4>Messenger</h4>
            <h5>Igunma Goodness</h5>
            <a href="https://m.me/goodness.igudy" target="_blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <div className="flex justify-center">
              <BsWhatsapp className="contact__option-icon" />
            </div>
            <h4>WhatsApp</h4>
            <h5>+234-81-082-51-426</h5>
            <a href="https://wa.link/jnvn9r" target="_blank">
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            className="p-2"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            className="p-2"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            className="p-2"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
