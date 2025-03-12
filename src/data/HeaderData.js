import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";
import logo_rtl from "@/assets/images/logo-dark-rtl.png";
import logo3 from "@/assets/images/logo-3.png";
import logo5 from "@/assets/images/logo-5.png";
import logo6 from "@/assets/images/logo-6.png";
import bg from "@/assets/images/backgrounds/header-bg.jpg";
import flag from "@/assets/images/shapes/flag.png"
import flagTwo from "@/assets/images/shapes/flag.png"
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faWhatsapp,
 
 faPinterestP,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOneText =
  "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices.Sed feugiat feugiat felis.";

const singleNavItems = [
  { name: 'Home', href: 'home', },
  { name: 'Services', href: 'services', },
  { name: 'About', href: 'about', },
  { name: 'Team', href: 'team', },
  { name: 'Project', href: 'project', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsTwo = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Services', href: 'services', },
  { name: 'Project', href: 'project', },
  { name: 'Testimonials', href: 'testimonial', },
  { name: 'Pricing', href: 'pricing', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsThree = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Project', href: 'project', },
  { name: 'Team', href: 'team', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
]
const singleNavItemsFour = [
  { name: 'Home', href: 'home', },
  { name: 'Service', href: 'service', },
  { name: 'Team', href: 'team', },
  { name: 'Pricing', href: 'pricing', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsFive = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Project', href: 'project', },
  { name: 'Team', href: 'team', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsSix = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Team', href: 'team', },
  { name: 'Tab', href: 'tab', },
  { name: 'Contact', href: 'contact', },
  { name: 'Blog', href: 'blog', },
];
const singleNavItemsSeven = [
  { name: 'Home', href: 'home', },
  { name: 'About', href: 'about', },
  { name: 'Service', href: 'service', },
  { name: 'Project', href: 'project', },
  { name: 'Testimonial', href: 'testimonial', },
  { name: 'Funfact', href: 'funfact', },
  { name: 'Blog', href: 'blog', },
];

const navItems = [
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Our Products & Services",
    href: "#product",
    subNavItems: [
      {
        id: 3,
        name: "Our Products",
        href: "/project",
        dropdown: false,
        subItems: [
          { id: 4, name: "Products Page", href: "/project" },
          { id: 5, name: "Product Details", href: "/project-details" },
        ],
      },
      {
        id: 6,
        name: "Services",
        href: "#services",
        dropdown: true,
        subItems: [
          { id: 7, name: "Website Design and Development", href: "/business-growth" },
          { id: 8, name: "ERP Software Development", href: "/business-solution" },
          { id: 9, name: "Mobile Applications Development", href: "/marketing-solution" },
          { id: 10, name: "Graphic Designing", href: "/technology-services" },
          { id: 11, name: "Ecommerce Website", href: "/business-marketing" },
          { id: 12, name: "Digital Marketing", href: "/business-support" },
        ],
      },
    ],
  },
 
  // {
  //   id: 4,
  //   name: "Testimonial",
  //   href: "/reviews",
  // },
  {
    id: 5,
    name: "Clients",
    href: "/gallery",
  },
  {
    id: 3,
    name: "Blog",
    href: "/blog-details",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
 /*  {
    id:7,
    
    name :"Discover More",
     href:   "/packages",
    
     
    
  } */
];


const social = [
  { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram", target: "_blank" },
  { id: 2, icon: faWhatsapp, link: "https://wa.me/+918825528905", name: "WhatsApp", target: "_blank" },
  { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXes", name: "Facebook", target: "_blank" },
];


const topbarTwoCarousel = [
  {
    id: 1,
    text: "Best It-Solution Business !",
  },
  {
    id: 2,
    text: "Best It-Solution Business !",
  },
];

const topbarFiveData = {
  infoIcon: "tolak-icons-two-phone-call",
  infoText: "Emergency Call",
  infoTel: "+95 2512 2514 25",
  infoHref: "+952512251425",
  infoSubHref: "tel",
  links: [
    {
      id: 1,
      name: "Login",
      href: "login"
    },
    {
      id: 2,
      name: "Register",
      href: "contact"
    }
  ],
  flag,
  languages: [
    {
      id: 1,
      flag: flag,

      language: "English"
    },
    {
      id: 2,
      flag: flagTwo,

      language: "French"
    }
  ]

}



const headerData = {
  bg,
  topbarTwoCarousel,
  logo_rtl,
  logo3,
  logo5,
  logo6,
 icons: [
    {
      id: 1,
      icon: faEnvelope,
      content: "info@appxperts.com", // Updated email
      subHref: "mailto:info@appxperts.com",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content: "INDIA",
      href: "https://www.google.com/maps/place/AppXperts+Enterprise+Solutions/@12.9098612,80.1933659,17z/",
    },
    {
      id: 3,
      icon: faMapMarkerAlt,
      content: "SINGAPORE",
      href: "https://www.google.com/maps",
    },
    {
      id: 4,
      icon: faMapMarkerAlt,
      content: "DUBAI",
      href: "https://www.google.com/maps",
    },
    {
      id: 5,
      icon: faPhone,  
      content: "Call", // Updated call content
      href: "tel:+918825528905",  
    },
  ],


  sidebarOneIcons: [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      content: "27, Dhaka London City Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: "fas fa-clock",
      content: "Mon - Fri: 8.00 am. - 6.00 pm.",
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      content: "27, Dhaka London City Dhaka, Bangladesh",
      href: "https://www.google.com/maps",
    },
  ],
  links: [
    // {
    //   id: 1,
    //   name: "Login",
    //   href: "login",
    // },
    // {
    //   id: 2,
    //   name: "Register",
    //   href: "contact",
    // },
    // {
    //   id: 3,
    //   name: "Services",
    //   href: "services",
    // },
  ],
  headerFourCall: {
    href: "88255 28905",
    subHref: "tel",
    icon: "icofont-phone-circle",
    text: "Need Help Now?",
    number: "88255 28905",
  },
  navItems,
  social,
  main_logo,
  logo_light,
  sidebarOneText,
  singleNavItems,
  singleNavItemsTwo,
  singleNavItemsThree,
  singleNavItemsFour,
  singleNavItemsFive,
  singleNavItemsSix,
  singleNavItemsSeven,
  topbarFiveData
};


export default headerData;
