'use client';
import contactOneData from '@/data/ContactOneData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';

const { infoIcon, infoTitle, image, imageRtl, bg, texts, tagLine, imageTwo, title, text } = contactOneData;

const ContactOne = ({ rtl }) => {
  const form = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      name: e.target.from_name.value.trim(),
      email: e.target.email_id.value.trim(),
      message: e.target.message.value.trim(),
    };
  
    // Ensure all fields are filled
    if (!data.name || !data.email || !data.message) {
      toast.error('All fields are required!');
      return;
    }
  
    try {
      const response = await fetch('https://appxperts.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Failed to submit form');
      }
  
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  
    e.target.reset();
  };
  

  return (
    <section className="contact-one" id="contact">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="contact-one__info wow fadeInLeft" data-aos="fade-right" data-aos-delay="100">
              <div className="contact-one__info__icon"><span className={infoIcon}></span></div>
              <h3 className="contact-one__info__title" dangerouslySetInnerHTML={{ __html: infoTitle }}></h3>
              <p className="contact-one__info__text">
                {texts.map(({ id, title, subHref }) => (
                  <Link key={id} href={`${subHref}:${title}`}>
                    {title}
                  </Link>
                ))}
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="contact-one__image wow fadeInRight" data-aos="fade-left" data-aos-delay="200">
              <Image src={rtl ? imageRtl : image} alt="tolak" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="contact-one__container wow fadeInUp" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-one__wrapper" style={{ backgroundImage: `url(${bg.src})` }}>
          <Row>
            <Col lg={6}>
              <div className="contact-one__image-two">
                <Image src={imageTwo} alt="tolak" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="contact-one__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">
                    <span className="sec-title__tagline__left"></span>{tagLine}
                    <span className="sec-title__tagline__right"></span>
                  </h6>
                  <h3 className="sec-title__title">{title}</h3>
                </div>
                <p className="contact-one__content__text">
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>{t} <br /></Fragment>
                  ))}
                </p>
                <form onSubmit={handleSubmit} ref={form} className="contact-one__form contact-form-validated form-one">
                  <div className="form-one__group">
                    <div className="form-one__control">
                      <input type="text" name="from_name" placeholder="Your Name" required />
                    </div>
                    <div className="form-one__control">
                      <input type="email" name="email_id" placeholder="Email address" required />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <textarea name="message" placeholder="Message" required></textarea>
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <button type="submit" className="tolak-btn">
                        <b>Send Request</b><span></span>
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

export default ContactOne;