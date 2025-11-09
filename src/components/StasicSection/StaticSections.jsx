import React from "react";
import { FaCar, FaMotorcycle, FaChargingStation, FaShuttleVan } from "react-icons/fa";

const StaticSections = () => {
  return (
    <div className="space-y-12 mt-10">

      {/* Top Categories */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-4 text-center pb-8 text-black dark:text-white">
          Top Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="p-5 bg-white dark:bg-gray-800 shadow-sm border border-amber-300 rounded-xl flex flex-col items-center">
            <FaCar size={36} className="text-black dark:text-white" />
            <p className="mt-2 font-bold text-black dark:text-white">SUV</p>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 shadow-sm border border-amber-300 rounded-xl flex flex-col items-center">
            <FaChargingStation size={36} className="text-black dark:text-white" />
            <p className="mt-2 font-semibold text-black dark:text-white">Electric</p>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 shadow-sm border border-amber-300 rounded-xl flex flex-col items-center">
            <FaShuttleVan size={36} className="text-black dark:text-white" />
            <p className="mt-2 font-semibold text-black dark:text-white">Van</p>
          </div>

          <div className="p-5 bg-white dark:bg-gray-800 shadow-sm border border-amber-300 rounded-xl flex flex-col items-center">
            <FaMotorcycle size={36} className="text-black dark:text-white" />
            <p className="mt-2 font-semibold text-black dark:text-white">Motorbike</p>
          </div>

        </div>
      </section>

      {/* Featured Owner */}
      <section className="px-4">
        <h2 className="text-2xl text-center pb-8 font-bold mb-4 text-black dark:text-white">
          Featured Owner
        </h2>

        <div className="rounded-xl p-6 flex gap-6 items-center bg-white dark:bg-gray-800 shadow-sm border border-amber-300">
          <img
            src="https://i.ibb.co/m9T0mwk/profile.jpg"
            alt="Owner"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">Rafiq Ahmed</h3>
            <p className="text-sm text-black dark:text-gray-300">
              Trusted host with 120+ successful trips
            </p>
            <p className="mt-1 font-medium text-black dark:text-white">Rating: ★ 4.9</p>
            <p className="text-sm mt-2 text-black dark:text-gray-300">
              Provides clean, well-maintained cars with quick support.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default StaticSections;
