import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const VehicleDetails = () => {
  const { id } = useParams(); 
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then(res => res.json())
      .then(data => setVehicle(data));
  }, [id]);

  if (!vehicle) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl p-6 rounded-xl">
      
      <img
        src={vehicle.coverImage}
        alt={vehicle.vehicleName}
        className="w-full h-72 object-cover rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-5">{vehicle.vehicleName}</h1>
      <p className="mt-2 text-gray-700">{vehicle.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 text-gray-900">
        <p><b>Owner:</b> {vehicle.owner}</p>
        <p><b>Category:</b> {vehicle.category}</p>
        <p><b>Availability:</b> {vehicle.availability}</p>
        <p><b>Location:</b> {vehicle.location}</p>
        <p><b>Price Per Day:</b> ${vehicle.pricePerDay}</p>
      </div>

      <button className="w-full mt-6 py-3 bg-red-600 text-white font-bold rounded-lg">
        Book Now
      </button>

    </div>
  );
};

export default VehicleDetails;
