import React, { useState, useMemo } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';

const AllVehicle = () => {
  const products = useLoaderData();

  // Safety: ensure products is always an array
  const productArray = Array.isArray(products) ? products : [];

  // ============================
  // Added Filter + Sort States
  // ============================
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceSort, setPriceSort] = useState("");

  // Create distinct values for dropdowns
  const categories = [...new Set(productArray.map(p => p.category))];
  const locations = [...new Set(productArray.map(p => p.location))];

  // ============================
  // Filtering & Sorting Logic
  // ============================
  const filteredProducts = useMemo(() => {
    let result = [...productArray];

    // Filter by Category
    if (categoryFilter) {
      result = result.filter(item => item.category === categoryFilter);
    }

    // Filter by Location
    if (locationFilter) {
      result = result.filter(item => item.location === locationFilter);
    }

    // Price Sort
    if (priceSort === "low-high") {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (priceSort === "high-low") {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    return result;
  }, [productArray, categoryFilter, locationFilter, priceSort]);

  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>All Vehicle - TravelEase</title>
      </Helmet>

      <h1 className='text-5xl font-bold text-center pt-15 pb-10'>All Vehicles</h1>

      {/* ============================
          Filtering & Sorting Controls
      ============================ */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-4 mb-10 px-4">

        {/* Category Filter */}
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          value={categoryFilter}
          className="border px-4 py-2 rounded"
        >
          <option value="">Filter by Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Location Filter */}
        <select
          onChange={(e) => setLocationFilter(e.target.value)}
          value={locationFilter}
          className="border px-4 py-2 rounded"
        >
          <option value="">Filter by Location</option>
          {locations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
        </select>

        {/* Price Sort */}
        <select
          onChange={(e) => setPriceSort(e.target.value)}
          value={priceSort}
          className="border px-4 py-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* MAIN CONTENT */}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-xl text-gray-500 py-20">
          No vehicles found.
        </div>
      ) : (
        <div className="min-h-screen px-4 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item._id}
              className="text-black shadow-xl rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Section */}
              <div className="relative p-4 text-color">
                <img
                  src={item.coverImage}
                  alt={item.vehicleName}
                  className="w-full h-48 object-cover transition-transform duration-300 rounded-sm hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/600x400/222/FFF?text=Car+Image+Missing";
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
                  <h2 className="text-2xl font-bold text-black leading-snug">
                    {item.vehicleName}
                  </h2>
                  <div className="flex items-center space-x-1 ml-4 py-1 px-2 rounded-full text-sm font-semibold border border-gray-300">
                    <FaStar className="text-yellow-500" />
                    <span className="text-black">4.8</span>
                  </div>
                </div>

                <p className="text-color text-sm">{item.description}</p>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <h4 className="font-bold">Owner: {item.owner}</h4>
                  <h4 className="font-bold">Category: {item.category}</h4>
                  <h4 className="font-bold">Available: {item.availability}</h4>
                  <h4 className="font-bold">Location: {item.location}</h4>
                </div>

                <Link
                  to={`/vehicle-details/${item._id}`}
                  className="block w-full mt-6 py-3 text-center text-sm font-bold rounded border hover:text-white hover:bg-red-600 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllVehicle;
