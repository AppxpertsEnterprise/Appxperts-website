import footerData from "@/data/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const {
  footerBgThree,
  shapeTwo,
  footerLogo,
  widgetText,
  widgetSocial,
  services,
  quickLinks,
  bottomLinks,
} = footerData;

const FooterThree = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='main-footer-three background-black' style={{ paddingBottom: "0", marginBottom: "0" }}>
      <div
        className='main-footer-three__bg background-black'
        style={{ backgroundImage: `url(${footerBgThree.src})`, paddingBottom: "0" }}
      ></div>

      <div
        className='main-footer-three__shape'
        style={{ backgroundImage: `url(${shapeTwo.src})` }}
      ></div>
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <div className='footer-widget footer-widget--about-two'>
              <a href='index.html' className='footer-widget__logo'>
                <Image
                  src={footerLogo}
                  width={184}
                  style={{ height: "184"}}
                  alt='Tolak NextJS Template'
                  href='/home1'
                />
              </a>
          
              <div className='footer-widget__social' style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "-100px" }}>


                {widgetSocial.map(({ id, href, icon, title }) => (
                  <Link href={href} key={id}>
                    <FontAwesomeIcon icon={icon} />
                    <span className='sr-only'>{title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className='footer-widget footer-widget--links'>
              <h2 className='footer-widget__title'>Service</h2>
              <ul className='list-unstyled footer-widget__links'>
                {services.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className='footer-widget footer-widget--links main-footer-two--ml30'>
              <h2 className='footer-widget__title'>Quick Link</h2>
              <ul className='list-unstyled footer-widget__links'>
                {quickLinks.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={3}lg={3}>
          <h2 className='footer-widget__title'style={{ marginTop: "100px"}}>About Us </h2>
          <p className='footer-widget--about-two__text' style={{ marginTop: "90px"}}> 
  {widgetText}
</p>

          </Col>
        </Row>
      </Container>
      <div className='main-footer-three__bottom' style={{ padding: "10px 0", margin: "0" }}>
        <Container>
          <Row>
            <Col md={6}>
              <p className="main-footer__copyright">
                &copy; {year} Appxperts Enterprise Solutions. All Rights Reserved.
              </p>
            </Col>
            <Col md={6}>
              <ul className='list-unstyled main-footer-three__bottom__list'>
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

export default FooterThree;
 