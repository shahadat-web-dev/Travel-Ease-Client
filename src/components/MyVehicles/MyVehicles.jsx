import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";

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

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this vehicle?");
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/vehicles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setVehicles(vehicles.filter((v) => v._id !== id));
        toast.success("Vehicle deleted successfully!");
      })
      .catch(() => toast.error("Delete failed"));
  };

  return (
    <div className="min-h-screen p-6">
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

              <h3 className="text-lg font-bold mt-3">{vehicle.name}</h3>
              <p className="text-sm text-gray-600">{vehicle.category}</p>
              <p className="font-semibold mt-1">
                ${vehicle.pricePerDay} / day
              </p>

              <div className="flex justify-between items-center mt-4">
                <Link
                  to={`/vehicle/${vehicle._id}`}
                  className="px-3 py-1 bg-gray-700 text-white rounded"
                >
                  View
                </Link>

                <Link
                  to={`/update-vehicle/${vehicle._id}`}
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                  Update
                </Link>

                <button
                  onClick={() => handleDelete(vehicle._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVehicles;
