"use client";
import contactTwoData from "@/data/ContactTwoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

const {
  bg,
  infoBoxs,
  infoText,
  infoTitle,
  socials,
  tagLine,
  text,
  title,
} = contactTwoData;

const inputs = ["name", "email", "message"];

const ContactTwo = ({ contact }) => {
  const [mounted, setMounted] = useState(false);
  const form = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("from_name").trim(),
      email: formData.get("email_id").trim(),
      message: formData.get("message").trim(),
    };
  
    if (!data.name || !data.email || !data.message) {
      toast.error("All fields are required!", { duration: 3000 }); // 3 sec display
      return;
    }
  
    try {
      // Send data to API
      const response = await fetch("http://154.26.130.251:3007/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit form");
      }
  
      const result = await response.json();
      toast.success(result.message || "Message sent successfully!", { duration: 3000 }); // 3 sec display
  
      // Optionally reset the form
      form.current.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.message || "Something went wrong!", { duration: 3000 }); // 3 sec display
    }
  };
  
  

  return (
    <section
      className={`${contact === 'page' ? 'contact-two--contact-page' : ''} contact-two`}
      id="contact"
    >
      <Container>
        <div className="contact-two__wrapper">
          <Row>
            <Col lg={6}>
              <div className="contact-two__info">
                <div
                  className="contact-two__info__shape"
                  style={{ backgroundImage: `url(${bg.src})` }}
                ></div>
                <h4 className="contact-two__info__title">{infoTitle} :</h4>
                <p className="contact-two__info__text">{infoText}</p>
                <ul className="contact-two__info__box-wrapper">
                  {infoBoxs.map(({ id, icon, text, title, href, subHref }) => (
                    <li key={id} className="contact-two__info__box">
                      <div className="contact-two__info__box__icon">
                        <i className={icon}></i>
                      </div>
                      <h4 className="contact-two__info__box__title">{title}</h4>
                      <p className="contact-two__info__box__text">
                        {href && subHref ? (
                          <Link href={`${subHref}:${href} `}>{text}</Link>
                        ) : (
                          Array.isArray(text) ? (
                            <ul>
                              {text.map((location, idx) => (
                                <li key={idx}>
                                  <a
                                    href={location.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {location.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            text
                          )
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="contact-two__info__social">
                  <h5 className="contact-two__info__social__title">
                    Follow Social:
                  </h5>
                  <div className="contact-two__info__social__wrap">
                    {socials.map(({ id, link, icon, name }) => (
                      <Link key={id} href={link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} />
                        <span className="sr-only">{name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-two__content">
                <div className="sec-title-two text-left">
                  <h6 className="sec-title-two__tagline">
                    <span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>
                    {tagLine}
                    <span className="sec-title-two__tagline__right icofont-rounded-double-right"></span>
                  </h6>
                  <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <p className="contact-two__content__text">
                  {text && typeof text === "string"
                    ? text.split("\n").map((t, i) => (
                        <Fragment key={i}>
                          {t}
                          <br />
                        </Fragment>
                      ))
                    : text} {/* Fallback if 'text' is undefined or not a string */}
                </p>
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="contact-two__form contact-form-validated form-one"
                  action="#"
                >
                  <div className="form-one__group">
                    <div className="form-one__control">
                      <input type="text" name="from_name" placeholder="Your Name" />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="email"
                        name="email_id"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="form-one__control form-one__control--full">
                    <button 
  type="submit" 
  className="tolak-btn" 
  style={{ borderRadius: "50px", padding: "12px 30px" }}
>
  <b>Send Request</b>
  <span></span>


                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactTwo;
