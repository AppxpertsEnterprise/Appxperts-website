import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
  faWhatsapp,  // Import WhatsApp icon
} from "@fortawesome/free-brands-svg-icons";

const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText: "",
  infoTitle: "Contact Information",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call This Now",
      text: "+918825528905",
      href: "+918825528905",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Your Message",
      text: "info@appxes.com",
      href: "info@appxes.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "icon-pin",
      title: "LOCATION",
      text: [
        {
          name: "INDIA",
          link: "https://www.google.com/maps",
        },
        {
          name: "DUBAI",
          link: "https://www.google.com/maps",
        },
        {
          name: "SINGAPORE",
          link: "https://www.google.com/maps",
        },
      ],
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faWhatsapp,  // WhatsApp icon
      link: "https://wa.me/+918825528905", // WhatsApp link with your number
      name: "WhatsApp",
    },
    {
      id: 3,
      icon: faTwitter,
      link: "https://twitter.com",
      name: "Twitter",
    },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com",
      name: "Instagram",
    },
  ],

  tagLine: "Our Contact Us",
  title: "Get free Business touch Customers me.",
};

export default contactTwoData;
