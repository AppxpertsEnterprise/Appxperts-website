import blogDetailsImage from "@/assets/images/blog/blog-details-1.jpg";
import authorImage from "@/assets/images/blog/blog-details-author.jpg";
import commentImage1 from "@/assets/images/blog/blog-comment-1-1.jpg";
import commentImage2 from "@/assets/images/blog/blog-comment-1-2.jpg";
import post1 from "@/assets/images/blog/lp-1-3.jpg";
import post2 from "@/assets/images/blog/lp-1-4.jpg";
import post3 from "@/assets/images/blog/lp-1-5.jpg";

const sidebarData = {
  categories: [
    { href: "/blog-details-right", text: "Business", count: 8 },
    { href: "/blog-details-right", text: "UI/UX Design", count: 14 },
    { href: "/blog-details-right", text: "Professional", count: 12 },
    { href: "/blog-details-right", text: "Technology", count: 23 },
    { href: "/blog-details-right", text: "Development", count: 17 },
    { href: "/blog-details-right", text: "Web Design", count: 22 },
  ],
  tags: [
    { href: "/project", text: "OurProduct" },
    { href: "/services", text: "Service" },
    { href: "/contact", text: "Help" },
  ],
  recentPosts: [
    {
      image: { src: post1, alt: "AppXperts" },
      date: "Aug 10, 2023",
      title: "We play chimney pot Chip bonne.",
      href: "/blog-details-right",
    },
    {
      image: { src: post2, alt: "AppXperts" },
      date: "Aug 10, 2023",
      title: "Get deep knowledge of your business",
      href: "/blog-details-right",
    },
    {
      image: { src: post3, alt: "AppXperts" },
      date: "Aug 10, 2023",
      title: "Innovative digital solutions",
      href: "/blog-details-right",
    },
  ],
};

export const blogDetailsData = {
  sidebarData,
  image: blogDetailsImage,
  meta: {
    category: {
      name: "Business",
      href: "/blog-grid",
    },
    date: {
      author: "AppXperts Solutions",
      date: "Jan 30, 2025",
      href: "/blog-grid",
    },
  },
  title:
    "AppXperts Enterprise Solutions: Your One-Stop Digital Partner",
  paragraphs: [
    "AppXperts is a one-stop solution offering a wide range of services, including Software Development, Digital Marketing, Branding, and Resource Outsourcing.",
    "We cater to a diverse array of industries, such as Healthcare, Financial Services, Logistics, E-commerce, Wholesale, Retail, Manufacturing, and other key sectors.",
    "With a blend of technical expertise and creativity, we specialize in developing innovative mobile and web applications tailored to meet the unique needs of each industry.",
  ],
  features: [
    {
      icon: "icon-family",
      title: "Dedicated Expert Teams",
    },
    {
      icon: "icon-agency",
      title: "Innovative Digital Solutions",
    },
    {
      icon: "icon-refund",
      title: "Customized Application Development",
    },
    {
      icon: "icon-management",
      title: "Long-Term Industry Experience",
    },
  ],
  blockquote: {
    text:
      "We specialize in delivering innovative software and creative marketing solutions to drive business growth.",
    author: {
      name: "AppXperts Team",
      designation: "CEO",
      image: authorImage,
      social: [
        {
          name: "Instagram",
          href: "https://instagram.com/appxperts.solutions",
          icon: "fab fa-instagram",
        },
        {
          name: "Facebook",
          href: "https://facebook.com/AppXes",
          icon: "fab fa-facebook-f",
        },
        {
          name: "LinkedIn",
          href: "https://linkedin.com/company/appxperts-enterprise-solutions/",
          icon: "fab fa-linkedin",
        },
        {
          name: "Email",
          href: "mailto:info@appxes.com",
          icon: "fas fa-envelope",
        },
      ],
    },
  },
  comments: [
    {
      image: commentImage1,
      name: "John Doe",
      date: "January 16, 2025 at 10:45 am",
      text: "AppXperts transformed our business with their tailored software solutions.",
      replyHref: "/blog-details-right",
    },
    {
      image: commentImage2,
      name: "Jane Smith",
      date: "January 18, 2025 at 9:15 am",
      text: "Their creative approach to digital marketing is impressive.",
      replyHref: "/blog-details-right",
    },
  ],
  form: {
    title: "Leave a comment",
    fields: [
      {
        type: "text",
        name: "name",
        placeholder: "Your name",
      },
      {
        type: "email",
        name: "email",
        placeholder: "Email address",
      },
      {
        type: "textarea",
        name: "message",
        placeholder: "Write a message",
      },
    ],
    submitButton: {
      text: "Submit Comment",
    },
  },
};
