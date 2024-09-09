import React from 'react';

const HeroSection = () => {
  return (
    <div>


      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1521171338749-b3a9f9ad7f34?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
            <h1 className=" font-extrabold text-white text-5xl lg:text-6xl">

              <strong className="block font-extrabold text-rose-500"> Travel Tour </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              <span className='font-bold'>#1</span> The most complete tour management system for tour and hotel booking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;