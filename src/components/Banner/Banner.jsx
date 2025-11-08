import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/Pz6VJnyJ/Gemini-Generated-Image-l3hjeul3hjeul3hj-Picsart.png')`,
      }}
    >
      {/* Optional Dark overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 text-left flex flex-col justify-center">
          <h1 className="font-bold pt-10 pb-4">
            <span className="text-[#FD3443] bg-[#D7CCD2] p-3 rounded-full">
              CAR RENTAL
            </span>
          </h1>

          <h2 className="md:text-6xl text-3xl font-bold py-5">
            Find Affordable Dream <br /> Cars for Rental
          </h2>

          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Fulfill your automotive fantasies without breaking the bank. Check our <br /> affordable car rentals for an opulent yet economical ride.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-[#FF2C3B] text-white rounded-md text-center font-medium hover:bg-gray-700 transition"
            >
              All Vehicle
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
          <img
            src="https://i.ibb.co.com/LTg7c65/1.png"
            alt="Car"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
