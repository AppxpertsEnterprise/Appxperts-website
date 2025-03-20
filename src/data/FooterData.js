import logo from "@/assets/images/logo-light.png";
import footerLogo from "@/assets/images/footer-logo.png";
import logo4 from "@/assets/images/logo-4.png";
import logo6 from "@/assets/images/logo-6.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import footerBgTwo from "@/assets/images/backgrounds/footer-bg-2-1.jpg";
import footerBgThree from "@/assets/images/backgrounds/footer-bg-3-1.jpg";
import footerBgFour from "@/assets/images/backgrounds/footer-bg-4-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post6 from "@/assets/images/blog/lp-1-6.jpg";
import post7 from "@/assets/images/blog/lp-1-7.jpg";

// Importing FontAwesome Icons
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Social Media Links
const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://www.facebook.com/AppXes", title: "Facebook" },
  { id: 2, icon: faInstagram, href: "https://www.instagram.com/Appxperts.solutions/", title: "Instagram" },
  { id: 3, icon: faLinkedin, href: "https://www.linkedin.com/company/Appxperts-enterprise-solutions/", title: "LinkedIn" },
  { id: 4, icon: faWhatsapp, href: "https://wa.me/+918825528905", title: "WhatsApp" },
  { id: 5, icon: faEnvelope, href: "mailto:info@appxes.com", title: "Mail" },
];

// Recent Blog Posts
const posts = {
  title: "Recent Posts",
  posts: [
    { id: 1, image: post1, meta: "23 Jun 2023", title: "We round solution york Blog", href: "blog-details", icon: "icofont-calendar" },
    { id: 2, image: post2, meta: "23 Jun 2023", title: "We Should be Descriptive", href: "blog-details", icon: "icofont-calendar" },
  ],
};

const postsSix = {
  title: "Recent Posts",
  posts: [
    { id: 1, image: post6, meta: "20 Nov 2024", title: "This Specific Issue Network Security", href: "blog-details", icon: "icofont-calendar" },
    { id: 2, image: post7, meta: "23 Jun 2024", title: "Looking For a Solution Related", href: "blog-details", icon: "icofont-calendar" },
  ],
};

// Footer Information
const footerData = {
  footerLogo,
  logo,
  logo4,
  logo6,
  footerBg,
  footerBgTwo,
  footerBgThree,
  footerBgFour,
  shape,
  shapeTwo,
  footerAbout,
  posts,
  postsSix,
  aboutTwoText: "We are a cutting-edge software solutions provider, delivering high-quality products with a focus on innovation and client satisfaction.",
  widgetText: "AppXperts offers industry-leading software solutions, specializing in web and mobile development, cloud services, and enterprise solutions.",

  // Widget Info (Contact, Location)
  widgetInfo: {
    timeIcon: "fa fa-clock",
    time: "Mon - Fri: 9 AM - 6 PM\nSat - Sun: Closed",
    locationIcon: faMapMarkerAlt,
    locations: [
      { country: "India", mapLink: "https://www.google.com/maps?q=India" },
      { country: "Singapore", mapLink: "https://www.google.com/maps?q=Singapore" },
      { country: "Dubai", mapLink: "https://www.google.com/maps?q=Dubai" },
      { country: "USA", mapLink: "https://www.google.com/maps?q=USA" },
    ],
    // telIcon: faPhone,
    // subHref: "tel",
    // tel: "+918825528905",
  },

  widgetSocial,

  // Footer Navigation Links
  services: [
    { id: 1, href: "/about", title: "Why Choose Us" },
    { id: 2, href: "/services", title: "Our Services" },
    { id: 3, href: "/project", title: "Our Products" },
    { id: 4, href: "/contact", title: "Contact Us" },
  ],

  quickLinks: [
    { id: 1, href: "/gallery", title: "Clients" },
    { id: 2, href: "/packages", title: "Packages" },
    { id: 3, href: "/contact", title: "Contact" },
    { id: 4, href: "/blog-grid-right", title: "Blog" },
  ],

  aboutAppxperts: [
    // { id: 1, href: "/about", title: "Who We Are" },
    // { id: 2, href: "/contact", title: "Contact Us" },
  ],

  bottomLinks: [
    { id: 1, href: "/about", title: "About Us" },
    { id: 2, href: "/services", title: "Services" },
  ],
};

export default footerData;
