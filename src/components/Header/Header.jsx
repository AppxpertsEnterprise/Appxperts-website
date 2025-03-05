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
        // Full-width (100% of screen width)
        setPaddingBottom(0);
      } else if (window.innerWidth <= 576) { 
        // Mobile screens
        setPaddingBottom(10);
      } else if (window.innerWidth <= 768) { 
        // Tablet screens
        setPaddingBottom(15);
      } else if (window.innerWidth <= 1024) { 
        // Laptop screens
        setPaddingBottom(20);
      } else { 
        // Desktop screens
        setPaddingBottom(50);
      }
    };
    

    // Run on mount & listen to resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { toggleSearch, handleToggle, toggleSidebar } = useRootContext();

  if (!mounted) {
    return null;
  }

  return (
    <header className={`main-header sticky-header sticky-header--normal ${scrollToTop ? "active" : ""}`}>
      <Container fluid>
        <div className='main-header__inner'>
          <div className='main-header__logo'>
            <Link href='/Appxperts'>
              <Image
                src={dark ? logo_light : rtl ? logo_rtl : main_logo}
                alt='Tolak HTML'
                width={185}
                height={50} // Prevents layout shift
                style={{ height: "auto", paddingBottom: `${paddingBottom}px` }}
              />
            </Link>
          </div>

          <nav className='main-header__nav main-menu'>
            <ul className='main-menu__list'>
              <MegaMenu pageTitle='home' />

              {navItems.map((item) => (
                <NavItems key={item.id} item={item} />
              ))}

              <li className='dot'></li>
            </ul>
          </nav>
          <div className='main-header__right'>
            <div onClick={handleToggle} className='mobile-nav__btn mobile-nav__toggler'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link href='#' className='main-header__toggler' onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
