"use client";

import funFactOneData from "@/data/FunFactOne";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { Tilt } from "react-tilt";
import ScrollTriggerCount from "../ScrollTrigger/ScrollTriggerCount";

const { accordionData, image, items, shape, shapeRtl } = funFactOneData;

const FunFactOne = ({ rtl }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultOptions = {
    maxTilt: 9,
    scale: 1,
    speed: 700,
    glare: false,
    maxGlare: 0,
  };

  if (!mounted) {
    return null;
  }

  // Inline Styles for Accordion
  const accordionStyles = {
    border: "none",
    background: "#f9f9f9",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  const accordionHeaderStyles = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    backgroundColor: "#fff",
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    borderRadius: "8px 8px 0 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const accordionBodyStyles = {
    fontSize: "16px",
    color: "#555",
    backgroundColor: "#fff",
    padding: "16px",
    lineHeight: "1.6",
    borderRadius: "0 0 8px 8px",
  };

  return (
    <section className='funfact-one'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='funfact-one__image'>
              <Image src={image} alt='tolak' />
              <Image
                className='funfact-one__image__shape'
                src={rtl ? shapeRtl : shape}
                alt='tolak'
              />
              {items.map(({ id, text, count, identity }) => (
                <Tilt
                  key={id}
                  className={`funfact-one__item count-box tolak-tilt ${identity}`}
                  options={defaultOptions}
                >
                  <h3 className='funfact-one__item__count'>
                    <ScrollTriggerCount count={count} />
                  </h3>
                  <p className='funfact-one__item__text'>{text}</p>
                </Tilt>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className='funfact-one__accordion tolak-accrodion'>
              <Accordion defaultActiveKey='1'>
                {accordionData.map((accordion, index) => (
                  <Accordion.Item key={accordion.id} eventKey={index.toString()} style={accordionStyles}>
                    <Accordion.Header style={accordionHeaderStyles}>
                      <i className='fa fa-check-circle' style={{ marginRight: "10px", color: "#007bff" }}></i>
                      {accordion.header}
                    </Accordion.Header>
                    <Accordion.Body style={accordionBodyStyles}>
                      <p>{accordion.content}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FunFactOne;
