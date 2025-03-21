"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NewsLetterForm = ({ mail, ctaThree }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const tolakBtns = document.querySelectorAll(".tolak-btn");
    tolakBtns.forEach((btn) => {
      const handleMouseEvent = (e) => {
        const parentOffset = btn.getBoundingClientRect();
        const relX = e.pageX - window.scrollX - parentOffset.left;
        const relY = e.pageY - window.scrollY - parentOffset.top;
        const span = btn.querySelector("span");
        if (span) {
          span.style.top = `${relY}px`;
          span.style.left = `${relX}px`;
        }
      };

      btn.addEventListener("mouseenter", handleMouseEvent);
      btn.addEventListener("mouseout", handleMouseEvent);

      return () => {
        btn.removeEventListener("mouseenter", handleMouseEvent);
        btn.removeEventListener("mouseout", handleMouseEvent);
      };
    });
  }, []);

  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://154.26.130.251:3007/subscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Ensure response is valid JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response from server.");
      }

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Subscription failed.",{ duration: 3000 });
      }

      toast.success(result.message || "Subscription successful! Thank you.",{ duration: 3000 });
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`${
        mail === "one"
          ? "mail-section__newsletter"
          : ctaThree
          ? "cta-three__newsletter"
          : mail === "two"
          ? "mail-section-two__newsletter"
          : "sidebar-one__newsletter"
      } mc-form`}
    >
      <input
        type="email"
        name="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        disabled={isSubmitting}
        style={{ width: "300px", padding: "10px" }} // Adjust width as needed
      />

      <button type="button" className="tolak-btn" onClick={handleSubmit} disabled={isSubmitting}>
        <b>{isSubmitting ? "Submitting..." : "Subscribe"}</b>
        <span></span>
        <span className="sr-only">Subscribe</span>
      </button>

      {/* <div className="mc-form__response">
        {isSubmitting && <div>Sending...</div>}
      </div> */}
    </div>
  );
};

export default NewsLetterForm;
