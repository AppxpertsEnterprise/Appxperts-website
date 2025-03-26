"use client";
import aboutThreeData from "@/data/AboutThreeData";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
import AnimatedProgressBar from "../AnimatedProgressBar/AnimatedProgressBar";

const {
  shape,
  shape2,
  image1,
  image2,
  author,
  aboutSign,
  factText,
  factIcon,
  factCount,
  tagLine,
  title,
  text,
  percentage,
  lists,
  skillTitle,
  skillText,
  contQuote,
  videoId,
  authorText,
} = aboutThreeData;

const AboutThree = () => {
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <section className='about-three' id="about">
        <Container>
          <Row>
            <Col lg={6}>
              <div className='about-three__image'>
                <div className='about-three__image__shape'>
                  <Image src={shape} alt='shape' />
                </div>
                <div className='about-three__image__shape-two'>
                  <Image src={shape2} alt='shape2' />
                </div>
                <Row>
                  <Col md={6}>
                    <div ref={ref} className='about-three__image__one'>
                      <Image src={image1} alt='image1' />
                    </div>
                    <div className='about-three__fact count-box'>
                      <div className='about-three__fact__icon'>
                        <i className={factIcon}></i>
                      </div>
                      <h3 className='about-three__fact__count'>
                        {inView && (
                          <CountUp className='count-text' end={factCount} duration={1.5} />
                        )}
                        k+
                      </h3>
                      <p className='about-three__fact__text'>{factText}</p>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className='about-three__image__two'>
                      <Image src={image2} alt='image2' />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} className='wow fadeInRight' data-aos="fade-left" data-aos-delay='200'>
              <div className='about-three__content'>
                <div className='sec-title-two text-left'>
                  <h6 className='sec-title-two__tagline'>
                    <span className='sec-title-two__tagline__left icofont-rounded-double-left'></span>
                    {tagLine}
                    <span className='sec-title-two__tagline__right icofont-rounded-double-right'></span>
                  </h6>
                  <h3 className='sec-title-two__title'>{title}</h3>
                </div>
                <p className='about-three__content__text'>
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </p>
                <div className='about-three__content__bar'></div>
                <Row>
                  <Col md={5}>
                    <ul className='about-three__content__list'>
                      {lists.map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={7}>
                    <AnimatedProgressBar
                      service="about"
                      progress={percentage}
                      title={skillTitle}
                      text={skillText}
                    />
                  </Col>
                </Row>
                <div className='about-three__content__quote'>{contQuote}</div>
                <Row>
                  <Col md={5}></Col>
                  <Col lg={7}>
                    <div className='about-three__content__author'>
                      <div className='about-three__content__author__image'>
                        <Image src={author} alt='author' />
                      </div>
                      <p className='about-three__content__author__text'>
                        {authorText}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default AboutThree;