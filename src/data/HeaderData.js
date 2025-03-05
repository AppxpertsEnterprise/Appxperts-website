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
    name: "Our Products",
    href: "#product",
    subNavItems: [
      {
        id: 1,
        name: "Our Products",
        href: "/project",
        dropdown: false,
        subItems: [
          {
            id: 1,
            name: "Products Page",
            href: "/project",
          },
          // {
          //   id: 2,
          //   name: "Project Carousel",
          //   href: "/project-carousel",
          // },
          {
            id: 3,
            name: "Product Details",
            href: "/project-details",
          },
        ],
      },
      // { id: 2, name: "Our Team", href: "/team" },
      // { id: 3, name: "Team Carousel", href: "/team-carousel" },
      // { id: 4, name: "Team Details", href: "/team-details" },
      
      // { id: 6, name: "Testimonial Carousel", href: "/reviews-carousel" },
      // { id: 7, name: "Pricing Page", href: "/packages" },
      // { id: 8, name: "Pricing Carousel", href: "/packages-carousel" },
      // {
      //   id: 9,
      //   name: "Clients",
      //   href: "/gallery",
      //   dropdown: false,
      //   subItems: [
      //     // {
      //     //   id: 1,
      //     //   name: "Gallery Masonry",
      //     //   href: "/gallery",
      //     // },
      //     // {
      //     //   id: 2,
      //     //   name: "Gallery Filter",
      //     //   href: "/gallery-filter",
      //     // },
      //     // {
      //     //   id: 3,
      //     //   name: "Gallery Grid",
      //     //   href: "/gallery-grid",
      //     // },
      //     // {
      //     //   id: 4,
      //     //   name: "Gallery Carousel",
      //     //   href: "/gallery-carousel",
      //     // },
      //   ],
      // },
      // { id: 10, name: "FAQs", href: "/faq" },
      // { id: 11, name: "Login", href: "/login" },
      // { id: 12, name: "404 Error", href: "/404" },
    ],
  },
  {
    id: 3,
    name: "Services",
    href: "#",
    subNavItems: [
      { id: 1, name: "Services", href: "/services" },
      // { id: 2, name: "Services One Carousel", href: "/services-carousel" },
      // { id: 3, name: "Services Two", href: "/services-two" },
      // { id: 4, name: "Services Two Carousel", href: "/services-two-carousel" },   
      { id: 5, name: "Website Design and Development", href: "/business-growth" },
      { id: 6, name: "ERP Software Development", href: "/business-solution" },
      { id: 7, name: "Mobile Applications Development", href: "/marketing-solution" },
      { id: 8, name: "Graphic Designing", href: "/technology-services" },
      { id: 9, name: "Ecommerce Website", href: "/business-marketing" },
      { id: 10, name: "Digital Marketing", href: "/business-support" },
    ],
  },

  // {
  //   id: 4,
  //   name: "Shop",
  //   href: "#",
  //   subNavItems: [
  //     {
  //       id: 1,
  //       name: "Products",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/products",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/products-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/products-right",
  //         },
  //       ],
  //     },
  //     { id: 2, name: "Products Carousel", href: "/products-carousel" },
  //     { id: 3, name: "Product Details", href: "/product-details" },
  //     { id: 4, name: "Cart", href: "/cart" },
  //     { id: 5, name: "Checkout", href: "/checkout" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Blog",
  //   href: "",
  //   subNavItems: [
  //     {
  //       id: 1,
  //       name: "News Grid",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/blog-grid",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/blog-grid-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/blog-grid-right",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Blog",
  //       href: "/blog-details",
  //       dropdown: true,
  //       // subItems: [
  //       //   {
  //       //     id: 1,
  //       //     name: "No Sidebar",
  //       //     href: "/blog-list",
  //       //   },
  //       //   {
  //       //     id: 2,
  //       //     name: "Left Sidebar",
  //       //     href: "/blog-list-left",
  //       //   },
  //       //   {
  //       //     id: 3,
  //       //     name: "Right Sidebar",
  //       //     href: "/blog-list-right",
  //       //   },
  //       // ],
  //     },
  //     { id: 3, name: "News Carousel", href: "/blog-carousel" },
  //     {
  //       id: 4,
  //       name: "News Details",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/blog-details",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/blog-details-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/blog-details-right",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    name: "Blog",
    href: "/blog-details",
  },
  { id: 6, name: "Testimonial", href: "/reviews" },
  {
    id: 9,
    name: "Clients",
    href: "/gallery",
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },

];

const social = [
  { id: 1, icon: faInstagram, link: "https://instagram.com/appxperts.solution", name: "Instagram" },
            { id: 2, icon: faWhatsapp, link: "https://wa.me/+918825528905", name: "WhatsApp" },
            { id: 3, icon: faFacebookF, link: "https://facebook.com/AppXes", name: "Facebook" },
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
      content: "info@appxes.com",
      subHref: "mailto",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content: "INDIA",
      href: "https://www.google.com/maps/place/AppXperts+Enterprise+Solutions/@12.9098612,80.1933659,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dc6fe289d87:0xe5705929217f530d!8m2!3d12.9098612!4d80.1959408!16s%2Fg%2F11t99ll0w6?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: 3,
      icon: faMapMarkerAlt,
      content: "SINGAPORE",
      href: "https://www.google.com/maps",
    },
    {
      id: 3,
      icon: faMapMarkerAlt,
      content: "DUBAI",
      href: "https://www.google.com/maps",
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
