"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { Tilt } from "react-tilt";
import projectDetailsFaqData from "@/data/ProjectDetailsFaq";

const ProjectDetailsFaq = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef(null);

  const counter = projectDetailsFaqData?.counter ?? { count: 0, label: "", text: "" };
  const accordionData = projectDetailsFaqData?.accordionData ?? [];
  const image = projectDetailsFaqData?.image ?? "/default-image.jpg"; // Provide a fallback image

  const defaultOptions = {
    maxTilt: 7,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setCounterOn(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <section className='project-details-faq'>
      <Container>
        <Row className='d-flex align-items-center'>
          <Col lg={6}>
            <div className='project-details-faq__accordion tolak-accrodion' data-grp-name='tolak-accrodion'>
              <Accordion defaultActiveKey='1'>
                {accordionData.length > 0 ? (
                  accordionData.map((accordion, index) => (
                    <Accordion.Item key={accordion.id} eventKey={index.toString()}>
                      <Accordion.Header>
                        <i className='fa fa-check-circle'></i>
                        {accordion.title}
                        <span className='accrodion-title__icon'></span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className='inner'>
                          <p>{accordion.content}</p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))
                ) : (
                  <p>No FAQs available</p>
                )}
              </Accordion>
            </div>
          </Col>
          <Col lg={6} ref={counterRef}>
            <div className='project-details-faq__image'>
              <Image src={image} alt='FAQ Section' width={500} height={300} />

              <Tilt className='project-details-faq__item count-box ' options={defaultOptions}>
                <h3 className='project-details-faq__item__count'>
                  {counterOn && (
                    <CountUp className='count-text' end={counter.count} duration={1.5} />
                  )}
                  {counter.label}
                </h3>
                <p className='project-details-faq__item__text'>{counter.text}</p>
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsFaq;
