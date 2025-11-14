import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router'; 

const Product = ({ product }) => {
  const { vehicleName, owner, category, pricePerDay, location, availability, coverImage, description } = product;

  return (
    <div className=" gap-4 bg-white my-10 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      
      {/* --- Image and Price Badge --- */}
      <div className="relative p-4 bg-gray-100">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-48 object-cover rounded-sm hover:scale-105 transition-transform duration-300"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/222/FFF?text=Car+Image+Missing'; }}
        />
        {/* Price Tag Badge */}
        <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow">
          <span className="text-xl font-extrabold text-red-600">${pricePerDay}</span>
        </div>
      </div>

      {/* --- Content Area --- */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">{vehicleName}</h2>
          <div className="flex items-center space-x-1 py-1 px-2 rounded-full text-sm font-semibold border border-gray-300">
            <FaStar className="text-yellow-500" />
            <span className="text-black">4.8</span>
          </div>
        </div>

        <p className="text-black text-sm">{description}</p>

        <div className="border-t border-gray-200 pt-4 space-y-1 text-sm">
          <p className='text-black'>Owner: {owner}</p>
          <p className='text-black'>Category: {category}</p>
          <p className='text-black'>Available: {availability}</p>
          <p className='text-black'>Location: {location}</p>
        </div>

        
        <Link
          to={`/vehicle-details/${product._id}`}
          className="block text-black w-full text-center mt-4 py-3 border hover:text-white font-bold rounded hover:bg-red-600 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
