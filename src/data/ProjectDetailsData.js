import projectImage1 from "@/assets/images/project/project-detail-1.jpg";
import projectImage2 from "@/assets/images/project/project-detail-2.jpg";
import authorImage1 from "@/assets/images/resources/cta-1-author-1.jpg";
import authorImage2 from "@/assets/images/resources/cta-1-author-2.jpg";
import authorImage3 from "@/assets/images/resources/cta-1-author-3.jpg";

const projectDetailsData = {
  mainImage: projectImage1,
  details: {
    title: "Project Details:",
    description: `Our enterprise solutions cover a wide range of industries and business needs. We specialize in delivering cutting-edge software systems designed for efficiency, scalability, and streamlined operations. Below are some of the key areas we cover:`,
    infoList: [
      { icon: "icofont-check-circled", label: "ERP", value: "Enterprise Resource Planning" },
      { icon: "icofont-check-circled", label: "CRM", value: "Customer Relationship Management" },
      { icon: "icofont-check-circled", label: "HRMS", value: "Human Resource Management System" },
      { icon: "icofont-check-circled", label: "E-Commerce", value: "Online Retail Solutions" },
      { icon: "icofont-check-circled", label: "Hospital Management System", value: "Healthcare Software" },
      { icon: "icofont-check-circled", label: "School Management System", value: "Educational Administration Software" },
    ],
  },
  paragraphs: [
    `**ERP (Enterprise Resource Planning)**: Our ERP solutions provide an integrated approach to managing core business processes. From inventory management to financial tracking and reporting, our system ensures seamless operations, increased productivity, and data-driven decision-making.`,
    
    `**CRM (Customer Relationship Management)**: Streamline your customer interactions with our advanced CRM solutions. Automate sales pipelines, improve communication, and enhance customer retention strategies with a system tailored to your needs.`,

    `**HRMS (Human Resource Management System)**: Simplify and enhance HR operations with our HRMS. From employee records management to payroll automation and performance tracking, this solution empowers HR departments to operate efficiently.`,

    `**E-Commerce Solutions**: Our e-commerce platforms provide a complete suite for online retail businesses. With user-friendly designs, secure payment gateways, and advanced inventory management, we help businesses thrive in the digital marketplace.`,

    `**Hospital Management System**: Manage hospital operations seamlessly with our comprehensive solution. From patient records and appointment scheduling to billing and medical inventory management, our system ensures operational excellence in healthcare.`,

    `**School Management System**: Streamline school operations with our software designed for educational institutions. From attendance tracking to grade management and parent communication, this solution helps schools enhance learning experiences and administrative efficiency.`,
  ],
  additionalImage: projectImage2,
  customerSection: {
    solutionTitle: "Solution System Design",
    solutionText: `Our team follows a structured approach to designing and developing software solutions tailored to meet your unique business needs.`,
    authorImages: [authorImage1, authorImage2, authorImage3],
    moreLink: {
      text: "More",
      href: "contact",
      icon: "fas fa-arrow-right",
    },
    customerText: `Over 29,000 customers trust our services.`,
    customerLink: { text: "Let’s Get Started", href: "contact" },
  },
  finalParagraph: `We pride ourselves on delivering innovative software solutions that meet the complex challenges of modern businesses. Whether you're looking to optimize your operations, improve customer engagement, or enhance employee management, we have the expertise to help you succeed.`,
};

export default projectDetailsData;
