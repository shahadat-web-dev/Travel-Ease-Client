import React from "react";
import { FaCar, FaMotorcycle, FaChargingStation, FaShuttleVan } from "react-icons/fa";

const StaticSections = () => {
  return (
    <div className="space-y-12 mt-10">

      {/* Top Categories */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="p-5 bg-white shadow-sm border border-amber-300  rounded-xl flex flex-col items-center">
            <FaCar size={36} />
            <p className="mt-2 font-bold">SUV</p>
          </div>

          <div className="p-5 bg-white shadow-sm border border-amber-300  rounded-xl flex flex-col items-center">
            <FaChargingStation size={36} />
            <p className="mt-2 font-semibold">Electric</p>
          </div>

          <div className="p-5 bg-white shadow-sm border border-amber-300  rounded-xl flex flex-col items-center">
            <FaShuttleVan size={36} />
            <p className="mt-2 font-semibold">Van</p>
          </div>

          <div className="p-5 bg-white shadow-sm border border-amber-300  rounded-xl flex flex-col items-center">
            <FaMotorcycle size={36} />
            <p className="mt-2 font-semibold">Motorbike</p>
          </div>

        </div>
      </section>

      {/* Featured Owner */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Owner</h2>

        <div className=" rounded-xl p-6 flex gap-6 items-center bg-white shadow-sm border border-amber-300 ">
          <img
            src="https://i.ibb.co/m9T0mwk/profile.jpg"
            alt="Owner"
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold">Rafiq Ahmed</h3>
            <p className="text-sm text-gray-600">Trusted host with 120+ successful trips</p>
            <p className="mt-1 font-medium">Rating: ★ 4.9</p>
            <p className="text-sm mt-2">Provides clean, well-maintained cars with quick support.</p>
          </div>
        </div>

      </section>

    </div>
  );
};

export default StaticSections;
