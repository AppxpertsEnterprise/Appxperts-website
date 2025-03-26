"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import CustomCursor from "../CustomCursor/CustomCursor";
import Preloader from "../Preloader/Preloader";
import Search from "../Search/Search";
import MobileNav from "../MobileNav/MobileNav";
import Sidebar from "../Sidebar/Sidebar";
import ScrollTop from "../ScrollTop/ScrollTop";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component runs only on the client

    // Initialize AOS on client-side
    AOS.init();
  }, []);

  useEffect(() => {
    if (!isClient) return; // Ensures event listeners run only on the client

    const tolakBtns = document.querySelectorAll(".tolak-btn");

    const handleMouseEnter = (e) => {
      const btn = e.currentTarget;
      const parentOffset = btn.getBoundingClientRect();
      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const span = btn.querySelector("span");

      if (span) {
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      }
    };

    const handleMouseOut = (e) => {
      const btn = e.currentTarget;
      const parentOffset = btn.getBoundingClientRect();
      const relX = e.pageX - window.scrollX - parentOffset.left;
      const relY = e.pageY - window.scrollY - parentOffset.top;
      const span = btn.querySelector("span");

      if (span) {
        span.style.top = relY + "px";
        span.style.left = relX + "px";
      }
    };

    tolakBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      tolakBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [isClient]); // Ensure effect only runs after client is mounted

  return (
    <>
      {isClient && <CustomCursor />} {/* Prevents SSR mismatch */}
      {isClient && <Preloader />}
      <div className="page-wrapper">{children}</div>
      <MobileNav />
      <Search />
      <Sidebar />
      <ScrollTop />
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
