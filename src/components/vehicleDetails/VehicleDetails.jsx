import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const VehicleDetails = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setVehicle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch vehicle:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center mt-20 text-xl">Loading...</div>;

  if (!vehicle)
    return <div className="text-center mt-20 text-xl">Vehicle not found!</div>;

  const handleBookNow = async () => {
    if (!user) {
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
      coverImage: vehicle.coverImage,
    };

    try {
      const res = await axios.post(
        `http://localhost:3000/bookings`,
        bookingData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Booking response:", res.data);
      toast("Booking Successfully ✅");
    } catch (err) {
      console.error("Axios error:", err.response || err);

      if (err.response) {
        alert(err.response.data.error || "Failed to book. Please try again.");
      } else {
        alert("Network or server error occurred while booking.");
      }
    }
  };

  return (
    <div className="max-w-3xl  mx-auto mt-10 bg-white shadow-xl p-6 rounded-xl">
      <Helmet>
        <title>Vehicle-Details - TravelEase</title>
      </Helmet>
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
      <button
        onClick={handleBookNow}
        className="w-full mt-6 cursor-pointer py-3 border-2 text-black  font-bold rounded-sm hover:text-white hover:bg-red-600"
      >
        Book Now
      </button>
        <ToastContainer />
    </div>
  );
};

export default VehicleDetails;
