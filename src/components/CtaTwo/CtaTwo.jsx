import ctaTwoData from '@/data/CtaTwoData';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const { shape, bg, bgRtl, image, imageRtl, infoBg, texts, href, subHref, icon, title, contTitle, contText } = ctaTwoData;

const CtaTwo = ({ two, rtl }) => {
    return (
        <section 
            className="cta-two" 
            style={{ position: "relative", top: "-50px" }} // Moves component upward
        >
            <div className="cta-two__shape" style={{ backgroundImage: `url(${shape.src})` }}></div>
            <Container>
                <div className="cta-two__bg" style={{ backgroundImage: `url(${rtl ? bgRtl.src : bg.src})` }}>
                    <Row>
                        <Col lg={4} className=" wow fadeInLeft" data-aos="fade-right" data-aos-delay="100">
                            <div className="cta-two__info" style={{ backgroundImage: `url(${infoBg.src})` }}>
                                <div className="cta-two__info__icon"><span className={icon}></span></div>
                                <h4 className="cta-two__info__title">{title}</h4>
                                <p className="cta-two__info__text">
                                    {texts.map(({ id, title, subHref }) => (
                                        <Link key={id} href={`${subHref}:${title}`}>
                                            {title}
                                        </Link>
                                    ))}
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="cta-two__content">
                                <h4 className="cta-two__content__title">
                                    {contTitle} <Link href={`${subHref}:${href}`}>Call Now!</Link>
                                </h4>
                                <p className="cta-two__content__text">
                                    {contText.split("\n").map((t, i) => (
                                        <Fragment key={i}>
                                            {t} <br />
                                        </Fragment>
                                    ))}
                                </p>
                                <Link className="cta-two__content__rm" href="contact">
                                    Read More<span className="fas fa-angle-double-right"></span>
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4} className="wow fadeInUp position-relative" data-aos="fade-up" data-aos-delay="200">
                            <div className="cta-two__image">
                                <Image src={rtl ? imageRtl : image} alt="tolak" />
                            </div>
                            <Link href={`${subHref}:${href}`} className="cta-two__call-text">Call Now</Link>
                        </Col>
                    </Row>
                </div>
                {/* Oval-shaped "Discover More" Button */}
                <div style={{ textAlign: "center", marginTop: "-30px" }}> 
                    <Link 
                        href="/packages" 
                        className="tolak-btn main-header__btn" 
                        style={{
                            display: "inline-block",
                            padding: "12px 30px",
                            borderRadius: "50px",
                            backgroundColor: "#007bff",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "16px",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none"
                        }}
                    >
                        <b>Discover More</b>
                        <span></span>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default CtaTwo;
