import React from "react";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";

const UpdateVehicle = () => {
  const vehicle = useLoaderData(); 

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedVehicle = {
      name: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: form.pricePerDay.value,
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
    };

    fetch(`http://localhost:3000/vehicles/${vehicle._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedVehicle),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Vehicle updated successfully!");
      })
      .catch(() => toast.error("Update failed"));
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Vehicle</h2>

      <form
        onSubmit={handleUpdate}
        className="max-w-xl mx-auto space-y-4 border p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          defaultValue={vehicle.name}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="owner"
          defaultValue={vehicle.owner}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="category"
          defaultValue={vehicle.category}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="pricePerDay"
          defaultValue={vehicle.pricePerDay}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="location"
          defaultValue={vehicle.location}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="availability"
          defaultValue={vehicle.availability}
          className="w-full border p-2 rounded"
        >
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <textarea
          name="description"
          defaultValue={vehicle.description}
          className="w-full border p-2 rounded"
        ></textarea>

        <input
          type="text"
          name="coverImage"
          defaultValue={vehicle.coverImage}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Update Vehicle
        </button>
      </form>
    </div>
  );
};

export default UpdateVehicle;
