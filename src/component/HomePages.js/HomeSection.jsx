import React, { useState } from "react";

const HomeSection = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <section className="bg-white py-10 md:mb-10">
      <div className="container max-w-screen-xl mx-auto px-4">

        <nav className="flex-wrap lg:flex items-center">
          <div className="flex items-center mb-10 lg:mb-0">
            {/* <img src="https://mercy-html.boxmodel.dev/img/navbar-logo.png" alt="Logo" /> */}

            <button
              className="lg:hidden w-10 h-10 ml-auto flex items-center justify-center border border-blue-500 text-blue-500 rounded-md"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i data-feather="menu"></i>
            </button>
          </div>

          <ul
            className={`lg:flex flex-col lg:flex-row lg:items-center lg:mx-auto lg:space-x-8 xl:space-x-14 ${
              navbarOpen ? "flex" : "hidden"
            }`}
          >
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">About us</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Our Service</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Our Product</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Portfolio</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">contact-us</a>
            </li>
            <li className="font-semibold text-gray-900 hover:text-gray-400 transition ease-in-out duration-300 mb-5 lg:mb-0">
              <a href="#">Blog</a>
            </li>
          </ul>

          {/* portfolio contact-us blog */}

          {/* <div
            className={`lg:flex flex-col md:flex-row md:items-center text-center md:space-x-6 ${
              navbarOpen ? "flex" : "hidden"
            }`}
          >
            <a
              href="#"
              className="px-6 py-4 bg-blue-500 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500 mb-5 md:mb-0"
            >
              Join
            </a>

            <a
              href="#"
              className="px-6 py-4 border-2 border-blue-500 text-blue-500 font-semibold text-lg rounded-xl hover:bg-blue-700 hover:text-white transition ease-linear duration-500"
            >
              Become a member
            </a>
          </div> */}
        </nav>

        <div className="flex flex-col lg:flex-row justify-between space-x-20">
          <div className="text-center lg:text-left mt-40">
          <h1 className="font-semibold text-gray-900 text-3xl md:text-4xl leading-normal mb-6">
          {/* Charity for the <br /> world better life */}
              Shaping the future by empowering <br />  business with smart technologies
            </h1>

            <p className="font-light text-gray-400 text-md md:text-lg leading-normal mb-12">
            AppXperts Enterprise Solutions is a Software Development company <br />which offers next-generation IT Services that could empower your <br /> businesses to become self-reliant and sufficient. 
            </p>

            <button className="px-6 py-4 bg-info font-semibold text-white text-lg rounded-xl hover:bg-blue-700 transition ease-in-out duration-500">
              Get started
            </button>
          </div>

          <div className="mt-24">
            <img src="https://mercy-html.boxmodel.dev/img/home-img.png" alt="Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
