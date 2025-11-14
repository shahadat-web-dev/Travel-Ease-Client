import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";


const AddVehicle = () => {
  const { user } = useContext(AuthContext);

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const form = e.target;

    const vehicle = {
      name: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: form.pricePerDay.value,
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      ownerEmail: user?.email,
      createdAt: new Date()
    };

    // ✅ Use correct deployed API URL
    fetch("http://localhost:3000/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vehicle),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Vehicle added successfully!");
        form.reset();
      })
      .catch(() => toast.error("Failed to add vehicle"));
  };

  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Vehicle</h2>

      <form
        onSubmit={handleAddVehicle}
        className="max-w-xl mx-auto space-y-4 border p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Vehicle Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Car, Bike, EV, etc)"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="number"
          name="pricePerDay"
          placeholder="Price Per Day"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="w-full border p-2 rounded"
          required
        />

        <select name="availability" className="w-full border p-2 rounded">
          <option value="Available">Available</option>
          <option value="Not Available">Not Available</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 rounded"
        ></textarea>

        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          className="w-full border p-2 rounded"
          required
        />

        <input
          value={user?.email || ""}
          disabled
          className="w-full border p-2 rounded text-black bg-gray-200"
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-[#FF6467] text-white font-semibold py-2 rounded"
        >
          Add Vehicle
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVehicle;
