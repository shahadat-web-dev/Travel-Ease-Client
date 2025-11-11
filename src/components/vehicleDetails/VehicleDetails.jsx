import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => setVehicle(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!vehicle) return <div className="text-center mt-20 text-xl">Loading...</div>;

  const handleBookNow = async () => {
    if (!user) {
      alert("Please log in to book this vehicle.");
      return;
    }

    const bookingData = {
      userEmail: user.email,
      vehicleId: vehicle._id,
      vehicleName: vehicle.vehicleName,
      owner: vehicle.owner,
      category: vehicle.category,
      location: vehicle.location,
      pricePerDay: vehicle.pricePerDay,
      bookingDate: new Date().toISOString(),
      coverImage: vehicle.coverImage
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful!");
        navigate("/myBookings");
      } else {
        alert(data.error || "Failed to book. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network or server error occurred while booking.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl p-6 rounded-xl">
      <Helmet><title>Vehicle-Details - TravelEase</title></Helmet>
      <img src={vehicle.coverImage} alt={vehicle.vehicleName} className="w-full h-72 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-5">{vehicle.vehicleName}</h1>
      <p className="mt-2 text-gray-700">{vehicle.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 text-gray-900">
        <p><b>Owner:</b> {vehicle.owner}</p>
        <p><b>Category:</b> {vehicle.category}</p>
        <p><b>Availability:</b> {vehicle.availability}</p>
        <p><b>Location:</b> {vehicle.location}</p>
        <p><b>Price Per Day:</b> ${vehicle.pricePerDay}</p>
      </div>

      <button
        onClick={handleBookNow}
        className="w-full mt-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default VehicleDetails;
