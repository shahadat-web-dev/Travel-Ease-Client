import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Bookings
  useEffect(() => {
    if (!user?.email) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/bookings?email=${user.email}`
        );
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  // Delete Booking
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/bookings/${id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setBookings(bookings.filter((b) => b._id !== id));
        toast.success("Booking canceled!");
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to cancel booking.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error occurred while deleting booking.");
    }
  };

  // UI States
  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Please log in to view your bookings.
      </div>
    );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading your bookings...
      </div>
    );

  if (bookings.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        No bookings found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        {bookings.map((b) => (
          <div
            key={b._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col"
          >
            <img
              src={b.coverImage}
              alt={b.vehicleName}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h2 className="text-2xl font-semibold mt-3">{b.vehicleName}</h2>

            <p><b>Owner:</b> {b.owner}</p>
            <p><b>Category:</b> {b.category}</p>
            <p><b>Location:</b> {b.location}</p>
            <p><b>Price per Day:</b> ${b.pricePerDay}</p>
            <p><b>Booking Date:</b> {new Date(b.bookingDate).toLocaleString()}</p>

            <button
              onClick={() => handleDelete(b._id)}
              className="mt-4 w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
            >
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
