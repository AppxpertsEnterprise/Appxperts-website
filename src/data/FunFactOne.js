import image from '@/assets/images/resources/counter-1-1.jpg';
import shape from '@/assets/images/shapes/counter-border-1.png';
import shapeRtl from '@/assets/images/shapes/counter-border-1-rtl.png';

const funFactOneData = {
  image,
  shape,
  shapeRtl,
  items: [
    {
      id: 1,

      text: 'Successful Professionals Trained',

      count: "63",
      identity: ""
    },
    {
      id: 2,

      text: 'Projects Successfully Delivered',

      count: "26",
      identity: "funfact-one__item--two"
    },
    {
      id: 3,

      text: 'Dedicated 24/7 Customer Support',

      count: "26",
      identity: "funfact-one__item--three"
    }
  ],
  accordionData: [
    {
      id: 1,

      header: 'Why Choose Appxperts for Software Solutions?',
      content: "We provide cutting-edge, scalable, and tailor-made software solutions that enhance operational efficiency and drive business success."
    },
    {
      id: 2,
      header: 'Which Industries Do We Serve?',
      content: "Appxperts specializes in solutions for diverse industries, including retail, healthcare, education, finance, and enterprise-level businesses."
    },
    {
      id: 3,
      header: 'How Do We Ensure Project Success?',
      content: "We follow agile methodologies, maintain clear communication, and adopt a result-oriented approach to ensure projects are delivered on time and exceed expectations."
    },
    {
      id: 4,
      header: 'What Makes Our Customer Support Stand Out?',
      content: "Our expert support team offers round-the-clock assistance, ensuring seamless operations and prompt resolution of any technical challenges."
    },
    {
      id: 5,
      header: 'What Technologies Do We Specialize In?',
      content: "We excel in modern technologies, including cloud computing, AI, machine learning, full-stack web and mobile development, and enterprise software solutions."

    }
  ]
};

export default funFactOneData;
