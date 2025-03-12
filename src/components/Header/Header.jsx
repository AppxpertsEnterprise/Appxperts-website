"use client";
import headerData from "@/data/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavItems from "../NavItems/NavItems";
import { useRootContext } from "@/Provider/context";
import MegaMenu from "../MegaMenu/MegaMenu";
import useScrollUp from "@/hooks/useScrollUp";

const { navItems, main_logo, logo_light, logo_rtl } = headerData;

const Header = ({ dark, rtl }) => {
  const [mounted, setMounted] = useState(false);
  const scrollToTop = useScrollUp(500);

  useEffect(() => {
    setMounted(true);
  }, []);

  // State for padding adjustment
  const [paddingBottom, setPaddingBottom] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth === window.screen.width) {
        setPaddingBottom(0);
      } else if (window.innerWidth <= 576) {
        setPaddingBottom(10);
      } else if (window.innerWidth <= 768) {
        setPaddingBottom(15);
      } else if (window.innerWidth <= 1024) {
        setPaddingBottom(20);
      } else {
        setPaddingBottom(50);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`main-header sticky-header sticky-header--normal ${
        scrollToTop ? "active" : ""
      }`}
    > 
      <Container fluid>
        <div className="main-header__inner">
          {/* Logo Section */}
          <div className="main-header__logo">
            <Link href="/Appxperts" target="_blank" rel="noopener noreferrer">
              <Image
                src={dark ? logo_light : rtl ? logo_rtl : main_logo}
                alt="AppXperts"
                width={185}
                height={50}
                style={{ height: "auto", paddingBottom: `${paddingBottom}px` }}
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="main-header__nav main-menu">
            <ul className="main-menu__list">
              <MegaMenu pageTitle="home" />
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavItems
                    item={item}
                    onClick={() =>
                      window.open(item.href, "_blank", "noopener,noreferrer")
                    }
                    style={{ cursor: "pointer" }}
                  />
                </li>
              ))}
              <li className="dot"></li>
            </ul>

           
          </nav>

          {/* Right Section */}
          <div className="main-header__right">
            <button
              onClick={handleToggle}
              className="mobile-nav__btn mobile-nav__toggler"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <button className="main-header__toggler" onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
              <Link href="/packages" className="tolak-btn main-header__btn" style={{marginTop:"40px"}}>
                          <b>Discover More</b>
                          <span></span>
                        </Link>
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;
