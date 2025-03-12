import footerData from '@/data/FooterData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const { logo, footerBg, shape, widgetInfo, widgetSocial, footerAbout, services, quickLinks, aboutAppxperts, bottomLinks } = footerData;

const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer className="main-footer background-black">
            {/* Background Styling */}
            <div 
                className="main-footer__bg background-black"
                style={{ backgroundImage: `url(${footerBg.src})` }}
            ></div>
            <div 
                className="main-footer__shape"
                style={{ backgroundImage: `url(${shape.src})` }}
            ></div>

            <Container>
                <Row className="gy-4">
                    
                    {/* Logo & Contact Info */}
                    <Col md={6} lg={4}>
                        <div className="footer-widget footer-widget--about">
                            <Link href="/" className="footer-widget__logo">
                                <Image src={logo} width={160} height={160} alt="Appxperts Logo" />
                            </Link>
                            <ul className="footer-widget__info">
                                <li>
                                    <span className={widgetInfo.timeIcon}></span>
                                    {widgetInfo.time.split("\n").map((t, i) => (
                                        <React.Fragment key={i}>{t} <br /></React.Fragment>
                                    ))}
                                </li>
                                <li>
                                    <span className={widgetInfo.locationIcon}></span>
                                    {widgetInfo.location}
                                </li>
                                <li>
                                    <span className={widgetInfo.telIcon}></span>
                                    <Link href={`${widgetInfo.subHref}:${widgetInfo.tel}`}>{widgetInfo.tel}</Link>
                                </li>
                            </ul>
                            <div className="footer-widget__social">
                                {widgetSocial.map(({ id, href, icon, title }) => (
                                    <Link href={href} key={id} target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={icon} />
                                        <span className="sr-only">{title}</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="footer-widget__image">
                                <Image src={footerAbout} alt="About Appxperts" />
                            </div>
                        </div>
                    </Col>

                    {/* Services */}
                    <Col md={6} lg={2}>
                        <div className="footer-widget footer-widget--links">
                            <h2 className="footer-widget__title">Services</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {services.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    {/* Quick Links */}
                    <Col md={6} lg={2}>
                        <div className="footer-widget footer-widget--links footer-widget--last">
                            <h2 className="footer-widget__title">Quick Links</h2>
                            <ul className="list-unstyled footer-widget__links">
                                {quickLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    {/* About Appxperts */}
                    <Col md={6} lg={4}>
                        <div className="footer-widget footer-widget--about-appxperts">
                            <h2 className="footer-widget__title">About Appxperts</h2>
                            <p>
                                Appxperts is a leading software development company dedicated to delivering 
                                innovative solutions for businesses of all sizes. Our expertise spans web and 
                                mobile applications, cloud computing, AI, and enterprise software solutions. 
                                We prioritize client satisfaction and cutting-edge technology to drive success.
                            </p>
                            <ul className="list-unstyled footer-widget__links">
                                {aboutAppxperts.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Footer Bottom Section */}
            <div className="main-footer__bottom">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <p className="main-footer__copyright">
                                &copy; {year} Appxperts Enterprise Solutions. All Rights Reserved.
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <ul className="list-unstyled main-footer__bottom__list">
                                {bottomLinks.map(({ id, title, href }) => (
                                    <li key={id}>
                                        <Link href={href}>{title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
