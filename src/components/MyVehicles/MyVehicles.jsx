import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { format } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";


const MyVehicles = () => {
  const { user } = useContext(AuthContext);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/vehicles?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch(() => toast.error("Failed to load vehicles"));
  }, [user?.email]);

  // Delete UI
  // const handleDelete = (id) => {
  //   const confirmDelete = confirm("Are you sure you want to delete this vehicle?");
  //   if (!confirmDelete) return;

  //   fetch(`http://localhost:3000/vehicles/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then(() => {
  //       setVehicles((prev) => prev.filter((v) => v._id !== id));
  //       toast.success("Vehicle deleted successfully!");
  //     })
  //     .catch(() => toast.error("Delete failed"));
  // };

  const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
  if (!confirmDelete) return;
  fetch(`http://localhost:3000/vehicles/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      setVehicles((prev) => prev.filter((v) => v._id !== id));
      toast.success("Vehicle deleted successfully!"); // ✅ Toast show
    })
    .catch(() => toast.error("Delete failed"));
};


  return (
    <div className="min-h-screen p-6 container mx-auto">
       <Helmet>
              <title>My Vehicle - TravelEase</title>
            </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center">My Vehicles</h2>

      {vehicles.length === 0 ? (
        <p className="text-center text-gray-600">No vehicles added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="border p-4 rounded-lg shadow bg-white"
            >
              <img
                src={vehicle.coverImage}
                alt={vehicle.name}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="text-lg text-black font-bold mt-3">{vehicle.name}</h3>
              <p className="text-sm text-black">{vehicle.category}</p>
              <p className="font-semibold text-black mt-1">
                ${vehicle.pricePerDay} / {format(new Date(), "dd-MM-yyyy")}
              </p>

              <div className="flex justify-between items-center mt-4">
              

                <Link
                  to={`/details/${vehicle._id}`}
                  className="px-3 py-1 hover:bg-blue-600 hover:text-white text-black  font-bold rounded-sm border-2"
                >
                  view
                </Link>
                <Link
                  to={`/update-vehicle/${vehicle._id}`}
                  className="px-3 py-1 hover:bg-green-600 hover:text-white text-black rounded-sm border-2 font-bold"
                >
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(vehicle._id)}
                  className="px-3 cursor-pointer py-1 hover:bg-red-600 border-2 font-bold hover:text-white text-black rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
       <ToastContainer position="top-right"/>
    </div>
  );
};

export default MyVehicles;
