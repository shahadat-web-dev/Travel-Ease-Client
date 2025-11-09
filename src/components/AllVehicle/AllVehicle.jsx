import React from 'react';
import { useLoaderData } from 'react-router';
import { FaStar } from "react-icons/fa";

const AllVehicle = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-bold text-center pt-15 pb-10'>All Vehicle</h1>
      <div className="min-h-screen py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products?.map((item) => (
          <div
            key={item._id}
            className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >

            {/* Image Section */}
            <div className="relative p-4 bg-gray-100">
              <img
                src={item.coverImage}
                alt={item.vehicleName}
                className="w-full h-full object-cover transition-transform duration-300 rounded-sm hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/222/FFF?text=Car+Image+Missing";
                }}
              />

              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-xl font-extrabold text-red-600">
                  ${item.pricePerDay}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                  {item.vehicleName}
                </h2>

                <div className="flex items-center space-x-1 ml-4 py-1 px-2 rounded-full text-sm font-semibold border border-gray-300">
                  <FaStar />
                  <span className="text-black">4.8</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm">{item.description}</p>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <h4 className="font-bold">Owner: {item.owner}</h4>
                <h4 className="font-bold">Category: {item.category}</h4>
                <h4 className="font-bold">Available: {item.availability}</h4>
                <h4 className="font-bold">Location: {item.location}</h4>
              </div>

              <button className="w-full mt-6 py-3 px-4 text-sm font-bold rounded-sm border cursor-pointer hover:bg-[#FF2C3B] hover:text-white">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVehicle;
