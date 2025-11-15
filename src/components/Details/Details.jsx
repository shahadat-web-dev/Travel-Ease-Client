import React from 'react';
import { useLoaderData } from 'react-router';


const Details = () => {
  const vehicle = useLoaderData();

  return (
    <div className="min-h-screen p-6 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Details
      </h2>

      <div className="max-w-xl mx-auto border p-4 rounded-lg shadow-2xl bg-white">
        <img
          src={vehicle.coverImage}
          alt={vehicle.name}
          className="w-full h-60 object-cover rounded"
        />

        <h3 className="text-xl text-black font-bold mt-3">{vehicle.name}</h3>
        <p className="text-black">Owner: {vehicle.owner}</p>
        <p className="text-black">Category: {vehicle.category}</p>
        <p className="text-black">Location: {vehicle.location}</p>

        <p className="mt-2 text-black font-semibold">
          Price Per Day: ${vehicle.pricePerDay}
        </p>

        <p className="mt-2 text-black">
          <span className="font-bold ">Availability:</span>{""}
          {vehicle.availability}
        </p>

        <p className="mt-2 text-gray-700">{vehicle.description}</p>
      </div>
    </div>
  );
};

export default Details;