import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between space-x-16">
          <div className="flex justify-center lg:justify-start">
            <img src="https://mercy-html.boxmodel.dev/img/feature-img.png" alt="Image" />
          </div>

          <div className="mt-16">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl mb-20">
              You can help lots of people by <br /> donating
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20 mb-16">
              <div className="mb-5 md:mb-0">
                <div className="w-20 py-6 flex justify-center bg-info bg-opacity-5 rounded-xl mb-4">
                  <i data-feather="sun" className="text-info"></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">10000+</h3>
                <p className="font-light text-gray-400 text-md md:text-lg">
                  Fundraising campaign in <br /> all time
                </p>
              </div>

              <div>
                <div className="w-20 py-6 flex justify-center bg-red-500 bg-opacity-5 rounded-xl mb-4">
                  <i data-feather="award" className="text-red-500"></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">$120M+</h3>
                <p className="font-light text-gray-400 text-md md:text-lg">
                  Raised and counting <br /> donations in all time
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-20">
              <div className="mb-5 md:mb-0">
                <div className="w-20 py-6 flex justify-center bg-yellow-500 bg-opacity-5 rounded-xl mb-4">
                  <i data-feather="users" className="text-yellow-500"></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">1200+</h3>
                <p className="font-light text-gray-400 text-md md:text-lg">
                  Our volunteer around the <br /> world
                </p>
              </div>

              <div>
                <div className="w-20 py-6 flex justify-center bg-green-500 bg-opacity-5 rounded-xl mb-4">
                  <i data-feather="trending-up" className="text-green-500"></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-xl md:text-3xl mb-4">98%</h3>
                <p className="font-light text-gray-400 text-md md:text-lg">
                  Positive review from <br /> public
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
